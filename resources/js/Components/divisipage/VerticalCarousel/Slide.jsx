import React from "react";
import styled from "@emotion/styled";
import { Spring, animated } from "react-spring/renderprops";
import { withGesture } from "react-with-gesture";

const SlideContainer = styled.div`
    position: absolute;
    height: 70%;
    top: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform-origin: 50% 50%;
`;

const SlideCard = styled.div`
    position: relative;
    max-width: 100%;
    min-width: 30%;
    width: 100vw;
    height: 100%;
    font-size: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform-origin: 50% 50%;
`;

function Slide({
    content,
    offsetRadius,
    index,
    animationConfig,
    moveSlide,
    delta,
    down,
    up,
}) {
    content = content[0];
    const offsetFromMiddle = index - offsetRadius;
    const totalPresentables = 2 * offsetRadius + 1;
    const distanceFactor = 1 - Math.abs(offsetFromMiddle / (offsetRadius + 1));
    const isActive = offsetFromMiddle === 0;

    const namaDivisiClassName = isActive ? "fadeIn" : "fadeOut";
    const penjelasanDivisiClassName = isActive ? "fadeIn" : "fadeOut";

    const translateYoffset =
        50 * (Math.abs(offsetFromMiddle) / (offsetRadius + 1));
    let translateY = -50;

    if (offsetRadius !== 0) {
        if (index === 0) {
            translateY = 0;
        } else if (index === totalPresentables - 1) {
            translateY = -100;
        }
    }

    if (offsetFromMiddle === 0 && down) {
        translateY += delta[1] / (offsetRadius + 1);
        if (translateY > -40) {
            moveSlide(-1);
        }
        if (translateY < -100) {
            moveSlide(1);
        }
    }
    if (offsetFromMiddle > 0) {
        translateY += translateYoffset;
    } else if (offsetFromMiddle < 0) {
        translateY -= translateYoffset;
    }

    const handleWheel = (event) => {
        // Detect scroll direction
        const direction = event.deltaY > 0 ? 1 : -1;
        // Move the slide
        moveSlide(direction);
    };

    return (
        <Spring
            to={{
                transform: `translateX(0%) translateY(${translateY}%) scale(${distanceFactor})`,
                top: `${
                    offsetRadius === 0
                        ? 50
                        : 50 + (offsetFromMiddle * 50) / offsetRadius
                }%`,
                opacity: distanceFactor * distanceFactor,
            }}
            config={animationConfig}
        >
            {(style) => (
                <SlideContainer
                    style={{
                        ...style,
                        zIndex: Math.abs(Math.abs(offsetFromMiddle) - 2),
                    }}
                    onWheel={handleWheel} // Add onWheel event handler
                >
                    <SlideCard onClick={() => moveSlide(offsetFromMiddle)}>
                        <div className="flex flex-row items-center ">
                            <img
                                src={content.contentUrl}
                                alt="img"
                                className="px-5 object-contain h-36 sm:h-48"
                            />
                            <div className="flex flex-col w-100 h-96 ">
                                {/* Use Spring to animate the opacity of the text */}
                                <Spring
                                    to={{
                                        opacity: isActive ? 1 : 0,
                                    }}
                                    config={animationConfig}
                                >
                                    {(textStyle) => (
                                        <animated.div style={textStyle}>
                                            <p className="px-5">
                                                {content.namaDivisi}
                                            </p>
                                            <p className="px-5 md:text-lg text-xs">
                                                {content.penjelasanDivisi}
                                            </p>
                                        </animated.div>
                                    )}
                                </Spring>
                            </div>
                        </div>
                    </SlideCard>
                </SlideContainer>
            )}
        </Spring>
    );
}

export default withGesture()(Slide);
