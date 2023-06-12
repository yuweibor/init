// import React from 'react'
// import withRouter from 'umi/withRouter';
// const Test = (props) => {
//     const rout
//     return (
//         <div>Test</div>
//     )
// }
// export default withRouter(connect(mapStateToProps)(LayoutComponent));
import React from 'react';
import { useParams } from 'react-router-dom';
export default function Index(props) {
    const params = useParams();
    console.log(params, 'Test', props);

    return (
        <div><button onClick={() => {
            alert();
        }}>Test Btn</button></div>
    )
}