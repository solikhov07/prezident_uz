const menuBtn = document.querySelector('.header-sidebar-btn')
const headerSidebar = document.querySelector('.header-sidebar')
const closeSidebarBtn = document.querySelector('.header-sidebar-close-btn-box > i')
const searchSidebarBtn = document.querySelector('.header-research-control > i')
const searchSidebar = document.querySelector('.header-search-sidebar')
const closeSeacrhSidebarBtn = document.querySelector('.header-search-sidebar-close-btn-box > i')
const searchSidebarForm = document.querySelector('.header-search-sidebar-form')
const searchSidebarInput = document.querySelector('.header-search-sidebar-form > input')
const searchSidebarInputPlaceholder = document.querySelector('.header-search-sidebar-form > label')
const searchSidebarTextWarning = document.querySelector('.header-search-sidebar-form > p')
const navMenuBtn = document.querySelector('.header-nav-menu-btn > i')
const headerNavUl = document.querySelector('.header-nav-990version')
const headerPhoneMenuBtn = document.querySelector('.header-sidebar-btn-phone')
const headerPhoneNavBox = document.querySelector('.header-nav-990version')
const headerPhoneUlBtn = document.querySelector('.header-nav-ul-btn-phone')
const selectHeaderLanguageBox = document.querySelector('.header-select-language')
const selectHeaderLanguageText = document.querySelector('.language-text')
const headerPhoneLanguageSelector = document.querySelector('.header-language-select-text > span')
const headerPhoneLanguageSelectBox = document.querySelector('.header-language-select-text > div')
const mainCardsContainer = document.querySelector('.main-cards-container')
const scrollTop = document.querySelector('.scrolltop')
const videoCardsContainer = document.querySelector('.container-video-visits')
const videoContainer = document.querySelector('.video-container')
const videoPlayer = document.querySelector('.video-player-box > video')
const videoShadowBox = document.querySelector('.box-shadow-video')
const btnCloseVideo = document.querySelector('.btn-close-video-box > i')
const worldController = document.querySelector('#world-controller')
const regionController = document.querySelector('#region-controller')
const worldMapSvg = document.querySelector('.svg-world')
const worldCountries = document.querySelectorAll(".svg-world  path")
const regionMapSvg = document.querySelector('.svg-region')
const regionAreasSvg = document.querySelectorAll('.svg-region path')
const visitMapContainer = document.querySelector(".map-visit-container")
const btnCloseVisitMapContainer = document.querySelector('.btn-close-box-visit > i')
const visitedCountryName = document.querySelector(".visit-heading-text")
const visitImg = document.querySelector('.visit-picture-box > img')
const visitCount = document.querySelector('.visit-info-text')
const btnPlusSvg = document.querySelector('.btn-svg-plus')
const btnMinusSvg = document.querySelector('.btn-svg-minus')
const boxNameCountry = document.querySelector('.box-country-name')
const eventsCardsContainer = document.querySelector('.cards-events-box')
menuBtn.addEventListener('click', e => {
    searchSidebar.style.right = '-100%'
    headerSidebar.style.left = 0
})

closeSidebarBtn.addEventListener('click', e => {
    headerSidebar.style.left = '-100%' 
})
searchSidebarBtn.addEventListener('click', e => {
    headerSidebar.style.left = '-100%'
    searchSidebar.style.right= 0
})
closeSeacrhSidebarBtn.addEventListener('click', e => {
    searchSidebar.style.right= '-100%'
})
searchSidebarInput.addEventListener('input', e => {
if(searchSidebarInput.value.length > 0){
    searchSidebarInputPlaceholder.innerHTML = ''
    searchSidebarTextWarning.style.visibility = 'hidden'
}
else if(searchSidebarInput.value.length == 0){
    searchSidebarInputPlaceholder.innerHTML = 'Сўзни киритинг'
    searchSidebarTextWarning.style.visibility = 'visible'
}
})

let state = false
navMenuBtn.addEventListener('click', e => {
    state = !state
if(state === true){
    headerNavUl.style.height = '300px'
}
else {
    headerNavUl.style.height = '70px'
}
})

