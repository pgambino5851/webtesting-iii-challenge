// Test away
import React from "react";
import ReactDom from 'react-dom'
import { render, fireEvent } from 'react-testing-library';
import "react-testing-library/cleanup-after-each";
import 'jest-dom/extend-expect'
import Controls from '../controls/Controls'
import Dashboard from './Dashboard';

describe("Display Dashboard successfully", () => {
    it("should render successfully", () => {
        render(<Dashboard />)
        
    })
})

describe("Control buttons working successfully", () => {
    it('should call the close button when clicked and both locked and both locked and closed are not set to true.', () => {
        const mock = jest.fn();

        const { getByText } = render(<Controls toggleClosed={mock} />);

        const closeBtn = getByText(/close gate/i);

        fireEvent.click(closeBtn);

        expect(mock).toHaveBeenCalled();
        
    })

    it('should call the lock button when clicked while gate is open and unlocked', () => {
        const mock = jest.fn();

        const { getByText } = render(<Controls closed={true} locked={false} toggleLocked={mock} />
        );
      
        const lockBtn = getByText(/lock gate/i);
      
        fireEvent.click(lockBtn);
      
        expect(mock).toHaveBeenCalled();
    })

    it("Should call open button when clicked while gate is closed and unlocked", () => {
        const mock = jest.fn();
        const { getByText } = render( <Controls closed={true} toggleClosed={mock} />
        );
      
        const openBtn = getByText(/open gate/i);
      
        fireEvent.click(openBtn);
      
        expect(mock).toHaveBeenCalled();
      });

      it('should call the unlock button when clicked while gate is closed and locked', () => {
        const mock = jest.fn();

        const { getByText } = render(<Controls closed={true} locked={true} toggleLocked={mock} />
        );
      
        const lockBtn = getByText(/unlock gate/i);
      
        fireEvent.click(lockBtn);
      
        expect(mock).toHaveBeenCalled();
    })
})