import {render, screen} from "@testing-library/react";
import Table from "./Table";
import userEvent from "@testing-library/user-event";


const item = {
    change: "52.41",
    changePercent: "0.60",
    currentTicker: "AMZN",
    exchange: "NASDAQ",
    price: "228.67",
    ticker: "AAPL"
}

const onChooseTicker = jest.fn()

describe("DataTable component", () => {
    test('Should render table', () => {
        render(<Table
            ticker={item.ticker}
            exchange={item.exchange}
            price={item.price}
            change_percent={item.change_percent}
            onChooseTicker={onChooseTicker}
            currentTicker={item.currentTicker}
        />)
        expect(screen.getByText(/aapl/i)).toBeInTheDocument()
    })
    test('Should click works', () => {
        render(<Table
            ticker={item.ticker}
            exchange={item.exchange}
            price={item.price}
            changePercent={item.changePercent}
            onChooseTicker={onChooseTicker}
            currentTicker={item.currentTicker}
        />)


        userEvent.hover(screen.getByRole('stringTable'))
        expect(screen.getByRole('stringTable')).toHaveClass('th')

        userEvent.click(screen.getByRole("stringTable"))
        expect(onChooseTicker).toBeCalledTimes(1)

        item.currentTicker === item.ticker ?
            expect(screen.getByRole('stringTable')).toHaveClass('line') :
            expect(screen.getByRole('stringTable')).toHaveClass('th')

    })
})