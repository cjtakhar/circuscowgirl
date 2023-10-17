import { Link } from "react-router-dom";
import Image from "../images/thehorse.jpg";
import "../styles/media.css";

const Media = () => {
  return (
    <div className="news-container">
      <h1 className="title">Media</h1>
      <div className="media">
        <div className="videos">
          <h2 className="video-title">Videos</h2>
          <div className="vid-box">
          <div className="video-container">
            <iframe
              className="video-frame"
              src="https://www.youtube.com/embed/am-4y17lg6A"
              title="YouTube Video"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <p className="video-caption">Lasso Performance</p>
          </div>
          <div className="video-container">
            <iframe
              className="video-frame"
              src="https://www.youtube.com/embed/g2t0QIBX5ts"
              title="YouTube Video"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <p className="video-caption">Lasso Demo</p>
          </div>
          <div className="video-container">
            <iframe
            className="video-frame"
              src="https://www.youtube.com/embed/nXrWC5zD4tM"
              title="YouTube Video"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <p className="video-caption">Trick Riding</p>
          </div>
          <div className="video-container">
            <iframe
              className="video-frame"
              src="https://www.youtube.com/embed/ezGpi2ImX-M"
              title="YouTube Video"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <p className="video-caption">Interview</p>
          </div>
        </div>
        </div>
        <div className="podcasts">
          <div className="podcast-title">
            <h2 className="podcast-title">Podcasts</h2>
          </div>

          <div className="podcast-container">
            <p className="podcast-caption">The Journey On</p>
            <iframe
              className="podcast-iframe"
              src="https://embed.podcasts.apple.com/us/podcast/id1525271300?i=1000550118124"
              title="The Journey On Podcast"
            ></iframe>
          </div>

          <div className="podcast-container">
            <p className="podcast-caption">Horsemanship Radio</p>
            <iframe
              className="podcast-iframe"
              src="https://player.captivate.fm/episode/a70453a8-1f0a-4f94-83bb-1d8c8509cc4d"
              title="Hands On Gloves Podcast"
            ></iframe>
          </div>
          <div className="podcast-container">
    <p className="podcast-caption">Stable Connections</p>
    <iframe
        className="podcast-iframe"
        src="https://embed.podcasts.apple.com/us/podcast/episode-23-kansas-carradine/id1600508854?i=1000559307477"
        title="Stable Connections Podcast"
    ></iframe>
</div>

        </div>
        <div className="press-container">
          <h2 className="press-title">Press</h2>
          <div className="the-horse">
            <Link
              to="https://thehorse.com/191692/connecting-horses-to-the-public-from-black-beauty-to-cavalia/"
              className="news-link"
            >
              <img
                src={Image}
                alt="The Horse Logo"
                className="thehorse-image"
              />
            </Link>
            <p className="press-text"></p>
          </div>
        </div>
      </div>
      <div className="booking-container">
        <Link to="/book">
          <button className="pay-btn">Book</button>
        </Link>
      </div>
    </div>
  );
};

export default Media;
