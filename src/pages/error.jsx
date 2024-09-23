import { Link, useRouteError } from "react-router-dom";
import { Button, Result } from 'antd';

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        // <div id="error-page">
        //     <h1>Oops! </h1>
        //     <p>Sorry, an unexpected error has occurred</p>

        //     <p>
        //         <i></i>
        //     </p>



        <Result
            status="403"
            title={error.statusText || error.message}
            extra={
                <Button type="primary" key="console">
                    <Link to={"/"}>Back to homepage</Link>
                </Button>
            }
        />

        // </div>





    );
}