import style from "../../styles/users.module.css";

export const getStaticPaths = async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await result.json();

    const paths = data.map(user => {
        return {
            params: {id: user.id.toString()}
        }
    });

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const result = await fetch('https://jsonplaceholder.typicode.com/users/' + context.params.id);
    const data = await result.json();

    return {
        props: {user: data}
    }
}

const UserDetail = ({user}) => {
    return (
        <div>
            <h1 className={style.header}>{user.name}</h1>
            <p>{user.email}</p>
            <p>{user.username}</p>
            <p>{user.company.name}</p>
        </div>
    );
}
 
export default UserDetail;