
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu";
import ResCate from "./ResCate";
import { useState } from "react";




const ResMenu = () => {
    const [showIndex,setShowIndex] = useState(null);
    const {id} = useParams()
    const menu = useResMenu(id);
 
    if(menu === null) return <h1>Data is Loading</h1>
    const {name,avgRating,costForTwoMessage,areName} = menu.data.cards[2].card.card.info;
    const itemCards = menu.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(each => each.card.card['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    // console.log(itemCards);
    return(
        <div className="text-center">
            <h1 className="font-bold text-xl">{name}</h1>
            <p>{avgRating}⭐</p>
            <p>{costForTwoMessage}</p>
            <p>{areName}</p>
            
            {itemCards.map((each,index) => (<ResCate showItem = {index === showIndex ?true : false} item = {each} setShowIndex = {() => setShowIndex(index ===showIndex?null : index)}/>))}
        </div> 
    )
}

export default ResMenu;