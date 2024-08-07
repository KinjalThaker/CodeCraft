import Head from "next/head";
import Link from "next/link";
import style from "../../styles/users.module.css";

export const getStaticProps = async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await result.json();

    return {
        props: {users: data}
    };
}

const Users = ({users}) => {
    return (
        <>
        <Head>
            <title>Next | User List</title>
        </Head>
        <div>
            <h1 className={style.header}>User List</h1>
            {users.map(user => (
                <div key={user.id}>
                    <h1>
                        <Link className={style.single} href={"/users/" + user.id}>{user.name}</Link>
                    </h1>
                </div>
            ))}
        </div>
        </>
    );
}
 
export default Users;