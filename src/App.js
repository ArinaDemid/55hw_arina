import React, {Component} from 'react';
import './App.css';
import './components/Ingredients/Ingredient.css';
import './components/Burger/Burger.css';
import IngredientAdd from './components/Ingredients/IngredientAdd';
import BlockAddIngredient from './components/Ingredients/BlockAddIngredient';
import IngredientsList from './components/Ingredients/IngredientsList';
import Burger from './components/Burger/Burger';

class App extends Component {
  money = 20;

  state = {
    ingredients: [{ingredient: 'Meat', count: 0}, {ingredient: 'Cheese', count: 0}, {ingredient: 'Salad', count: 0},{ingredient: 'Bacon', count: 0}]
  };
  
  addFilling = (name) => {
    
    const ingredients = [...this.state.ingredients];
    ingredients.forEach(function(item) {
      if (item.ingredient === name) item.count++;
    });

    this.setState({ingredients});
    this.money = 20 + this.addTotal();
  };
  
  removeFilling = (name) => {
    const ingredients = [...this.state.ingredients];
    ingredients.forEach(function(item) {
      if (item.ingredient === name && item.count !== 0) item.count--;
    });

    this.setState({ingredients});
    this.money = 20 + this.addTotal();
  };
  
  addTotal = () => {
    let countPrice = 0;
    for (let i = 0; i < this.state.ingredients.length; i++) {
      countPrice += IngredientsList[i].price * this.state.ingredients[i].count;
    }
    return countPrice;
  };
  
  render() {

    const ingredients = this.state.ingredients.map(filling => {
      const components = [];
      for (let i = 0; i < filling.count; i++) {
        components.push(
          <IngredientAdd 
            key={filling.ingredient + i}
            classngIredient={filling.ingredient}
          />
        );
      }
      return components;
    }).flat();

    return (
      <div className="App">
        <div className="Ingredient-add">
          <p className='Ingredient-title'>Ingredients:</p>
        {
          IngredientsList.map((ingredient) => {
            return (
              <BlockAddIngredient 
                key={ingredient.name}
                image={ingredient.image}
                name={ingredient.name}
                count={this.state.ingredients[IngredientsList.findIndex(p => p.name === ingredient.name)].count}
                add={() => this.addFilling(ingredient.name)}
                showButton={this.state.ingredients[IngredientsList.findIndex(p => p.name === ingredient.name)].count}
                remove={() => this.removeFilling(ingredient.name)}
              />
              )
            })
          }
        </div>
        <Burger
          ingredients={ingredients}
          money={this.money}
        />
      </div>
    );
  }
}

export default App;
