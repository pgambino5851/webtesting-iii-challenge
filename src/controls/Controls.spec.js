// Test away!
// Test away!
import React from "react";
import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";
import Controls from './Controls';

describe("Controls Component", () => {
    it("should render successfully", () => {
        render(<Controls />)
    })

    it('should show that the user can lock the gate on the button if closed is true and locked is set to false', () => {
        let closed = true;
        let locked = false;

        const { getByText } = render(<Controls locked = {locked} closed={closed}/>)

        const lockGate = getByText(/lock gate/i);
        expect(lockGate).toBeInTheDocument();
    })

    it('should show that the user can open the gate on the button if closed is true and locked is set to false', () => {
        let closed = true;
        let locked = false;

        const { getByText } = render(<Controls locked = {locked} closed={closed}/>)

        const openGate = getByText(/open gate/i);
        expect(openGate).toBeInTheDocument();
    })

    it('should show that the user can close the gate on the button if closed is false and locked is set to false', () => {
        let closed = false;
        let locked = false;

        const { getByText } = render(<Controls locked = {locked} closed={closed}/>)

        const closeGate = getByText(/close gate/i);
        expect(closeGate).toBeInTheDocument();
    })

    it('should show that the user can unlock the gate on the button if closed is true and locked is set to true', () => {
        let closed = true;
        let locked = true;

        const { getByText } = render(<Controls locked = {locked} closed={closed}/>)

        const unlockGate = getByText(/unlock gate/i);
        expect(unlockGate).toBeInTheDocument();
    })

    it('should disable the closed toggle button if the gate is locked', () => {
        let mock = jest.fn();
        let locked = true;
        const { getByText } = render(<Controls locked = {locked} toggleClosed={mock}/>)
        const closeBtn = getByText(/close gate/i)

        fireEvent.click(closeBtn);

        expect(mock).not.toHaveBeenCalled()
    })

    it('should disable the lock toggle button if the closed is false', () => {
        let mock = jest.fn();
        let closed = false;
        const { getByText } = render(<Controls closed = {closed} toggleLocked={mock}/>)
        const lockBtn = getByText(/lock gate/i)

        fireEvent.click(lockBtn);

        expect(mock).not.toHaveBeenCalled()
    })
})