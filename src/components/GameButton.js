import React from 'react'

export default function GameButton({children, ...props}) {
    console.log(props);
    return (
        <button onClick = { props.onClick }>
            {children}
        </button>
    )
}
