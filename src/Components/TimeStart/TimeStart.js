import React, { useEffect, useState } from 'react'

function TimeStart(){

    const [time, setTime] = useState(0)
    const [isRuning, setIsRuning] = useState(false)
    const [currentDate, setCurrentDate] = useState(new Date())

    useEffect(()=>{
        if(isRuning){

            const interval = setInterval(()=>{
                setTime((prev) => prev + 1)
                setCurrentDate(new Date())
            }, 100)
            
            return()=>clearInterval(interval)
        }else{
            setTime(0)
        }

    }, [isRuning])

    return(
        <>
            <h1>React time slots</h1>
            <h2>Time: Slot {time}</h2>
            <h3>Date {currentDate.toLocaleString()}</h3>
            <div>
                <button onClick={()=>setIsRuning(!isRuning)}>
                    {isRuning ? 'start' : 'stop'}
                </button>
            </div>
        </>
    )
}

export default TimeStart
