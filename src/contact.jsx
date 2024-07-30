import React, { Component } from "react";
import style from "./contact.module.css"
class Contact extends Component {
    render() {
        return(
            <>
                <div className={style.contact}>
                    <div>
                        <h1>Currently Hiring For A New Guard</h1>
                    </div>
                    <div className={style.inner}>
                        <div>
                            <h1>Come find me at...</h1>
                            <div>
                                <h2>The Red Keep,</h2>
                                <h2 className={style.addressBottom}>Kings Landing, 7 Kingdoms</h2>
                            </div>
                        </div>
                        <div >
                            <h4>Or Send Me A Pigeon...</h4>
                            <form className={style.contactForm}>
                                <label htmlFor="name">Enter Your name: </label>
                                <input type="text" id="name"></input>
                                <label htmlFor="q">Are You Willing To Die For Me?</label>
                                <input type="text" id="q"></input>
                                
                                <label htmlFor="experience">What is your level of experience?</label>
                                <select id="experience">
                                    <option value="peasant">Iam a Peasant</option>
                                    <option value="fighter">Been in a couple of tavern brawls</option>
                                    <option value="knight">Im a knight</option>
                                </select>
                                <button type="submit">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Contact;