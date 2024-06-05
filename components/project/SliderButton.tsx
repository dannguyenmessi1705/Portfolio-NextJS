import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { Swiper as SwiperClass } from "swiper/types";
import { useEffect } from "react";
type Props = {
  containerStyle: string;
  buttonStyle: string;
  iconStyle?: string;
};
export default function SliderButton({
  containerStyle,
  buttonStyle,
  iconStyle,
}: Props) {
  const swiper: SwiperClass = useSwiper();
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        swiper.slideNext();
      } else if (e.key === "ArrowLeft") {
        swiper.slidePrev();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [swiper]);
  
  return (
    <div className={containerStyle}>
      <button className={buttonStyle} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={iconStyle} />
      </button>
      <button className={buttonStyle}>
        <PiCaretRightBold
          className={iconStyle}
          onClick={() => swiper.slideNext()}
        />
      </button>
    </div>
  );
}
