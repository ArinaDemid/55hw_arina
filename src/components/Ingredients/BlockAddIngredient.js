import React from "react";

const BlockAddIngredient = props => {

    let removeClasses = ['Ingredient-remove'];

    if (props.showButton === 0) {
        removeClasses.push('Ingredient-removeHide');
    }
    return (
        <div className='Ingredient-block'>
            <img className='Ingredient-imageIcon' src={props.image} alt='post filling' onClick={props.add}/>
            <p className='Ingredient-name'>{props.name}</p>
            <p className='Ingredient-count'>x {props.count}</p>
            <p className={removeClasses.join(' ')} onClick={props.remove}><i className="fas fa-trash-alt" style={{fontSize: '20px'}}></i></p>
        </div>
    )
};

export default BlockAddIngredient;