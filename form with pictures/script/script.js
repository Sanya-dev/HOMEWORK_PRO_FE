const form = document.querySelector('.form')
const container = document.querySelector('.container')
let cards = [
    {   
        id: 1,
        img: 'https://s0.rbk.ru/v6_top_pics/media/img/4/68/755729573887684.png',
        name: 'Мэттью МакКонахи'
    },
    { 
        id: 2,
        img: 'https://avatars.mds.yandex.net/i?id=8a948014b689f5979fdf71cd1fd92c5afe71b2e4-9211785-images-thumbs&n=13',
        name: 'Леонардо ди Каприо'
    },
    { 
        id: 3,
        img: 'https://s9.vcdn.biz/static/f/2312198361/image.jpg',
        name: 'Арнольд Щварценеггер'
    }
]



form.addEventListener('submit', (e) => {
    e.preventDefault();
    const {photo, name} = e.target
    cards.push({
        id: Date.now(),
        img : photo.value,
        name: name.value
    })
    render();
    e.target.reset();
})

const render = () => {
    container.innerText = '';
    cards.forEach(({id, img, name}) => {
        const cardElem = document.createElement('div')
        const picture = document.createElement('div')
        const text = document.createElement('p')

    
        text.innerText = name
        picture.classList.add('img')
        picture.style.backgroundImage = `url(${img})`


        //Проверяем введен сайт или просто рандомные слова или цифры
        let pattern = /^(http|https|ftp):\/\/[a-z0-9\-_]+\.[a-z0-9\-_]+\.[a-z0-9\-_]+\/?.*$/i;
        if(pattern.test(img) === false){
            picture.innerText = 'Это картинка не прошла нашу проверку или Вы вставили не ссылку на картинку.'
            picture.style.backgroundImage = ''
            picture.classList.add('not-picture')
        }
        //////////////////////////////////////////////////////////////////////////////////////

        cardElem.addEventListener('dblclick', () => {
            cards = cards.filter(item => {
                return item.id !== id
            })
            render();
        })
       
        cardElem.append(picture, text)
        container.append(cardElem)
    })
}
render();


