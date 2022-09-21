import {getLatestNews, NEWS_ARR, mapToCard} from './utils.js'

let newsGrid = document.getElementById('news-grid')
let showMoreButton = document.getElementById('show-more')

document.body.onload = async () => {
    let newsArr = await NEWS_ARR()
    let newsDataArray = await getLatestNews(newsArr)
    newsGrid.innerHTML = mapToCard(newsDataArray)

    showMoreButton.onclick = async () => {
        newsDataArray = await getLatestNews(newsArr)
        newsGrid.innerHTML = mapToCard()
    }

}