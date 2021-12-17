import {render, screen} from "@testing-library/react";
import BlockFilter from "./BlockFilter";


const data = {
    change: "78.23",
    ticker: "TSLA",
    trend: 0
}

describe("Block component", () => {
    test('Should render block ', () => {
        render(<BlockFilter change={data.change} ticker={data.ticker} trend={data.trend}/>)

        expect(screen.getByText(/TSLA/)).toBeInTheDocument()
        expect(screen.getByRole("block")).toHaveClass("block_inner")


    })
    test('Should render block with dynamic classes  ', () => {
        render(<BlockFilter change={data.change} ticker={data.ticker} trend={data.trend}/>)
        data.trend ?
        expect(screen.getByRole("block")).toHaveClass("green"):
        expect(screen.getByRole("block")).toHaveClass("red")

    })
})