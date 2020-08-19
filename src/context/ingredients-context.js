import React from 'react';

const priceContext = React.createContext({
    priceList: [
        {
            type: 'Meat',
            price: 1.0
        },
        {
            type: 'BreadBottom',
            price: 0.5
        },
        {
            type: 'BreadTop',
            price: 0.5
        },
        {
            type: 'Cheese',
            price: 1.5
        },
        {
            type: 'Seeds1',
            price: 0.5
        },
        {
            type: 'Seeds2',
            price: 0.5
        },
        {
            type: 'Bacon',
            price: 1.0
        },
        {
            type: 'Salad',
            price: 0.5
        },
    ],
    control: [
        {
            label: 'Meat',
            hasParent: false,
            enableItems: []
        },
        {
            label: 'BreadBottom',
            hasParent: false,
            enableItems: []
        },
        {
            label: 'BreadTop',
            hasParent: false,
            enableItems: ['Seeds1', 'Seeds2']
        },
        {
            label: 'Cheese',
            hasParent: false,
            enableItems: []
        },
        {
            label: 'Seeds1',
            parentControl: 'BreadTop',
            hasParent: true
        },
        {
            label: 'Seeds2',
            parentControl: 'BreadTop',
            hasParent: true
        },
        {
            label: 'Bacon',
            hasParent: false,
            enableItems: []
        },
        {
            label: 'Salad',
            hasParent: false,
            enableItems: []
        }
    ]
});

export default priceContext;