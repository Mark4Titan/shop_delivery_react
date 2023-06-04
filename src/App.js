import { useState } from "react";
import AppFunc from "./App.Func";
import "./App.css";
import Content from "./components/content/Content";
import Shops from "./components/Shops";
import { Basket, ContSection, Header } from "./App.styled";
import InBasket from "./components/Basket/InBasket";

function App() {
  const { items, status, error } = AppFunc();
  const [element, setElement] = useState({});
  const [basket, setBasket] = useState(false);
  

  
  return (
    <div>
        <InBasket basket={basket} items={items} />
      <Header>
        <div>Shop Delivery React</div>
        <Basket onClick={() => setBasket((privState) => !privState)}>
          Basket
        </Basket>
      </Header>
      <ContSection>
        {status && element.id === undefined && (
          <Content items={items} setElement={setElement} />
          )}
        {element.id !== undefined && (
          <Shops element={element} setElement={setElement} />
          )}
      </ContSection>
    </div>
  );
}

export default App;
