import React, { useState } from 'react'; // Importing React Baseline and useState (allows you to do setColour... etc)

const Main = () => {

    // onMouseDown, onMouseEnter, onMouseLeave (Ignore this Nye)

    let colours = [
        'white',
        'black',
        'red',
        'blue', 
        'green', 
        'purple', 
        'orange',
        'yellow'
    ]; // Declaring a list of colours

    const [width, setWidth] = useState(20); // Setting Width
    const [height, setHeight] = useState(20); // Setting Height
    const [colour, setColour] = useState(colours[0]) // Setting Colour

    const cells = []; // Creating a 2D Array for holding Rows

    for (let y = 0; y < height; y++) {
        const row = []; // Creating an empty array
        for (let x = 0; x < width; x++) {
            row.push(
                <div
                    className="cell"
                    onClick={(e) => {
                        e.target.style.background = colour;
                    }}    
                ></div> // Adding a "cell" div to the row array, and setting the background colour to the const colour, and changing the colour on click
            );
        }
        cells.push(row); // Adding the row array to the cells array
    }

    const options = [
        colours.map(colour => <option value={ colour }> {colour} </option>)
    ] // Creating an <option> html tag array, with each colour being a new option (For a dropdown selection list)
    
    return (
        <>
            <input type="number" min="1" value={ width } onChange={(e) => setWidth(e.target.value)}/> <br/>{/* Number selection box to set width */}            
            <input type="number" min="1" value={ height } onChange={(e) => setHeight(e.target.value)} /> <br/>{/* Number selection box to set height */}

            <select name="colour" id="colour" onChange={(e) => setColour(e.target.value)}> {/* Creating a dropdown list of colours */}
                { options } {/* Bringing in the colours to add to the list  */}
            </select>

            { cells.map(row => <div className="row">{ row }</div>) } {/* Rendering the cells to the screen */}
        </>
    ); // Returning a chunk of HTML to render

};


export default Main; // Exporting the constant of Main 