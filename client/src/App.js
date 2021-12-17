import styles from "./App.module.css";
import React from "react";
import TableContainer from "./components/Data/DataContainer";
import ChartsContainer from "./components/Charts/ChartsContainer";
import BlockContainer from "./components/BlockButton/BlockContainer";
import Header from "./components/Header/header";


function App() {
    return (
        <div className={styles.mainWrapper}>
            <Header/>
            <div className={styles.workField}>
                <TableContainer/>
                <div>
                    <div className={styles.positionChart}>
                        <ChartsContainer/>
                    </div>
                    <div className={styles.blockContainer}>
                        <BlockContainer/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;
