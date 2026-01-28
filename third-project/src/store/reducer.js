const Initial_State = {
    lang: "en",
    isLoading: false
}

export default function languageReducer(state = Initial_State, action) {
    switch (action.type) {
        case "SET_LANGUAGE":
            return {
                ...state,
                lang: action.payload
            }
        case "SET_LOADER":
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state;
    }
}

