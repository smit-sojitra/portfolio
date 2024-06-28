// import React from 'react';
// import image from"../assets/Razorpay.png"

// import { FaGithub } from "react-icons/fa";

// const Card = ({item}) => {
    
//     return(
//     <div className='bg'>
//         <div className="card">
//         <button className="mail">
//             {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg> */}
//         </button>
//         <div className="profile-pic ">
//             <img src={image} alt="img" />
//         </div>
//         <div className="bottom">
//             <div className="content bottom-[68px]">
//                 <span className="name">{item.title}</span>
//                 <span className="about-me">{item.desc}</span>
//                 <div className='flex gap-[15px] mt-[20px]'>
//                     {
//                         item.Img.map((item,index)=>(
//                             <img key={index} src={item} width={40} height={40}></img>
//                         ))
//                     }
//                 </div>
//             </div>
//            <div className="bottom-bottom">
//             <div className="bt flex gap-2 items-center cursor-pointer">
//                 <div>Source</div>
//                 <FaGithub/>
//             </div>
//             <button className="button">Preview</button>
//            </div>
//         </div>
//         </div>
//     </div>
//     )
// };
// export default Card;


// import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../Components/ui/3d-card";
// import Link from "next/link";
// import img from '../assets/banner-bg.png'

const  Card = ({item})=> {
  return (
    <CardContainer className="inter-var">
      <CardBody className=" relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-white/[0.2]  w-auto sm:w-[30rem] h-auto rounded-xl p-6 border   ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-[white] dark:text-white"
        >
          {item.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-white text-sm w-full mt-2 dark:text-neutral-300"
        >
          {item.desc}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          {/* <Image
            src={img}
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          /> */}
          <img src={item.image} width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"/>
        </CardItem>
        <div className="flex mt-5 gap-5">
            {
              item.Img.map((img,index)=>(
                <img key={index} src={img} width={40} height={40}/>
              ))
            }
        </div>
        <div className="flex justify-between items-center mt-8">
          <CardItem
            translateZ={20}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs cursor-pointer font-normal text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-white text-black  text-xs font-bold"
          onClick={()=>{console.log('first')}}>
            Source Code
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

export default Card;
