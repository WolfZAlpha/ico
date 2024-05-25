import Image from "next/image"
import Link from "next/link"

import hero_thumb from "@/assets/img/update/hero/hero-1-1.png"
import CountdownClock from "@/ui/CountDownClock"

const Hero = () => {
   return (
      <div className="hero-wrapper hero-1">
         <div className="hero-bg-gradient">
         </div>
         <div className="ripple-shape">
            <span className="ripple-1"></span>
            <span className="ripple-2"></span>
            <span className="ripple-3"></span>
            <span className="ripple-4"></span>
            <span className="ripple-5"></span>
         </div>

         <div className="container">
            <div className="hero-style1">
               <div className="row flex-row-reverse">
                  <div className="col-lg-3">
                     <div className="hero-thumb alltuchtopdown">
                        <Image src={hero_thumb} alt="img" />
                     </div>
                  </div>
                  <div className="col-lg-9">
                     <h1 className="hero-title">PROSPERA: Empowering the Underdog</h1>
                     <div className="btn-wrap">
                        <Link href="/contact" className="btn btn2" >
                           Purchase a Token
                        </Link>
                        <Link href="/blog" className="btn btn-two" >
                           Read  Documents
                        </Link>
                     </div>
                  </div>

               </div>
            </div>
            <div className="hero-countdown-wrap">
               <h2 className="hero-countdown-wrap-title">ICO will start in..</h2>
               <ul className="skill-feature_list">
                  <li>Tier 1</li>
                  <li>Tier 2</li>
                  <li>Tier 3</li>
               </ul>
               <div className="skill-feature">
                  <div className="progress">
                     <div className="progress-bar" style={{ width: "80%" }}>
                     </div>
                  </div>
                  <div className="progress-value-max">100 Min $</div>
               </div>
               <ul className="skill-feature_list style2">
                  <li>$1.5M Soft Cap</li>
                  <li>$3.5 Soft Cap</li>
                  <li>$15M Hard Cap</li>
               </ul>
               <div className="banner-countdown-wrap">
                  <div className="coming-time" data-countdown="2024/5/25">
                  <CountdownClock />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Hero
