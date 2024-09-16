import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

import { MdAlternateEmail } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";

import { useForm } from "react-hook-form";
import { useState } from "react";

import {Spinner} from "@nextui-org/react";

import { PostData } from '../api/auth';




export default function LoginForm() {

	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	
	const {
		register,
		formState: { errors },
		handleSubmit
	  } = useForm({
		mode: "onChange"
	  });


	const onSubmit = async (data) => {

		setLoading(true);

		try{
			const url = 'http://localhost:3000/api/auth/login';
			const resp = await PostData(url, data);

			if (resp && resp.error) {
				setError(resp.error)
			}else{
				window.location.href = '/dashboard/test';
				console.log("resp ==>",resp)
			}

		}catch(error){
			
			setError(error)
		}
	 	finally {
          setLoading(false); 
        }
    };


	const onSubmitHandler = (e) => {
        e.preventDefault();
        handleSubmit(onSubmit)();
  
    };


  return (

    <form onSubmit={onSubmitHandler} className="sign-in-form">
		 
		 
		 {loading &&
		 
		 <div className="absolute flex justify-center items-center h-[100%] w-[60%] backdrop-blur-md bg-white/30 z-10">
		 	<Spinner color="secondary" size="lg"/>
		 </div>
		 
		 }
		<h2 className="title">Sign in</h2>
		<div className="input-field">
        <div className="justify-center items-center flex text-2xl text-gray-400"> 
              <MdAlternateEmail />
                </div>
			<input  
			{...register("email", {
          		required: "this is required",
          		pattern: {
            		value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            		message: "Invalid email address"
          		}
        	})} 
		type="text" 
		placeholder="email" />
		</div>
		{errors.email && <p className="text-red-500">{errors.email.message}</p>} 
		<div className="input-field">
        <div className="justify-center items-center flex text-2xl text-gray-400"> 
              <MdOutlinePassword />
                </div>
			<input 
			{...register("password", {
				required: "this is required",
			
			  })}
			type="password" 
			placeholder="Password" />
		</div>
		{errors.password && <p className="text-red-500">{errors.password.message}</p>} 
		{error && <p className="text-red-500">{error}</p>} 
		<input type="submit" value="Login" className="btn solid" />
		<p className="social-text">Or Sign in with social platforms</p>
		<div className="social-media">
			<a href="#" className="social-icon">
            <FcGoogle />
			</a>
			<a href="#" className="social-icon">
				<FaFacebook  className="text-blue-500"/>
			</a>	
		</div>
	</form>
  )
}


