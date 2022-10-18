
/*this import is to import the createElement function from React. 
The JSX syntax used to render is a shorthand of the createElement method.*/

import React from "react";
import {useState} from "react";
import "./index.css"
/*src={require("./sword.png")}*/
function App() {
 
  return (
    <>
   <div className="parentContainer">
   <div className="firsthalf">1st half</div>
   <div className="image1"></div>
      <span className="animeyabu1">anime<span style={{color:"#CA38ED"}}>yabu.</span></span>
    <div className="backbutton"></div>
    <div className="mask"></div>
    <div className="japanese">ようこそ!</div>
    <div className="somecontent" >Bem-vindo(a)!</div>
    
    <div className="email">Email</div>
    <input type={"text"} className="input1" />
    <div className="senha">Senha</div>
    <input type={"text"} className="input2" />
    <div className="confirmsenha">Confirmar Senha</div>
    <input type={"text"} className="input3" />
    <button className="register">Registrar</button>

    <div>
      <span className="line1"></span>
       <span className="sometext2">Ou se registre com </span>
       <span className="line2"></span>
    </div>
    <div>
      <span className="rectangle7"></span>
      <span className="rectangle8">
        <span className="path2"></span>
      </span>
      <span className="rectangle9">
        <span className="fb"></span>
      </span>
    </div>
    <div className="lasttext">Já é membro? <span style={{color:"#E487FB"}}>Faça Login</span></div>



















   <div className="secondhalf">
    <div className="ellipse2" ></div>
    <div className="secondhalf_image" ></div>

   <div className="animeyabu" >anime<span style={{color: "#CA38ED"}}>yabu.</span></div>
   <div className="bottomtext">
   Assista animes online em HD, legendado ou dublado,
   no seu celular ou computador. 
   Animeyabu, o seu portal de animes online!
   </div>
   <div>
    <span className="rectangles"></span>
    <span className="rectangles2"></span>
    <span className="rectangles3"></span>
    </div>
   </div>
   </div>
   </>
  );
}

export default App;
