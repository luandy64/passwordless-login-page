import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const errorMsg = useRouteError();
    console.error(errorMsg);

    return (
        <div id="error-page">
            <p>
                <i>{errorMsg.statusText || errorMsg.message}</i>
            </p>
        </div>
    )
}

export default ErrorPage