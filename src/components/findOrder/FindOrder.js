import Notif from "../notif/notif";
import { FindOrderLi, FindOrderUl } from "./FindOrder.styled";
import FindOrderFunc from "./FindOrderFunc";

const FindOrder = ({ search }) => {
  const { error, found, setError } = FindOrderFunc(search);

//  console.log("found", found);

  return (
    <>
      <Notif setError={setError} error={error} />
      <FindOrderUl>
        {found.length > 0 &&
          found.map((el) => (
            <FindOrderLi key={el.id}>
              <h3>Status: in the way</h3>
              <div>Created: {el.created}</div>
              <div>Address: {el.address}</div>
              <div>Phone: {el.phone}</div>
              <div>All Price: {el.allPrice}</div>
            </FindOrderLi>
          ))}
      </FindOrderUl>
    </>
  );
};
export default FindOrder;
