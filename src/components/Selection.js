
import React,{useState} from 'react';

const Selection=(props)=>{
    const [selectionStyle,updateSelectionStyle]=useState({});
    return(
        <div classNmae='fix-box' style={selectionStyle} onClick={()=>props.applyColor(updateSelectionStyle)}>
            <h2 className="subHeading">Selection</h2>
        </div>
    )
}
export default Selection;