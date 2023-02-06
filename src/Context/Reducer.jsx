
function Reducer(state, action) {

    switch (action.type) {
        case "MASTER_DATA":
            return {
                ...state,
                masterData: [...action.payload]
            }
        case "TRENDING_DATA":
            return {
                ...state,
                trending: [...action.payload]
            }
        case "MCU_DATA":
            return {
                ...state,
                mcu: [...action.payload]
            }
        case "POPULAR_DATA":
            return {
                ...state,
                popular: [...action.payload]
            }
        case "ADD_TO_SEARCH":
            return {
                ...state, search: [...action.payload]
            }
        case "ADD_TO_GENRE":
            return {
                ...state, genre: [...action.payload]
            }
        case "ADD_TO_LIST":
            return {
                ...state, list: [...action.payload]
            }
        default:
            break;
    }

}

export default Reducer



