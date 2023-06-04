import { ButtonEnter } from '../BackButton/BackButton';
import { DinImg } from '../BackButton/DinImg';
import { ContentLi, ContentUl } from '../BackButton/list';


const Content = ({ items, setElement }) => {
 
  
    return (
       
        <ContentUl>
          {items.map((el) => (
            <ContentLi key={el.id} onClick={() => setElement(el)}>
              <div>
               <DinImg src={el.image} alt={el.representative}></DinImg>
              </div>
             
              <ButtonEnter  onClick={() => setElement(el)}>Enter {el.representative}</ButtonEnter>
            </ContentLi>
          ))}
        </ContentUl>
     
    );
};
export default Content