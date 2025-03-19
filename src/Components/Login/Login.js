import React, { useEffect } from 'react'
import TimeStart from '../TimeStart/TimeStart'
import ReUseCounter from '../Counter/Counter'
import AboutReact from '../AboutReact/AboutReact'

const Login = ()=>{

    return(
        <section>
            <div className='container g-0'>
                <div className='row'>
                <h2>Welcome to login page</h2>
                {/* <div> <TimeStart/></div>
                <div>
                    <ReUseCounter/>
                </div>
                <div>
                    <AboutReact/>
                </div> */}
                </div>
            </div>
        </section>
    )
}

export default Login