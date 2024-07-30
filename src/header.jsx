import React from "react";
import style from "./header.module.css"

const Header = () => {
    return(
        <>
        <div className={style.headerDiv}>
            <div className="headshot">
                <img className={style.image} src='../assets/UntitledDesign.png'></img>
            </div>
            <div className={style.abt}>
                <h1>Tyrion Lannister</h1>
                <h4><em>"I drink, and I know things..."</em></h4>
            </div>
        </div>
        </>
    );
}

export default Header;