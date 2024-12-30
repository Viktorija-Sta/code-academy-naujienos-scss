// const NEWS_DATA = [
//     {
//         link: '',
//         imagesSrc:'',
//         imageAlt: '',
//         category: '',
//         title:'',
//         date:''
// },
//     {
//         link: '',
//         imagesSrc:'',
//         imageAlt: '',
//         category: '',
//         title:'',
//         date:''
// },
//     {
//         link: '',
//         imagesSrc:'',
//         imageAlt: '',
//         category: '',
//         title:'',
//         date:''
// },
//     {
//         link: '',
//         imagesSrc:'',
//         imageAlt: '',
//         category: '',
//         title:'',
//         date:''
// },
// ]



let container = document.createElement('div')
container.classList.add('container')


let newsContentWrapper = document.createElement('div')
newsContentWrapper.classList.add('content-wrapper')
container.append(newsContentWrapper)

let newsMainContent = document.createElement('main')
newsMainContent.classList.add('main-content')
newsContentWrapper.append(newsMainContent)

let newsSection = document.createElement('section')
newsSection.classList.add('news-section')
newsMainContent.append(newsSection)

let newsPageTitle = document.createElement('h1')
newsPageTitle.classList.add('page-title', 'section-title')
newsSection.append(newsPageTitle)

let newsWrapper = document.createElement('div')
newsWrapper.classList.add('news-wrapper')
newsSection.append(newsWrapper)

let newsMainNews = document.createElement('div')
newsMainNews.classList.add('main-news')
newsWrapper.append(newsMainNews)

let newsItem1 = document.createElement('div')
newsItem1.classList.add('news-item')
newsMainNews.append(newsItem1)

let link1 = document.createElement('a')
link1.href = ('#')
newsItem1.append(link1)

let newsItemImageWrapper1 = document.createElement('div')
newsItemImageWrapper1.classList.add('news-item-image-wrapper')
link1.append(newsItemImageWrapper1)

let newsItemImage1 = document.createElement('img')
newsItemImage1.src = ('kas-yra-dirbtinis-intelektas.jpg')
newsItemImage1.Alt = ('')
newsItemImageWrapper1.append(newsItemImage1)

let newsItemContentWrapper1 = document.createElement('div')
newsItemContentWrapper1.classList.add('news-item-content-wrapper')
link1.append(newsItemContentWrapper1)

let newsItemCategory1 = document.createElement('span')
newsItemCategory1.classList.add('news-item-category')
newsItemContentWrapper1.append(newsItemCategory1)

let newsItemTitle1 = document.createElement('h2')
newsItemTitle1.classList.add('news-item-title')
newsItemContentWrapper1.append(newsItemTitle1)

let newsItemDate1 = document.createElement('span')
newsItemDate1.classList.add('news-item-date')
newsItemContentWrapper1.append(newsItemDate1)

let newsItem = document.createElement('div')
newsItem.classList.add('news-item')
newsMainNews.append(newsItem)

let link = document.createElement('a')
link.href = ('#')
newsItem.append(link)

let newsItemImageWrapper = document.createElement('div')
newsItemImageWrapper.classList.add('news-item-image-wrapper')
link.append(newsItemImageWrapper)

let newsItemImage = document.createElement('img')
newsItemImage.src = ('20240916_112845-1-scaled-e1728646393611.jpg')
newsItemImage.Alt = ('')
newsItemImageWrapper.append(newsItemImage)

let newsItemContentWrapper = document.createElement('div')
newsItemContentWrapper.classList.add('news-item-content-wrapper')
link.append(newsItemContentWrapper)

let newsItemCategory = document.createElement('span')
newsItemCategory.classList.add('news-item-category')
newsItemContentWrapper.append(newsItemCategory)

let newsItemTitle = document.createElement('h2')
newsItemTitle.classList.add('news-item-title')
newsItemContentWrapper.append(newsItemTitle)

let newsItemDate = document.createElement('span')
newsItemDate.classList.add('news-item-date')
newsItemContentWrapper.append(newsItemDate)

let secondaryNews = document.createElement('div')
secondaryNews.classList.add('secondary-news')
newsWrapper.append(secondaryNews)

let newsItem3 = document.createElement('div')
newsItem3.classList.add('news-item')
secondaryNews.append(newsItem3)

let link3 = document.createElement('a')
link3.href = ('#')
newsItem3.append(link3)

let newsItemImageWrapper3 = document.createElement('div')
newsItemImageWrapper3.classList.add('news-item-image-wrapper')
link3.append(newsItemImageWrapper3)

let newsItemImage3 = document.createElement('img')
newsItemImage3.src = ('automation.jpg')
newsItemImage3.Alt = ('')
newsItemImageWrapper3.append(newsItemImage3)

let newsItemContentWrapper3 = document.createElement('div')
newsItemContentWrapper3.classList.add('news-item-content-wrapper')
link3.append(newsItemContentWrapper3)

let newsItemCategory3 = document.createElement('span')
newsItemCategory3.classList.add('news-item-category')
newsItemContentWrapper3.append(newsItemCategory3)

let newsItemTitle3 = document.createElement('h2')
newsItemTitle3.classList.add('news-item-title')
newsItemContentWrapper3.append(newsItemTitle3)

let newsItemDate3 = document.createElement('span')
newsItemDate3.classList.add('news-item-date')
newsItemContentWrapper3.append(newsItemDate3)

let newsItem4 = document.createElement('div')
newsItem4.classList.add('news-item')
secondaryNews.append(newsItem4)

let link4 = document.createElement('a')
link4.href = ('#')
newsItem4.append(link4)

