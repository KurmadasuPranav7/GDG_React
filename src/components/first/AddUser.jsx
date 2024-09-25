import React from 'react'
import { useForm } from 'react-hook-form'


function AddUser() {

    const {register, handleSubmit,formState:{errors},reset} = useForm();
	
	function handleFormSubmit(obj){
		console.log(obj);
        reset();
	}


    return (
        <div>
            <h3>AddUser</h3>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <label htmlFor= "username" className="form-label fs-5">Username</label>
                <input type="text" {...register('username',{required:true,minLength:4})} id="username" className="form-control"></input>
                {/* {validation error message} */}
                {errors.username?.type==='required' && <p className="text-warning">Username is required</p>}
                {errors.username?.type==="minLength" && <p className="text-warning">Minmun length required is 4</p>}
                <label htmlFor= "email" className="form-label fs-5">Email</label>
                <input type="email" {...register('email',{required:true})} id="email" className="form-control"></input>
                <button type='submit' className='btn btn-sm btn-warning mt-4'>Add User</button>
            </form>
        </div>
    )
}

export default AddUser
