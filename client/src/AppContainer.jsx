import {compose} from "redux";
import {connect} from "react-redux";
import App from "./App";

const mapStateToProps = (state) => {
    return {
        isLoaded: state.dataState.isLoaded
    }
}


export default compose(
    connect(
        mapStateToProps, {}
    )
)(App)