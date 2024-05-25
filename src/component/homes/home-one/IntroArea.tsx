import Image from "next/image";

import intro_thumb from "@/assets/img/update/normal/intro_1-1.png";

interface DataType {
   id: number;
   title: string;
   desc: JSX.Element;
}

const intro_data: DataType[] = [
   {
      id: 1,
      title: "Who We Are",
      desc: (<p>Prospera is a trailblazing DeFi protocol underpinned by a private wealth crypto hedge fund, dedicated to enhancing holder wealth through dividends and robust ecosystem strategies.</p>),
   },
   {
      id: 2,
      title: "Wealth?",
      desc: (<p>&quot;Unlock your path to financial freedom with $PROS token, where stable quarterly dividends transform your investments into a steady stream of passive income, empowering you to live freely on your terms.&quot;</p>),
   },
   {
      id: 3,
      title: "True Riches?",
      desc: (<p>Fuck All The Bullshit! The Insanity Of Our Growth Attracts The Whole Community. Once $PROS Has A Full Quarter Underneath Our Belt, Game Over! Send it higher!</p>),
   },
]

const IntroArea = () => {
   return (
      <div className="pt-130 overflow-hidden bg-black2">
         <div className="container">
            <div className="row">
               <div className="col-xl-6">
                  <div className="section-title mb-45">
                     <h2 className="title style2">Introducing Prospera's $PROS Token</h2>
                     <p className="sec-text">True Real World Value In The Realm Of De-Fi</p>
                  </div>
               </div>
            </div>
            <div className="row justify-content-between">
               <div className="col-xl-4">
                  {intro_data.map((item) => (
                     <div key={item.id} className="intro-wrap">
                        <h6 className="intro-wrap-title">{item.title}</h6>
                        {item.desc}
                     </div>
                  ))}
               </div>
               <div className="col-xl-6">
                  <div className="intro-thumb1 alltuchtopdown">
                     <Image src={intro_thumb} alt="img" />
                  </div>
                  <div className="intro-wrap mt-50">
                     <h6 className="intro-wrap-title">Our Mission & Vision</h6>
                     <p className="intro-wrap-text mt-40">At Prospera, we are dedicated to redefining wealth management in the digital era. Our mission is to empower our token holders by distributing sustainable passive income through quarterly dividends, 
                     fueled by a percentage of profits from our pioneering private wealth crypto hedge fund.
                        (applies to all transactions and gives a monthly dividend)</p>
                     <p className="intro-wrap-text mt-40">We are committed to maintaining a robust tokenomics ecosystem that ensures liquidity and promotes growth through continuous reinvestment in marketing, events, and community engagement.</p>
                     <p className="intro-wrap-text mt-40">Our vision is a future where every Prospera holder achieves unparalleled financial prosperity and security, leveraging blockchain technology to transform their investment into lasting wealth.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default IntroArea
