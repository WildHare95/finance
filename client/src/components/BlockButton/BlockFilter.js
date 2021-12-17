import React from "react";
import styles from "./BlockStyle.module.css"
import ArrowBlock from "../../common/arrow/arrowBlock";


const BlockFilter = ({ticker, change, trend}) => {

    const blockStyle = trend ? styles.green : styles.red

    return (
        <div className={styles.block_inner + ' ' + blockStyle}>
            <div>{ticker}</div>
            <div>{change}</div>
            <ArrowBlock trend={trend}/>
        </div>

    )
}

export default BlockFilter