import React from 'react';
import styleClass from './BurgerIngredient.css';
import Aux from '../../../hoc/Auxiliary';

const burgerIngredient = (props) => (
    <Aux>
        {props.isaddon ? <div className={props.styleclass} >{props.children}</div> :
        <div className={props.styleclass} onClick={(event) => props.click(props.ingredientIndex)}>{props.children}</div>}
    </Aux>
)

export default burgerIngredient;