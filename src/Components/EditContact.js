
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'

const EditContact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');

    const { id } = useParams();                                 // we're using params to pass the id along with the routes

    const contacts = useSelector(state => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const currentContact = contacts.find(contact => contact.id === parseInt(id));  // this finds the contact if their id's matched

    //useEffect hook is called when the currentContact value changes
    useEffect(() => {
        if (currentContact) {
            setName(currentContact.name);
            setEmail(currentContact.email);
            setNumber(currentContact.number);
        }

    }, [currentContact]);

    const handelSubmit = e => {
        e.preventDefault();

        const data = {
            id: parseInt(id),
            name,
            email,
            number
        }

        dispatch({ type: 'UPDATE_CONTACT', payload: data });    // this goes to the reducer and check for the UPDATE_CONTACT type and return the respective case
        navigate('/');
    };

    // this is the JSX of the EditContact page
    return (
        <div className='container'>
            <>
                <h1 className='display-4 text-center fw-bold mt-5'>Edit Contact {id}</h1>
                <div className='row'>
                    <div className='col-md-6 shadow mx-auto p-5'>
                        <form className='text-center' onSubmit={handelSubmit}>
                            <div className='mb-3'>
                                <input type='text' placeholder='Name' className='form-control'
                                    value={name} onChange={e => setName(e.target.value)} required/>
                            </div>
                            <div className='mb-3'>
                                <input type='email' placeholder='Email' className='form-control'
                                    value={email} onChange={e => setEmail(e.target.value)} required/>
                            </div>
                            <div className='mb-3'>
                                <input type='number' placeholder='Phone Number' className='form-control'
                                    value={number} onChange={e => setNumber(e.target.value)} required/>
                            </div>
                            <div className='mb-3'>
                                <input type='submit' value='Update Contact' className='btn btn-primary' />
                                <Link to='/' className='btn btn-primary ms-3 '>Cancel</Link>
                            </div>
                        </form>
                    </div>
                </div >
            </>
        </div>
    )
}

export default EditContact