headerPhoneMenuBtn.addEventListener('click', e => {
headerPhoneNavBox.style.top = 0
})
headerPhoneUlBtn.addEventListener('click', e => {
    headerPhoneNavBox.style.top = '-100%'   
})
selectHeaderLanguageBox.addEventListener('click', e => {
    selectHeaderLanguageText.innerHTML = e.target.innerHTML
})
headerPhoneLanguageSelectBox.addEventListener('click', e => {
    headerPhoneLanguageSelector.innerHTML = e.target.innerText
})
const mainCardData = [
    {
        photo: './image/president-card-photo-1.png',
        text: '«Фаол тадбиркор» кўкрак нишони билан тақдирлаш тўғрисида',
        date: '14-08-2024'
    },
    {
        photo: './image/president-card-photo-1.png',
        text: 'Тадбиркорлар куни муносабати билан соҳа вакилларидан бир гуруҳини мукофотлаш тўғрисида',
        date: '14-08-2024'
    },
    {
        photo: './image/president-card-photo-2.png',
        text: 'Сунъий интеллект ва стартап лойиҳаларни ривожлантириш бўйича тақдимот ўтказилди',
        date: '13-08-2024'
    },
    {
        photo: './image/president-card-photo-1.png',
        text: 'Иш ҳақи, пенсиялар ва нафақалар миқдорини ошириш тўғрисида',
        date: '12-08-2024'
    },
    {
        photo: './image/president-card-photo-3.png',
        text: 'Туманларни иқтисодий ривожлантириш ва аҳоли даромадини ошириш чоралари муҳокама қилинди',
        date: '12-08-2024'
    },
    {
        photo: './image/president-card-photo-4.png',
        text: 'Ўзбекистон қурувчиларига байрам табриги',
        date: '10-08-2024'
    }
]
mainCardData.forEach(e => {
    mainCardsContainer.innerHTML += `
    <div class="main-card">
    <div class="main-card-photo">
      <img class="card-news-photo" src=${e.photo} alt="president-photo-news">
    </div>
    <div class="main-card-text">
    <p>${e.text.toUpperCase()}</p>
    </div>
    <div class="main-card-date-info">
    <span>${e.date}</span> <span class='main-card-date-text'><i class="bi bi-arrow-right"></i></span>
    </div>
  </div>
    `
});

scrollTop.addEventListener('click', e => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
})

videoCardsContainer.addEventListener('click', e => {
    videoContainer.style.top = '0'
    videoPlayer.src = e.target.id
})
videoShadowBox.addEventListener('click', e => {
    videoContainer.style.top = '-100%'
    videoPlayer.src = ''
})
btnCloseVideo.addEventListener('click', e => {
    videoContainer.style.top = '-100%'
    videoPlayer.src = ''
})

regionController.style.cursor = 'pointer'
worldController.style.color = '#0445b1'
worldController.style.borderColor = '#0445b1'
worldController.style.cursor = 'default'

worldController.addEventListener('click', e => {
    regionController.style.color = '#8a8a8a'
    regionController.style.borderColor = '#8a8a8a'
    regionController.style.cursor = 'pointer'
    worldController.style.color = '#0445b1'
    worldController.style.borderColor = '#0445b1'
    worldController.style.cursor = 'default'
    worldMapSvg.style.display = 'block'
    regionMapSvg.style.display = 'none'
})

