import '../Register.css';
import React from 'react';
// import {Link} from 'react-router-dom';
// import userForm from './UserForm';

const BookForm = () => {

    return (
        <div className='bookWrapper'>
            <form className='bookform' onSubmit={handleSubmit}>
              <h1 className='bookTitle'>ADD BOOK</h1>
                <div className='bookFormDiv'>
                    <input type="text" className='bookFormInput grid' placeholder='book Name'></input>
                    <label for="bookName" className='bookFormLabel'>Boook Name</label>
                </div>

                <div className='bookFormDiv'>
                    <input type="number" className='bookFormInput' placeholder='Book Author'></input>
                    <label for="bookAuthor" className='bookFormLabel'>Book Author</label>
                </div>

                <div className='bookFormDiv'>
                    <input type="text" className='bookFormInput grid' placeholder='description'></input>
                    <label for="LastName" className='bookFormLabel'>Book Description</label>
                </div>
               
                <button className='bookFormButton'>addBook</button>
            </form>
        </div>
    )
}

export default BookForm;