let newsCard = document.getElementsByClassName('news-card')

export const NEWS_ARR = async () => {
    let response = await fetch('https://hacker-news.firebaseio.com/v0/newstories.json')
       .then(response => response.json())
    return _.chunk(response, 10)

}

export async function getLatestNews(newsArr){
    let lastIndex = newsCard.length / 10
    let newsDataArray = []
    for(let i = 0; i < 10; i++){
        let newsData = await fetch(`https://hacker-news.firebaseio.com/v0/item/${newsArr[lastIndex][i]}.json`)
            .then(response => response.json())
        newsDataArray.push(newsData)
    }
    return newsDataArray
}

export function mapToCard(newsDataArray){
   return newsDataArray.map((news, i) => {
        return`<article class="news-card">
                <h2 class="news-title">${_.get(news, 'title', 'No title Found')}</h2>
            </article>`

    }).join('')
}