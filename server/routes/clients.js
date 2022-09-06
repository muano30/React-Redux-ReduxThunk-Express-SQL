const {
    saveStudents,
    studentEmailExist,
    studentIdNumberExist,
    saveAdminPerson,
    adminPersonIdNumberExist,
    adminPersonEmailExist,
    allBooks,
    checkIfBookNameAndBookAuthorExist,
    addBook,
    // checkIfBookNameExist,
    insertIntoBookLookUp,
    checkOnLookUp,
    getBooksSelectedBYStudents
} = require('../queries/clientsQueries');
const { hashPassword, comparePassword } = require('../security/hashingPassword');
const jwt = require('jsonwebtoken');
const auth = require('./auth');
require('dotenv').config();


const clientsRoutes = (app) => {


    app.post('/save_students', async (req, res) => {


        try {
            students = req.body
            students.password = await hashPassword(students.password);
            let findStudentEmail = await studentEmailExist(students.email);
            let findStudentIdNumber = await studentIdNumberExist(students.idNumber);

            if (findStudentEmail.isFound || findStudentIdNumber) {
                return res.status(400).send({ message: "ID Number or Email already exists" });
            } else {
                const student_id = await saveStudents(students)
                // res.send({ data: student_id, status: 201 }).status(200);
                // console.log("token", token)
                const token = jwt.sign({ student_id: student_id }, process.env.TOKEN_SECRET, { expiresIn: 3600, });
                return res.status(201).json({message: "Registration successful", student_id, token });
            }
        } catch (error) {
            res.status(400).send(error)


        }
    });

    app.post('/save_admin_person', async (req, res) => {

        try {
            let adminPerson = req.body
            adminPerson.password = await hashPassword(adminPerson.password);
            let findAdminPersonEmail = await adminPersonEmailExist(adminPerson.email);
            let findAdminPersonIdNumber = await adminPersonIdNumberExist(adminPerson.idNumber);

            if (findAdminPersonEmail.isFound || findAdminPersonIdNumber) {
                return res.status(400).send({ message: "ID Number or Email already exists" })
            }
            else {
                const admin_person_id = await saveAdminPerson(adminPerson)
                // res.send({ data: admin_person_id, status: 201 }).status(200);
                const token = jwt.sign({ admin_person_id: admin_person_id}, process.env.TOKEN_SECRET, { expiresIn: 3600, });
                return res.status(201).json({ message: "Registration successful", admin_person_id, token });
            }
        } catch (error) {
            res.status(400).send(error)
        }
    });

    app.post('/students_login', async (req, res) => {
        const { email, password } = req.body
        // console.log('first', password)
        try {
            const loginStudents = await studentEmailExist(email);
            if (!loginStudents) {
                res.status(401).send({message: "Email or Password doesn't match any account sign up for account" })
            }
            const verifyPassword = await comparePassword(password, loginStudents.data[0].password);
            // console.log("verifyPassword", verifyPassword)
            if (!verifyPassword) {
                // console.log('first', verifyPassword)
                res.status(401).send({ message: "Email or Password doesn't match any account sign up for account" })
            }
            const token = jwt.sign({email: email}, process.env.TOKEN_SECRET, { expiresIn: 3600, });
            return res.status(201).json({message: "Login successful", verifyPassword, token });

        } catch (error) {
            console.log(error)
            res.sendStatus(401)
        }
    });


    app.post('/admin_person_login', async (req, res) => {
        const { email, password } = req.body
        // console.log('first', password)
        try {
            const loginAdmin = await adminPersonEmailExist(email);
            if (!loginAdmin) {
                res.status(401).send({ message: "Email or Password doesn't match any account sign up for account" })
            }
            const verifyPassword = await comparePassword(password, loginAdmin.data[0].password);
            console.log("verifyPassword", verifyPassword)
            if (!verifyPassword) {
                console.log('first', verifyPassword)
                res.status(401).send({ message: "Email or Password doesn't match any account sign up for account" })
            }
            const token = jwt.sign({ email: email }, process.env.TOKEN_SECRET, { expiresIn: 3600, });
            console.log("token", token)
            return res.status(201).json({ message: "Login successful", verifyPassword, token });

        } catch (error) {
            console.log(error)
            res.sendStatus(401)
        }
    });

app.post('/addBook', async(req, res)=> {
    try {

let bookToAdd = req.body

let checkExistingBook = await checkIfBookNameAndBookAuthorExist(bookToAdd.name, bookToAdd.author);
// console.log('checkExistingBook', checkExistingBook)

if(checkExistingBook){
 res.status(201).send({Message: "Book name and author already exist"});
}
 else if(!checkExistingBook){
    const addingBook = await addBook(bookToAdd);

     res.send({data:addingBook, message: "Book added Successfully"}).status(201);
}else{
    const addingBook = await addBook(bookToAdd);

    res.status(201).send({data:addingBook, message: "Book added Successfully"});
}

    
} catch (error) {
    res.status(404).send(error)
}

});

app.get('/books', async (req,res)=>{
    try {
        const books = await allBooks();  
        // console.log('first', books)
    res.send(books).status(200);
    } catch (error) {
        res.status(404).send(error);
    }
})

app.get('/book_selected_by_Students', async(req, res)=> {
    try {
        let allBooks = req.body
        // const requestedBooks = await getBooksSelectedBYStudents()
        console.log('requestedBooks', allbooks)
        res.send(200)
    } catch (error) {
        console.log(error)
    }
})

app.post('/student_and_book_to_lookup', async(req,res) => {
    try {
        let {students_id, books_id} = req.body
        let check = await checkOnLookUp(students_id, books_id)
        if(check === false){
    let results = await insertIntoBookLookUp(req.body)
    res.status(200).send({data: results, message: "boook successfuly added"})
}else{
    res.status(400).send({message: "Book already exist cannot select book twice"})
}   
    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }

})


}

module.exports = {

    clientsRoutes
}
