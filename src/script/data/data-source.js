import news from "./news.js";

class DataSource {
  static searchNews(keyword) {
    return fetch(
      //   `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${keyword}`
      `http://newsapi.org/v2/everything?q=${keyword}&from=2020-04-29&sortBy=publishedAt&apiKey=c38c5940c46845659b0ee0c29da6ced5`
    )
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.articles) {
          return Promise.resolve(responseJson.articles);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }
}

export default DataSource;
