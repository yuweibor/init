import React from 'react'
import Test from '@/components/Test';
export default function Param(props) {
    console.log(props);
    return (
        <>
            <div>Param id{props.match.params?.id}</div>
            <div>Param name{props.match.params?.name}</div>
        </>
    )
}
