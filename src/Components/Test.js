import { useEffect, useState } from "react";
const Test = () => {
    const [count, setCount] = useState(0)
    const [name,setName] = useState(true);
    const handleItem = () => {
                   
                    setCount(count + 1); 
                    
    }
    console.log("Above")

    useEffect(() => {
                console.log("Effect")
    },[])

    console.log("Below")
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleItem}>Click</button>
            <h1>{name ? "HTML" : "React"}</h1>
            <button onClick={ () => {
                setName(!name)
            }}>Change Name</button>
            {console.log("Render")}
        </div>
    )
}

export default Test;