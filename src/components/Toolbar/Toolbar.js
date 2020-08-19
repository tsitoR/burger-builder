import React from 'react'
import Logo from './Logo'
import style from './toolbar.css'
import OrdersNavigation from './NavigationItems/OrdersNavigation'
import BuilderNavigation from './NavigationItems/BuilderNavigation'

const toolbar = () => {
    return (
        <div className={style.toolbar}>
            <Logo styleclass={style.logo} />
            <div className={style.navigations}>
                <OrdersNavigation />
                <BuilderNavigation />
            </div>
        </div>
    )
}

export default toolbar