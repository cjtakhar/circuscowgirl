import React from 'react';

const News = () => {
  return (
    <div className="news">
      <h1 className="title">News</h1>
      <iframe
        title="Podcast Episode"
        src="https://embed.podcasts.apple.com/us/podcast/id1525271300?i=1000550118124"
        width="100%"
        height="200"
        frameborder="0"
        scrolling="no"
      ></iframe>
    </div>
  );
};

export default News;
