import { SketchPicker } from 'react-color';
import React from 'react';
import { useState } from 'react';
import colorPicker from './ColorPicker';



function ColorApp() {
   const [colorValue, setColorValue] = useState("")

   return(<div>
      {colorPicker(colorValue, setColorValue)}
   </div>)
}


export default ColorApp;