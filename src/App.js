import { useState } from 'react';
import './App.css';
import DrinkDropdown from './DrinkDropdown';
import SideDropdown from './SideDropdown';
import MealDropdown from './MealDropdown';
import OrderDisplay from './OrderDisplay';
import OrderNameInput from './OrderNameInput';

function App() {
  const [drink, setDrink] = useState('tropical');
  const [side, setSide] = useState('fries');
  const [meal, setMeal] = useState('1');
  const [orderName, setOrderName] = useState('');
  const [instructions, setInstructions] = useState([]);
  const [instructionForm, setInstructionForm] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setInstructions([...instructions, instructionForm]);
    setInstructionForm('');
  }
  return (
    <div className="App">
      <h1 className="title">Welcome to Burger Beats FastFood!</h1>
      <section>Select Order Details!</section>
      <section className="dropdowns">
        <DrinkDropdown setDrink={setDrink} />
        <MealDropdown setMeal={setMeal} />
        <SideDropdown setSide={setSide} />
        <div className="middle">
          <OrderNameInput setOrderName={setOrderName} />
        </div>
        <section>
          <div className="bottom">
            <instructionForm
              handleSubmit={handleSubmit}
              setInstructionForm={setInstructionForm}
              instructionForm={instructionForm}
            />
          </div>
        </section>
      </section>
      <div className="display">
        <OrderDisplay
          drink={drink}
          meal={meal}
          side={side}
          orderName={orderName}
          instructions={instructions}
        />
      </div>
    </div>
  );
}

export default App;
