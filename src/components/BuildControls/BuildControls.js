import React from 'react'
import Aux from '../../hoc/Auxiliary';
import styleClasses from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const BuildControls = props => {
    const controls = [
        { label: 'Meat', hasParent: false, enableItems: [] },
        { label: 'BreadBottom', hasParent: false, enableItems: [] },
        { label: 'BreadTop', hasParent: false, enableItems: ['Seeds1','Seeds2'] },
        { label: 'Cheese', hasParent: false, enableItems: [] },
        { label: 'Seeds1', parentControl: 'BreadTop', hasParent: true },
        { label: 'Seeds2', parentControl: 'BreadTop', hasParent: true },
        { label: 'Bacon', hasParent: false, enableItems: [] },
        { label: 'Salad', hasParent: false, enableItems: [] }
    ]
    return (
        <div className={styleClasses.BuildControls}>
            <p>price: <b>{props.sumPrice()}</b></p>
            {controls.map((control, index) => {
                return <BuildControl disabledItems={props.disabledItem} key={index} controlItem={control} hasParent={control.hasParent} click={props.click} clickAddon={props.clickAddon} />
            })}
        </div>
    )
}

export default BuildControls