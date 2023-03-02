import Jumbotron from "../components/cards/Jumbotron";
import { useAuth } from "../context/auth";

const Home=()=>{
    const [auth,setAuth]=useAuth();

    return(
        <div>
            <Jumbotron title="are you new here"></Jumbotron>
            <pre>{JSON.stringify(auth,null,4)}</pre>
        </div>
    )


}
export default Home;