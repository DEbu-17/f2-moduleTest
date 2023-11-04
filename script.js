let arr = [
  {
    name: "Veggie Delight",
    imageSrc: "https://source.unsplash.com/random?veggies",
    time: "30 min",
    type: "veg",
    isLiked: false,
    rating: 4.2,
  },
  {
    name: "Chicken Grill",
    imageSrc: "https://source.unsplash.com/random?chicken",
    time: "45 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Cheese Pizza",
    imageSrc: "https://source.unsplash.com/random?pizza",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 4.1,
  },
  {
    name: "Steak",
    imageSrc: "https://source.unsplash.com/random?steak",
    time: "60 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.7,
  },
  {
    name: "Grilled Salmon",
    imageSrc: "https://source.unsplash.com/random?salmon",
    time: "50 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
  },
  {
    name: "Tomato Pasta",
    imageSrc: "https://source.unsplash.com/random?pasta",
    time: "35 min",
    type: "veg",
    isLiked: false,
    rating: 4.0,
  },
  {
    name: "Vegan Salad",
    imageSrc: "https://source.unsplash.com/random?salad",
    time: "20 min",
    type: "veg",
    isLiked: false,
    rating: 3.9,
  },
  {
    name: "Fried Chicken",
    imageSrc: "https://source.unsplash.com/random?friedChicken",
    time: "55 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.3,
  },
  {
    name: "Mushroom Risotto",
    imageSrc: "https://source.unsplash.com/random?risotto",
    time: "45 min",
    type: "veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Burger",
    imageSrc: "https://source.unsplash.com/random?burger",
    time: "30 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.2,
  },
  {
    name: "Paneer Tikka",
    imageSrc: "https://source.unsplash.com/random?paneerTikka",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 4.4,
  },
  {
    name: "BBQ Ribs",
    imageSrc: "https://source.unsplash.com/random?ribs",
    time: "70 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
  },
  {
    name: "Caesar Salad",
    imageSrc: "https://source.unsplash.com/random?caesarSalad",
    time: "25 min",
    type: "veg",
    isLiked: false,
    rating: 3.8,
  },
  {
    name: "Fish Tacos",
    imageSrc: "https://source.unsplash.com/random?fishTacos",
    time: "35 min",
    type: "non-veg",
    isLiked: false,
    rating: 3.3,
  },
  {
    name: "Chocolate Cake",
    imageSrc: "https://source.unsplash.com/random?chocolateCake",
    time: "90 min",
    type: "veg",
    isLiked: false,
    rating: 3.9,
  },
];

const myCards = document.getElementsByClassName("my-cards")[0];

function onContentLoad(arr) {
  myCards.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    // card section
    let card = document.createElement("div");
    card.className = "card";

    // img section
    let imgDiv = document.createElement("div");
    imgDiv.className = "img-div";
    imgDiv.innerHTML = `<img src=${arr[i].imageSrc} style="margin-top: 10px;height: 200px;width: 289px; border-radius:16px" />`;

    //type section
    let typeDiv = document.createElement("div");
    typeDiv.className = "type";
    typeDiv.innerText = arr[i].type;

    // rating section
    let ratingSection = document.createElement("div");
    ratingSection.className = "rating-section";

    // rating section children
    let ratingSectionPara = document.createElement("p");
    ratingSectionPara.className = "dish-name";
    ratingSectionPara.style.fontWeight = "bold";
    ratingSectionPara.innerText = arr[i].name;
    let ratingImgDiv = document.createElement("div");
    //  ratingImgDiv.innerHTML = arr[i].rating;
    ratingImgDiv.className = "rating";
    ratingImgDiv.style.color = "#d2d2d2";
    ratingImgDiv.innerHTML = ` <img src="./images/Frame 28.png" alt="" /> ${arr[i].rating}`;

    // like section
    let likeSection = document.createElement("div");
    likeSection.className = "like-section";

    //like-section children

    let likeSectionPara = document.createElement("p");
    likeSectionPara.style.color = "#e06c43";
    likeSectionPara.innerText = arr[i].time;

    let likeSectionPara2 = document.createElement("p");
    likeSectionPara2.innerHTML = `<img class="like" onclick="onClickLikeButton(this)" src="./images/Vector (2).png" alt="" /> <img src="./images/Vector (3).png" alt="" />`;

    ratingSection.append(ratingSectionPara, ratingImgDiv);
    likeSection.append(likeSectionPara, likeSectionPara2);
    card.append(imgDiv, typeDiv, ratingSection, likeSection);
    myCards.appendChild(card);
  }
}
onContentLoad(arr);


let searchBarArray = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].type == "veg") {
//     vegArr.push(arr[i]);
//   } else {
//     nonVegArr.push(arr[i]);
//   }
// }

function allRecipies() {
  
  onContentLoad(arr);
}

function vegRecipies() {
 let vegArr = arr.filter(element => element.type == "veg");
  onContentLoad(vegArr);
}

function nonVegRecipies() {
 let nonVegArr = arr.filter(element => element.type == "non-veg");
  onContentLoad(nonVegArr);
}

function above4() {
  let ratingAbove4 = arr.filter((element) => element.rating >= 4);
  onContentLoad(ratingAbove4);
}
function below4() {
  let ratingBelow4 = arr.filter((element) => element.rating < 4);
  onContentLoad(ratingBelow4);
}

function onClickLikeButton(button) {
  button.classList.toggle("liked");
}

let searchTerm = document.getElementById("search");

function clickOnSearchIcon() {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name.toLowerCase().includes(searchTerm.value.toLowerCase())) {
      searchBarArray.push(arr[i]);
    }
  }

  onContentLoad(searchBarArray);
}

let icons = document.getElementsByClassName("icons")[0];
let cookPaal = document.getElementsByClassName("cookpal")[0];
let cookpaalChild = document.querySelectorAll(".icons>div");
const heroSection = document.getElementsByClassName("hero-section")[0];
console.log(cookpaalChild);
function onClickDrawer(drawer){
    icons.style.display = "block";
    drawer.style.display = "none";
    icons.innerHTML = "";
    for(let i=0; i<cookpaalChild.length; i++){
       cookPaal.append(cookpaalChild[i]);
    }
  heroSection.style.display = "none";
}

console.log(1 - '1');
