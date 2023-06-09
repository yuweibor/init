import React from 'react'

export default function layout(props) {
    return (
        <div>
            <div>
                global layout
            </div>
            {props.children}
        </div>
    )
}
