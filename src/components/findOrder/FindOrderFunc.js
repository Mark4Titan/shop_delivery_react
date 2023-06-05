import { useEffect, useState } from "react";
import userOrders from "../apis/orders";

const FindOrderFunc = (search) => {
  const [error, setError] = useState("");
  const [basketClient, setBasketClient] = useState([]);
  const [selectiondb, setSelectiondb] = useState(false);
  const [searchOld, setSearchOld] = useState("");
  const [found, setFound] = useState({});

  const apiOrder = userOrders();

  useEffect(() => {
    if (searchOld !== search) {
      const filteredObjects = basketClient.filter(
        (obj) => obj.phone === search
      );
      setFound(filteredObjects);
      setSearchOld(search);
    }
  }, [basketClient, search, searchOld]);



  useEffect(() => {
    if (selectiondb === false) {
      apiOrder
        .connectToDBOrders()
        .then(() => apiOrder.getDataOrders())
        .then(({ data, status, masage }) => {
          if (status === 404) {
            setError(masage);
          } else {
            setBasketClient(data);
            setSelectiondb(true);
          }
        })
        .catch((error) => setError(error));
    }
  }, [apiOrder, search.length, selectiondb]);

  return { error, found, setError };
};
export default FindOrderFunc;
