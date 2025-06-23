import React from 'react'
import data from './data.js'
import { useState } from 'react'

const Acodian = () => {
    const [singleClick, setsingleClick]= useState(null)
    const [mlt,setMlt]= useState([])
    const [mltcEnable,setmltcEnable]= useState(false)

    function firstclick(dataid){
        { singleClick === dataid ? setsingleClick(null): setsingleClick(dataid) }
    }

    function hmlClick(dataid){
        let cpymult = [...mlt]
        let indexofcurrentid = cpymult.indexOf(dataid)

        if(indexofcurrentid === -1 ){
            cpymult.push(dataid)
        }else(cpymult.splice(indexofcurrentid, 1))

        setMlt(cpymult)
    }

    console.log(mlt);
    
    
  return (
    <>
        <div className='container text-white justify-center align-center w-full h-full mt-20 mx-auto'>
            <button className='button bg-[#964B00] p-3 rounded-4xl mb-2 -mt-2'
            onClick={()=>{
                setmltcEnable(!mltcEnable)
                console.log(mltcEnable);
                
            }}>Multiple Clicks</button>
            <div className='acodian flex flex-col gap-3 '>
                { data.map((item)=>(
                    <div className='acodian-item bg-[#964B00] p-8 rounded-sm' key={item.id}>
                        <div className='question w-full flex justify-between' onClick={
                            mltcEnable === true ? ()=>hmlClick(item.id) : ()=>firstclick(item.id)
                        }>{item.question}<div>+</div></div>
                        {
                            mltcEnable ?
                            mlt.indexOf(item.id) !== -1 &&
                            <div className='answer'>{item.answer}</div> :
                            singleClick === item.id && 
                                <div className='answer'>{item.answer}</div>
                            
                        }
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default Acodian;