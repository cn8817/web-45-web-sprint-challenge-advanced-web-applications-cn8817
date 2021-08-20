import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Color from './Color';

test("Renders without errors with blank color passed into component", () => {
    render(<Color colors={[]}/>)
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
  
test("Renders the color passed into component", () => {
    render(<Color colors={colorObjects}/>)
    colors = screen.queryAllByTestId('color')
    expect(colors).toHaveLength(2)
});

test("Executes handleDelete and toggleEdit property when the 'x' icon is clicked", () => {
    render(<Color colors={colorObjects} toggleEdit={true}/>)
    colors= screen.queryAllByTestId('color')
    const deleteButton = screen.queryAllByTestId('delete')
    userEvent.click(deleteButton)
    expect(colors).toHaveLength(1)
});

test("Executes setEditColor and toggleEdit property when color div is clicked", () => {
    render(<Color colors={colorObjects} toggleEdit={true}/>)
    const colorsButton = screen.queryAllByTestId('color')
    userEvent.click(colorsButton)
    const editModal = screen.queryAllByTestId('edit_menu')
    expect(editModal).toBeInTheDocument()
});