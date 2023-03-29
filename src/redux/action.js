import { createAction } from '@reduxjs/toolkit';
// import { SEARCH, DELETE_CONTACT, ADD_CONTACT } from './constants';
import { nanoid } from "nanoid";

// export const usersSearchAction = payload => ({ type: SEARCH, payload });
// export const deleteUserAction = payload => ({ type: DELETE_USER, payload });

// ADD_USER 

export const SEARCH =createAction('SEARCH')
export const DELETE_CONTACT =createAction('DELETE_CONTACT')
export const ADD_CONTACT =createAction('ADD_CONTACT')

export const addContact = (state, action) =>{
    return {
        type: ADD_CONTACT,
        payload :{
            id: nanoid(),
            name: action.payload.name,
            number: action.payload.number,
        }
    }
}

export const deleteContact = id =>{
    return {
        type: DELETE_CONTACT,
        payload :  id,
    }
}

export const findContact = (name, number) =>{
    return {
        type: SEARCH,
        name,
        number
    }
}

