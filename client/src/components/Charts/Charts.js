import {LineChart, Line, XAxis, Tooltip, CartesianGrid, YAxis} from 'recharts';
import styles from "./ChartStyle.module.css"
import React from "react";
import Preloader from "../../common/preloader/preloader";


const Charts = ({graphPoints, showChart, ticker, clearChart}) => {

    const data = graphPoints
    const haveData = data.length - 1

    return (
        <div>
            {
                showChart && data[4].name === ticker ?
                    <div className={styles.chart_container}>
                        <div className="close" onClick={() => {
                            clearChart()
                        }}>Close
                        </div>
                        <div>{data[haveData].name}
                            <LineChart width={500}
                                       height={200}
                                       data={data}
                                       backgroundColor={"red"}
                                       margin={{top: 5, right: 20, left: 10, bottom: 5}}>
                                <XAxis dataKey="name"/>
                                <YAxis dataKey="price"/>
                                <Tooltip/>
                                <CartesianGrid stroke="#f5f5f5"/>
                                <Line type="monotone" dataKey="price" stroke="#ff7300" yAxisId={0}/>
                            </LineChart>
                        </div>
                    </div> :
                    <div className={styles.preloaderContainerForChart}>
                        {
                            showChart ?
                                <Preloader/>:
                                <div className={styles.voidChart}>
                                    <div className={styles.cloud}/>
                                    Choose ticker
                                </div>
                        }
                    </div>
            }
        </div>
    )
}

export default Charts