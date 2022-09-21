let newsCard = document.getElementsByClassName('news-card')
let newsDataArray = []

export const NEWS_ARR = async () => {
    let response = await fetch('https://hacker-news.firebaseio.com/v0/newstories.json')
       .then(response => response.json())
    return _.chunk(response, 10)

}

export async function getLatestNews(newsArr){
    let lastIndex = newsCard.length / 10
    for(let i = 0; i < 10; i++){
        let newsData = await fetch(`https://hacker-news.firebaseio.com/v0/item/${newsArr[lastIndex][i]}.json`)
            .then(response => response.json())
        newsDataArray.push(newsData)
    }
}

function unixToDate(unixTimestamp){
    return new Date(unixTimestamp * 1000).toLocaleString()
}

export function mapToCard(){
   return newsDataArray.map((news) => {
       let date = unixToDate(news.time)
        return`<article class="news-card">
                <header class="news-header">
                <h2 class="news-title">${_.get(news, 'title', 'No title Found')}</h2>
            </header>
            <a href=${news.url}>Read More</a>
            <time datetime=${date} class="news-time"> ${date} </time>
            </article>`

    }).join('')
}