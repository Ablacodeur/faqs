import React, { useState } from 'react'
import s from "./style.module.css"
import { PlusCircle } from 'react-bootstrap-icons' 
import { DashCircle } from 'react-bootstrap-icons'
import { Stars } from 'react-bootstrap-icons'
import list from '../../list'

export default function FaqItems() {
  const[isHovered, setIsHovered]=useState(null);
  const [isClicked,setIsClicked]=useState(null);
  const[activeHero,setActiveHero]=useState(true);


  function handleClick(index){
      setIsClicked(index)
 
  }
  return(
    <div className={`${ s.container } card`}>
    <h1 ><Stars style={{ color:"#9a33a4"}} />  FAQs</h1>
      <>
      <div className="d-flex justify-content-between mt-4">
        <h5>Want to know all about it ...</h5>
        {activeHero?<DashCircle onClick={()=>setActiveHero(!activeHero)} style={{ backgroundColor:"#000000" , color:"white",borderRadius:"100%"}} />:<PlusCircle onClick={()=>setActiveHero(!activeHero)}/>}
      </div>
     {activeHero? <p className='text-muted mb-4'>Aliqua officia aute ea excepteur fugiat consequat nulla irure adipisicing ea. Cupidatat tempor Lorem ut laboris
       reprehenderit non consequat laborum dolore aute irure duis ex dolore. 
      Voluptate ullamco dolor velit pariatur officia consequat amet cillum. Labore nostrud 
      aute duis incididunt labore non deserunt officia ad in laboris.</p>: null
}
      </>
      
      {list.map((i,index)=>{
        return(
          <div key={index}  id={i.id}>
          <div 
            className='d-flex justify-content-between'
            onMouseEnter={()=>setIsHovered(index)}
            onMouseLeave={()=>setIsHovered(null)}
            style={{ color:isHovered===index? "#9a33a4" : null}}
            >
            <h5>{i.title}</h5>
           {isClicked===index?<DashCircle onClick={()=>handleClick(!isClicked)}   
            style={{ color: "#000000" }}

           />:<PlusCircle onClick={()=>handleClick(index)}
           style={{ backgroundColor: "#9a33a4",color:"white", borderRadius:"100%" }}

           />}
          </div>
          
          <p className='text-muted'>{isClicked ===index && i.content}</p>
          {index !== list.length - 1 && <hr className='text-muted'/>}
          </div>
          

        );

      })
      
      } 

    </div>
  )
}
