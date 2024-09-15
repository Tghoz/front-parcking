import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

import { MdOutlinePassword } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import { PiUserLight } from "react-icons/pi";

import { useForm } from "react-hook-form";

import { PostData } from '../api/auth';

export default function RegisterForm() {
 
	
	const {
		register,
		formState: { errors },
		handleSubmit,
		
	  } = useForm({
		mode: "onChange"
	  });


	const onSubmit = (data) => {
		const url = 'http://localhost:3000/api/auth/register';
		PostData(url, data);
		console.log(data);
		
    };

	const onSubmitHandler = async (e) => {
		e.preventDefault();
		 handleSubmit(onSubmit)();
		
	};

	
	return (    
      <form onSubmit={onSubmitHandler} className="sign-up-form">
			  <h2 className="title">Sign up</h2>
			  <div className="input-field">
                <div className="justify-center items-center flex text-2xl text-gray-400">
              <PiUserLight />
                </div>
				<input 
				type="text" 
				placeholder="Username" 
				{...register("user_name", {
					required: "this is required",
				})} 
				/>
				
			  </div>
			  {errors.username && <p className="text-red-500">{errors.username.message}</p>}
			  <div className="input-field">
              <div className="justify-center items-center flex text-2xl text-gray-400"> 
              <MdAlternateEmail />
                </div>
				<input type="email" placeholder="Email" {...register("email", {
					required: "this is required",
					pattern: {
						value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
						message: "Invalid email address"
					}
				})} />
			  </div>
				{errors.email && <p className="text-red-500">{errors.email.message}</p>}
			  <div className="input-field">
              <div className="justify-center items-center flex text-2xl text-gray-400"> 
              <MdOutlinePassword />
                </div>
				<input {...register("password", {
					required: "this is required",
				})} type="password" placeholder="Password" />
			    </div>
				{errors.password && <p className="text-red-500">{errors.password.message}</p>}
			  <input type="submit" className="btn" value="Sign up" />
			  <p className="social-text">Or Sign up with social platforms</p>
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
