import React from 'react'
import StyleClasses from './BuildControl.css'

const buildControl = (props) => (
    <div className={StyleClasses.BuildControl}>
        <div className={StyleClasses.Label}>{props.controlItem.label}</div>
        {props.hasParent ?
            <button className={StyleClasses.Less} disabled={props.disabledItems[props.controlItem.label]} onClick={(event) => props.clickAddon(props.controlItem.parentControl, props.controlItem.label) }>+</button>
            : <button disabled={props.disabledItems[props.controlItem.label]} className={StyleClasses.Less} onClick={(event) => props.click(props.controlItem.label, props.controlItem.enableItems)}>+</button>}
        
    </div>
);

export default buildControl;

