import React from 'react'
import Flow from './flowers/Flow'
import data from './flowers/Flowersadata'
function Flowe(props){
    return (
        <>
            
            <Flow title={props.title}
            img={props.img} 
            p={props.p}/>
        </>
    )
}
function  App(){
    return (
        <>
            <h1>About Flowers</h1>
            {data.map(Flowe)}
        </>
    )
}
export default App