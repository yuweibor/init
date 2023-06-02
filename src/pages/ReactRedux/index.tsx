import * as React from 'react'
import { Provider } from 'react-redux';
import store from '@/redux';
import Child from './Child';

export const Component = () => {
    return (
        <Provider store={store}>
            <Child />
        </Provider>
    )
}



