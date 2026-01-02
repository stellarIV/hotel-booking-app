import { Carousel, Typography, Button } from "@material-tailwind/react";

const slides = [
  {
    src: "https://static21.com-hotel.com/uploads/hotel/55200/photo/benmas-hotel_153073731114.jpg",
    title: "Limited Opportunity!",
    description: "First to sell 10 products gets free advertisement for FIVE days.",
  },
  {
    src: "https://static21.com-hotel.com/uploads/hotel/55200/photo/benmas-hotel_15307373085.jpg",
    title: "Kinder Hunt!",
    description: "For those who sell 15 items for free, get a week-long promotion!",
  },
  {
    src: "https://static21.com-hotel.com/uploads/hotel/55200/photo/benmas-hotel_153073730910.jpg",
    title: "Kinder Hunt!",
    description: "For those who sell 15 items for free, get a week-long promotion!",
  },
  {
    src: "https://static21.com-hotel.com/uploads/hotel/55200/photo/benmas-hotel_153073730911.jpg",
    title: "Kinder Hunt!",
    description: "For those who sell 15 items for free, get a week-long promotion!",
  },
  {
    src: "https://static21.com-hotel.com/uploads/hotel/55200/photo/benmas-hotel_153073731528.jpg",
    title: "Hurry! Deals End Soon!",
    description: "Shop now and save big before it's too late!",
  },
  {
    src: "https://static21.com-hotel.com/uploads/hotel/55200/photo/benmas-hotel_153073731219.jpg",
    title: "Hurry! Deals End Soon!",
    description: "Shop now and save big before it's too late!",
  },
  {
    src: "https://static21.com-hotel.com/uploads/hotel/55200/photo/benmas-hotel_153073731321.jpg",
    title: "Hurry! Deals End Soon!",
    description: "Shop now and save big before it's too late!",
  },
];

function RoomCarousel() {
  return (
    <Carousel
      className="h-64 sm:h-[400px] md:h-[600px]"
      autoplay={true}
      interval={3000}
      loop={true}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`md:block h-1 hidden cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {slides.map((slide, index) => (
        <div key={index} className="relative w-full">
          <img
            src={slide.src}
            alt={`slide ${index + 1}`}
            className="h-64 sm:h-[400px] md:h-[600px] w-full object-cover"
          />
          <div className="absolute inset-0 grid max-h-[600px] w-full place-items-center bg-black/35">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                {slide.title}
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80 hidden sm:flex justify-center"
              >
                {slide.description}
              </Typography>
              <div className="flex justify-center gap-2">
                <Button size="lg" color="white">
                  Explore
                </Button>
                <Button size="lg" color="white" variant="text">
                  Gallery
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default RoomCarousel;
