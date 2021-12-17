import {compose} from "redux";
import {connect} from "react-redux";
import Charts from "./Charts";
import {clearChart} from "../../redux/data-reducer";


const mapStateToProps = (state) => {
    return{
        graphPoints: state.dataState.graphPoints,
        isLoaded: state.dataState.isLoaded,
        ticker: state.dataState.ticker,
        showChart: state.dataState.showChart
    }
}


export default compose(
    connect(mapStateToProps, {clearChart}))(Charts)