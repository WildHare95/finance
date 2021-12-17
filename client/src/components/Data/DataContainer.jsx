import {compose} from "redux";
import {connect} from "react-redux";
import {changeChart, chooseTicker, getDataTickers, setLoading} from "../../redux/data-reducer";
import DataAPIComponent from "./DataAPIComponent";

const mapStateToProps = (state) => {
    return {
        data: state.dataState.data,
        isLoaded: state.dataState.isLoaded,
        currentTicker: state.dataState.ticker,
        numberTickers: state.dataState.numberTickers
    }
}

export default compose(
    connect(
        mapStateToProps,
        {
            setData: getDataTickers,
            chooseTicker,
            setLoading,
            changeChart
        }
    )
)(DataAPIComponent)