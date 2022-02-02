const initialState = {
    showName: true,
    name: 'Jane'

}

const profileReducer = (state = initialState, action)=> {
    console.log(action)
    switch (action.type){
        case 'EXAMPLE_ACTION':
            return {
                ...state,
                showName: !state.showName
            }

        default:return state
    }
}

export default profileReducer