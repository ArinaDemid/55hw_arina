import React from "react";

const BlockAddIngredient = props => {

    return (
        <div className='blockIngredient'>
            <img className='imageIcon' src={props.image} alt='post filling' onClick={props.add}/>
            <p className='nameIngredient'>{props.name}</p>
            <p className='count'>{props.price}</p>
            <p className='less' onClick={props.remove}><i className="fas fa-trash-alt" style={{fontSize: '20px'}}></i></p>
        </div>

    )
};


export default BlockAddIngredient;