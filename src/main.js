
function imgDetail() {
    const thumbnails = document.getElementsByClassName("thumbnail")
    const popup = document.getElementById("imgPop")
    const popBackground = document.getElementById("popBackground")
    const grid = document.getElementById("grid")
    const closeBtn = document.getElementById("closeBtn")
    const image = document.getElementById("image")
    const gridImg = document.getElementById("gridImg")

    //이미지 팝업 뒷배경 누르면 사라지는 부분
    popBackground.addEventListener("click", function () {
        closePop()
    })

    //그리드 추가 및 제거
    image.addEventListener("click", () => {
        grid.style.display = "block"
    })

    gridImg.addEventListener("click", () => {
        grid.style.display = "none"
    })

    //닫기 버튼 이벤트 부분
    closeBtn.addEventListener("click", () => {
        closePop()
    })

    //각 썸네일에 이벤트 추가하는 부분 (클로저 문제로 for문 내부에 익명함수로 처리)
    for (var thumbnail of thumbnails) {
        (function (thumb) {
            thumb.addEventListener("click", () => {
                
                image.setAttribute("src", thumb.src)
                popup.style.display = "block"
            })
        })(thumbnail)

    }

}

//팝업 닫는 함수
function closePop() {
    const popup = document.getElementById("imgPop")

    popup.style.display = "none"
}


//로딩 함수
function loading() {
    document.addEventListener("DOMContentLoaded", function () {
        const loading = document.getElementsByClassName("loading")[0]
        loading.style.display = "none"
        console.log("page loaded")
    });

}

//해당하는 단어 검색
function search(text) {
    if(text == "") return;

    const describes = [
        ["1", "pb", "pink bean", "halloween", "pepe", "francis", "stirge", "amusement park", "snail"],
        ["2", "pb", "pink bean", "yeti", "pepe", "slime", "bear", "treasure", "stump"],
        ["3", "pb", "pink bean", "yeti", "orange mushroom", "slime", "rock spirit", "cake"],
        ["4", "pb", "pink bean", "yeti", "orange mushroom", "slime", "rock spirit", "bento", "sushi", "picnic", "park"],
        ["5", "pb", "pink bean", "yeti", "orange mushroom", "slime", "rock spirit", "concert", "dj", "stage"],
        ["6", "pb", "pink bean", "yeti", "orange mushroom", "slime", "rock spirit", "beach", "sea", "ocean", "sand", "swim"],
        ["7", "pb", "pink bean", "yeti", "orange mushroom", "slime", "race", "track", "school", "trohpy", "gold"],
        ["8", "pb", "pink bean", "yeti", "orange mushroom", "slime", "rock spirit", "halloween", "pumpkin", "trick", "treat"],
        ["9", "pb", "pink bean", "yeti", "orange mushroom", "slime", "rock spirit", "stocking", "present", "fireplace", "winter", "snow", "xmas", "christmas"],
        ["10", "yeti", "rock spirit", "pizza", "halloween", "tv", "game"],
        ["11", "pb", "pink bean", "yeti", "halloween", "haunted", "mansion"],
        ["12", "pb", "pink bean", "balrog", "pepe", "pig", "colosseum", "slime"],
        ["13", "pb", "pink bean", "von leon", "evan", "pig", "orange mushroom", "pepe", "ickhart", "hotel", "building"],
        ["14", "road to extinction", "vanishing journey", "arcane river", "tree of memories", "kao", "light"],
        ["15", "reverse city", "arcane river", "skyline", "bear", "sunset", "building", "friendstory", "friends story"],
        ["16", "chew", "chu", "island", "arcane river", "muto", "sandwich", "giant", "hungry"],
        ["17", "chew", "chu", "yum", "island", "arcane river", "lyon", "lion", "casster", "wooftail", "sausage", "party", "food festival"],
        ["18", "chew", "chu", "yum", "island", "arcane river", "lyon", "lion", "simia", "pb", "pink bean", "hy", "ho young", "lara", "food festival"],
        ["19", "lacheln", "arcane river", "lucid", "butterfly"],
        ["20", "arcana", "arcane river", "rock spirit", "tree", "wind", "little"],
        ["21", "moras", "arcane river", "swamp of memories", "flying fish"],
        ["22", "celestars", "sellas", "arcane river", "ollie", "shumet", "scuba", "jellyfish"],
        ["23", "labyrinth of suffering", "tenebris", "arcane river", "heretic hilla", "jin", "verus"],
        ["24", "grandis", "adele", "ether sword"],
        ["25", "grandis", "adele", "jerome"],
        ["26", "grandis", "lara"],
        ["27", "grandis", "senya"],
        ["28", "savage terminal", "grandis", "detective rave", "crow", "rubbish", "junk"],
        ["29", "savage terminal", "grandis", "mushroom cloud", "skull", "smoke", "atomic bomb", "poison", "toxic"],
        ["30", "cernium", "grandis", "seren", "holy sword", "rope bridge", "grass", "field", "plains"],
        ["31", "hotel arcs", "grandis", "achelon", "rusty", "robot", "popcorn"],
        ["32", "koc", "cygnus", "nineheart", "mihile", "irina", "oz", "valentine", "festival", "orange mushroom", "yeti", "ribbon pig", "snail", "knight"],
        ["33", "koc", "cygnus", "ickhart", "oz", "pb", "pink bean", "pepe", "yeti", "fireplace", "xmas", "christmas", "winter", "snow", "cabin", "wreath", "stocking"],
        ["34", "hero", "mercedes", "phantom", "mir", "luminous", "aran", "eunwol", "pepe", "yeti", "winter", "snow", "xmas", "christmas", "mushroom house", "tree", "branch"],
        ["35", "hero", "sengoku", "mercedes", "aran", "phantom", "luminous", "evan", "eunwol", "kanna", "hayato", "lantern", "slime", "xmas", "christmas", "cny", "chinese new year", "lunar"],
        ["36", "grandis", "nova", "angelic buster", "kaiser", "moonbeam", "13", "mapleverse", "space", "alien", "anniversary"],
        ["37", "hero", "lucid", "kinesis", "orchid", "lotus", "damien", "blaster", "xenon", "luminous", "phantom", "aran", "pb", "pink bean", "5000", "cake", "anniversary"],
        ["38", "chew", "chu", "island", "arcane river", "hero", "mercedes", "aran", "evan", "phantom", "eunwol", "luminous", "simia", "muto", "gula", "fishing"],
        ["39", "hero", "phantom", "eunwol", "luminous", "aran", "evan", "mercedes", "full moon", "night", "roof"],
        ["40", "koc", "cyngus", "nineheart", "mihile", "irina", "oz", "ickhart", "hawkeye", "pb", "pink bean", "ocean", "sea", "banana boat", "swim"],
        ["41", "kerning tower", "ruby", "ami", "dia", "sapphire", "perry", "idols", "stage", "show", "mic", "singer"],
        ["42", "sakura", "petal", "pink", "cherry blossom"],
        ["43", "koc", "lucid", "hilla", "friendstory", "classroom", "friends story", "damien", "francis", "luminous", "cygnus", "orchid", "oz", "irina", "hawkeye", "ickhart", "mihile"],
        ["44", "omega sector", "mesorangers", "power rangers", "lin", "young", "chulee", "gunny", "hoonee", "joonee", "strawberry", "bread", "cake", "kiwi", "apple", "food"],
        ["45", "pink", "girl", "sun", "kid", "uniform"],
        ["46", "wizard", "kids", "triplet", "boy"],
        ["47", "dks", "divine king slime", "ga", "guardian angel", "slime paradise"],
        ["48", "beautyroid", "atelier"],
        ["49", "sengoku", "hayato", "katana"],
        ["50", "sengoku", "kanna", "haku", "tsuchimikado", "sakura", "petal", "pink", "cherry blossom"],
        ["51", "sengoku", "hayato", "princess sakuno", "full moon"],
        ["52", "sengoku", "kanna", "haku", "letter", "sakura", "petal", "pink", "cherry blossom"],
        ["53", "purrfect rangers", "cat", "pyramid", "sphinx", "sphynx", "ufo", "spaceships"]
    ]

    var tmp = []

    for(var i=0; i<describes.length; i++){
        for(var str of describes[i]){
            if(str.indexOf(text) >= 0){
                tmp.push(i)
                break
            }
        }
    }

    initThumbnails()
    highlight(tmp)
}

