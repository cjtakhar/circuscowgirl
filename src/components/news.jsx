import { Link } from 'react-router-dom';
import '../styles/news.css';

const News = () => {
  return (
    <div className="news-container">
      <h1 className="title">News</h1>
      <div className="news"> 
      <div className="podcast-container">
        <iframe className="podcast-iframe" src="https://embed.podcasts.apple.com/us/podcast/id1525271300?i=1000550118124"></iframe>
      </div>

      <div className="podcast-container">
        <iframe className="podcast-iframe" src="https://player.captivate.fm/episode/a70453a8-1f0a-4f94-83bb-1d8c8509cc4d"></iframe>
      </div>
      </div>
      <div className="payment-container">
                < Link to="/book">
                <button className="pay-btn">Book</button>
                </Link>
            </div>
    </div>
  );
};

export default News;

