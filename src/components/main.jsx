import React, { useState } from 'react';

const Main = () => {

    // onMouseDown, onMouseEnter, onMouseLeave

    let colours = [
        'white',
        'black',
        'red',
        'blue', 
        'green', 
        'purple', 
        'orange',
        'yellow'
    ];

    const [width, setWidth] = useState(20);
    const [height, setHeight] = useState(20);
    const [colour, setColour] = useState(colours[0])

    const cells = [];

    for (let y = 0; y < height; y++) {
        const row = [];
        for (let x = 0; x < width; x++) {
            row.push(
                <div
                    className="cell"
                    onClick={(e) => {
                        e.target.style.background = colour;
                    }}    
                ></div>
            );
        }
        cells.push(row);
    }

    const options = [
        colours.map(colour => <option value={ colour }> {colour} </option>)
    ]
    
    return (
        <>
            <input type="number" min="1" value={ width } onChange={(e) => setWidth(e.target.value)}/> <br/>
            <input type="number" min="1" value={ height } onChange={(e) => setHeight(e.target.value)} /> <br/>

            <select name="colour" id="colour" onChange={(e) => setColour(e.target.value)}>
                { options }
            </select>

            { cells.map(row => <div className="row">{ row }</div>) }
        </>
    );

};


export default Main;