import React from "react";
import style2 from "./ArrowStyleGreen.module.css"
import style1 from "./ArrowStyleRed.module.css"

const ArrowBlock = ({trend}) => {
    const stylesArrowContainer = trend ? style1.container : style2.container
    const stylesArrowChevron = trend ? style1.chevron : style2.chevron
    return (
                <div className={stylesArrowContainer}>
                    <div className={stylesArrowChevron}/>
                    <div className={stylesArrowChevron}/>
                    <div className={stylesArrowChevron}/>
                </div>
    )
}

export default ArrowBlock