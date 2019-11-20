import React, {Component} from 'react';
import './App.css';
import IngredientAdd from './components/IngredientAdd';
import BlockAddIngredient from './components/Ingredients/BlockAddIngredient';
import IngredientsList from './components/Ingredients/IngredientsList';


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
    console.log(this.state.ingredients);
  };

  removeFilling = (name) => {
    const ingredients = [...this.state.ingredients];

    ingredients.forEach(function(item) {
      if (item.ingredient === name && item.count !== 0) item.count--;
    });

    this.setState({ingredients});
    this.money = 20 + this.addTotal();
    console.log(this.state.ingredients);

  };

  // _searchPrice= (name) => {
  //   this.state.ingredients.forEach(function(ingredient) {
  //     if(ingredient.ingredient === name) return ingredient.count;
  //   });

  // };

  addTotal = () => {
    let countPrice = 0;
    IngredientsList.forEach(function(item) {
      countPrice += item.price;
    });
    return countPrice;
  };

  render() {
    return (
      <div className="App">
        <div className="Burger">
        <p className='title'>Burger</p>
          <div className="BreadTop">
            <div className="Seeds1"></div>
            <div className="Seeds2"></div>
          </div>
        {
          this.state.ingredients.map((ingredient) => {
            return (
            <IngredientAdd 
              key={ingredient.ingredient}
              class={ingredient.ingredient}>
            </IngredientAdd>
            )
          })
        }
          <div className="BreadBottom"></div>
          <p className="price"><span>Price: </span>{this.money} soms</p>
        </div>
        <div className="added">
        <p className='title'>Ingredients:</p>
          {
          IngredientsList.map((ingredient) => {
            return (
            <BlockAddIngredient 
              key={ingredient.name}
              image={ingredient.image}
              name={ingredient.name}
              // price={ingredient.price}
              // price={this.addCount(ingredient.name)}
              add={() => this.addFilling(ingredient.name)}
              remove={() => this.removeFilling(ingredient.name)}
              >
            </BlockAddIngredient>
            )
          })
        }
        
        </div>
      </div>
      );
    }

  }
  
  export default App;
  