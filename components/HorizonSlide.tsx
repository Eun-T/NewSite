import { useCallback, useEffect, useRef, useState } from "react";

const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const slidesContainerStyles = {
  display: "flex",
  height: "100%",
  transition: "transform ease-out 0.3s",
};

type horizonSlideProps = {
  slides: {
    url: string;
    title: string;
  }[];
  parentWidth: number;
};

const HorizonSlide = ({ slides, parentWidth }: horizonSlideProps) => {
  // const timerRef:{current: NodeJS.Timeout | null} = useRef(null)
  // const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides]);
  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };
  const getSlideStylesWithBackground = (slideIndex: number) => ({
    ...slideStyles,
    // backgroundImage: `url(${slides[slideIndex].url})`,
    width: `${parentWidth}px`,
  });

  const getSlidesContainerStylesWithWidth = () => ({
    ...slidesContainerStyles,
    width: parentWidth * slides.length,
    transform: `translateX(${-(currentIndex * parentWidth)}px)`,
  });

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      goToNext();
    }, 4000);

    return () => clearTimeout(timerRef.current as NodeJS.Timeout);
  }, [goToNext]);

  return (
    <div className="relative h-[500px]">
      <div>
        <div onClick={goToPrevious} className="absolute top-[50%] -translate-y-[50%] left-[32px] text-[45px] z-[10] cursor-pointer text-white">
          ❰
        </div>
        <div onClick={goToNext} className="absolute top-[50%] -translate-y-[50%] right-[32px] text-[45px] z-[10] cursor-pointer text-white">
          ❱
        </div>
      </div>
      <div className="overflow-hidden h-full">
        <div style={getSlidesContainerStylesWithWidth()}>
          {slides.map((_, slideIndex) => (
            // <div
            //   key={slideIndex}
            //   style={getSlideStylesWithBackground(slideIndex)}
            // ></div>
            <img src={slides[slideIndex].url} alt="a" className="" style={getSlideStylesWithBackground(slideIndex)}/>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        {slides.map((slide, slideIndex) => (
          <div
            className="mx-[3px] cursor-pointer text-[20px]"
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizonSlide;
