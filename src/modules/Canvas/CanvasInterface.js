import { useState } from "react"
import Drawingspace from "./Drawingspace";
import CanvasSettings from "./CanvasSettings";

import "../../scss/canvas.scss";

export default () => {

    const initialState ={
        brushSize: 1,
        brushColor: "#000000",
        brushDensity: 100
    }
    const [brushOptions,setbrushOptions] = useState(initialState);

    return (<div>
        <div className="canvasFlex">
            <div>
        <Drawingspace brushOptions={brushOptions}/>
        </div>
        <div>

<CanvasSettings
           brushOptions={brushOptions}
           setbrushOptions={setbrushOptions}/>
           </div>
 </div>
    </div>)
}