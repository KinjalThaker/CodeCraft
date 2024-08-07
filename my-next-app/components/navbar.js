import Link from "next/link";

const NavBar = () => {
    return (
        <div>
            <nav>
                <span>
                    <Link href="/">Home</Link>
                </span>
                <span>
                    <Link href="/users">Users</Link>
                </span>
                <span>
                    <Link href="/about">About</Link>
                </span>
            </nav>
        </div>
    );
}
 
export default NavBar;