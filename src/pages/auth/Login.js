import Jumbotron from "../../components/cards/Jumbotron";
import { useState } from "react";
import { useAuth } from "../../context/auth";
import axios from "axios";
import toast  from "react-hot-toast";

const Login=()=>{
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [auth,setAuth]=useAuth();

    const handleSubmit=async(e)=>{
        try {
            const {data} = await axios.post(`${process.env.REACT_APP_API}/login`,
            {
                email,
                password
            }
            );
            if (data?.error){
                toast.error(data.error);
            } else {
                localStorage.setItem("auth",JSON.stringify(data));
                setAuth({...auth,user:data.user,token:data.token});
                toast.success("Your are logged in successfully")
            }
            
        } catch (err) {
            console.log(err)
            toast.error("Login request failed");

        }

    }
    return (
        <div>
            <Jumbotron title='Login' subtitle="Get logged in from here"></Jumbotron>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit}>

                            <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            />

                            <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            />
                            <button type="submit">
                                Submit
                            </button>

                        </form>

                    </div>

                </div>

            </div>
        </div>
    )
}
export default Login;