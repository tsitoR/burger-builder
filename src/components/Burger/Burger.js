import React from 'react';
import Aux from '../../hoc/Auxiliary';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient'
import styleIngredients from '../Burger/BurgerIngredients/BurgerIngredient.css';
import styleBurger from './Burger.css';

const Burger = props => {
    const ingredients = props.ingredients.map((ingredient, index) => {
        if (ingredient.addon.length>0) {
            const addon = ingredient.addon.map((add, indexaddon) => {
                return <BurgerIngredient styleclass={styleIngredients[add.type]} title={add.type} key={indexaddon} ingredientIndex={indexaddon} isaddon={true}/>
            })
            return (
                <BurgerIngredient styleclass={styleIngredients[ingredient.type]} title={ingredient.type} key={index} ingredientIndex={index} click={props.ingredientsClick} isaddon={false}>
                    {addon}
                </BurgerIngredient>
            )
        }
        else {
            return <BurgerIngredient styleclass={styleIngredients[ingredient.type]} title={ingredient.type} key={index} ingredientIndex={index} click={props.ingredientsClick} isaddon={false}/>
        }
    })
    return (
        <div className={styleBurger.Burger}>
            {ingredients}
        </div>
        )
    }
    
export default Burger;