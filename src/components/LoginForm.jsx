import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

import { MdAlternateEmail } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";

import { useForm } from "react-hook-form";

export default function LoginForm() {

	
	const {
		register,
		formState: { errors },
		handleSubmit
	  } = useForm({
		mode: "onChange"
	  });


	const onSubmit = (data) => {
		console.log(data);
    };


	const onSubmitHandler = (e) => {
        e.preventDefault();
        handleSubmit(onSubmit)();

  
    };


  return (
    <form onSubmit={onSubmitHandler} className="sign-in-form">
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


