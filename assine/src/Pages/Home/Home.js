import { Component } from 'react';
import './StylesHome.css'

export default class Hoem extends Component {
    render(){
        return(
            <div className="containerAssine">

                <div id="buttonFly">

                </div>
                <header id="containerHeader">
                    <div id="logo"></div>

                    <div  id="topCard">
                    </div>

                    <div>
                        <div id=""></div>
                    </div>


                </header>

                <div className="containerBody">
                    
                    <div id="buttonContact">
                            <a id ="buttonConta"  href="https://api.whatsapp.com/send?phone=5508009400198">
                                <a id="iconWhats"></a>
                                0800 940 0198
                            </a>
                    </div>

                    <form id="formContact">

                        <div id="topForm">
                            <h2>Seus dados</h2>
                            <p>Primeiro precisamos dos seus dados, não se preocupa, ele está bem seguro com a gente! ;)</p>
                        </div>

                        <label>
                            {/* <p>Nome*</p> */}
                            <input id="teste" placeholder="Nome" type="text"  required/>
                        </label>
                        <label>
                            {/* <p>Tefefone*</p> */}
                            <input placeholder="Telefone" type="text"  required/> 
                        </label>

                        <button id="buttonSend">Solicitar contato!</button>
                    </form>

                    <div id="carrocelPlanos">
                        <div id="family">

                        </div>

                        <div id="cine">

                        </div>

                        <div id="gamer">

                        </div>
                    </div>

                    <footer id="containerFooter"> <a href="http://www.netcomfibra.com.br">  NET.COM</a>® Todos os direitos reservados.   </footer>

                </div>


                
            </div>
        )
    }
}