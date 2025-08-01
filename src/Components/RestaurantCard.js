import { TiStar } from "react-icons/ti";
import { img_url } from "../utils/constants";
import { useContext } from "react";
import Hra from "../utils/Hra";

const RestaurantCard = (props) => {
    // console.log(props)
    const {name,avgRating,areaName,cuisines, cloudinaryImageId} = props.item.info
    const {res} = useContext(Hra)
    return(
        <div className="bg-gray-300 h-[360px] w-[250px] rounded-2xl p-4 m-4 hover:bg-lime-300"> 
           <img className = "h-[160px] w-[250px] rounded-2xl" src = {img_url +cloudinaryImageId}  alt= "res-card"/>
           <p className="text-xl font-bold">{name}</p>
           <p className="flex">{avgRating} <TiStar/> Rating</p>
           <p>{cuisines[0]}</p>
           <p>{areaName}</p>
           <p>{res}</p>
        </div>
    )
}

export default RestaurantCard;