//특정 썸네일에 하이라이트
function highlight(list){
    const thumbnails = document.getElementsByClassName("thumbnail")
    for(var t of thumbnails){
        t.style.opacity = "60%"
    }
    for(var i of list){
        console.log(i)
        thumbnails[i].style.boxShadow = "1px 1px 10px 1px #eafa8f"
        thumbnails[i].style.opacity = "100%"
        //thumbnails[i].animation = "first-animation 0.5s infinite alternate";
    }
}

//썸네일 초기화
function initThumbnails(){
    const thumbnails = document.getElementsByClassName("thumbnail")
    for(var t of thumbnails){
        t.style.opacity = "100%"
        t.style.boxShadow = "none"
    }
}

//검색 기능 함수 초기화
function searchInit(){
    const searchTxt = document.getElementById("searchTxt")
    const searchBtn = document.getElementById("searchBtn")
    const initBtn = document.getElementById("initBtn")

    searchBtn.addEventListener("click", function () {
        search(searchTxt.value.toLowerCase())
    })

    initBtn.addEventListener("click", function () {
        initThumbnails()
    })

    document.addEventListener("keydown", function (e) {
        if(e.key == "Enter") {
            if(searchTxt.value == ""){
                searchTxt.focus()
            }
            else {
                search(searchTxt.value)
            }
        }
        else if(e.key == "Escape"){
            searchTxt.value = ""
            initThumbnails()
        }
    })

}

imgDetail()
searchInit()
loading()
//search("아델")

//box-shadow: 1px 1px 10px 1px #eafa8f;
