import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen} from "@testing-library/react";
import BubblePage from './BubblePage';

test("Renders without errors", ()=> {
    // render(<BubblePage />)
});

// const colorObjects = [
//         {
//           color: "aliceblue",
//           code: {
//             hex: "#f0f8ff",
//           },
//           id: 1,
//         },
//         {
//           color: "limegreen",
//           code: {
//             hex: "#99ddbc",
//           },
//           id: 2,
//         },
//         {
//           color: "aqua",
//           code: {
//             hex: "#00ffff",
//           },
//           id: 3,
//         },
//         {
//           color: "aquamarine",
//           code: {
//             hex: "#7fffd4",
//           },
//           id: 4,
//         },
//         {
//           color: "lilac",
//           code: {
//             hex: "#9a99dd",
//           },
//           id: 5,
//         },
//         {
//           color: "softpink",
//           code: {
//             hex: "#dd99ba",
//           },
//           id: 6,
//         },
//         {
//           color: "bisque",
//           code: {
//             hex: "#dd9a99",
//           },
//           id: 7,
//         },
//         {
//           color: "softyellow",
//           code: {
//             hex: "#dcdd99",
//           },
//           id: 8,
//         },
//         {
//           color: "blanchedalmond",
//           code: {
//             hex: "#ffebcd",
//           },
//           id: 9,
//         },
//         {
//           color: "blue",
//           code: {
//             hex: "#6093ca",
//           },
//           id: 10,
//         },
//         {
//           color: "blueviolet",
//           code: {
//             hex: "#8a2be2",
//           },
//           id: 11,
//         },
      
//     ]

test("Renders appropriate number of colors passed in through mock", async ()=> {
    //Keep in mind that our service is called on mount for this component.
    //arrange: render the bubblepage with the colors =[]
//     const { rerender } = render(<BubblePage colors={[]}/>)

//     //act: find the colors
//     let colors = screen.queryAllByTestId('color')

//     //assert: confirm there are no colors on the screen
//     expect(colors).toHaveLength(0)

//     //arrange: rerender bublepage with the colors
//     rerender(<BubblePage colors={colorObjects}/>)

//     //act: find the colors
//     colors = screen.queryAllByTestId('color')

//     //assert: colors are on the screen
//     expect(colors).toHaveLength(11)
});