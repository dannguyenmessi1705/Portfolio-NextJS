import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { Swiper as SwiperClass } from "swiper/types";
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
