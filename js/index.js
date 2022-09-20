import {getLatestNews, NEWS_ARR, mapToCard} from './utils.js'

let newsCard = document.getElementsByClassName('news-card')
let newsGrid = document.getElementById('news-grid')

document.body.onload = async () => {
    let newsArr = await NEWS_ARR()
    let newsDataArray = await getLatestNews(newsArr)
    newsGrid.innerHTML = mapToCard(newsDataArray)

}