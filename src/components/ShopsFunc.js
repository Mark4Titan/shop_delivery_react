import { useEffect, useState } from "react";
import userAgreement from "./apis/userAgreement";

const ShopsFunc = () => {
  const [basket, setBasket] = useState([]);

  const [selectiondb, setSelectiondb] = useState(false);
  const [error, setError] = useState("");

  const apiAgreement = userAgreement();



  useEffect(() => {
    if (selectiondb === false) {
      apiAgreement.connectToDB();
      apiAgreement
        .connectToDB()
        .then(() => apiAgreement.getData())
        .then(({ data, status, masage }) => {
          if (status === 404) {
            setError(masage);
          } else {
            setBasket(data);
            setSelectiondb(true);
          }
        })
        .catch((error) => setError(error));
    }
  }, [apiAgreement, selectiondb]);

  const AddProduct = (el, amount, owner, shop) => {
    const id = el.id;
    const dish = el.dish;
    const name = el.English.name;
    const price = el.English.price;

    const found = basket.filter((el) => el.id === id);

    const newAmount = found.length > 0 ? found[0].amount + amount : amount;

    if (found.length === 0) {
      apiAgreement
        .addRecord({ id, amount: newAmount, owner, dish, name, price, shop })
        .then(({ data, status, masage }) => {
          if (status === 404) {
            setError(masage);
          } else {
            setBasket((prevState) => [...prevState, data]);
          }
        });
    } else if (newAmount !== 0) {
      apiAgreement
        .editRecord({ id, amount: newAmount, owner, dish, name, price, shop })
        .then(({ data, status, masage }) => {
          if (status === 404) {
            setError(masage);
          } else {
            setBasket((prevState) =>
              prevState.map((item) =>
                item.id === data.id ? { ...item, ...data } : item
              )
            );
          }
        });
    } else {
      apiAgreement
        .deleteRecord({ id, amount: newAmount, owner, dish, name, price, shop })
        .then(({ data, status, masage }) => {
          if (status === 404) {
            setError(masage);
          } else {
            setBasket((prevState) =>
              prevState.filter((obj) => obj.id !== data.id)
            );
          }
        });
    }
  };

  return { basket: basket.length === 0 ? [{}] : basket, AddProduct, error };
};
export default ShopsFunc;
