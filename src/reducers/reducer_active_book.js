//The state argument is not the application state but only the state this reducer is responsible for.
export default function(state = null, action){ //if arg is undefined set it to null
    switch(action.type){
        case 'BOOK_SELECTED':  {
            return action.payload;
        }
    }


//if we don't care about the current action, just pass the state back through
return state; //base case described above

//most redux reducers have JS switch statement.
}