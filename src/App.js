import { useState } from "react";
import AppFunc from "./App.Func";
import "./App.css";
import Content from "./components/content/Content";
import Shops from "./components/Shops";
import { Basket, ContSection, Header, InputSearch } from "./App.styled";
import InBasket from "./components/Basket/InBasket";
import FindOrder from "./components/findOrder/FindOrder";
import Notif from "./components/notif/notif";

function App() {
  const { items, status, error, setError } = AppFunc();
  const [element, setElement] = useState({});
  const [basket, setBasket] = useState(false);
  const [search, setSearch] = useState("");

  const ValueIn = (value) => {
    const validator = value === " " ? "" : value;
    setSearch(validator);
  };

  const togle = () => { 
    setBasket((privState) => !privState);
    setSearch("");
  }


  return (
    <div>
      <Notif setError={setError} error={error} />
      <InBasket
        basket={basket}
        items={items}
        setBasket={setBasket}
        setElement={setElement}
      />

      <Header>      
        <h2>
          {element.id !== undefined
            ? element.representative
            : "Shop Delivery React"}
        </h2>
        <InputSearch
          type='tel'
          name='phone'
          pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
          placeholder='find an order by phone'
          onChange={(e) => ValueIn(e.target.value)}
          value={search}
        />
        <Basket onClick={() => togle()}>Basket</Basket>
      </Header>
      <ContSection>
        {search.length !== 0 && <FindOrder search={search} />}
        {search.length === 0 && status && element.id === undefined && (
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
