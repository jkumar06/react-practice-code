import { useRouteError,Link } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err)

    return(
        <>
        <h3>Oops!!!</h3>
        <h4>Something went wrong!!</h4>
        <h3>{err.status}:{err.statusText}</h3>
        <Link to="/">Back Home</Link>

        </>
    )
}
export default Error;