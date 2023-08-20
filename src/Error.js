import { useRouteError } from "react-router-dom";

const Error = () =>{
    const err = useRouteError();
    console.log(err);
    return(
        <div className="error-container">
            <div className="error">
                <h1>OOPS!!!</h1>
                
                {/* <h2>Error {err.status} {err.statusText}</h2> */}
                {/* <h2>{err.error.message}</h2> */}
            </div>
        </div>
    )
}

export default Error;