regionController.addEventListener('click', e => {
    worldController.style.color = '#8a8a8a'
    worldController.style.borderColor = '#8a8a8a'
    worldController.style.cursor = 'pointer'
    regionController.style.color = '#0445b1'
    regionController.style.borderColor = '#0445b1'
    regionController.style.cursor = 'default'
    worldMapSvg.style.display = 'none'
    regionMapSvg.style.display = 'block'
})
let countryid = ''
let previousId = []
function imgLinkFix(link){
    return './image/' + link + ".jpg"
}
const visitedCountries = [{id:'jqvmap1_usa', img: 'usa-visit', visitCount: [1, 1], country: 'Америка Қўшма Штатларига'}, {id:'jqvmap1_rus', img: 'russia-visit', visitCount: ['1', '5'], country: 'Россия Федерациясига'}, {id: 'jqvmap1_fra', img: 'france-visit', visitCount: [1], country: 'Франция Республикасига'}, {id: 'jqvmap1_deu', img: 'germany-visit', visitCount: [1, 1], country: 'Германия Федератив Республикасига'},{id: 'jqvmap1_ita', img: 'italy-visit', visitCount: [1], country:'Италияга'},{id: 'jqvmap1_hun', img: 'hungary-visit', visitCount: [1], country: 'Венгрияга'}, {id: 'jqvmap1_blr', img: 'belarus-visit', visitCount: [1], country: 'Беларусь Республикаси'},{id: 'jqvmap1_kaz', img: 'kazakstan-visit', visitCount: [1, 6], country: 'Қозоғистон Республикасига'},{id:'jqvmap1_kgz', img: 'kirgizistan-visit', visitCount: [1, 2], country: 'Қирғиз Республикасига'},{id: 'jqvmap1_tkm', img: 'turkmenistan-visit', visitCount: [1, 4], country: 'Туркманистонга'},{id: 'jqvmap1_aze', img: 'azerbayjan-visit', visitCount: [1], country: 'Озарбайжонга'},{id: 'jqvmap1_irn', img: 'iran-visit', visitCount: [1], country: 'Эронга'},{id: 'jqvmap1_tur', img: 'turkey-visit', visitCount: [1, 2], country: 'Туркия Республикасига'}, {id: 'jqvmap1_pak', img: 'pakistan-visit', visitCount: [1], country: 'Покистонга'},{id: 'jqvmap1_are', img: 'uae-visit', visitCount: [1, 1], country: 'Бирлашган Араб Амирликларига '},{id: 'jqvmap1_sau', img: 'saudi-visit', visitCount: [1, 1], country: 'Саудия Арабистонига'},{id: 'jqvmap1_egy', img: 'egypt-visit', visitCount: [1], country: 'Мисрга'},{id: 'jqvmap1_ind', img: 'india-visit', visitCount: [1, 1], country: 'Ҳиндистонга'},{id: 'jqvmap1_chn', img: 'china-visit', visitCount: [2,3], country: 'Хитой Халқ Республикасига'}, {id: 'jqvmap1_kor', img: 'korea-visit', visitCount: [1], country: 'Корея Республикасига'},{id: 'jqvmap1_jpn', img: 'japan-visit', visitCount: [1], country: 'Японияга'}, {id: 'jqvmap1_tjk' ,img: 'tajikistan-visit' ,visitCount: [1, 2],country: 'Тожикистон Республикасига'} ]
const visitedCountriesId = visitedCountries.map(e => e.id)
worldCountries.forEach(e => {
    e.addEventListener('mouseover', a => {
        if(visitedCountries.filter(b => b.id == e.id).length > 0){ 
            boxNameCountry.style.visibility = 'visible'
            boxNameCountry.style.top  = a.clientY - 40 + 'px'
            boxNameCountry.style.left = a.clientX - 80 + 'px'
            boxNameCountry.innerHTML = `<span>${visitedCountries.filter(b => b.id == e.id)[0].country.split(' ')[0].split('га')[0]}</span>`
        }
        if(visitedCountries.filter(b => b.id == e.id).length == 0 && e.id != 'jqvmap1_uzb'){
        e.style.fill = 'rgb(100, 138, 177)'    
        }
    })
    e.addEventListener('mouseleave', a => {
        boxNameCountry.style.visibility = 'hidden'
        if(visitedCountries.filter(b => b.id == e.id).length == 0 && e.id != 'jqvmap1_uzb') e.style.fill = '#dbe5f9' 
    })
        if(!visitedCountriesId.includes(e.id) && e.id !='jqvmap1_uzb'){
        e.addEventListener('click', i => {
            countryid = e.id
            previousId.push(countryid)
        })
    setInterval(() => {
        if(countryid == e.id){
            e.style.fill = 'rgb(126, 154, 182)' 
        }
        if(previousId.length > 1 && previousId[previousId.length - 2] == e.id && e.id !='jqvmap1_uzb'){
             e.style.fill = '#dbe5f9'
        }
    }, 10)
    }
})

worldMapSvg.addEventListener('click', e => {
   visitedCountries.filter(i => {
       if(i.id === e.target.id){
        visitMapContainer.style.display = 'grid'
        visitedCountryName.innerText = i.country + ' ташриф'.toUpperCase()
    visitImg.src = imgLinkFix(i.img)
    visitCount.innerHTML = `
    <span>Давлат ташрифлари: ${i.visitCount[0] || 0} <br/></span>`
    if(i.visitCount[1]){
        visitCount.innerHTML += `<span>Амалий ташрифлар: ${i.visitCount[1]}</span>`
    }
}
    })
   
})

