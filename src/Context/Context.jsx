import React, { createContext, useReducer } from 'react'
import Reducer from './Reducer'

export const CreateContext = createContext()

const Data = {
    search: [],
    genre: [],
    list: [],
    listData: [],
    drawer: false
}

function Context({ children }) {
    const [state, dispatch] = useReducer(Reducer, Data)


    function AddtoSearch(item) {
        dispatch({
            type: "ADD_TO_SEARCH",
            payload: item
        })
    }
    function AddtoGenre(item) {
        dispatch({
            type: "ADD_TO_GENRE",
            payload: item
        })
    }
    function AddtoList(item) {
        dispatch({
            type: "ADD_TO_LIST",
            payload: item
        })
    }
    function AddtoListData(item) {
        dispatch({
            type: "ADD_TO_LIST_DATA",
            payload: item
        })
    }
    function ClearList() {
        dispatch({
            type: "CLEAR_LIST",
        })
    }
    function SetDrawer(boolean) {
        dispatch({
            type: "SET_DRAWER",
            payload: boolean
        })
    }


    return (
        <CreateContext.Provider value={{ state, AddtoSearch, AddtoList, AddtoListData, ClearList, SetDrawer }}>
            {children}
        </CreateContext.Provider>
    )
}

export default Context