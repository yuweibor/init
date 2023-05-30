import Head from '@/components/Head';
import * as React from 'react';

export async function loader({ request }) {
    let data = await fetchData(request);
    return json(data);
}

export function Component(props) {
    // let data = useLoaderData();
    console.log(props);

    return (
        <>
            detail
        </>
    );
}

export function ErrorBoundary() {
    return <div>error</div>
}