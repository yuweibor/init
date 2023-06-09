import React from 'react'

export default function _layout(props) {
    return (
        <div>
            <div>
                sub layout
            </div>
            {props.children}
        </div>
    )
}
