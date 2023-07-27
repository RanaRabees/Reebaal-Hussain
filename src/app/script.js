let $ = document

let body = $.body
let text = $.getElementById('letsWORK')

let backgroundArrey = [
    '/header/ben-kolde-bs2Ba7t69mM-unsplash.jpg',
    '/header/carlos-muza-hpjSkU2UYSU-unsplash.jpg',
    '/header/charles-forerunner-3fPXt37X6UQ-unsplash.jpg',
    '/header/hunters-race-MYbhN8KaaEc-unsplash.jpg',
    '/header/john-schnobrich-FlPc9_VocJ4-unsplash.jpg',
    '/header/scott-graham-5fNmWej4tAA-unsplash.jpg',
    '/header/sean-pollock-PhYq704ffdA-unsplash.jpg',
    '/header/toa-heftiba-FV3GConVSss-unsplash.jpg',
    '/header/tyler-franta-iusJ25iYu1c-unsplash.jpg',
    '/header/nordwood-themes-kRNZiGKtz48-unsplash.jpg',
    '/header/yulia_dubyna-EfSlWRmVqq4-unsplash.jpg',
    '/header/ilya-pavlov-OqtafYT5kTw-unsplash.jpg',
]


let header = $.querySelector('.header')

setInterval(function(){
    let random = Math.floor(Math.random()*backgroundArrey.length)
    console.log(random);
header.style.background = 'url('+backgroundArrey[random]+')'
header.style.backgroundSize = 'cover'
header.style.backgroundposation = 'center'

},5000)




window.addEventListener('scroll',function (){
    let value =window.scrollY-4000
    text.style.left=value+"px"


    let valuethoe =window.scrollY
    console.log(valuethoe);
 
})

let hover=$.querySelector('.hover')
let hover1=$.querySelector('.hover1')
let hover2=$.querySelector('.hover2')






function about(){
window.scrollTo(0,966)
}function simple(){
window.scrollTo(0,1970)
}function smedia(){
window.scrollTo(0,2934)
}
