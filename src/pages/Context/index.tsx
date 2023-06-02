import DetailContent from '@components/DetailContent';
import * as React from 'react';
import detailCtx from '@/context/detail';
import { detailReducer, initState } from '@/context/reducers';

export async function loader({ request }) {
    // let data = await fetchData(request);
    return null;
}

export function Component(props) {
    const DetailContext = detailCtx;

    const [state, dispatch] = React.useReducer(detailReducer, initState);

    return (
        <DetailContext.Provider value={{ state, dispatch }}>
            <DetailContent />
        </DetailContext.Provider>
    );
}

export function ErrorBoundary() {
    return <div>error</div>
}