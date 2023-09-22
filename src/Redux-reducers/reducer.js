
const initialState = []; //creating an empty array

//The reducer takes the current state and an action as arguments and returns the new state based on the action type
const reducer = (state = initialState, action) => {
    switch (action.type) {

        case 'FETCH_CONTACTS':     // this is the dispatch type from App component
            return action.payload;

        case 'ADD_CONTACT':        // this is the dispatch type from AddContact component
            return [...state, action.payload];

        case 'UPDATE_CONTACT':      // this is the dispatch type from EditContact component
            const updateState = state.map(contact => contact.id === action.payload.id ? action.payload : contact);
            state = updateState;
            return state;

        case 'DELETE_CONTACT':       // this is the dispatch type from Home component
            const filterContacts = state.filter(contact => contact.id !== action.payload && contact); // removes the respective array
            return filterContacts;

        default:
            return state;             // the reducer returns the current state unchanged.
    }
}

export default reducer;

