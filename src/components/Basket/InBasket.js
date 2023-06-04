import { useEffect, useState } from "react";
import { BasketBox, BasketContent } from "./InBasket.styled";
import userAgreement from "../apis/userAgreement";

const InBasket = ({ basket, items }) => {
  const body = document.querySelector("body");
  body.style.overflowY = basket ? "hidden" : "auto";
  

  const [basketClient, setBasketClient] = useState([]);

  const [selectiondb, setSelectiondb] = useState(false);
  const [error, setError] = useState("");

  const apiAgreement = userAgreement();

  useEffect(() => {
    if (selectiondb === true && !basket) {setSelectiondb(false) }
    if (selectiondb === false && basket) {
      apiAgreement.connectToDB();
      apiAgreement
        .connectToDB()
        .then(() => apiAgreement.getData())
        .then(({ data, status, masage }) => {
          if (status === 404) {
            setError(masage);
          } else {
            const newBasket = data.reduce((acc, item) => {
              const { owner, amount, created, id } = item;
              if (acc[owner]) {
                acc[owner].push({ amount, created, id, owner });
              } else {
                acc[owner] = [{ amount, created, id, owner }];
              }
              return acc;
            }, {});

            setBasketClient(newBasket);

            setSelectiondb(true);
          }
        })
        .catch((error) => setError(error));
    }
  }, [apiAgreement, basket, selectiondb]);

  console.log("basketClient", basketClient);

  return (
    basket && (
      <BasketBox basket={basket}>
        <BasketContent>
          <div>Basket</div>
          <div>Basket</div>
          <button>Order</button>
        </BasketContent>
      </BasketBox>
    )
  );
};
export default InBasket;
