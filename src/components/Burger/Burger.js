import React from "react";

const Burger = props => {

    return (
        <div className="Burger">
            <p className='Burger-title'>Burger</p>
            <div className="BreadTop">
                <div className="Burger-seeds1"></div>
                <div className="Burger-seeds2"></div>
            </div>
            {props.ingredients}
            <div className="BreadBottom"></div>
            <p className="Burger-price"><span>Price: </span>{props.money} soms</p>
        </div>
    )
};

export default Burger;