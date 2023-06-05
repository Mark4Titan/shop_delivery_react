import { useState } from "react";
import { ButtonEnter } from "../BackButton/BackButton";
import { DinImg } from "../BackButton/DinImg";
import {
  BasketBox,
  BasketContent,
  BasketContentLi,
  BasketContentcard,
  BasketInput,
  BasketInputBox,
} from "./InBasket.styled";
import InBasketFunc from "./InBasketFunc";

const InBasket = ({ basket, setBasket, setElement }) => {
  const { error, basketClient, onOrder } = InBasketFunc(
    basket,
    setBasket,
    setElement
  );
  const [inputs, setInputs] = useState({ phone: "", address: "" });

  // console.log("Order", Order);

  return (
    basket && (
      <BasketBox basket={basket}>
        <BasketContent>
          {Object.keys(basketClient).map((el, pos) => (
            <BasketContentLi key={`${el}_${pos}`}>
              {basketClient[el].map((frag, pos2) => (
                <BasketContentcard key={`key_${pos2}_${el}`}>
                  <h3>{frag.name}</h3>
                  <h3>price: $ {frag.price}</h3>
                  <h3>amount: {frag.amount}</h3>
                  <DinImg src={frag.dish} alt={frag.nam} />
                </BasketContentcard>
              ))}
              <h3>Price Together: $ {basketClient[el].allPrice}</h3>
              <BasketInputBox>
                <BasketInput
                  required
                  type='tel'
                  name='phone'
                  pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                  placeholder='phone'
                  value={inputs.phone}
                  onChange={(e) =>
                    setInputs((privState) => ({
                      ...privState,
                      phone: e.target.value,
                    }))
                  }
                />
                <BasketInput
                  type='text'
                  name='name'
                  required
                  minlength='4'
                  maxlength='180'
                  // size='10'
                  placeholder='address'
                  value={inputs.address}
                  onChange={(e) =>
                    setInputs((privState) => ({
                      ...privState,
                      address: e.target.value,
                    }))
                  }
                />
              </BasketInputBox>
              <ButtonEnter
                onClick={() => onOrder(basketClient[el], el, inputs)}>
                Order
              </ButtonEnter>
            </BasketContentLi>
          ))}
        </BasketContent>
      </BasketBox>
    )
  );
};
export default InBasket;
