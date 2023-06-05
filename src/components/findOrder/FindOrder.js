import { FindOrderLi, FindOrderUl } from "./FindOrder.styled";
import FindOrderFunc from "./FindOrderFunc";

const FindOrder = ({ search }) => {
  const { error, found } = FindOrderFunc(search);

 

  return (
    <FindOrderUl>
      {found.length > 0 &&
        found.map((el) => (
          <FindOrderLi>
            <h3>Status: in the way</h3>
            <div>Created: {el.created}</div>
            <div>Address: {el.address}</div>
            <div>Phone: {el.phone}</div>
            <div>All Price: {el.allPrice}</div>
          </FindOrderLi>
        ))}
    </FindOrderUl>
  );
};
export default FindOrder;
