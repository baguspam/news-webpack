import "./news-item.js";

class NewsList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set news(news) {
    this._news = news;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = "";
    this._news.forEach((news) => {
      const newsItemElement = document.createElement("news-item");
      newsItemElement.news = news;
      this.shadowDOM.appendChild(newsItemElement);
    });
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
        <style>
             .placeholder {
                   font-weight: lighter;
                   color: rgba(0,0,0,0.5);
                   -webkit-user-select: none;
                   -moz-user-select: none;
                   -ms-user-select: none;
                   user-select: none;
               }
        </style>`;
    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define("news-list", NewsList);
