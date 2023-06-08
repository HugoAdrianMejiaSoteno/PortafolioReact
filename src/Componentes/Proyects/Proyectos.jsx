import "./Proyectos.css"
import Proyecto from "./Proyecto";
import Apeperia from "../../imagenes/Apeperia.png";
import Encriptador from "../../imagenes/Encriptador.png"
import Portafolio from "../../imagenes/Portafolio.png";
import QuienesSomos from "../../imagenes/QuienesSomos.png";
import Planes from "../../imagenes/Planes.png";
import { motion } from 'framer-motion';
const Proyectos = ()=>{
    return(
        <motion.main className="Proyectos-container" initial={{width:0}} animate={{width:"100%"}} exit={{x:window.innerWidth, transition:{duration:0.1}}}>
            <div>
                <h1 className="intro-proyectos"><span className="blue">M</span>is <span className="orange">p</span>royectos</h1>
            </div>
            <Proyecto imagen={QuienesSomos} titulo="Quienes somos" descripcion="Landing page sobre informacion de una empresa"/>
            <Proyecto imagen={Encriptador} titulo="Encriptador de texto" descripcion="Encriptador y desencriptador de textos" link="https://hugoadrianmejiasoteno.github.io/Encriptador-ONE/"/>
            <Proyecto imagen={Portafolio} titulo="Portafolio personal" descripcion="Mi portafolio para saber mas acerca de mi"/>
            <Proyecto imagen={Apeperia} titulo="Tienda de papeleria" descripcion="Landing page de papeleria Apeperia" link="https://hugoadrianmejiasoteno.github.io/ApeperiaAlura/"/>
            <Proyecto imagen={Planes} titulo="Planes de costos" descripcion="Planes de costos sobre un servicio" link="https://hugoadrianmejiasoteno.github.io/ApeperiaAlura/"/>
        </motion.main>
    )
}

export default Proyectos;