import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = () => {

    const contacts = useSelector(state => state); //useSelector hook is used to access the contacts in the redux store

    const dispatch = useDispatch();

    const deleteContact = (id) => {
        dispatch({ type: 'DELETE_CONTACT', payload: id }); // this goes to the reducer and check for the DELETE_CONTACT type and return the respective case
    }

    // this return the JSX of the home page
    return (
        <div className='container mt-5'>
            <div className='row'>
                
                <div className='table-responsive card shadow'>
                    <table className='table table-dark table-striped table-hover border-warning mt-3'>
                        <thead className='card-header'>
                            <tr className='text-center'>
                                <th scope='col'>S.NO</th>
                                <th scope='col'>NAME</th>
                                <th scope='col'>EMAIL</th>
                                <th scope='col'>NUMBER</th>
                                <th scope='col'>UPDATE</th>
                            </tr>
                        </thead>
                        <tbody className='table-group-divider card-body'>
                            {
                                contacts.map((contact, id) => (
                                    <tr className='text-center' key={id}>
                                        <th scope='row'>{id + 1}</th>
                                        <td>{contact.name}</td>
                                        <td>{contact.email}</td>
                                        <td>{contact.number}</td>
                                        <td className='d-grid gap-1'>
                                            <Link to={`/edit/${contact.id}`} className='btn pt-1 btn-dark border border-warning'>Edit</Link>
                                            <button type='button' onClick={() => deleteContact(contact.id)} className='btn pt-1 btn-dark border border-warning'>Del</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div >

    )
}

export default Home;