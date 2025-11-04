import { useRouteError } from 'react-router-dom'

interface RouteError {
    statusText?: string
    message?: string
}

const Error = () => {
    const error = useRouteError() as RouteError

    return (
        <div>
            <h1>Oops!</h1>
            <p>We couldn't find the portfolio item you are looking for.</p>
            <p>
                <i>{error?.statusText || error?.message}</i>
            </p>
        </div>
    )
}

export default Error
