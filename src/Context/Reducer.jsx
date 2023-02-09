
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
            // const data = state.list?.reduce((acc, curr) => {
            //     let obj = acc.find((item) => item.id === curr.id)
            //     if (obj) {
            //         return acc
            //     } else {
            //         return acc.concat([curr])
            //     }
            // }, [])

            // console.log(data)
            return {
                ...state, list: [...state.list, action.payload]
            }
        case "ADD_TO_LIST_DATA":
            return {
                ...state, listData: [...state.listData, action.payload]
            }
        case "CLEAR_LIST":
            return {
                ...state, list: []
            }
        default:
            break;
    }

}

export default Reducer



