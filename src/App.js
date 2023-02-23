import React, {useState ,useReducer} from 'react';
import Todo from './Componennts/Todo';
import {FaStar} from "react-icons/fa"
import {FaHourglassStart} from "react-icons/fa"





const colors = {
  orange : "#FD4621",
  grey : "black"

}

console.log("changeswored")

 function App() {
const stars = Array(5).fill(0)
const [currentValue,setCurrentValue] = React.useState(0)
const [hoverValue , setHoverValue] = React.useState(undefined)


const handleClick = value=>{
  setCurrentValue(value)
}

const handleMouseOver = value=>{
  setHoverValue(value)
}

const handleMouseLeave = () =>{
  setHoverValue(undefined)
}




  return (


    <div style={styles.container}>
    <h2>Star Rating in React</h2>
   <div style={styles.stars}>
        {
          stars.map((_,index)=>{
            return <FaStar key={index} 
            size={24}
            style={{
              cursor:"pointer"
            }}
         color={(hoverValue || currentValue)>index ? colors.orange :colors.grey}

            onClick={()=>{
              handleClick(index+1)
            }}
            onMouseOver={() => handleMouseOver(index+1)} 
            onMouseLeave={handleMouseLeave}

             
            />
          })
        }
   </div>

    </div>




  );
}


const styles = {
  
   container:{
  
    display:"flex",
    flexDirection: "column",
    alignItems:"center",
    height:"100vh",
    justifyContent:"center"
   }

}

export default App;
