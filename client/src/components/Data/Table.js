import React from "react";
import styles from "./DataStyle.module.css"

const Table = ({onChooseTicker, ticker, data, currentTicker,exchange, price, change, changePercent}) => {

    return (
        <tbody
               className={ticker === currentTicker ? styles.line : styles.th}
               onClick={() => {
                   onChooseTicker(data, ticker)
               }}>
            <tr>
                <th>{ticker}</th>
                <td>{exchange}</td>
                <td>{price}</td>
                <td>{change}</td>
                <td>{changePercent}</td>
            </tr>
        </tbody>

    )
}


export default Table