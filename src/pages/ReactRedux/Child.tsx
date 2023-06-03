import * as React from 'react'
import { connect } from "react-redux";
import actions from "@/redux/actions";

const Child = (props) => {
    console.log(props)
    return (
        <div>
            {props.reducer1.name}
            <button onClick={() => props.onAct({ name: '1111' })}>a1</button>
        </div>
    )
}

const mapStateToProps = state => state;

const mapDispatchToProps = (dispatch) => {
    return {
        onAct(payload) {
            dispatch(actions.act5(payload))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Child);