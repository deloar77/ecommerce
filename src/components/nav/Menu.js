import { NavLink, useNavigate } from "react-router-dom"
import { useAuth } from "../../context/auth";

const Menu=()=>{
    const [auth,setAuth]=useAuth();
    const navigate=useNavigate();

    const logout = ()=>{
        setAuth({...auth,user:null,token:""})
        localStorage.removeItem("auth");
        navigate("/login");
    }


    return(
        <>
            <ul className="nav d-flex justify-content-between">

                <li className="nav-item">
                    <NavLink className="nav-link" to="/" >
                        Home

                    </NavLink >
                </li>
                {!auth?.user ?(

                <>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/login">
                        Login
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/register">
                        Register
                    </NavLink>
                </li>

                
                </>
                ):(
                    <li className="nav-item">
                        <a  onClick={logout} className="nav-link" >
                            Logout

                        </a>

                    </li>
                )}
            </ul>

        </>
    );
}
export default Menu;