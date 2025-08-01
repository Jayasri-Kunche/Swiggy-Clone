import RestaurantCard from "./RestaurantCard";
// import { data } from "../utils/data";
import {url} from "../utils/constants";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import Hra from "../utils/Hra";
const Body = () => {
    const [data,setData] = useState([])
    const [value, setValue] = useState("")
    const isOnline = useOnline()
    const {setNe} = useContext(Hra);
    useEffect(() => {
              const fetchData = async() => {
                const res = await fetch(url);
                const out = await res.json();
                // console.log(out)
                setData(out.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
              }
              fetchData()
    },[])
    if(isOnline === false) return <h1>Seem Like An Error Occur, Please Check it....</h1>
    return(data.length === 0) ? <Shimmer/> : (
            <div>
                 <div>
                    <button className="p-2 m-2 bg-green-300 rounded-lg" onClick={ () => {
                        const res = data.filter(each => each.info.avgRating > 4.5)
                        setData(res);
                    }}>Top rated restaurants</button>
                 </div>
                 <div> 
                    <input type = "text" className="bg-slate-200" onChange={(e) => {
                        setValue(e.target.value);
                    }}/>
                    <button className="p-2 m-2 bg-green-300 rounded-lg" onClick={() => {
                        const res = data.filter(each => each.info.name.toUpperCase().includes(value.toUpperCase()))
                        setData(res)
                    }}>Search</button>
                 </div>
                 <div>
                    <input type = "text" className="border-red-500 bg-indigo-500" onChange={(e) => {
                                    setNe(e.target.value)
                    }}/>
                 </div>
                <div className="flex flex-wrap">
                    {data.map(each => <Link to = {'/menu/' + each.info.id}><RestaurantCard item = {each} key = {each.info.id}/></Link>)}
                </div>
            </div>
         
    )
}

export default Body;