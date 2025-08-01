import { TiArrowDown } from "react-icons/ti";
import { TiArrowUp } from "react-icons/ti";
import ItemList from "./ItemList";
// import { useState } from "react";
const ResCate = (props) => {
    // console.log(props)
    const {title,itemCards} = props.item.card.card;
    // const [showItem, setShowItem]  = useState(false)
    const {showItem,setShowIndex} = props;
    return (
        <div className="p-2 my-2 w-1/2 mx-auto bg-gray-300">
            <div className="flex justify-between">
                <span className="text-xl font-bold">{title} ({itemCards.length})</span>
                <span onClick={() => {
                    setShowIndex()
                    // setShowItem(!showItem)
                }}>{showItem ? <TiArrowUp/> :<TiArrowDown/>}</span>
            </div>
            {showItem && <ItemList items = {itemCards}/>}
        </div>
    )
 

}

export default ResCate;