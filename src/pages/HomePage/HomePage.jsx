import { checkToken } from "../../utilities/users-service";
export default function HomePage() {
    


    async function handleCheckToken() {
        const expDate = await checkToken()
        console.log(expDate)
    }

    return (
        <div className="page-content">
            <h1>Home Page</h1>
            <button onClick={ handleCheckToken }>Check When My Login Expires</button>
        </div>
    );
}