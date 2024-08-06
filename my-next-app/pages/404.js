import Link from "next/link";

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>404</h1>
            <div>Page is not found.</div>
            <Link href="/">Back to Home page.</Link>
        </div>
    );
}
 
export default NotFound;