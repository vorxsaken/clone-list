import Card from "@/components/Card"
import Header from "@/components/Header";
import CardImg from "@/components/CardImg";
import CardBody from "@/components/CardBody";
import CardLayer from "@/components/CardLayer";
import building from '../assets/image/building.jpg';
import { useState } from "react";
import { animateToCenter, animateCardLayer, animateCardToggle, useMediaQuery } from "@/utils";

export default function Home() {
  const [isClicked, setIsClicked] = useState(false);
  const [array, setArray] = useState([1, 2, 3, 4, 5, 6]);
  const subtitle = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur vitae cupiditate veniam, fugiat dicta facere! Iure'
  const title = "The design from this link and that link";
  const header = <>list of design i transform into code <br /> (mostly landing page)</>
  const isSmall = useMediaQuery('(max-width: 370px)');

  const animate = (id: any) => {
    animateToCenter(id, isClicked, isSmall).then(isClick => setIsClicked(isClick as boolean))
  }

  const showImage = (id: any) => {
    animateCardLayer(id, true)
    animateCardToggle(id, false, isSmall);
  }

  const showCard = (id: any) => {
    animateCardLayer(id, false);
    animateCardToggle(id, true);
  }

  return (
    <div className="flex flex-col justify-center items-center gap-14 py-8">
      <div id="centerBox" className="fixed w-5 h-5 top-[40%] left-[54%] md:left-[50%] bg-black z-10 opacity-0" />
      <div id="blurOverlay" className="fixed w-full h-screen bg-black top-0 bg-opacity-40 z-40 hidden" />
      <Header title="Clone List">
        {header}
      </Header>
      {/* card list */}
      <div className="w-full px-4 md:max-w-7xl md:justify-start flex flex-row flex-wrap gap-8 justify-center items-start">
        {array.map((i, index) => (
          <Card key={index} id={`card-${index}`}>
            <CardImg className="cursor-pointer" src={building} onClick={() => animate(index)} id={index}/>
            <CardBody
              onClick={() => animate(index)}
              id={`card-body-${index}`}
              title={title}
              subTitle={subtitle}
              className="left-96"
            />
            <CardLayer id={index} onClick={() => showImage(index)} className="left-96" />
            <div
              id={`cardToggle-${index}`}
              className="w-20 h-full absolute z-50  flex justify-end
              items-center left-[23rem] text-2xl bg-red-400 cursor-pointer scale-50 rounded-md"
              onClick={() => showCard(index)}
            />
          </Card>
        ))}
      </div>
    </div>
  )
}
