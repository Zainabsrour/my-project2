import Slider from "../Components/SliderCars";
import mer_2 from "../Assets/mer_images/mer_2.jpeg";
import mer_4 from "../Assets/mer_images/mer_4.jpeg";
import mer_9 from "../Assets/mer_images/mer_9.jpeg";
export default function Mercedes() {
  const images = [
    mer_4,
    mer_2,
    mer_9,
  ];

  const captions = [
    "Luxury and Power",
    "Designed for Excellence",
    "Drive the Future",
  ];

  return (
    <div>
      <Slider images={images} captions={captions} />
    </div>
  );
}
