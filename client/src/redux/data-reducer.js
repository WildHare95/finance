const SET_DATA = "SET_DATA"
const SET_DATA_CHART = "SET_DATA_CHART"
const SET_LOADING = "SET_LOADING"
const CHOOSE_TICKER = "CHOOSE_TICKER"
const SET_UPDATE = "SET_UPDATE"
const CLOSE_CHART = "CLOSE_CHART"

let initialState = {
    data: [],
    graphPoints: [{name: "", price: 0}, {name: "", price: 0}, {name: "", price: 0}, {name: "", price: 0}, {name: "", price: 0}],
    numberTickers: null,
    isLoaded: false,
    ticker: null,
    showChart: false
}


const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                data: action.data
            }
        case SET_DATA_CHART:
            let newPoint = {name: action.ticker, price: action.price}
            return {
                ...state,
                graphPoints: [
                    ...state.graphPoints.splice(1), newPoint
                ]
            }
        case CHOOSE_TICKER:
            return {
                ...state,
                numberTickers: action.number,
                showChart: true
            }
        case SET_LOADING:
            return {
                ...state,
                isLoaded: action.state
            }
        case SET_UPDATE:
            return {
                ...state,
                graphPoints: [{name: "", price: 0}, {name: "", price: 0}, {name: "", price: 0}, {name: "", price: 0}, {name: "", price: 0}],
                ticker: action.ticker
            }
        case CLOSE_CHART:
            return {
                ...state,
                showChart: false,
                ticker: null
            }

        default:
            return state
    }
}

const setDataTickers = (data) => ({type: SET_DATA, data})
const setDataChart = (ticker, price) => ({type: SET_DATA_CHART, ticker, price})
const setChooseTickerCreator = (number) => ({type: CHOOSE_TICKER, number})
const setLoadedState = (state) => ({type: SET_LOADING, state})
const resetChart = (ticker) => ({type: SET_UPDATE, ticker})
const setCloseChart = () => ({type: CLOSE_CHART})


export const getDataTickers = (data) => (dispatch) => {
    dispatch(setDataTickers(data))
    dispatch(setLoadedState(true))
}

export const changeChart = (data, number) => (dispatch) => {
    if (number !== null) {
        dispatch(setDataChart(data[number].ticker, data[number].price))
    }

}

export const chooseTicker = (data, number, ticker) => (dispatch) => {
    dispatch(setChooseTickerCreator(number))
    dispatch(resetChart(ticker))
}

export const setLoading = () => (dispatch) => {
    dispatch(setLoadedState(true))

}

export const clearChart = () => (dispatch) => {
    dispatch(setCloseChart())
}


export default dataReducer