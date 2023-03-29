import {createSlice} from '@reduxjs/toolkit'
import {initialState}  from './reducer'
import { nanoid } from 'nanoid'

const contactSlice = createSlice({
    name: 'contacts',
    initialState : initialState,
    reducer: {
        addContact(state, action) {
           
        const contact = {
            id: nanoid(),
            name: action.payload.name,
            number: action.payload.number,   
            }
state.contacts.push(contact)
    },
    deleteContact(state, action) {
        const index = state.findIndex(contact => contact.id === action.payload);
        state.splice(index, 1);
      },
   
}
})



export const {addContact, deleteContact} =contactSlice.actions;
export const contactReducer= contactSlice.reducer;