const Initial_State = {
    lang: "en",
}


function languageReducer(state = Initial_State, action) {
    switch (action.type) {
        case "SET_LANGUAGE":
            return {
                ...state,
                lang: action.payload
            }
        default:
            return state;
    }

}