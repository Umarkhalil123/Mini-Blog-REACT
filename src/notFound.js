import { Link } from "react-router-dom";


const NotFound=()=>{
    return(
        <div className="not-found">
           <h2>404</h2>
           <p>Page is not found</p>
           <Link to="/">Back to the Homepage...</Link>
        </div>
    );
}
export default NotFound;