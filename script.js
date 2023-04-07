console.log('Guess Who?')
console.log(2 + 3)

function toggleEliminated(element) {
    element.classList.toggle('eliminated')
}

let cards = [
    {
        name: 'Sakura',
        image: 'characters_01.jpg'
    }, {
        name: 'Kaede',
        image: 'characters_02.jpg'
    }, {
        name: 'Aya',
        image: 'characters_03.jpg'
    }, {
        name: 'Yuuki',
        image: 'characters_04.jpg'
    }, {
        name: 'Mikoto',
        image: 'characters_05.jpg'
    }, {
        name: 'Ren',
        image: 'characters_06.jpg'
    }, {
        name: 'Ryo',
        image: 'characters_07.jpg'
    }, {
        name: 'Yori',
        image: 'characters_08.jpg'
    }, {
        name: 'Hana',
        image: 'characters_09.jpg'
    }, {
        name: 'Tatsuya',
        image: 'characters_10.jpg'
    }, {
        name: 'Taro',
        image: 'characters_11.jpg'
    }, {
        name: 'Mai',
        image: 'characters_12.jpg'
    }, {
        name: 'Emiko',
        image: 'characters_13.jpg'
    }, {
        name: 'Ayumi',
        image: 'characters_14.jpg'
    }, {
        name: 'Hotaru',
        image: 'characters_15.jpg'
    }, {
        name: 'Haru',
        image: 'characters_16.jpg'
    }, {
        name: 'Kazuya',
        image: 'characters_17.jpg'
    }, {
        name: 'Akria',
        image: 'characters_18.jpg'
    }, {
         name: 'Saki',
        image: 'characters_19.jpg'
    }, {
        name: 'Kazuo',
        image: 'characters_20.jpg'
    }
]

function selectRandomCard() {
    // Choose a random mystery card number
    let randomIndex = Math.floor(Math.random() * 20)
    let selectedRandomCard = cards[randomIndex]
   
    // Set dynamic ImagePath
    let mysteryImage = document.querySelector('img.mystery-card')
    let imagePath
    if (randomIndex < 9) {
        imagePath = 'images/characters_0' + (randomIndex + 1) + '.jpg'
    } else {
        imagePath = 'images/characters_' + (randomIndex + 1) + '.jpg'
    }
    mysteryImage.src = imagePath

    // Set random mystery card name
    mysteryName = document.querySelector('.mystery-card-div span')
    mysteryName.innerHTML = selectedRandomCard.name
}
selectRandomCard()