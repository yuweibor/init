import * as React from 'react';
import { useParams } from "react-router-dom";
export async function loader({ request }) {
    return null;
}

export function Component() {
    // let data = useLoaderData();

    return (
        <>
            <h1>You made it!</h1>
            <p>list</p>
        </>
    );
}