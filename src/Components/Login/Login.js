import React, { useEffect, useState } from 'react'
import TimeStart from '../TimeStart/TimeStart'
import ReUseCounter from '../Counter/Counter'
import AboutReact from '../AboutReact/AboutReact'
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap'
import InputGroupText from 'react-bootstrap/esm/InputGroupText'
import { Link, useNavigate } from 'react-router-dom'
import { object } from 'yup'

const Login = ()=>{

    const resetForm = {
        userName:'',
        password:''
    }

    const [login, setLogin] = useState({...resetForm})
    const navigate = useNavigate()
    const [error, setError] = useState({})
    const [showpassword, setShowPassword] = useState(false)
    const toggleVisible=()=>{
        setShowPassword(!showpassword)
    }
    const handleChange=(e)=>{
        const{name, value} = e.target
        setLogin({...login, [name]:value})
        console.log(login, 'details updated')
    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        const errors = {}
        alert(JSON.stringify(login,null, 2))

        if(!login.userName.trim()){
            errors.userName = 'Please enter Username'
        }else if(login.userName.length < 10){
            errors.userName = 'Please enter username with a maximum of 10 characters'
        }
        else if(!/^[a-zA-Z0-9_@]+$/.test(login.userName)){
            errors.userName = 'Username can only contain letters, numbers, underscore, and @'
        }

        if(!login.password.trim()){
            errors.password = 'Please eneter Password'
        }else if(login.password.length < 10){
            errors.password = 'Please enter password maximum 10 characters'
        }else if(!/[!@&*#$:{}]/.test(login.password)){
            errors.password = 'Password must contain at least one special character.'
        }

        if(Object.keys(errors).length === 0){
            navigate('/home')
        }else{
            setError(errors)
        }
        setLogin(resetForm)
    }

    return(
        <section className='info-login'>
            <div className='container info-log-screen'>
                <div className='row d-flex align-items-center justify-content-center h-100'>
                    <div className='col-md-4'>
                        <div>
                        <div className='d-flex align-items-center justify-content-center flex-column'>
                            <h1 className='text-white mb-3'>Login</h1>
                            <h6 className='mb-5 text-white fw-normal'>Please eneter you Login and Password</h6>
                        </div>
                        <Form className='info-form' onSubmit={handleSubmit}>
                                <InputGroup className={`border rounded-2 ${error.userName ? 'mb-2' : 'mb-4'}`}>
                                    <InputGroupText className='bg-transparent border border-0 text-white'>
                                    <i class="bi bi-person-fill"></i>
                                    </InputGroupText>
                                    <FormControl maxLength={10} placeholder='Username or E-mail' autoComplete='off'
                                    name="userName" value={login.userName} onChange={handleChange} 
                                    className={`bg-transparent border text-white border-0 ${error.userName ? 'is-invalid' : 'text-white'}`} />
                                </InputGroup>
                                <p>  {error.userName && <small className='text-white'>{error.userName}</small>}</p>
                                <InputGroup className={`border rounded-2 ${error.password ? 'mb-2' : 'mb-0'}`}>
                                    <InputGroupText onClick={toggleVisible} className='bg-transparent text-white border border-0'>
                                    {showpassword ? <i class="bi bi-eye"></i> : <i class="bi bi-eye-slash"></i>}
                                    </InputGroupText>
                                    <FormControl placeholder='Password' type={showpassword ? 'text' : 'password'} 
                                    autoComplete='off' name='password' value={login.password} onChange={handleChange} 
                                    className={`bg-transparent border border-0 ${error.password ? 'is-invalid' : ''}`} />
                                </InputGroup>
                                <p>{error.password && <small className='text-white'>{error.password}</small>}</p>
                                <div className='d-flex align-items-end justify-content-end mb-4'>
                                    <Link to="" className='text-decoration-none'>
                                        <small className='text-white fst-italic fw-bolder'>Forgot password?</small>
                                    </Link>
                                </div>
                                <div className='p-0 mb-2'>
                                    <Button type='submit' className='w-100'>Submit</Button>
                                </div>
                                <div className='d-flex aligin-items-center justify-content-center gap-4'>
                                    <p>New on our platform?</p>
                                    <Link to="/register" className='text-white'>Create an Account</Link>
                                </div>
                        </Form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Login