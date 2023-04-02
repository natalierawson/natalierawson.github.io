/* Shuffle (Fisher-Yates) */
function shuffle(array) {
  var currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

/*1 Card*/
function singleCard() {
    document.getElementById("card-display").innerHTML="";
    document.getElementById("text-display").innerHTML="";
    shuffle(deck.cards);

    /* Image */
    let singleCardImg = document.createElement("img");
    singleCardImg.setAttribute('src',`cards/${deck.cards[0].img}`);
    singleCardImg.setAttribute("alt",`${deck.cards[0].name}, Rider-Waite deck`);
    singleCardImg.setAttribute('loading','lazy');
    singleCardImg.setAttribute("id","card-img-1");
    singleCardImg.setAttribute("class","card-img");
    document.getElementById("card-display").appendChild(singleCardImg);
    document.getElementById('card-img-1').addEventListener("mouseover",toggleCard);

    /* Description */
    let singleCardDiv = document.createElement("div");
    singleCardDiv.setAttribute('loading','lazy');
    singleCardDiv.setAttribute('class','card-div');
    singleCardDiv.setAttribute('id', 'card-desc-1');
    singleCardDiv.setAttribute('role','tooltip');
    document.getElementById('text-display').appendChild(singleCardDiv);


    /*Card Label*/

    let cardLabel = document.createElement("h3");
    let singleSelect = document.getElementById("one-card-list"); //id of one card select
    cardLabel.setAttribute('id','card-title-1');
    cardLabel.setAttribute('class','card-title');
    cardLabel.innerHTML = `${singleSelect.options[singleSelect.selectedIndex].text}`; //read text of selected option on form submit
    document.getElementById('card-desc-1').appendChild(cardLabel);

    /* Name */
    let singleCardName = document.createElement("p");
    singleCardName.innerHTML="<img src='icons/info-icon.png' class='info' id='name-info'><span>Name:</span>"+` ${deck.cards[0].name}`;
    document.getElementById('card-desc-1').appendChild(singleCardName);
    document.getElementById("name-info").addEventListener("mouseover", showToolTip);
    document.getElementById("name-info").addEventListener("mouseout",delayHide);

    /* Keywords */
    let singleCardKeywordList = [];
    for (let sKey = 0; sKey<deck.cards[0].keywords.length; sKey++){
        singleCardKeywordList.push(deck.cards[0].keywords[sKey]);
    }
    let singleCardKeywordsString = singleCardKeywordList.join(', ');
    let singleCardKewords = document.createElement("p");
    singleCardKewords.innerHTML = "<img src='icons/info-icon.png' class='info' id='keywords-info'><span>Keywords: </span>" + `${singleCardKeywordsString}`;
    singleCardKewords.setAttribute('class','capitalize');
    document.getElementById('card-desc-1').appendChild(singleCardKewords);
    document.getElementById("keywords-info").addEventListener("mouseover", showToolTip);
    document.getElementById("keywords-info").addEventListener("mouseout",delayHide);

    /*Numerology*/
    let singleCardNumerology = document.createElement("p");
    singleCardNumerology.innerHTML ="<img src='icons/info-icon.png' class='info' id='numerology-info'><span>Numerology:</span>" + ` ${deck.cards[0].Numerology}`;
    if (deck.cards[0].Numerology != undefined) {
        document.getElementById('card-desc-1').appendChild(singleCardNumerology);
        document.getElementById("numerology-info").addEventListener("mouseover", showToolTip);
        document.getElementById("numerology-info").addEventListener("mouseout",delayHide);
    }

    /* Light */
    shuffle(deck.cards[0].meanings.light);
    let singleCardLight = document.createElement("p");
    singleCardLight.innerHTML="<img src='icons/info-icon.png' class='info' id='light-info'><span>Light:</span>"+` ${deck.cards[0].meanings.light[0]}.`;
    document.getElementById('card-desc-1').appendChild(singleCardLight);
    
    /* Shadow */
    shuffle(deck.cards[0].meanings.shadow);
    let singleCardShadow = document.createElement("p");
    singleCardShadow.innerHTML="<img src='icons/info-icon.png' class='info' id='shadow-info'><span>Shadow:</span>"+` ${deck.cards[0].meanings.shadow[0]}.`;
    document.getElementById('card-desc-1').appendChild(singleCardShadow);
   

    /* Person */
    let singleCardPerson = document.createElement("p");
    singleCardPerson.innerHTML= "<img src='icons/info-icon.png' class='info' id='person-info'><span>As Person:</span>"+` ${deck.cards[0].fortune_telling[0]}.`;
    if ((deck.cards[0].name.search("King") != -1) || (deck.cards[0].name.search("Queen") != -1) || (deck.cards[0].name.search("Page") != -1))  {
        document.getElementById('card-desc-1').appendChild(singleCardPerson);
       
    } //Knight does not give person-style reading with this data set.

    /* Elemental */
    let singleCardElemental = document.createElement("p");
    singleCardElemental.innerHTML ="<img src='icons/info-icon.png' class='info' id='el-info'><span>Elemental:</span>" + ` ${deck.cards[0].Elemental}`;
    if (deck.cards[0].Elemental != undefined) {
        document.getElementById('card-desc-1').appendChild(singleCardElemental);
       
    }

    /* Astro Placement */
    let singleCardAstro = document.createElement("p");
    singleCardAstro.innerHTML="<img src='icons/info-icon.png' class='info' id='astro-info'><span>Astrology Placement:</span>"+` ${deck.cards[0].Astrology}`;
    if (deck.cards[0].Astrology != undefined) {
        document.getElementById('card-desc-1').appendChild(singleCardAstro);
        
    }; 

    /* No Description Arrow on Single Card AFTER DIV LOADS*/
    let arrowlessDiv = document.getElementById('card-desc-1');
    arrowlessDiv.classList.add('single'); 
    //arrowlessDiv.style.left = "50%";
}

/*3 Cards*/
function threeCards() {
    document.getElementById("card-display").innerHTML="";
    document.getElementById("text-display").innerHTML="";
    shuffle(deck.cards);

    /* Images */
    let cardOneImg = document.createElement("img");
    let cardTwoImg = document.createElement("img");
    let cardThreeImg = document.createElement("img");
    let threeCards = [cardOneImg, cardTwoImg, cardThreeImg];

    for (let i=0; i<threeCards.length; i++){
        threeCards[i].setAttribute('src',`cards/${deck.cards[i].img}`);
        threeCards[i].setAttribute('loading','lazy');
        threeCards[i].setAttribute('class','card-img');
        threeCards[i].setAttribute('id',`card-img-${i+1}`);
        threeCards[i].setAttribute('alt',`${deck.cards[i].name}, Rider Waite deck`);
        document.getElementById("card-display").appendChild(threeCards[i]);
        document.getElementById(`card-img-${i+1}`).classList.add("three-imgs") ;
        document.getElementById(`card-img-${i+1}`).addEventListener("mouseover",toggleCard);
    }
    
    /* Descriptions */

    /* Card Zones */

    let firstCardDiv = document.createElement("div");
    let secondCardDiv = document.createElement("div");
    let thirdCardDiv = document.createElement("div");
    let cardDivs = [firstCardDiv, secondCardDiv, thirdCardDiv];
    for (cDiv = 0; cDiv<cardDivs.length; cDiv++) {
        cardDivs[cDiv].setAttribute('loading','lazy');
        cardDivs[cDiv].setAttribute('class','card-div');
        cardDivs[cDiv].setAttribute('role','tooltip');
        cardDivs[cDiv].setAttribute('id', `card-desc-${cDiv + 1}`);
        document.getElementById("text-display").appendChild(cardDivs[cDiv]);
    }

    /* Card Description List */
    
    let cardOne = deck.cards[0];
    let cardTwo = deck.cards[1];
    let cardThree = deck.cards[2];
    let cardList = [cardOne , cardTwo, cardThree];

    for (j=0; j<cardList.length; j++) {

        /*Card Heading*/
        let cardHeading = document.createElement("h3");
        let questionList = document.getElementById("three-card-list"); //id of three card select
        let selQuestion = questionList.options[questionList.selectedIndex].text; //read text of option selected
        if (selQuestion == "Custom") {
            cardHeading.innerHTML = `Custom Card ${j+1}`;
        } else {
            let headingArray = selQuestion.split("/"); //split text into substrings at "/"
            cardHeading.innerHTML = `${headingArray[j]}`; //whaterver number j is, also print that index of the array of headings.
        }
        
        cardHeading.setAttribute('id',`card-title-${j+1}`)
        cardHeading.setAttribute('class','card-title')  
        document.getElementById("card-desc-"+`${j+1}`).appendChild(cardHeading);
           
        /*Name*/
        let cardName = document.createElement("p");
        cardName.innerHTML="<img src='icons/info-icon.png' class='info' id='name-info'><span>Name:</span>"+` ${cardList[j].name}`;
        document.getElementById("card-desc-"+`${j+1}`).appendChild(cardName);
        

        /*Keywords*/
        let cardKeywordList = [];
        for (let key = 0; key<cardList[j].keywords.length; key++){
            cardKeywordList.push(cardList[j].keywords[key]);
        }
        let cardKeywordsString = cardKeywordList.join(', ');
        let cardKewords = document.createElement("p");
        cardKewords.innerHTML = "<img src='icons/info-icon.png' class='info' id='keywords-info'><span>Keywords: </span>" + `${cardKeywordsString}`;
        cardKewords.setAttribute('class','capitalize');
  
        document.getElementById("card-desc-"+`${j+1}`).appendChild(cardKewords);
        

        /*Numerology*/
        let cardNumerology = document.createElement("p");
        cardNumerology.innerHTML ="<img src='icons/info-icon.png' class='info' id='numerology-info'><span>Numerology:</span>" + ` ${cardList[j].Numerology}`;
     
        if (cardList[j].Numerology != undefined) {
            document.getElementById("card-desc-"+`${j+1}`).appendChild(cardNumerology);
        }
        

        /* Light (At Best, only chooses one out of the array for clarity) */
        shuffle(cardList[j].meanings.light);
        let cardLight = document.createElement("p");
        cardLight.innerHTML="<img src='icons/info-icon.png' class='info' id='light-info'><span>Light:</span>"+` ${cardList[j].meanings.light[0]}.`;

        document.getElementById("card-desc-"+`${j+1}`).appendChild(cardLight);

        /* Shadow (At Worst, only chooses one out of the array for clarity)*/
        shuffle(cardList[j].meanings.shadow);
        let cardShadow = document.createElement("p");
        cardShadow.innerHTML="<img src='icons/info-icon.png' class='info' id='shadow-info'><span>Shadow:</span>"+` ${cardList[j].meanings.shadow[0]}.`;
      
        document.getElementById("card-desc-"+`${j+1}`).appendChild(cardShadow);

        /* Person */
        let cardPerson = document.createElement("p");
        cardPerson.innerHTML= "<img src='icons/info-icon.png' class='info' id='person-info'><span>As Person:</span>"+` ${cardList[j].fortune_telling[0]}.`;
       
        if ((cardList[j].name.search("King") != -1) || (cardList[j].name.search("Queen") != -1) || (cardList[j].name.search("Page") != -1))  {
            document.getElementById("card-desc-"+`${j+1}`).appendChild(cardPerson);
        } //Knight does not give person-style reading with this data set.

        /* Elemental */
        let cardElemental = document.createElement("p");
        cardElemental.innerHTML ="<img src='icons/info-icon.png' class='info' id='el-info'><span>Elemental:</span>" + ` ${cardList[j].Elemental}.`;
      
        if (cardList[j].Elemental != undefined) {
            document.getElementById("card-desc-"+`${j+1}`).appendChild(cardElemental);
        }

        /* Astro Placement */
        let cardAstro = document.createElement("p");
        cardAstro.innerHTML="<img src='icons/info-icon.png' class='info' id='astro-info'><span>Astrology Placement:</span>"+` ${cardList[j].Astrology}`;
     
        if (cardList[j].Astrology != undefined) {
            document.getElementById("card-desc-"+`${j+1}`).appendChild(cardAstro);
        };
    }
}

/*Generate tooltips based on which info icon is selected*/
function showToolTip(e) {
    /*Info Icon Tooltip*/
    console.log(e.target.id);
    let infoType = e.target.id;
    let infoDiv = document.createElement("div");
    infoDiv.setAttribute('class','info-div');
    if (infoType == "name-info") {
        infoDiv.innerHTML="<p>Card name. Pay attention to the suit.</p> <ul><li>Wands = Energy and Passion.</li> <li>Swords = Logic and Mental Issues.</li> <li>Cups = Emotions and Romance.</li>  <li>Pentacles = Material Possessions and Career</li> <li>Major Arcana = Major life themes.</li></ul>    ";
        infoDiv.setAttribute("id","name-tooltip")
    }
    document.getElementById("text-display").appendChild(infoDiv);
    console.log(infoDiv);
}

function delayHide(){
    setTimeout(function hideToolTip(){
    let findInfo = [];
    findInfo = document.getElementsByClassName('info-div');
    console.log(findInfo);
    findInfo[0].innerHTML="";
    findInfo[0].setAttribute('class','info-div-hide');
    //document.getElementById("tarot-zone").removeChild(infoDiv);
}, 1000); 
}

/*function hideToolTip(){
    let findInfo = [];
    findInfo = document.getElementsByClassName('info-div');
    console.log(findInfo);
    findInfo[0].innerHTML="";
    findInfo[0].setAttribute('class','info-div-hide');
} */

/* Read the element being hovered over and change the visible card description so it corresponds with the hovered image. Hide unnecessary descriptions*/
function toggleCard(e){
    if (e.target.id == "card-img-1" && e.target.classList[1] == "three-imgs"){
        document.getElementById("card-desc-1").style.display = "block";
        document.getElementById("card-desc-2").style.display = "none";
        document.getElementById("card-desc-3").style.display = "none";
    } else if (e.target.id == "card-img-2" && e.target.classList[1] == "three-imgs") {
        document.getElementById("card-desc-1").style.display = "none";
        document.getElementById("card-desc-2").style.display = "block";
        document.getElementById("card-desc-3").style.display = "none";
    } else if (e.target.id == "card-img-3" && e.target.classList[1] == "three-imgs") {
        document.getElementById("card-desc-1").style.display = "none";
        document.getElementById("card-desc-2").style.display = "none";
        document.getElementById("card-desc-3").style.display = "block";
    } else {
        null;
    } 
}



/* Background Image */
let backgroundKey = 1; //backgroundKey is the iteration key for changeBackground. Set globally because otherwise, a click will always make it 1. It's also 1 because if it were 0, the default image would repeat twice on the first cycle and we want a different image each time. 

function changeBackground(){
    let backgrounds = [];
    backgrounds = ["backgrounds/background-1.jpg","backgrounds/background-2.jpg","backgrounds/background-3.jpg","backgrounds/background-4.jpg","backgrounds/background-5.jpg","backgrounds/background-6.jpg","backgrounds/background-7.jpg","backgrounds/background-8.jpg"];
    let backgroundImg = document.querySelector("body");
    
    if (backgroundKey<backgrounds.length){
        backgroundImg.style.backgroundImage = (`url(${backgrounds[backgroundKey]})`);
        backgroundKey ++;
   
    } else {
        backgroundKey = 0;
        backgroundImg.style.backgroundImage = (`url(${backgrounds[0]})`);
        backgroundKey ++;
    }
}

/* Form Handling*/
function selectSelect() {
    if (document.getElementById("one-card").checked == false) {
        
        document.getElementById("one-card-list").classList.add("hidden");
        document.getElementById("one-card-list-label").classList.add("hidden");
        document.getElementById("three-card-list").classList.remove("hidden");
        document.getElementById("three-card-list-label").classList.remove("hidden");
        document.getElementById("shuffle-draw").removeEventListener("click",singleCard);
        document.getElementById("shuffle-draw").addEventListener("click",threeCards);
   
    } else if (document.getElementById("three-card").checked == false){
    
        document.getElementById("three-card-list").classList.add("hidden");
        document.getElementById("three-card-list-label").classList.add("hidden");
        document.getElementById("one-card-list").classList.remove("hidden");
        document.getElementById("one-card-list-label").classList.remove("hidden");
        document.getElementById("shuffle-draw").removeEventListener("click",threeCards);
        document.getElementById("shuffle-draw").addEventListener("click",singleCard);
    }
}

function formToggle () {
    let formContent = document.getElementById("form-content");
    let chevron = document.getElementById("chevrons");
    formContent.classList.toggle('slide-hide');

    if (formContent.classList.contains("slide-hide")) {
        chevron.setAttribute('src',''); 
        chevron.setAttribute('src','icons/double-down-chevron.png');

    } else {
        chevron.setAttribute('src',''); 
        chevron.setAttribute('src','icons/double-up-chevron.png');
    }
}


/* Event Listeners On First Load*/ 
document.getElementById("change-background").addEventListener("click", changeBackground);
document.getElementById("one-card").addEventListener("click",selectSelect);
document.getElementById("three-card").addEventListener("click",selectSelect);
document.getElementById("shuffle-draw").addEventListener("click",singleCard);
document.getElementById("chevrons").addEventListener("click", formToggle);