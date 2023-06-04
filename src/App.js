import { useState } from "react";
import AppFunc from "./App.Func";
import "./App.css";
import Content from "./components/content/Content";
import Shops from "./components/Shops";
import { Basket, ContSection, Header } from "./App.styled";

function App() {
  const { items, status, error } = AppFunc();
  const [element, setElement] = useState({});

  // console.log('element',element)
  return (
    <div>
      <Header>
        <div>Shop Delivery React</div>
        <Basket>Basket</Basket>
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
