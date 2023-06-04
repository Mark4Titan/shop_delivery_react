import { useEffect, useState } from "react";
import userAgreement from "./apis/userAgreement";

const ShopsFunc = () => {
  const [basket, setBasket] = useState({});

  const [selectiondb, setSelectiondb] = useState(false);
  const [error, setError] = useState("");
  // cards
  const [middleAgreement, setMiddleAgreement] = useState({});

  const apiAgreement = userAgreement();

  
  
  useEffect(() => {
    if (selectiondb === false)
    apiAgreement.connectToDB()
      apiAgreement
      .connectToDB()
      .then(() => apiAgreement.getData())
        .then(({ data, status, masage }) => {
          if (status === 404) {
            setError(masage);
          } else {
            setMiddleAgreement(data.map(el => ({ [el.id]: el})));
            setSelectiondb((prevState) => ({
              ...prevState,
              indexeddb: true,
            }));
          }
        })
        .catch((error) => setError(error));
  }, [apiAgreement, selectiondb]);


  
  
  const AddProduct = (el, amount, owner) => {
    const id = el.id;   

    apiAgreement.editRecord({id, amount, owner}).then(({ data, status, masage }) => {
        if (status === 404) {
          setError(masage);
        } else {
          setMiddleAgreement((prevState) =>
            prevState.map((item) =>
              item.id === data.id ? { ...item, ...{id, amount, owner} } : item
            )
          );     
        }
      });
   
    // apiAgreement.deleteRecord({id:'zRrr1Yo-XLt7xZRPvabSt'}).then(({ data, status, masage }) => {
      //   if (status === 404) {
        //     setError(masage);
    //   } else {
    //     setMiddleAgreement((prevState) =>
    //       prevState.filter((obj) => obj.id !== data.id)
    //     );
    //   }
    // });
    console.log("middleAgreement", middleAgreement)


    
  };

  return { basket, AddProduct, error };
};
export default ShopsFunc;
