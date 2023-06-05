import moment from "moment/moment";
import { nanoid } from "nanoid";

function userOrders() {
  const dbName = "orders";
  let db;
  let status;

  function connectToDBOrders() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(dbName);

      request.onerror = (event) => {
        reject(event.target.error);
      };

      request.onsuccess = (event) => {
        db = event.target.result;
        status = event.target.result ? 200 : 404;

        resolve();
      };

      request.onupgradeneeded = (event) => {
        db = event.target.result;
        const objStore = db.createObjectStore(dbName, { keyPath: "id" });
        objStore.createIndex("order", "order", { unique: false });
        objStore.createIndex("created", "created", { unique: false });
        objStore.createIndex("allPrice", "allPrice", { unique: false });
        objStore.createIndex("phone", "phone", { unique: false });
        objStore.createIndex("address", "address", { unique: false });
        objStore.createIndex("shop", "shop", { unique: false });
        objStore.createIndex("id", "id", { unique: true });
        // initialState.forEach((item) => objStore.add(item));
      };
    });
  }

  async function getDataOrders() {
    await connectToDBOrders();
    const transaction = db.transaction([dbName], "readonly");
    const objectStore = transaction.objectStore(dbName);
    const data = await new Promise((resolve, reject) => {
      const request = objectStore.getAll();

      request.onerror = (event) => {
        reject(event.target.error);
      };
      request.onsuccess = () => {
        resolve(request.result);
      };
    });
    const ReData = data.map((el) => ({
      ...el,
    }));
    const masage = status === 200 ? "" : "No connect to indexeddb databases";

    return { data: ReData, status, masage };
  }

  async function addRecordOrders(record) {
    await connectToDBOrders();
    const newOrder = Object.values(record).filter((item) =>
      item.hasOwnProperty("id")
    );
    const newCard = {
      order: newOrder,
      shop: record.shop,
      address: record.address,
      phone: record.phone,
      allPrice: record.allPrice,
      created: moment().format("DD.MM.YYYY  (HH:mm)"),
      id: nanoid(),
    };
   
    await new Promise((resolve, reject) => {
      const transaction = db.transaction([dbName], "readwrite");
      const objectStore = transaction.objectStore(dbName);
      const request = objectStore.add(newCard);
      request.onerror = (event) => {
        reject(event.target.error);
      };
      request.onsuccess = () => {
        resolve(request.result);
      };
    });
    const masage =
      status === 200 ? "" : "Failed to create new record in indexeddb";
    return {
      data: { ...newCard },
      status,
      masage,
    };
  }

  return {
    connectToDBOrders,
    getDataOrders,
    addRecordOrders,
  };
}

export default userOrders;
