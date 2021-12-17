import React, {useEffect, useState} from "react";
import styles from "./BlockStyle.module.css"
import BlockFilter from "./BlockFilter";
import {TRENDS} from "../../common/constants";

const Block = ({data}) => {
    const [updatedData, setUpdatedData] = useState(data);

    useEffect(() => {
        if (data.length) {
            const dataWithTrend = data.map((newItem, index) => {
                const currentItem = updatedData[index]

                if (currentItem) {
                    const {change: currentPrice} = currentItem
                    const {change: newPrice} = newItem

                    const trend = (
                        newPrice === currentPrice ?
                            TRENDS.same :

                            newPrice - currentPrice > 0 ?
                                TRENDS.up :

                                TRENDS.down
                    )

                    return {
                        ...newItem,
                        trend
                    }
                }

                return newItem
            })

            setUpdatedData(dataWithTrend)
        }
    }, [data]);


    return (
        <div className={styles.block}>
            {
                updatedData.map(item =>
                    <div key={item.ticker}>
                        <BlockFilter ticker={item.ticker} trend={item.trend} change={item.change}/>
                    </div>)
            }
        </div>
    )
}

export default Block