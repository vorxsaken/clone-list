import { gsap } from "gsap";
import { useEffect, useState } from "react";
import { listPage } from "./assets/listPage";
import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

var centerAnimation = gsap.timeline({ paused: true });
var cardAnimation = gsap.timeline({ paused: true });
var cardToggle = gsap.timeline({ paused: true });
var listPageLength = listPage.length;

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

function setZIndex(id: any) {
    for (let i = 0; i < listPageLength; i++) {
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

function animateCardToggle(id: any, isReverse: boolean, isSmall?: boolean) {
    if (!isReverse) {
        cardToggle.add(gsap.to(`#cardToggle-${id}`, {
            x: isSmall ? -60 : -20,
            delay: 0.5,
            duration: 0.3,
            ease: 'power1.out'
        }))

        cardToggle.play();
        return;
    }

    cardToggle.reverse().then(() => {
        cardToggle.seek(0).pause().clear();
    })
}

function animateCardLayer(id: any, isReverse: boolean) {
    if (!isReverse) {
        cardAnimation.add(gsap.to(`#layer1-${id}`, {
            x: -388,
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

        cardAnimation.play();
        return;
    }

    cardAnimation.reverse().then(() => {
        cardAnimation.seek(0).pause().clear();
    })

}

function animateToCenter(id: any, isClicked: boolean, isSmall?: boolean) {
    return new Promise(resolve => {
        const { x, y, currentCardEl } = getRelativePosition(id);

        if (!isClicked) {
            setZIndex(id);
            // animate card
            centerAnimation.add(gsap.to(`#card-${id}`, {
                y: isSmall ? '' : y,
                x: isSmall ? '' : x,
                scale: isSmall ? 1.05 : 1.7,
                duration: 0.5,
                ease: "power1.inOut",
                onComplete: () => {
                    document.getElementById('blurOverlay')?.classList.remove('hidden');
                },
                onReverseComplete: () => {
                    document.getElementById('blurOverlay')?.classList.add('hidden');
                }
            }));

            centerAnimation.play();
            animateCardLayer(id, false);
            resolve(true);
            return;
        }

        // reverse animation then reset timeline to 0 and clean it
        animateCardLayer(id, true);
        animateCardToggle(id, true);
        centerAnimation.reverse().then(() => {
            centerAnimation.seek(0).pause().clear();
            currentCardEl?.classList.remove('z-50');
            resolve(false)
        });
    })
}


const useMediaQuery = (query: string) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => {
            setMatches(media.matches);
        };
        media.addListener(listener);
        return () => media.removeListener(listener);
    }, [matches, query]);

    return matches as boolean;
}

export { animateToCenter, animateCardLayer, animateCardToggle, useMediaQuery }