import {CHANGE_NAME} from "./actions";

const initialState = {
    showName: true,
    name: 'Jane'

}

const reducers = (state = initialState, action)=> {
        switch (action.type){
        case CHANGE_NAME:
            return {
                ...state,
                name: action.payload
            }

        default:return state
    }
};

export default reducers