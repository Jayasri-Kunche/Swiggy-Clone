
import { useDispatch } from "react-redux";
import { img_url } from "../utils/constants";
import { addItem } from "../utils/store/cartSlice";


const ItemList = (props) => {
    // console.log(props)
    const {items} = props
    const dispatch = useDispatch();
    const handleList = (item) => {

        dispatch(addItem(item))
    }
    
    return (
        <div>
            {items.map(item => (
                <div className="flex justify-between text-left border-b-gray-200 border-b-2 p-2 m-2">
                  <div className="w-9/12">
                   <div className="flex py-2">
                      <span>{item.card.info.name}</span> 
                      <p>💰{item.card.info.price/100}</p>
                   </div>
                   <p>{item.card.info.description}</p>
                  </div>
                  <div className="w-3/12">
                    <button className="bg-black text-white mx-2 p-2 absolute rounded-xl" onClick={() =>handleList(item)}>Add+</button>
                   {item.card.info.imageId && <img className = "h-[130px] w-[170px] rounded-2xl" src = {img_url + item.card.info.imageId} alt = "res-logo"/>}
                  </div>
                  
                </div>
                
               
            ))}
        </div>
    )
}

export default ItemList;