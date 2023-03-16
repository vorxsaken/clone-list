import Card from "@/components/Card"
import Header from "@/components/Header";
import CardImg from "@/components/CardImg";
import CardBody from "@/components/CardBody";
import building from '../assets/image/building.jpg';
import { gsap } from "gsap";
import { useState } from "react";

export default function Home() {
  const [scrollTop, setScrollTop] = useState(0);
  const [animation, setAnimation] = useState(gsap.timeline({ paused: true }));
  const [isClicked, setIsClicked] = useState(false);

  function setZIndex(id: string) {
    for (let i = 0; i < 12; i++) {
      if (`card-${i}` === id) {
        document.getElementById(`card-${i}`)?.classList.add('z-50');
      } else {
        document.getElementById(`card-${i}`)?.classList.add('z-0');
      }
    }
  }

  function getRelativePosition(id: string) {
    const currentCardEl = document.getElementById(id);
    const centerBoxEl = document.getElementById('centerBox');
    const currentCard = currentCardEl?.getBoundingClientRect();
    const centerBox = centerBoxEl?.getBoundingClientRect();
    // get current card position
    const topCard = currentCard?.top || 0;
    const leftCard = currentCard?.left || 0;
    const centerBoxY = centerBox?.top || 0;
    const centerBoxX = centerBox?.left || 0;
    // get window center point
    const windowX = window.innerWidth / 2;
    const windowY = window.innerHeight / 2;
    // get final point
    const x = (centerBoxX - leftCard) - 180;
    const y = (centerBoxY - topCard) - 150;

    return { x: x, y: y, currentCardEl: currentCardEl }
  }

  function animateToCenter (id: string) {
    const { x, y, currentCardEl } = getRelativePosition(id);

    if (!isClicked) {
      setZIndex(id);
      // animate card
      animation.add(gsap.to(`#${id}`, {
        y: y,
        x: x,
        duration: 0.5,
        scale: 1.4,
        ease: "power1.inOut",
        onComplete: () => {
          document.getElementById('blurOverlay')?.classList.remove('hidden');
        },
        onReverseComplete: () => {
          document.getElementById('blurOverlay')?.classList.add('hidden');
        }
      }));
      animation.play();
      setIsClicked(true);
      return;
    }

    // reverse animation then reset timeline to 0 and clean it 
    animation.reverse().then(() => {
      animation.seek(0).pause().clear();
      currentCardEl?.classList.remove('z-50');
      setIsClicked(false);
    });
  }

  return (
    <div className="flex flex-col justify-center items-center gap-14 py-8">
      <Header
        title="Clone List"
        subTitle="List of design i transform into code (mostly landing page)"
      />
      <div id="centerBox" className="fixed w-5 h-5 top-[40%] bg-black z-10 opacity-0">
      </div>
      <div id="blurOverlay" className="fixed w-full h-screen bg-white top-0 bg-opacity-5 backdrop-blur-md z-40 hidden">
      </div>
      {/* card list */}
      <div className="w-full px-4 md:max-w-7xl md:justify-start flex flex-row flex-wrap gap-8 justify-center items-center">
        {[1, 2, 3, 4, 5, 6].map((i, index) => (
          <Card
            key={index}
            id={`card-${index}`}
            onClick={() => animateToCenter(`card-${index}`)}
          >
            <CardImg src={building} />
            <CardBody
              title="The design from this link and that link"
              subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni totam placeat aliquam? Tempore corrupti eveniet modi aspernatur maxime, praesentium cumque at dicta saepe voluptatibus. Necessitatibus facere autem inventore optio modi."
            />
          </Card>
        ))}
      </div>
    </div>
  )
}
