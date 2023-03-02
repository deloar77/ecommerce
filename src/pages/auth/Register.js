import axios from "axios";
import { useState } from "react";
import  toast  from "react-hot-toast";
import Jumbotron from "../../components/cards/Jumbotron";

const Register = ()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]= useState("");

    const handleSubmit= async(e)=>{
        e.preventDefault();

        try {
            const {data} = await axios.post(`${process.env.REACT_APP_API}/register`,
            {
                name,
                email,
                password
            }
            );
            if(data?.error){
                toast.error(data.error)
            } else {
                toast.success("Registration successful")
            }
            
        } catch (err) {
            console.log(err)
            toast.error("registration failed")
            
        }
    }


    return (
        <div>
            <Jumbotron title="lets get registered"></Jumbotron>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <form onSubmit={handleSubmit}>

                            <input
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                            />

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
                                Register
                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </div>

    )

}
export default Register;
