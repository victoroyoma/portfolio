import React from 'react'
import './Intro.css'
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import me from "../../img/me.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
         <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
                <span>Ogheneyoma Victor</span>
                <span>Full-stack software developer with high level of experience
                    in web designing and development, Mobile App Developement with flutter
                    and years of experience in community management and developer's advocacy.</span>
            </div>
            <Link to="contact" smooth={true} spy={true}>
            <button className=" button i-button"> Hire Me</button>
            </Link>
            <div className="i-icons">
                <a href='github.com/victoroyoma'><img src={Github} alt = "" /></a>
                <a href='LinkedIn.com'><img src={LinkedIn} alt = "" /></a>
                <a href='instagram.com'><img src={Instagram} alt = "" /></a>
                
            </div>
        </div>
        <div className="i-right">
        <img src={Vector1} alt = "" />
        <img src={Vector2} alt = "" />
        <img src={me} alt = "" />

        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatingDiv image={crown} text1='Web' text2='Developer'/>
          </motion.div>
          <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={thumbup} text1="Best Design" text2="Only" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;