import React from 'react'
import './index.css'
function  Flow(props){
    return (
        <>
            <div className='container bg-light'>
                <div className='card'>
                    <h2>{props.title}</h2>
                    <img src={props.img} alt='' />
                    <p>{props.p}</p>
                    <br/>
                    <button className='btn btn-outline-dark' href="#">Read more</button>
                </div>
            </div>
        </>
    )
}
export default Flow