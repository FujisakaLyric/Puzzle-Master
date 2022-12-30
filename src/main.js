
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
        ["1", "pink bean", "halloween", "pepe", "francis", "stirge", "amusement park", "snail"],
        ["2", "lucid", "hilla", "friendstory", "classroom", "friend story", "damien", "francis", "luminous", "cygnus", "orchid", "oz", "irina", "hawkeye", "ickhart", "mihile"],
        ["3", "idols", "stage", "show", "mic", "singer"],
        ["4", "pepe", "pink bean", "slime", "yeti", "bear", "treasure", "stump"],
        ["5", "wizard", "kids", "triplet", "boy"],
        ["6", "cygnus", "nineheart", "mihile", "irina", "oz", "valentine's day", "festival", "orange mushroom", "yeti", "ribbon pig", "snail"],
        ["7", "apple", "ranger", "mesoranger", "power ranger", "strawberry", "bread", "cake", "kiwi"],
        ["8", "muto", "sandwich", "giant", "chu", "chew"],
        ["9", "chew", "chu", "yum", "festival", "lion"],
        ["10", "arcane", "tree", "kao", "light"],
        ["11", "christmas", "yeti", "cygnus", "ickhart", "oz", "pepe", "hut"],
        ["12", "winter", "hero", "mercedes", "phantom", "mir", "luminous", "aran", "eunwol", "snow", "hut", "pepe", "yeti", "branch"],
        ["13", "adele"],
        ["14", "hilla"],
        ["15", "12", "pink bean", "balrog", "pepe", "pig", "colosseum", "slime"],
        ["16", "muto", "mercedes", "aran", "evan", "phantom", "eunwol", "simia", "luminous", "fish"],
        ["17", "hotel", "arc"],
        ["18", "arcana", "spirit", "rock"],
        ["19", "lucid", "butterfly", "lach"],
        ["20", "celes"],
        ["21", "grandis", "cernium", "seren"],
        ["22", "phantom", "eunwol", "luminous", "aran", "evan", "mercedes", "hero"],
        ["23", "savage", "terminal", "crow", "rubbish", "junk"],
        ["24", "5000", "cake", "lucid", "hero", "kinesis", "orchid", "cake", "lotus", "damien", "blaster", "xenon", "luminous", "phantom", "aran", "pink bean", "lucid"],
        ["25", "pink bean", "von", "leon", "evan", "pig", "orange mushroom", "pepe", "ickhart"],
        ["26", "mushroom", "cloud", "smoke", "bomb", "atomic"],
        ["27", "moras", "fish", "flying"],
        ["28", "skyline", "three", "3", "sun", "building"],
        ["29", "celes", "scuba", "jellyfish"],
        ["30", "sakura", "petal", "pink"],
        ["31", "adele"],
        ["32", "pink", "girl", "sun", "kid", "uniform"],
        ["33", "yeti", "spirit", "cake", "pink bean", "slime", "orange mushroom"],
        ["34", "orange", "mushroom", "pink", "bento", "bean", "slime", "yeti", "sushi", "picnic", "park", "spirit"],
        ["35", "pink", "yeti", "orange", "slime", "concert", "bean", "mushroom", "dj", "stage", "spirit"],
        ["36", "pink", "bean", "yeti", "orange", "mushroom", "slime", "beach", "sea", "ocean", "sand", "spirit", "swim"],
        ["37", "pink", "bean", "yeti", "orange", "mushroom", "slime", "race", "track", "school", "trohpy", "gold"],
        ["38", "pink", "bean", "yeti", "orange", "mushroom", "slime", "halloween", "pumpkin", "trick", "treat", "spirit"],
        ["39", "pink", "bean", "yeti", "orange", "mushroom", "slime", "", "stocking", "present", "spirit", "fireplace", "snow", "christmas"],
        ["51", "13", "mapleverse", "angelic", "buster", "buster", "kaiser"],
        ["52", "christmas", "hero", "mercedes", "aran", "phantom", "luminous", "evan", "eunwol", "kanna", "hayato", "lantern", "slime"],
        ["53", "beautyroid"],
        ["54", "hayato"],
        ["55", "kanna", "haku"],
        ["56", "hayato", "princess", "sakuno"],
        ["57", "kanna", "haku"],
        ["58", "purrfect", "ranger", "cat"]
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
