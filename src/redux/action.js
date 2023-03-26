import { SEARCH, DELETE_CONTACT, ADD_CONTACT } from './constants';
import { nanoid } from "nanoid";

// export const usersSearchAction = payload => ({ type: SEARCH, payload });
// export const deleteUserAction = payload => ({ type: DELETE_USER, payload });

// ADD_USER 

export const addContact = (name, number) =>{
    return {
        type: ADD_CONTACT,
        payload :{
            id: nanoid(),
            name,
            number
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

