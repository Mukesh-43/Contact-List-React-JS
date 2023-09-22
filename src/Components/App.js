import React, { useEffect} from "react";
import { Route, Routes } from 'react-router-dom';

// required components are imported
import Navbar from "./Navbar";
import Home from "./Home";
import AddContact from "./AddContact";
import EditContact from "./EditContact";
import { useDispatch } from "react-redux";

const App = () => {
    const dispatch = useDispatch(); 
    
    // using useEffect Hook to fetch data
    useEffect(() => {
        const data = []; // creating an empty array

        // In this function we're fetching the details, converting it to json and pushing it to the data array
        const promise = async () => {
            await fetch('https://jsonplaceholder.typicode.com/users')  // fetching the details
                .then((response) => response.json())                   // converting it to json 
                .then((details) => {
                    details.map((contact) => {                         
                        data.push({                                    // pushing it to the data array
                            id: contact.id,
                            name: contact.name,
                            number: contact.phone,
                            email: contact.email
                        });
                    })
                })
            dispatch({ type: 'FETCH_CONTACTS', payload: data });  //this dispatches actions to the Redux store with data array
        };
        promise(); // calling the function
    }, []); // empty array is called to avoid calling componentDidMount again and again


    return (
        <div className="App">
            
            <Navbar /> {/* this will call the navbar component */}

            <Routes>

                <Route exact path="/" element={<Home />}> {/* if '/' is called, the Home component will be called */}
                </Route>

                <Route path="/add" element={<AddContact />}> {/* if '/add' is called the AddContact component will be called */}
                </Route>

                <Route path="/edit/:id" element={<EditContact />}> {/* if '/edit/:id' is called the EditContact component will be called */}
                </Route>

            </Routes>
        </div>
    );
}

export default App;