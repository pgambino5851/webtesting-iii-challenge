// Test away!
import React from "react";
import { render, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";

import Display from './Display';

describe("Display Component successfully", () => {
    it("should render successfully", () => {
        render(<Display />)
        cleanup()
    })
})