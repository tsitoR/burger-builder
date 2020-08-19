import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';
import IngredientsContext from '../../context/ingredients-context';

class BurgerBuilder extends Component{
    state = {
        ingredients: [],
        totalPrice: 2,
        disabledItem: null
    }
    static contextType = IngredientsContext;
    setDisableItem = () => {
        var table = {};
        this.context.control.map((element) => {
            if (element.hasParent)
                table[element.label] = true
            else
                table[element.label] = false
        })
        return table
    }
    sumPrice = () => {
        var total = this.state.totalPrice;
        this.state.ingredients.map((ingredient) => {
            console.log(ingredient)
            if (ingredient.addon.length > 0) {
                ingredient.addon.map((addonItem) => {
                    total = total + this.context.priceList[this.context.priceList.findIndex((element) => element.type === addonItem.type)].price
                    // console.log(this.context.priceList[this.context.priceList.findIndex((element) => element.type === addonItem.type)].price)
                })
            }
            total = total + this.context.priceList[this.context.priceList.findIndex((element) => element.type === ingredient.type)].price;
            // console.log(this.context.priceList[this.context.priceList.findIndex((element) => element.type === ingredient.type)].price)
        })
        return total;
    }
    updateEnableList = (enableItems) => {
        var disabledUpdated = this.state.disabledItem
        if (this.state.disabledItem === null) {
            disabledUpdated = this.setDisableItem();
        }
        else {
            disabledUpdated = this.state.disabledItem
        }
        enableItems.map((enableItem) => {
            disabledUpdated[enableItem] = false;
        })
        this.setState({
            disabledItem: disabledUpdated
        })
    }

    addIngredients = (props, enableItems) => {
        const addedIngredients = this.state.ingredients
        addedIngredients.push({
            type: props,
            addon: []
        })
        this.updateEnableList(enableItems)
        console.log(addedIngredients);
        console.log(this.state.ingredients);

        this.setState({
            ingredients: addedIngredients
        })
    };

    updateDisableDisableList = (parent, disableItems) => {
        const disabledUpdated = this.state.disabledItem
        var display = true;
        var numberParent = this.state.ingredients.map((elm, idx) => elm.type === parent.type ? idx : '').filter(String).length
        console.log(numberParent);
        if (numberParent > 1) {
            display = false;
        }
        disableItems.map((disableItem) => {
            disabledUpdated[disableItem] = display;
        })
        this.setState({
            disabledItem: disabledUpdated
        })
        console.log(this.state.ingredients.map((elm, idx) => elm.type === parent.type ? idx : '').filter(String));
    }
    
    
    removeIngredients = (index) => {
        const removedIngredients = this.state.ingredients;
        this.updateDisableDisableList(this.state.ingredients[index], this.context.control[this.context.control.findIndex((element) => element.label === this.state.ingredients[index].type)].enableItems)
        removedIngredients.splice(index, 1);
        console.log(removedIngredients);
        this.setState({
            ingredients: removedIngredients
        })
    }

    addAddon = (container, additionnal) => {
        const updatedList = this.state.ingredients;
        var added = false;
        let containerList = updatedList.map((element, index) => element.type === container ? index : '').filter(String);
        containerList.map((element) => {
            console.log(updatedList[element].addon.findIndex((element) => element.type === additionnal));
            if (updatedList[element].addon.findIndex((element) => element.type === additionnal) === -1 && added === false) {
                updatedList[element].addon.push({ type: additionnal, addon: [] });
                added = true;
            }
        })
        this.setState({
            ingredients: updatedList
        })
        console.log(this.state.ingredients.findIndex((ingredient) => ingredient.type === container))
    }
    
    render() {
        var disableList = this.state.disabledItem;
        if (this.state.disabledItem === null)
        {
            console.log("null disabled")
            disableList = this.setDisableItem(); 
        }
        console.log(this.state.ingredients)
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} ingredientsClick={this.removeIngredients} />
                <BuildControls disabledItem={disableList} sumPrice={this.sumPrice} click={this.addIngredients} clickAddon={this.addAddon} disabledInfo={this.state.disabledAddon} />
            </Aux>
        )
    }
}

export default BurgerBuilder