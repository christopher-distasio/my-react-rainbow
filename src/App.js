import React, { useState } from 'react'
// Make sure to import the component we just built:
import ColorBlock from './ColorBlock'
import ColorForm from './ColorForm'

function App(){
    let [colors, setColor] = useState ([
        'violet', 'blue',
        'lightblue', 'green',
        'greenyellow', 'yellow',
        'orange', 'red'
    ])
    
    let colorMap = colors.map((color, i) => {
        return (
            <ColorBlock key={i} color={color} />
        )
    })

    const addColor = (newColor) => {
        setColor([...colors, newColor])
    }

   

    return (
        <div className="App">
            {colorMap}
            <ColorForm addColor={addColor} />

        </div>

    )

}

export default App
