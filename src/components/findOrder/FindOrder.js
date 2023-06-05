import { useState } from "react";
import { DinImg } from "../BackButton/DinImg";
import Notif from "../notif/notif";
import { BoxDetails, BoxImg, FindOrderLi, FindOrderUl, OrderMain, TitleH3, TitleH4 } from "./FindOrder.styled";
import FindOrderFunc from "./FindOrderFunc";

const FindOrder = ({ search }) => {
  const { error, found, setError } = FindOrderFunc(search);
  const [detalls, setDetalls] = useState(false)

  

  return (
    <>
      <Notif setError={setError} error={error} />
      <FindOrderUl>
        {found.length > 0 &&
          found.map((el) => (
            <FindOrderLi
              key={el.id}
              onClick={() => setDetalls((privState) => !privState)}>
              <OrderMain>
                <TitleH3>Status: in the way</TitleH3>
                <br />
                <TitleH4>Shop: {el.shop}</TitleH4>
                <div>Created: {el.created}</div>
                <div>Address: {el.address}</div>
                <div>Phone: {el.phone}</div>
                <div>All Price: {el.allPrice}</div>
                <br />
              </OrderMain>
              {detalls && (
                <BoxDetails>
                  <TitleH3>Details</TitleH3>
                  {el.order.map((frag, pos) => (
                    <div key={frag.id}>
                      <h5>
                        #{pos}. {frag.name}
                      </h5>
                      <p>Price: $ {frag.price}</p>
                      <p>Amount: {frag.amount}</p>
                      <p>Added: {frag.created}</p>
                      <BoxImg>
                        <DinImg src={frag.dish} alt={frag.name}></DinImg>
                      </BoxImg>
                    </div>
                  ))}
                </BoxDetails>
              )}
            </FindOrderLi>
          ))}
      </FindOrderUl>
    </>
  );
};
export default FindOrder;