let newsItemImageWrapper4 = document.createElement('div')
newsItemImageWrapper4.classList.add('news-item-image-wrapper')
link4.append(newsItemImageWrapper4)

let newsItemImage4 = document.createElement('img')
newsItemImage4.src = ('automation.jpg')
newsItemImage4.Alt = ('')
newsItemImageWrapper4.append(newsItemImage4)

let newsItemContentWrapper4 = document.createElement('div')
newsItemContentWrapper4.classList.add('news-item-content-wrapper')
link4.append(newsItemContentWrapper4)

let newsItemCategory4 = document.createElement('span')
newsItemCategory4.classList.add('news-item-category')
newsItemContentWrapper4.append(newsItemCategory4)

let newsItemTitle4 = document.createElement('h2')
newsItemTitle4.classList.add('news-item-title')
newsItemContentWrapper4.append(newsItemTitle4)

let newsItemDate4 = document.createElement('span')
newsItemDate4.classList.add('news-item-date')
newsItemContentWrapper4.append(newsItemDate4)

let buttonLarge = document.createElement('a')
buttonLarge.classList.add('button-large')
buttonLarge.href = ('#')
buttonLarge.textContent = 'Visos naujienos'
newsSection.append(buttonLarge)

let videoSection = document.createElement('section')
videoSection.classList.add('video-section')
newsMainContent.append(videoSection)

let sectionTitle = document.createElement('h2')
sectionTitle.classList.add('section-title')
sectionTitle.textContent = 'Vaizdo įrašai'
videoSection.append(sectionTitle)

let videoList = document.createElement('div')
videoList.classList.add('video-list')
videoSection.append(videoList)

let videoItem = document.createElement('div')
videoItem.classList.add('video-item')
videoList.append(videoItem)

let videoItemTitle = document.createElement('h3')
videoItemTitle.classList.add('video-item-title')
videoItemTitle.textContent = '#6 Studentės istorija: sėkmė slypi disciplinoje'
videoItem.append(videoItemTitle)

let video = document.createElement('iframe')
video.src = 'https://www.youtube.com/embed/Rz6bswWbPqw?si=DsmwzqLZfI_2Evwp'
video.title = 'YouTube video player'
videoItem.append(video)

let buttonLarge1 = document.createElement('a')
buttonLarge1.classList.add('button-large')
buttonLarge1.href = ('#')
buttonLarge1.textContent = 'Visi vaizdo įrašai'
videoSection.append(buttonLarge1)


let sidebarContent = document.createElement('aside')
sidebarContent.classList.add('sidebar-content')
newsContentWrapper.append(sidebarContent)

let podcastSection = document.createElement('section')
podcastSection.classList.add('podcasts-section')
sidebarContent.append(podcastSection)

let sectionTitle2 = document.createElement('h2')
sectionTitle2.classList.add('section-title')
sectionTitle2.textContent = 'Podcastai ir radijo laidos'
podcastSection.append(sectionTitle2)

let podcastList = document.createElement('div')
podcastList.classList.add('podcasts-list')
podcastSection.append(podcastList)

let podcastItem = document.createElement('div')
podcastItem.classList.add('podcast-item')
podcastList.append(podcastItem)

let podcastItemControls = document.createElement('div')
podcastItemControls.classList.add('podcast-item-controls')
podcastItem.append(podcastItemControls)

let podcastImage = document.createElement('img')
podcastImage.classList.add('podcast-image')
podcastImage.src = 'Spotify-260x260.png'
podcastImage.alt = ''
podcastItemControls.append(podcastImage)

let podcastLength = document.createElement('span')
podcastLength.classList.add('podcast-length')
podcastLength.textContent = 'Trukmė: 8:32'
podcastItemControls.append(podcastLength)

let podcastPlay = document.createElement('button')
podcastPlay.classList.add('podcast-play')
podcastPlay.textContent = 'Play'
podcastItemControls.append(podcastPlay)

let podcastItemContent = document.createElement('div')
podcastItemContent.classList.add('podcast-item-content')
podcastItem.append(podcastItemContent)

let podcastTitle = document.createElement('h3')
podcastTitle.classList.add('podcast-title')
podcastTitle.textContent = 'Jei virtualus pasaulis taps realybe, jos neturėtų valdyti „Facebook“'
podcastItemContent.append(podcastTitle)

let podcastDate = document.createElement('span')
podcastDate.classList.add('podcast-date')
podcastDate.textContent = '2021-08-11'
podcastItemContent.append(podcastDate)

let newsSection1 = document.createElement('section')
newsSection1.classList.add('news-section')
sidebarContent.append(newsSection1)

let sectionTitle0 = document.createElement('h2')
sectionTitle0.classList.add('section-title')
sectionTitle0.textContent = 'Renginiai'
newsSection1.append(sectionTitle0)

let eventList = document.createElement('div')
eventList.classList.add('events-list')
newsSection1.append(eventList)

let eventItem = document.createElement('div')
eventItem.classList.add('event-item')
eventList.append(eventItem)

let eventLink = document.createElement('a')
eventLink.href = '#'
eventItem.append(eventLink)

let eventItemImageWrapper = document.createElement('div')
eventItemImageWrapper.classList.add('event-item-image-wrapper')
eventLink.append(eventItemImageWrapper)

let eventItemImage = document.createElement('img')
eventItemImage.classList.add('event-item-image')
eventItemImage.src = 'CA_event_dirbtuves-su-Mariumi-Paresiumi_2024-10-26_FB-post_1080x1080 (2).jpg'
eventItemImage.alt = ''
eventItemImageWrapper.append(eventItemImage)

