/* eslint-disable testing-library/prefer-screen-queries */
import { fireEvent, render } from "@testing-library/react";
import Counter from "./Counter";



describe(Counter, () => {
    it("counter  displays  correct initial count", () => {
        const { getByTestId } = render(<Counter initialCount={0}/>)
        // eslint-disable-next-line testing-library/prefer-screen-queries
        const countValue =  Number(getByTestId("count").textContent);
        expect(countValue).toEqual(0)
    })

    it("counter; see if the button works ", () => {
        const { getByTestId , getByRole } = render(<Counter initialCount={0}/>)

        // eslint-disable-next-line testing-library/prefer-screen-queries
        const incrementBttn = getByRole("button", { name: "Increment"})
        // eslint-disable-next-line testing-library/prefer-screen-queries
        fireEvent.click(incrementBttn)
        const countValue =  Number(getByTestId("count").textContent);
        expect(countValue).toEqual(1)
    })
})