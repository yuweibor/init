import React from 'react'
import Test from '@/components/Test';
import { connect } from 'dva';

function NameParam(props) {
    console.log('param', props);
    return (
        <>
            <Test />
            <button onClick={() => {
                props.onClickName();
            }}>click nameID</button>
            <div className="id">Param id{props.match.params?.id}</div>
            <div>Param name{props.match.params?.name}</div>
            <div>age{props.a.age}</div>
            <div>age{props.c.age}</div>
            <button onClick={props.onAdd}></button>
        </>
    )
}
export default connect(stat => stat, dispatch => ({
    onClickName: () => {
        dispatch({ type: 'c/asyncAdd' })
    },
    onAdd: () => {
        dispatch({ type: 'c/add' })
    }
}))(NameParam)   