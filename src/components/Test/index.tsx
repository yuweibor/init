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
import style from './test.css';

export default function Index(props) {
    console.log(style);

    const params = useParams();
    console.log(params, 'Test', props);

    return (
        <div className={style.id}><button onClick={() => {
            alert();
        }}>Test Btn</button></div>
    )
}