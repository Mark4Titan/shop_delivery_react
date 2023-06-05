import { ButtonEnter } from "./BackButton/BackButton";
import { DinImg } from "./BackButton/DinImg";
import { ContentLi, ContentUl } from "./BackButton/list";

import ShopsFunc from "./ShopsFunc";

const Shops = ({ element, setElement }) => {
  const { basket, AddProduct } = ShopsFunc();
  
  const upData = (id) => {
    const found = basket.filter((el) => el.id === id);
    return found.length > 0 ? found[0].amount : 0;
  };

  return (
    <>      
      <ContentUl>
        <ContentLi onClick={() => setElement({})}>
          <ButtonEnter onClick={() => setElement({})}>
            <h2>Back to the Shops</h2>
          </ButtonEnter>
        </ContentLi>
        {element.product.map((el) => (
          <ContentLi key={el.id}>
            <h3>{el.English.name}</h3>
            <div>$ {el.English.price}</div>
            <div>
              <DinImg src={el.dish} alt={el.English.name}></DinImg>
            </div>

            <div>In Basket {basket && upData(el.id)}</div>

            <ButtonEnter
              onClick={() =>
                AddProduct(el, 1, element.id, element.representative)
              }>
              Add
            </ButtonEnter>
            {basket && upData(el.id) !== 0 && (
              <ButtonEnter onClick={() => AddProduct(el, -1)}>Take</ButtonEnter>
            )}
          </ContentLi>
        ))}
      </ContentUl>
    </>
  );
};
export default Shops;
