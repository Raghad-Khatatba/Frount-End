import React, { useEffect, useState } from 'react'
import './header.css'
export default function Header() {
  const [showModel,setshowModel] =useState(false);
  const [them,setThem] =useState(localStorage.getItem("currentMode")??"dark");

  useEffect(() => {
    if (them ==="light"){
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }else{
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    }
  },[them])
  return (
    <header className='flex'>
      <button className='menu icon-menu flex' onClick={() => {
        setshowModel(true);
      }} />
      <div></div>
      <nav>
<ul className='flex'>
  <li><a href="">About</a></li>
  <li><a href="">Education</a></li>
  <li><a href="">Projects</a></li>
  <li><a href="">Contact me</a></li>
</ul>
      </nav>
      <button onClick={() => {
     localStorage.setItem("currentMode",them === "dark"? "light" : "dark");
     setThem(localStorage.getItem("currentMode"))
      }} className='mode flex' ><span>  {them === "dark" ? <i className="fa-solid fa-moon" style={{ color: "white" }}></i> : <i className="fa-solid fa-sun" style={{ color: "orange" }}></i>}</span></button>
{showModel &&(
     <div className='fixed'>
     <ul className="model">
      <li><button className='icon-close' onClick={() => {
        setshowModel(false);
      }} /></li>
       <li><a href="">About</a></li>
       <li><a href="">Artical</a></li>
       <li><a href="">Project</a></li>
       <li><a href="">Speaking</a></li>
       <li><a href="">Contact</a></li>
     </ul>
         </div>
)}
    </header>

  )
}
