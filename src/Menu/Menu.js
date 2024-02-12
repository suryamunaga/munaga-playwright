"use client "
import React ,{useState}from 'react'
import "./Menu.css"
import {menuIteams} from "./Configiration"
import Link from 'next/link'
import { usePathname } from 'next/navigation'



 const Menu = () => {
  const pathname = usePathname()
  const[menuIteam,setMenuIteam]=useState(pathname?.slice(1 ) ||"home")
 

  const fnMenuClick=(eve)=>{
    eve.stopPropagation()
    setMenuIteam(eve.target.id)
  }
  return <div>
   
    <ul className='menu'>
        {
            menuIteams.map(({name,link},index)=>{
                return <li key={`li_${index}`} onClick={fnMenuClick}>
                    <Link className={menuIteam  ===  link?.slice(1) ?  'menu-active':""} id={link?.slice(1)} href={link}>{name}</Link>
                    </li>
                
            })
        }
        
    </ul>
   
  </div> 
}
export default Menu
