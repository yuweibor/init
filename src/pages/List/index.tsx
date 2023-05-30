import * as React from 'react';
// import { useParams } from "react-router-dom";
// export async function loader({ request }) {
//     let data = await fetchData(request);
//     return json(data);
// }

export function Component() {
    // let data = useLoaderData();

    return (
        <>
            <h1>You made it!</h1>
            <p>list</p>
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