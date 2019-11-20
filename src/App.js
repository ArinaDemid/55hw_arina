import React, {Component} from 'react';
import './App.css';
import IngredientAdd from './components/IngredientAdd';
import BlockAddIngredient from './components/Ingredients/BlockAddIngredient';
import IngredientsList from './components/Ingredients/IngredientsList';

class App extends Component {
  money = 20;
  count = 0;
  
  state = {
    ingredients: [{ingredient: 'Meat', count: 0}, {ingredient: 'Cheese', count: 0}, {ingredient: 'Salad', count: 0},{ingredient: 'Bacon', count: 0}],
    fillings: []
  };
  
  generateId = () => {
    this.count++
    return this.count;
  };
  
  addFilling = (name) => {
    
    const ingredients = [...this.state.ingredients];
    const fillings = [...this.state.fillings];
    ingredients.forEach(function(item) {
      if (item.ingredient === name) item.count++;
    });
    fillings.push({ingredient: name, id: this.generateId()});
    
    this.setState({ingredients});
    this.setState({fillings});
    this.money = 20 + this.addTotal();
    
  };
  
  removeFilling = (name) => {
    const ingredients = [...this.state.ingredients];
    const fillings = [...this.state.fillings];
    ingredients.forEach(function(item) {
      if (item.ingredient === name && item.count !== 0) item.count--;
    });
    
    for(let i in fillings){
      if(fillings[i].ingredient === name) fillings.splice(i, 1);
    }

    this.setState({ingredients});
    this.setState({fillings});
    this.money = 20 + this.addTotal();
    
  };
  
  addTotal = () => {
    let countPrice = 0;
    for (let i = 0; i < 4; i++) {
      countPrice += IngredientsList[i].price * this.state.ingredients[i].count;
    }
    return countPrice;
  };
  
  render() {
    return (
      <div className="App">
        <div className="added">
          <p className='title'>Ingredients:</p>
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
              >
              </BlockAddIngredient>
              )
            })
          }
          
          </div>
        
        <div className="Burger">
          <p className='title'>Burger</p>
          <div className="BreadTop">
            <div className="Seeds1"></div>
            <div className="Seeds2"></div>
          </div>
        {
          this.state.fillings.map((ingredient) => {
            return (
              <IngredientAdd 
              key={ingredient.id}
              class={ingredient.ingredient}>
              </IngredientAdd>
              )
            })
          }
          <div className="BreadBottom"></div>
          <p className="price"><span>Price: </span>{this.money} soms</p>
        </div>
      </div>
    );
  }

}
      
export default App;
