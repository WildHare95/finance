import {compose} from "redux";
import {connect} from "react-redux";
import Block from "./Block";

const mapStateToProps = (state) =>{
    return{
        data: state.dataState.data,
        isLoaded: state.dataState.isLoaded,
    }
}

export default compose(
    connect(
        mapStateToProps,
    )
)(Block)