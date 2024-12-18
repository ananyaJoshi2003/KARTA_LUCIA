import React, { useEffect, useState } from "react";
import ContactSection from "../../Home/Contact/Contact";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link, useParams } from "react-router-dom";
import {
  getPortfolioById,
  getPortfolioByListNameLogo,
  // createContact,
} from "../../services/portfolioService";

// import Contact from "../Contact/Contact";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import ReactPlayer from "react-player";
import "./Details.css";

// import Master from "../../Assets/Details/Master.jpg";

// import required modules
import { Autoplay, FreeMode } from "swiper/modules";


const Details = () => {
  const { projectId } = useParams();

  const [portfolios, setPortfolios] = useState({});
  const [isDataFetched, setIsDataFetched] = useState(false);
  const [videoUrls, setVideoUrls] = useState([]);

  const [portfolioList, setPortfolioList] = useState([]);

  useEffect(() => {
    if (!isDataFetched) {
      fetchPortfolios();
      fetchPortfolioList();
    }
  }, [isDataFetched]);

  const fetchPortfolios = async () => {
    try {
      const portfoliosData = await getPortfolioById(projectId);

      const urls = [];
      for (let i = 1; i <= 18; i++) {
        const key = `workUrl_${i}`;
        if (portfoliosData.data[key]) {
          urls.push(portfoliosData.data[key]);
        }
      }
      setVideoUrls(urls);

      setPortfolios(portfoliosData.data);
      setIsDataFetched(true);
    } catch (error) {
      console.error("Error fetching portfolios:", error);
    }
  };

  const fetchPortfolioList = async () => {
    try {
      const data = await getPortfolioByListNameLogo();
      setPortfolioList(data.data);
      setIsDataFetched(true);
      console.log(data.data, "getPortfolioByListNameLogo");
    } catch (error) {
      console.error("Error fetching portfolios:", error);
    }
  };

  // const videoId = "tgbNymZ7vqY"; // Replace with desired video ID

  return (
    <>
      {/* Master Image */}
      <div className="master">
        {/* <img src={portfolios.masterImg} alt="" srcset="" /> */}
        <ReactPlayer
          url={portfolios.videoUrl}
          playing={true}
          muted={true}
          className="goodimg"
          width="100%"
          height="100%"
          controls={false}
          loop
        />
      </div>

      <div className="details-container">
        {/* Head */}

        <div className="details-heading">
          <h1>{portfolios.title}</h1>
          <p>{portfolios.desc}</p>
        </div>

        {/*  */}

        {/* Good Images */}
        
        <div className="goodimg">
          <img src={portfolios.imageUrl} alt="" srcset="" />
        </div>

        {/* Swiper */}
        <Swiper
          slidesPerView={1} /* Show 1 slide on small screens */
          spaceBetween={20}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, FreeMode]}
          className="mySwiper"
        >
          {videoUrls.map((url, index) => (
            <SwiperSlide key={index} className="testimonial-slide">
              <div className="testimonial-card">

                <ReactPlayer
                  className="testimonial-photo"
                  url={url}
                  playing={true} // Autoplay
                  muted={true} // Muted
                  controls={false} // Hide YouTube controls
                  loop // Loop video
                  width="100%" // Full width of container
                  height="100%" // Full height of container
                  playsinline={true} // Allow the video to play inline on mobile
                  config={{
                    youtube: {
                      playerVars: {
                        modestbranding: 1, // Hides YouTube logo
                        showinfo: 0, // Hides video title
                        rel: 0, // Prevents showing related videos
                        controls: 0, // Hides player controls
                      },
                    },
                  }}
                />

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <ContactSection />
      </div>
    </>
  );
};

export default Details;
