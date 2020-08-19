import React from 'react';
import style from './layout.css';
import Toolbar from '../Toolbar/Toolbar';
import Aux from '../../hoc/Auxiliary';
import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder'

const layout = (props) => {
    return (
        <Aux>
            <Toolbar />
            <div className={style.wrapper}>
                    <BurgerBuilder />
                    {props.children}
                </div>
        </Aux>
    )
}

export default layout;