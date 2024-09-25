import { useForm } from "react-hook-form"

function Form_demo() {

	const {register, handleSubmit,formState:{errors},reset} = useForm();
	
	function handleFormSubmit(obj){
		console.log(obj);
	}

	
	return (
		<div>
			<h1 className="text-center">Form</h1>
			<form className="w-50 mx-auto mt-5" onSubmit={handleSubmit(handleFormSubmit)}>
				<div className="mb-3">
					<label htmlFor= "username" className="form-label fs-4 fw-medium">Username</label>
					<input type="text" {...register('username',{required:true,minLength:4})} id="username" className="form-control"></input>
					{/* {validation error message} */}
					{errors.username?.type==='required' && <p className="text-warning">Username is required</p>}
					{errors.username?.type==="minLength" && <p className="text-warning">Minmun length required is 4</p>}
				</div>
				<div className="mb-3">
					<label htmlFor= "email" className="form-label fs-4 fw-medium">E-mail</label>
					<input type="email" {...register('email')} id="email" className="form-control"></input>
				</div>
				<button type="submit" className="btn btn-lg btn-primary">Sign Up</button>
			</form>
		</div>
	)
}

export default Form_demo
