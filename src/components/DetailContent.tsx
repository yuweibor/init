import * as React from 'react'
import detailCtx from '../Context/detail'
import { Button, Col, Input, Row } from 'antd';
export default function DetailIndex() {
    const context = React.useContext(detailCtx);
    console.log(context);
    const { state, dispatch } = context;
    const add = () => {
        dispatch({ type: "add_num", step: 2 });
    }
    const changeName = (e) => {
        dispatch({ type: "change_name", nextName: e.target.value })
    }
    console.log(state)
    return (
        <Row>
            <Col span={18} offset={4}>
                <div>
                    <p>{state.age}</p>
                    <Button onClick={add}>add</Button>
                    <p>{state.name}</p>
                    <Input onChange={changeName} />
                </div>
            </Col>
        </Row>

    )
}
