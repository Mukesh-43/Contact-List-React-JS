
import React, { useState } from 'react';          //A hook provided by React for managing state.
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AddContact = () => {

    const [name, setName] = useState('');         // we're using useState hook and setting the initial value as ''
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');

    const contacts = useSelector(state => state); //useSelector hook is used to access the contacts in the redux store

    const dispatch = useDispatch();

    const navigate = useNavigate();               // this helps us to move to different routes

    const handelSubmit = e => {
        e.preventDefault();

        const data = {
            id: contacts[contacts.length - 1].id + 1,
            name,
            email,
            number
        }

        dispatch({ type: 'ADD_CONTACT', payload: data }); // this goes to the reducer and check for the ADD_CONTACT type and return the respective case
        navigate('/');                                    // and navigate to the route
    }

    // this is the JSX of AddContact page
    return (
        <div className='container'>
            <h1 className='display-4 text-center fw-bold mt-5'>Add Contact</h1>
            <div className='row'>
                <div className='col-md-6 shadow border rounded mx-auto p-5'>
                    <form className='text-end' onSubmit={handelSubmit}> {/* calling the handle submit function */}
                        <div className='mb-3'>

                            <input type='text' placeholder='Name' className='form-control'
                                value={name} onChange={e => setName(e.target.value)} required/>
                        </div>
                        <div className='mb-3'>

                            <input type='email' placeholder='Email' className='form-control' value={email} onChange={e => setEmail(e.target.value)} required/>

                        </div>
                        <div className='mb-3'>

                            <input type='number' placeholder='Phone Number' className='form-control' value={number} onChange={e => setNumber(e.target.value)} required/>

                        </div>
                        <div className='mb-3 '>

                            <input type='submit' value='Add Contact' className='btn btn-primary' />

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddContact;