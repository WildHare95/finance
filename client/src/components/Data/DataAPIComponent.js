import React, {useCallback, useEffect, useState} from "react";
import styles from "./DataStyle.module.css"
import io from "socket.io-client";
import Preloader from "../../common/preloader/preloader";
import Table from "./Table";
import {SERVER_ON_TICKER_EVENT, SERVER_START_EVENT, SERVER_URL} from "../../common/constants";

const DataAPIComponent = ({setData, chooseTicker, changeChart, data, numberTickers, currentTicker, isLoaded}) => {


    const onTicker = useCallback( (data) => {
        setData(data)
    }, [setData])


    const [socket, setSocket] = useState(null);
    useEffect(() => {
        const newSocket = io(SERVER_URL);
        setSocket(newSocket);
        return () => newSocket.close();
    }, [])


    useEffect(() => {
        if (socket) {
            socket.on('connect', () => {
                socket.emit(SERVER_START_EVENT)
            })

            socket.on(SERVER_ON_TICKER_EVENT, onTicker);
        }

        return () => {
            socket && socket.off(SERVER_ON_TICKER_EVENT, onTicker);
        }
    }, [socket, onTicker])


    const onChooseTicker = (data, ticker) => {
        let i
        for (i = 0; i <= data.length; i++) {
            if (data[i].ticker === ticker) {
                break
            }
        }
        chooseTicker(data, i, ticker)
    }

    useEffect(() => {
        changeChart(data, numberTickers)
    }, [data,changeChart,numberTickers])

    return (
        <div>
            {isLoaded ?
                <table className="table">
                    {
                        data.map(item =>
                            <Table
                                key={item.ticker}
                                change={item.change}
                                data={data}
                                ticker={item.ticker}
                                exchange={item.exchange}
                                price={item.price}
                                changePercent={item.change_percent}
                                onChooseTicker={onChooseTicker}
                                currentTicker={currentTicker}
                            />)
                    }
                </table>
                :
                <div className={styles.preloaderContainer}><Preloader/></div>
            }
        </div>
    )
}


export default DataAPIComponent