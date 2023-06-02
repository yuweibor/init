import * as React from 'react'
import { connect } from "react-redux";
import actions from "@/redux/actions";

const Child = (props) => {
    console.log(props)
    return (
        <div>
            {props.reducer1.name}
            <button onClick={props.onA1}>a1</button>
        </div>
    )
}

const mapStateToProps = state => state;

const mapDispatchToProps = (dispatch) => {
    return {
        onA1() {
            dispatch(actions.act1({ name: '11111' }))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Child);