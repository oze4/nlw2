import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'


function TeacherItem() {
    return(

        <article className="teacher-item">
            <header>
                <img
                src={`https://avatars3.githubusercontent.com/u/54912223?s=400&u=8723c2541067fe96666bd2684ccf01a74bd70937&v=4`}
                />

                <div>
                    <strong>Francisco Pena</strong>
                    <span>Computacao</span>
                    
                </div>
                
            </header>

            <p>
                        Blablablablaaaaaaaaaaaaaaaaa
                        <br />
                        Bla bla blablablaaaaaaaaaaaaaaaaa
                        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </p>
            
            <footer>
                <p>
                    Preco/hora
                    <strong>R$ 20</strong>
                </p>
                
                <button type="button">
                    <img src={whatsappIcon} id="time" alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}


export default TeacherItem