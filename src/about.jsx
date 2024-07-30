import React from "react";
import style from "./about.module.css"
const About = () => {
    return (
        <>
        <div className={style.aboutSection}>
            <div className={style.aboutText}>
                <h1>About Me</h1>
                <p>My Name is Tyrion Lannister, son of Tywan Lannister, brother to Jamie And Cersei Lannister. Iam commonly reffered to as "The Imp of Casterly Rock". I have a deep Love for Red Wine, coin, and a Loyal Guard. I Have a deadly habit of trusting women who have a high likelyhood of betraying me. </p>
            </div>
          
            <div >
                <img className={style.img} src="../assets/Untitled design (10).png"></img>
            </div>
        </div>
        </>
    )
}

export default About