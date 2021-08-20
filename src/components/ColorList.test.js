import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen} from "@testing-library/react";
import ColorList from './ColorList';
import userEvent from '@testing-library/user-event';

test("Renders an empty list of colors without errors", () => {
    render(<ColorList colors={[]}/>)
});

const colorObjects = [
    {
      color: "aliceblue",
      code: {
        hex: "#f0f8ff",
      },
      id: 1,
    },
    {
      color: "limegreen",
      code: {
        hex: "#99ddbc",
      },
      id: 2,
    }
  
]

test("Renders a list of colors without errors", () => {
    render(<ColorList colors={colorObjects}/>)
    colors = screen.queryAllByTestId('color')
    expect(colors).toHaveLength(2)
});

test("Renders the EditForm when editing = true and does not render EditForm when editing = false", () => {
    render(<ColorList colors={colorObjects} toggleEdit={true}/>)
    colors = screen.queryAllByTestId('color')
    userEvent.click(colors)
    const editModal = screen.queryAllByTestId('edit_menu')
    expect(editModal).toBeInTheDocument()

    const { rerender } = render(<BubblePage colors={[]}/>)

    rerender(<BubblePage colors={colorObjects} toggleEdit={false}/>)
    colors = screen.queryAllByTestId('color')
    userEvent.click(colors)
    const editModal = screen.queryAllByTestId('edit_menu')
    expect(editModal).not.toBeInTheDocument()


});
