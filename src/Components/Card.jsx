import  { useEffect, useState } from "react";
import { CardBody, CardContainer, CardItem } from "../Components/ui/3d-card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Animation from "./Animation";

const Card = ({ item, containerRef }) => {
  const [zIndex, setZIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");
    let maxZIndex = -1;

    els.forEach((el) => {
      let currentIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      );

      if (currentIndex > maxZIndex) {
        maxZIndex = currentIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsResizing(true);
      setIsDragging(false);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [isResizing])

  return (
    <>
      {
        isResizing ?
          (<Animation>
            <div
              className="drag-elements"
            >
              <CardContainer className="inter-var">
                <CardBody className={`min-h-fit sm:h-[578px] ${isDragging ? 'bg-black' : ''}  relative group/card flex flex-col justify-between hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-white/[0.2] w-auto sm:w-[30rem] rounded-xl p-6 border`}>
                  <CardItem translateZ="50" className="text-xl font-bold text-white">
                    {item.title}
                  </CardItem>
                  <CardItem as="p" translateZ="60" className="text-sm w-full mt-2 text-neutral-300">
                    {item.desc}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <img
                      src={item.image}
                      width="1000"
                      className="h-full object-cover object-center w-full rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="flex mt-5 gap-5">
                    {item.Img.map((img, index) => {
                      return <img key={index} className=' skill-icon' src={img} alt={`thumbnail-${index}`} />
                    }

                    )}
                  </div>
                  <div className="flex justify-between items-center mt-6">
                    <Link to={item.Llink} target="_blank">
                      <CardItem
                        translateZ={20}
                        className="px-4 py-2 rounded-xl text-xs cursor-pointer font-normal text-white"
                      >
                        Try now →
                      </CardItem>
                    </Link>
                    <Link to={item.Glink} target="_blank">
                      <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold"
                        onClick={() => {
                        }}
                      >
                        Source Code
                      </CardItem>
                    </Link>
                  </div>
                </CardBody>
              </CardContainer>
            </div>
          </Animation>) :
          (
            <Animation>
              <motion.div
                className="drag-elements relative"
                style={{ zIndex, transform: isResizing ? 'none' : 'none' }}
                onMouseDown={updateZIndex}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={() => setIsDragging(true)}
                dragConstraints={containerRef}
                dragElastic={0.65}
                drag={isResizing ? false : true}
              >
                <CardContainer className="inter-var">
                <CardBody className={`min-h-fit sm:h-[578px] ${isDragging ? 'bg-black' : ''}  relative group/card flex flex-col justify-between hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-white/[0.2] w-auto sm:w-[30rem] rounded-xl p-6 border`}>
                  <CardItem translateZ="50" className="text-xl font-bold text-white">
                    {item.title}
                  </CardItem>
                  <CardItem as="p" translateZ="60" className="text-sm w-full mt-2 text-neutral-300">
                    {item.desc}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <img
                      src={item.image}
                      width="1000"
                      className="h-full object-cover object-center w-full rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="flex mt-5 gap-5">
                    {item.Img.map((img, index) => {
                      return <img key={index} className=' skill-icon' src={img} alt={`thumbnail-${index}`} />
                    }

                    )}
                  </div>
                  <div className="flex justify-between items-center mt-6">
                    <Link to={item.Llink} target="_blank">
                      <CardItem
                        translateZ={20}
                        className="px-4 py-2 rounded-xl text-xs cursor-pointer font-normal text-white"
                      >
                        Try now →
                      </CardItem>
                    </Link>
                    <Link to={item.Glink} target="_blank">
                      <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold"
                        onClick={() => {
                        }}
                      >
                        Source Code
                      </CardItem>
                    </Link>
                  </div>
                </CardBody>
              </CardContainer>
              </motion.div>
            </Animation>
          )
      }

    </>

  );
};

export default Card;
