class NewsItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set news(news) {
    this._news = news;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
           <style>
              * {
                   margin: 0;
                   padding: 0;
                   box-sizing: border-box;
               }
               :host {
                   display: block;
                   margin-bottom: 18px;
                   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                   border-radius: 10px;
                   overflow: hidden;
               }
              
               .fan-art-news {
                   width: 100%;
                   max-height: 300px;
                   object-fit: cover;
                   object-position: center;
               }
              
               .news-info {
                   padding: 24px;
               }
              
               .news-info > h2 {
                   font-weight: lighter;
               }
              
               .news-info > p {
                   margin-top: 10px;
                   overflow: hidden;
                   text-overflow: ellipsis;
                   display: -webkit-box;
                   -webkit-box-orient: vertical;
                   -webkit-line-clamp: 10; /* number of lines to show */
               }

           </style>
           <img class="fan-art-news" src="${this._news.urlToImage}" alt="News image">
           <div class="news-info">
               <h2>${this._news.title}</h2>
               <p>${this._news.description}</p>
               <p>Tanggal : ${this._news.publishedAt}<br>
               Sumber : ${this._news.source.name} - 
                <a href="${this._news.url}" target="_blink">Link Berita</a>
               </p>
           </div>`;
  }
}

customElements.define("news-item", NewsItem);
