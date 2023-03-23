import Card from "@/components/Card"
import Header from "@/components/Header";
import CardImg from "@/components/CardImg";
import CardBody from "@/components/CardBody";
import CardLayer from "@/components/CardLayer";
import { useState } from "react";
import { animateToCenter, animateCardLayer, animateCardToggle, useMediaQuery } from "@/utils";
import { listPage } from "@/assets/listPage";

export default function Home() {
  const [isClicked, setIsClicked] = useState(false);
  const isSmall = useMediaQuery('(max-width: 500px)');
  var column_1 = [];
  var column_2 = [];
  var column_3 = [];
  var counter = 1;

  for (let i = 0; i < listPage.length; i++) {
    switch (counter) {
      case 1:
        column_1.push(listPage[i]);
        break;
      case 2:
        column_2.push(listPage[i]);
        break;
      case 3:
        column_3.push(listPage[i])
        counter = 0;
        break;
      default:
        break;
    }

    counter++;
  }

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
      <Header />
      {/* card list */}
      <div className="w-full px-4 md:max-w-7xl md:justify-start flex flex-row flex-wrap gap-4 justify-center items-start">
        {/* column 1 */}
        <div className="flex flex-col gap-4">
          {column_1.map(col1 => (
            <Card key={col1.id} id={`card-${col1.id}`}>
              <CardImg className="cursor-pointer" src={col1.image} onClick={() => animate(col1.id)} id={col1.id} />
              <CardBody
                onClick={() => animate(col1.id)}
                id={`card-body-${col1.id}`}
                title={col1.title}
                subTitle={col1.subtitle}
                className="left-96"
              />
              <CardLayer id={col1.id} onClick={() => showImage(col1.id)} className="left-96" />
              <div
                id={`cardToggle-${col1.id}`}
                className="w-20 h-full absolute z-50  flex justify-end
              items-center left-[23rem] text-2xl bg-red-400 cursor-pointer scale-50 rounded-md"
                onClick={() => showCard(col1.id)}
              />
            </Card>
          ))}
        </div>
        {/* column 2 */}
        <div className="flex flex-col gap-4">
          {column_2.map(col2 => (
            <Card key={col2.id} id={`card-${col2.id}`}>
              <CardImg className="cursor-pointer" src={col2.image} onClick={() => animate(col2.id)} id={col2.id} />
              <CardBody
                onClick={() => animate(col2.id)}
                id={`card-body-${col2.id}`}
                title={col2.title}
                subTitle={col2.subtitle}
                className="left-96"
              />
              <CardLayer id={col2.id} onClick={() => showImage(col2.id)} className="left-96" />
              <div
                id={`cardToggle-${col2.id}`}
                className="w-20 h-full absolute z-50  flex justify-end
              items-center left-[23rem] text-2xl bg-red-400 cursor-pointer scale-50 rounded-md"
                onClick={() => showCard(col2.id)}
              />
            </Card>
          ))}
        </div>
        {/* column 3 */}
        <div className="flex flex-col gap-4">
          {column_3.map(col3 => (
            <Card key={col3.id} id={`card-${col3.id}`}>
              <CardImg className="cursor-pointer" src={col3.image} onClick={() => animate(col3.id)} id={col3.id} />
              <CardBody
                onClick={() => animate(col3.id)}
                id={`card-body-${col3.id}`}
                title={col3.title}
                subTitle={col3.subtitle}
                className="left-96"
              />
              <CardLayer id={col3.id} onClick={() => showImage(col3.id)} className="left-96" />
              <div
                id={`cardToggle-${col3.id}`}
                className="w-20 h-full absolute z-50  flex justify-end
            items-center left-[23rem] text-2xl bg-red-400 cursor-pointer scale-50 rounded-md"
                onClick={() => showCard(col3.id)}
              />
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
