import { useCallback, useEffect, useRef, useState } from "react";

type horizonSlideProps = {
  slides: {
    url: string;
    title: string;
  }[];
  parentWidth: number;
};

const slideStyles = {
  width: "100%",
  height: "600px",
  borderRadius: "0px",
  backgroundSize: "contain",
  backgroundPosition: "center",
};

const slidesContainerStyles = {
  display: "flex",
  height: "100%",
  transition: "transform ease-out 0.3s",
};

const HorizonSlide = ({ slides, parentWidth }: horizonSlideProps) => {
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
    <div className="relative w-[600px] h-[600px]">
      {/* <div>
        <div onClick={goToPrevious} className="absolute top-[50%] -translate-y-[50%] left-[32px] text-[45px] z-[10] cursor-pointer text-white">
          ❰
        </div>
        <div onClick={goToNext} className="absolute top-[50%] -translate-y-[50%] right-[32px] text-[45px] z-[10] cursor-pointer text-white">
          ❱
        </div>
      </div> */}
      <div className="overflow-hidden h-full">
        <div style={getSlidesContainerStylesWithWidth()}>
          {slides.map((slide, slideIndex) => (
            // <div
            //   key={slideIndex}
            //   style={getSlideStylesWithBackground(slideIndex)}
            // ></div>
            <img
              src={slides[slideIndex].url}
              alt={slide.title}
              style={getSlideStylesWithBackground(slideIndex)}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        {slides.map((slide, slideIndex) => (
          <div
            id={String(slideIndex)}
            className={
              (currentIndex === Number(slideIndex) ? "bg-[#1bbc1b]" : "") + " mx-[3px] cursor-pointer w-[10px] h-[10px] rounded-[50%] bg-[#8f8d8d]"
            }
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HorizonSlide;
