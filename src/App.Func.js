import { useEffect, useState } from "react";
import ApiIndexedDB from "./components/apis/indexeddb";

const AppFunc = () => {
  //  db
  const [selectiondb, setSelectiondb] = useState(false);
  const [error, setError] = useState("");
  // cards
  const [middleState, setMiddleState] = useState([]);

  const api = ApiIndexedDB();
  
  // connecting to databases
  useEffect(() => {
    if (selectiondb === false)
      api
        .connectToDB()
        .then(() => api.getData())
        .then(({ data, status, masage }) => {
          if (status === 404) {
            setError(masage);
          } else {
            setMiddleState(data);
            setSelectiondb((prevState) => ({
              ...prevState,
              indexeddb: true,
            }));
          }
        })
        .catch((error) => setError(error));
  }, [api, selectiondb]);

  return { items: middleState, status: selectiondb, error: error, setError };
};
export default AppFunc;
