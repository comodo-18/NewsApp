import { React, useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  const { country, pageSize, category, api } = props;

  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setIsLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);

  const fetchNews = async () => {
    setIsLoading(true);
    let response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apikey=${api}&page=${page}&pageSize=${pageSize}`
    );
    let data = await response.json();

    setNews(data.articles);
    setTotalResults(data.totalResults);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchNews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    setPage(page + 1);
    let response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apikey=${api}&page=${
        page + 1
      }&pageSize=${pageSize}`
    );
    let data = await response.json();

    setNews(news.concat(data.articles));
    setTotalResults(data.totalResults);
  };

  return (
    <>
      <h1 className="text-center" style={{ margin: "40px 0px", marginTop:'90px' }}>
        Top headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={news.length}
        next={fetchMoreData}
        hasMore={news.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {news.map((everyNews) => {
              return (
                <div className="col-md-4" key={everyNews.url}>
                  <NewsItem
                    title={everyNews.title}
                    description={everyNews.description}
                    imageUrl={everyNews.urlToImage}
                    newsUrl={everyNews.url}
                    author={everyNews.author}
                    date={everyNews.publishedAt}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};
