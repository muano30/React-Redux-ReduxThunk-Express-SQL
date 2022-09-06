const { clientQuery } = require('./getClient');

const saveStudents = async (userDetails) => {
    let { firstName,
        lastName,
        idNumber,
        email,
        password
    } = userDetails
    try {
        let insertQuery = `INSERT INTO students (first_name, last_name, id_number, email, password) VALUES ($1,$2,$3,$4,$5) RETURNING first_name, last_name, email`
        let parameters = [firstName,
            lastName,
            idNumber,
            email,
            password];
        // console.log("parameters", parameters)
        return clientQuery(insertQuery, parameters)
    } catch (error) {
        console.log('error-saveStudent: ', error)
    }
};

const saveAdminPerson = async (userDetails) => {
    let {
        firstName,
        lastName,
        idNumber,
        email,
        password,
    } = userDetails
    let insertQuery = `INSERT INTO admin_person (first_name, last_name, id_number, email, password) VALUES ($1,$2,$3,$4,$5) RETURNING first_name, last_name, email`
    let parameters = [firstName,
        lastName,
        idNumber,
        email,
        password,
    ];
    return clientQuery(insertQuery, parameters)
};

const studentEmailExist = async (email) => {

    let insertQuery = `SELECT * FROM students WHERE email = $1`
    let parameters = [email]
    let getEmail = await clientQuery(insertQuery, parameters)
    // console.log('muano',getEmail)
    return { isFound: getEmail.length > 0, data: getEmail }

}


const studentIdNumberExist = async (idNumber) => {

    let insertQuery = `SELECT * FROM students WHERE id_number = $1`
    let parameters = [idNumber]
    getIdNumber = await clientQuery(insertQuery, parameters)
    return getIdNumber.length > 0

}

const adminPersonEmailExist = async (email) => {

    let insertQuery = `SELECT * FROM admin_person WHERE email = $1`
    let parameters = [email]
    let getEmail = await clientQuery(insertQuery, parameters)
    // console.log('muano', muano)
    return { isFound: getEmail.length > 0, data: getEmail }


}


const adminPersonIdNumberExist = async (idNumber) => {

    let insertQuery = `SELECT * FROM admin_person WHERE id_number = $1`
    let parameters = [idNumber]
    getIdNumber = await clientQuery(insertQuery, parameters)
    return getIdNumber.length > 0

}

const allBooks = async () => {
    let insertQuery = `SELECT name, author, description FROM books`
    let books = await clientQuery(insertQuery)
    return books
}

const addBook = async (books) => {
    let{name, author, description} = books
    let insertQuery = `INSERT INTO books (name, author, description) VALUES($1, $2,$3) RETURNING  name, author, description`
    let parameter = [name,author, description]
    let addingBook = await clientQuery(insertQuery, parameter)
    return addingBook
}

const checkIfBookNameAndBookAuthorExist = async (bookName, bookAuthor) => {
 let insertQuery = `SELECT * FROM books WHERE name=$1 AND author=$2;` 
 let parameters = [bookName, bookAuthor]
 let bookAuthorAndBookName = await clientQuery(insertQuery, parameters)
// console.log('bookAuthorAndBookName', bookAuthorAndBookName)
 return bookAuthorAndBookName.length > 0
}

const insertIntoBookLookUp = async (clients) => {
    try {
        let { students_id, books_id } = clients
        // var check = await checkOnLookUp(students_id, books_id )
        let insertQuery = `INSERT INTO books_lookup(students_id,books_id) VALUES ($1, $2) RETURNING id; `
        let parameters = [students_id, books_id]
        let clientsRequest = await clientQuery(insertQuery, parameters)
        // console.log(clientsRequest)
        return clientsRequest
    } catch (error) {
        console.log('error', error)
    }
  
}

const getBooksSelectedBYStudents = async (students_id) => {
    let insertQuery = `SELECT * books_id from books_lookup WHERE students_id = $1`
    let parameters = [students_id]
    let selectedBooks = await clientQuery(insertQuery, parameters)
    console.log('selectedBooks', selectedBooks)
    return selectedBooks
    

}
 const checkOnLookUp  = async (studentsId,bookId) =>{
    let insertQuery = `select  *  from books_lookup where students_id=$1 AND books_id=$2;    `
    let parameters = [studentsId,bookId]
    let selectedBooks = await clientQuery(insertQuery, parameters)
    console.log('selectedBooks', selectedBooks)
    return selectedBooks.length > 0
 }

module.exports = {
    saveStudents,
    saveAdminPerson,
    studentEmailExist,
    studentIdNumberExist,
    adminPersonIdNumberExist,
    adminPersonEmailExist,
    allBooks,
    insertIntoBookLookUp,
    getBooksSelectedBYStudents,
    checkIfBookNameAndBookAuthorExist,
    addBook,
    checkOnLookUp
}
