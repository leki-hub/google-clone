
export const initialState= {
    term:""
}

const reducer = (state,action)=>{
    switch(action.type){
        case 1:
            return{
                ...state,term:action.term
            }
            default :
            return state;
    }
}
export default reducer