btnCloseVisitMapContainer.addEventListener('click', e => {
    visitMapContainer.style.display = 'none'
})
let scaleController = 1
btnPlusSvg.addEventListener('click', e => {
    if(scaleController < 1.4) {
        scaleController = scaleController + 0.2
    }
    worldMapSvg.style.transform = `scale(${scaleController})`
})

btnMinusSvg.addEventListener('click', e => {
    if(scaleController > 1) {
        scaleController -= 0.2
    }
    worldMapSvg.style.transform = `scale(${scaleController})` 
})
const uzbRegions = [
    {
        id: 'jqvmap1_qo',
        region: 'Қорақалпоғистон Республикаси'
    },
    {
        id: 'jqvmap1_no',
        region: 'Навоий вилояти'
    },
    {
        id: 'jqvmap1_bu',
        region: 'Бухоро вилояти'
    },
    {
        id: 'jqvmap1_xo',
        region: 'Хоразм вилояти'
    },
    {
        id: 'jqvmap1_sa',
        region: 'Самарқанд вилояти'
    },
    {
        id: 'jqvmap1_qa',
        region: 'Қашқадарё вилояти'
    },
    {
        id: 'jqvmap1_te',
        region: 'Сурхондарё вилояти'
    },
    {
        id: 'jqvmap1_ji',
        region: 'Жиззах вилояти'
    },
    {
        id: 'jqvmap1_gu',
        region: 'Сирдарё вилояти'
    },
    {
        id: 'jqvmap1_to',
        region: 'Тошкент вилояти'
    },
    {
        id: 'jqvmap1_tosh',
        region: 'Тошкент шаҳри'
    },
    {
        id: 'jqvmap1_na',
        region: 'Наманган вилояти'
    },
    {
        id: 'jqvmap1_an',
        region: 'Андижон вилояти'
    },
    {
        id: 'jqvmap1_fa',
        region: 'Фарғона вилояти'
    }
]
regionAreasSvg.forEach(e => {
e.addEventListener('mouseover', a => {
    boxNameCountry.style.visibility = 'visible'
    boxNameCountry.style.top  = a.clientY - 40 + 'px'
    boxNameCountry.style.left = a.clientX - 80 + 'px'
    boxNameCountry.innerHTML = `<span>${uzbRegions.filter(b => b.id == e.id)[0].region}</span>`
})
e.addEventListener("mouseleave", a => {
    boxNameCountry.style.visibility = 'hidden'
})
}
)

const eventsCardsData = [
    {
        url: './image/event-photo-1.jpeg',
        text: 'Президент Шавкат Мирзиёев иштирокида шу йилнинг февраль ойида ўтган асосий тадбир ва воқеалар'
    },
    {
        url: './image/event-photo-2.jpeg',
        text: 'Prezident Shavkat Mirziyoyev ishtirokida 2024 yilning yanvar oyida o‘tgan asosiy tadbir va voqealar'
    },
    {
        url: './image/event-photo-3.jpeg',
        text: 'Prezident Shavkat Mirziyoyev ishtirokida 2024 yilning yanvar oyida o‘tgan asosiy tadbir va voqealar'
    },
    {
        url: './image/event-photo-4.jpeg',
        text: 'Президент Шавкат Мирзиёев иштирокида шу йилнинг ноябрь ойида ўтган асосий тадбир ва воқеалар'
    },
    {
        url: './image/event-photo-5.jpg',
        text: 'Президент Шавкат Мирзиёев иштирокида шу йилнинг октябрь ойида ўтган асосий тадбир ва воқеалар'
    }
]

eventsCardsData.forEach(e => {
    eventsCardsContainer.innerHTML +=`
    <div class="card-event">
    <div class="event-photo-box">
      <img src="${e.url}" alt="">
    </div>
    <div class="card-shadow-box"></div>
    <div class="event-text-box">
      <p>${e.text}</p>
      <div class='event-card-icon'><i class="bi bi-arrow-right-circle"></i></div>
    </div>
  </div>
    `
})