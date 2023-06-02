import * as React from 'react'
import { Navigate } from 'react-router-dom'

export default () => {
    const [time, setTime] = React.useState(true);
    React.useEffect(() => {
        const timer = setTimeout(() => {
            setTime(false)
        }, 2000);
        return () => { clearTimeout(timer) }
    }, [])
    return time ? <div>404...</div> :
        <Navigate to={'/'} />


}
