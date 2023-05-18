import { useState } from "react";
import CofeeContainer from "./components/CoffeContainer/CofeeContainer";
import {coffee} from './data/data'


function App() {

  const [cards, setCards] = useState(coffee)
  const delete_card = id => setCards(cards.filter(el => el.id !== id))

  return (
    <div >
     <CofeeContainer data={cards} delete_card={delete_card}/>
    </div>
  );
}

export default App;
