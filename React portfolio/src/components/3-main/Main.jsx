import React, { useState } from 'react'
import './main.css'
import { motion } from 'framer-motion';

const myProjects=[
  {projectTitle:"ecommarce project",category:"js",imgPath:"./ecommarce.jpg",linkSite:"https://jocular-parfait-b03e96.netlify.app/",linkGit:"https://github.com/Raghad-Khatatba/Frount-End.git",supTitle:"html,css,bootstrap,js project.        At Fashin Shop, our mission is to curate a diverse collection of high-quality products that cater to your every need."},
  {projectTitle:"Foode Cart",category:"css",imgPath:"./Foode cart.jpg",linkSite:"https://65686a2ffdefe24db5858368--elegant-buttercream-0ea1ac.netlify.app/",linkGit:"https://github.com/Raghad-Khatatba/Frount-End.git",supTitle:"html css project.  At Foode Cart We Serve Delicious Food The biggest, best equipped and most advanced Resturent in the greaterLos Angeles area."},
  {projectTitle:"Family baker",category:"css",imgPath:"./Family baker.jpg",linkSite:"https://lovely-daffodil-37231c.netlify.app/",linkGit:"https://github.com/Raghad-Khatatba/Frount-End.git",supTitle:"html css project.  At Family baker We Serve Delicious Food The biggest, best equipped and most advanced Resturent in the greaterLos Angeles area."},
  {projectTitle:"Movies World",category:"react",imgPath:"./Movies World.jpg",linkSite:"#",linkGit:"https://github.com/Raghad-Khatatba/Frount-End.git",supTitle:"html css js React project.  At Movies World you can search about any movies you want."},
  {projectTitle:"Restaurant",category:"css",imgPath:"./Restaurant.jpg",linkSite:"https://65686a60d4d40f1937347314--venerable-custard-863e3c.netlify.app/",linkGit:"https://github.com/Raghad-Khatatba/Frount-End.git",supTitle:"html css project.  At Family baker We Serve Delicious Food The biggest, best equipped and most advanced Resturent in the greaterLos Angeles area."},
  {projectTitle:"To-do-list",category:"js",imgPath:"./To-do-list.jpg",linkSite:"https://tiny-marzipan-fd730a.netlify.app/",linkGit:"https://github.com/Raghad-Khatatba/Frount-End.git",supTitle:"html css js project. To do list gives you the confidence that everything's organizedand accounted for, so you can make progress on the thingsthat are important to you."},
  {projectTitle:"portfoilo project",category:"css",imgPath:"./Portfoilo.jpg",linkSite:"https://sensational-dolphin-448690.netlify.app/",linkGit:"https://github.com/Raghad-Khatatba/Frount-End.git",supTitle:"html css project.  At Portfoilo Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis ipsa.."},
  {projectTitle:"Rock Paper Scissors game",category:"js",imgPath:"./Rock_Paper_Scissors_game.jpg",linkSite:"https://6568680efdefe24b918585c1--coruscating-cactus-cfeec9.netlify.app/",linkGit:"https://github.com/Raghad-Khatatba/Frount-End.git",supTitle:"html css js project. At Rock Paper Scissors game you can play 2 different Rock Paper Scissors game. "},
  {projectTitle:"Bunny headline",category:"css",imgPath:"./Bunny headline.jpg",linkSite:"https://656869fec88337193cde4398--voluble-treacle-bfac25.netlify.app/",linkGit:"https://github.com/Raghad-Khatatba/Frount-End.git",supTitle:"html css project.  In Bunny headline Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis ipsa.."},
  {projectTitle:"Book hub",category:"react",imgPath:"./Book hub.jpg",linkSite:"#",linkGit:"https://github.com/Raghad-Khatatba/BookHub.git",supTitle:"html css js React project.  In Book Hub you can search about any book you want."},
  {projectTitle:"Quiz Fast",category:"react",imgPath:"./Quiz Fast.jpg",linkSite:"#",linkGit:"https://github.com/Raghad-Khatatba/Final-react-project.git",supTitle:"html css js React project. In Quiz Fast you can play 3 different intelligence games. "}
];
export default function Main() {
  const [currentActive, setCurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  const filterProjects = (category) => {
    if (category === "all") {
      setArr(myProjects);
    } else {
      const newArr = myProjects.filter((item) => item.category === category);
      setArr(newArr);
    }
    setCurrentActive(category);
  };

  return (
    <main className='flex'>
      <section className='leftSection flex'>
        <button onClick={() => filterProjects("all")} className={currentActive === "all" ? "active" : null}>
          All Projects
        </button>
        <button onClick={() => filterProjects("css")} className={currentActive === "css" ? "active" : null}>
          HTML & CSS
        </button>
        <button onClick={() => filterProjects("js")} className={currentActive === "js" ? "active" : null}>
          Javascript
        </button>
        <button onClick={() => filterProjects("react")} className={currentActive === "react" ? "active" : null}>
          React
        </button>
      </section>
      <section className='rightSection flex'>
        {arr.map((item) => (
            <motion.article
            layout
            initial={{transform:'scale(0)'}}
            animate={{transform:'scale(1)'}}
            transition={{type:"spring",damping:8,stiffness:50}}
            key={item.imgPath} className='card'>
            <img src={item.imgPath} alt="" width={220} />
            <div className="box" style={{width:"220px",height:"200px"}}>
            <h1 className="title">{item.projectTitle}</h1>
            <p className="supTitle">{item.supTitle}</p>
            <div className="flex icons">
              <div>
            <a href={item.linkSite} target="_blank"><i className="fa-solid fa-link"></i></a>
            <a href={item.linkGit} style={{marginLeft:"11px"}} target="_blank"><i className="fa-brands fa-github"></i></a>
            </div>
           
            </div>
            </div>
            </motion.article>
        ))}
      </section>
    </main>
  );
}
