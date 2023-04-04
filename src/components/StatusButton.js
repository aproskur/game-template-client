import React from 'react'



export default function StatusButton(props) {
    const background = props.status.image;

    return (
        
        <li style={{ backgroundImage: `url(${ background })` }}>
        <div className="score"> {props.status.score} </div>
        <div className="text">{props.status.title}</div>             
      </li>
    )
}
