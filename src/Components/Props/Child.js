import React from 'react'

const Child=(props)=>{

 const {userDetails} = props
 const {name, lname, age, role, email, phone} = userDetails || {}

    return(
       <>
         {userDetails && (
            <div>
                <p>Child Component</p>
                <h3>Name: {name}</h3>
                <h4>Last Name : {lname}</h4>
                <div className='d-flex align-items-center justify-content-between mb-3'>
                    <div>
                        <h6>Age : {age}</h6>
                    </div>
                    <div>
                        <h6>Role : {role}</h6>
                    </div>
                </div>
                <div className='d-flex align-items-center justify-content-between'>
                    <div>
                        <h6>Email : {email}</h6>
                    </div>
                    <div>
                        <h6>Phone : {phone}</h6>
                    </div>
                </div>
            </div>
        )}
       </>
    )
}

export default Child