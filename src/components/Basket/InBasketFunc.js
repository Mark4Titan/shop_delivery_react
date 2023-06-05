import { useEffect, useState } from "react";
import userAgreement from "../apis/userAgreement";
import userOrders from "../apis/orders";

const InBasketFunc = (basket, setBasket, setElement) => {
  const [basketClient, setBasketClient] = useState([]);
  const [selectiondb, setSelectiondb] = useState(false);
  const [error, setError] = useState("");

  const body = document.querySelector("body");
  body.style.overflowY = basket ? "hidden" : "auto";

  const apiAgreement = userAgreement();
  const apiOrder = userOrders();

  useEffect(() => {
    if (selectiondb === true && !basket) {
      setSelectiondb(false);
    }
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
              const { owner, amount, created, id, price, dish, name } = item;
              const allPrice = amount * price;

              if (acc[owner]) {
                acc[owner].push({
                  amount,
                  created,
                  id,
                  owner,
                  price,
                  dish,
                  name,
                });
                acc[owner].allPrice += allPrice;
              } else {
                acc[owner] = [
                  { amount, created, id, owner, price, dish, name },
                ];
                acc[owner].allPrice = allPrice;
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

  const onOrder = (newOrder, id, inputs) => {
    // console.log("newOrder", newOrder, "id-", id);
    apiOrder
      .addRecordOrders({ ...newOrder, id, ...inputs })
      .then(({ data, status, masage }) => {
        if (status === 404) {
          setError(masage);
        } else {
          // setOrder((prevState) => [...prevState, data]);
          newOrder.forEach((element) => {
            if (element.id !== undefined) DellBasket(element.id);
          });
        }
      });
  };
  const DellBasket = (oldOrder) => {
    apiAgreement
      .deleteRecord({ id: oldOrder })
      .then(({ data, status, masage }) => {
        if (status === 404) {
          setError(masage);
        } else {
          setSelectiondb(false);
          setBasket(false);
          setElement({});
        }
      });
  };

  return {
    error,
    basketClient,
    onOrder,
  };
};
export default InBasketFunc;
