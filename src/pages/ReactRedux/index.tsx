import * as React from 'react'
import { Provider } from 'react-redux';
import store from '@/redux';
import Child from './Child';

export function Component() {
    return (
        <Provider store={store}>
            <Child />
        </Provider>
    )
}

export async function loader({ request }) {
    // let data = await fetchData(request);
    return null;
}



