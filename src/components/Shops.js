import  { ButtonEnter } from "./BackButton/BackButton"
import { DinImg } from "./BackButton/DinImg"
import { ContentLi, ContentUl } from "./BackButton/list"
import ShopsFunc from "./ShopsFunc"

const Shops = ({ element, setElement }) => {
    const {basket, AddProduct }=ShopsFunc()

    


    return (
        <>
            <ContentUl>
                <ContentLi>
                    <ButtonEnter onClick={()=>setElement({})}>Back to the Shops</ButtonEnter>
                </ContentLi>
                {element.product.map(el =>
                    
                    <ContentLi key={el.id}>
                        <div>{el.English.name}</div>
                        <div>ціна: {el.English.price} грн.</div>
                        <div><DinImg src={el.dish} alt={el.English.name}></DinImg></div>
                        {basket[el.id] !== undefined ? <div>в кошику {basket[el.id].amount}</div> : <div>в кошику 0</div>}
                        <ButtonEnter onClick={() => AddProduct(el, 1, element.id)}>Add</ButtonEnter>
                        {basket[el.id] !== undefined && <ButtonEnter onClick={() => AddProduct(el, -1)}>Take</ButtonEnter>}
                    </ContentLi>
                    )}
            </ContentUl>
        </>
    )
 }
export default Shops