import { SEARCH} from "./action";



// const tasksInitialState = [];
// export const tasksReducer = (state = tasksInitialState, action) => {
//   // Reducer code
// };
// const filtersInitialState = {
//   status: statusFilters.all,
// };
// export const filtersReducer = (state = filtersInitialState, action) => {
//   // Reducer code
// };



const initialState = {
    contacts: [
      // {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      // {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      // {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      // {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ""
  }

  export const rootReduser =(initialState, builder =>{
    builder.addCase(SEARCH, (state, {payload})=>{
        return state + payload
    })
  })
//   {
//     switch(action.type) {
//         case 'SEARCH':{
//             return {
//                 ...state, 
//             }
//         }
//     }
//   }