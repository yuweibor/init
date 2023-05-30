import Head from '@/components/Head';
import * as React from 'react';

// export async function loader({ request }) {
//     let data = await fetchData(request);
//     return json(data);
// }

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
    return 222
    // let error = useRouteError();
    // return isRouteErrorResponse(error) ? (
    //     <h1>
    //         {error.status} {error.statusText}
    //     </h1>
    // ) : (
    //     <h1>{error.message || error}</h1>
    // );
}

// If you want to customize the component display name in React dev tools:
// ErrorBoundary.displayName = "SampleErrorBoundary";