import { GrudCarouselModule } from "../modules/mod_carousel";

const grudCarouselModule = new GrudCarouselModule();

// prettier-ignore
const url ="https://zm6zxgq6hyhe3smi5krzsrk2fu0iidhh.lambda-url.us-east-1.on.aws/";

const fetchCarouselData = async () => {
  console.log("CAROUSEL WORKER STARTED🎊🎊🎊");

  const items = await grudCarouselModule.database.carousel.toArray();

  if (items.length > 0) {
    try {
      const res = await fetch(url);
      console.log(res)
      const data = await res.json();

      console.log("DATA RESPONSE: ", data);

      data.forEach((item) => {
        grudCarouselModule.addCarousel({
          ...item,
        });
      });
    } catch (err) {
      console.log("ERROR: ", err);
    }
  }
};

fetchCarouselData();
