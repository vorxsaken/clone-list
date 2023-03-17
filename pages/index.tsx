import Card from "@/components/Card"
import Header from "@/components/Header";
import CardImg from "@/components/CardImg";
import CardBody from "@/components/CardBody";
import building from '../assets/image/building.jpg';
import { gsap } from "gsap";
import { useState } from "react";

export default function Home() {
  const [scrollTop, setScrollTop] = useState(0);
  const [centerAnimation, setCenterAnimation] = useState(gsap.timeline({ paused: true }));
  const [cardAnimation, setCardAnimation] = useState(gsap.timeline({ paused: true }));
  const [isClicked, setIsClicked] = useState(false);
  const [array, setArray] = useState([1, 2, 3, 4, 5, 6]);

  function setZIndex(id: any) {
    for (let i = 0; i < 12; i++) {
      if (`card-${i}` === `card-${id}`) {
        document.getElementById(`card-${i}`)?.classList.add('z-50');
      } else {
        document.getElementById(`card-${i}`)?.classList.add('z-0');
      }
    }
  }

  function getRelativePosition(id: any) {
    const currentCardEl = document.getElementById(`card-${id}`);
    const centerBoxEl = document.getElementById('centerBox');
    const currentCard = currentCardEl?.getBoundingClientRect();
    const centerBox = centerBoxEl?.getBoundingClientRect();
    // get current card position
    const topCard = currentCard?.top || 0;
    const leftCard = currentCard?.left || 0;
    const centerBoxY = centerBox?.top || 0;
    const centerBoxX = centerBox?.left || 0;
    // get final point
    const x = (centerBoxX - leftCard) - 180;
    const y = (centerBoxY - topCard) - 150;

    return { x: x, y: y, currentCardEl: currentCardEl }
  }

  function animateToCenter(id: any) {
    const { x, y, currentCardEl } = getRelativePosition(id);

    if (!isClicked) {
      setZIndex(id);
      // animate card
      centerAnimation.add(gsap.to(`#card-${id}`, {
        y: y,
        x: x,
        scale: 1.7,
        duration: 0.5,
        ease: "power1.inOut",
        onComplete: () => {
          document.getElementById('blurOverlay')?.classList.remove('hidden');
        },
        onReverseComplete: () => {
          document.getElementById('blurOverlay')?.classList.add('hidden');
        }
      }));

      cardAnimation.add(gsap.to(`#layer1-${id}`, {
        x: -384,
        duration: 0.3,
        delay: 0.2,
        ease: 'power1.out'
      }))

      cardAnimation.add(gsap.to(`#layer2-${id}`, {
        x: -374,
        duration: 0.3,
        ease: 'power1.out'
      }), '<0.15')

      cardAnimation.add(gsap.to(`#card-body-${id}`, {
        x: -364,
        duration: 0.3,
        ease: 'power1.out'
      }), '<0.15')

      cardAnimation.add(gsap.to(`#layer3-${id}`, {
        x: -90,
        duration: 0.3,
        ease: 'power1.out'
      }), '<0.1')

      centerAnimation.play();
      cardAnimation.play()
      setIsClicked(true);
      return;
    }

    // reverse animation then reset timeline to 0 and clean it
    cardAnimation.reverse().then(() => {
      cardAnimation.seek(0).pause().clear();
    })

    centerAnimation.reverse().then(() => {
      centerAnimation.seek(0).pause().clear();
      currentCardEl?.classList.remove('z-50');
      setIsClicked(false);
    });
  }

  const subtitle = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur vitae cupiditate veniam, fugiat dicta facere! Iure, corporis quaerat nemo sint aspernatur aliquid, at quisquam omnis ipsa adipisci amet autem necessitatibus.'

  return (
    <div className="flex flex-col justify-center items-center gap-14 py-8">
      <div id="centerBox" className="fixed w-5 h-5 top-[40%] left-[54%] md:left-[50%] bg-black z-10 opacity-0" />
      <div id="blurOverlay" className="fixed w-full h-screen bg-white top-0 bg-opacity-0 z-40 hidden" />
      <Header
        title="Clone List"
      >
        list of design i transform into code <br /> (mostly landing page)
      </Header>
      {/* card list */}
      <div className="w-full px-4 md:max-w-7xl md:justify-start flex flex-row flex-wrap gap-8 justify-center items-start">
        {array.map((i, index) => (
          <Card
            key={index}
            id={`card-${index}`}
          >
            <CardImg src={building} onClick={() => animateToCenter(index)} />
            <CardBody
              onClick={() => animateToCenter(index)}
              id={`card-body-${index}`}
              title="The design from this link and that link"
              subTitle={subtitle}
            />
            <div id={`layer1-${index}`} className="w-full h-full bg-blue-400 absolute left-96" />
            <div id={`layer2-${index}`} className="w-full h-full bg-yellow-400 absolute left-96" />
            <div id={`layer3-${index}`} className="w-20 h-6 absolute z-50 bottom-5 flex justify-end
             items-center left-96 text-2xl" />
          </Card>
        ))}
      </div>
    </div>
  )
}
