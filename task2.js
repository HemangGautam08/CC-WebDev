

//getting-current-date--------------------------------------------------------------------------------------------

let currentDate = new Date();
    let formattedDate = currentDate.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    document.getElementById('date').textContent = formattedDate;

//hovering-effect--------------------------------------------------------------------------------------------

const home=document.querySelector('#home');
const lis = document.querySelectorAll('ul li:nth-child(n+2)');
for(li of lis) {
    li.addEventListener('mouseover',unhover);
    li.addEventListener('mouseout',hover_home);
}
function unhover (){
home.style.color='black';
home.style.backgroundColor='white';
}

home.addEventListener('mouseover',hover_home);
//home.addEventListener('mouseout',dehover_home);
function hover_home () {
    home.style.color='white';
    home.style.backgroundColor='black';
}
function dehover_home () {
    home.style.color='black';
    home.style.backgroundColor='white';
}


const popular=document.querySelector('.popular');
const latest=document.querySelector('.latest');

popular.addEventListener('mouseover',hover_popular);
popular.addEventListener('mouseout',hover_latest);

function hover_popular() {
latest.style.color='black';
latest.style.backgroundColor='white';
popular.style.color='white';
popular.style.backgroundColor='black';
}  


function hover_latest () {
popular.style.color='black';
popular.style.backgroundColor='white';
latest.style.color='white';
latest.style.backgroundColor='black';
}

const search=document.querySelector('.search-svg') 
search.addEventListener('mouseover',function () {
    search.style.color='white';
    search.style.backgroundColor='black';
})
search.addEventListener('mouseout',function () {
    search.style.color='black';
    search.style.backgroundColor='white';
})







//--------------------------------------------------------------------------------------------------------------------------


const viewData=async function () {
    const res = await axios.get('https://coding-week-2024-api.onrender.com/api/data');
    console.log(res.data);
}

const getData = async function (i) {
    const res = await axios.get('https://coding-week-2024-api.onrender.com/api/data');
    return res.data[i];
}

const newsDrop=document.querySelector('#news-drop');
async function set_newdrop() {
    let i = 4; 
    let intervalId = setInterval(async function () {
        if (i < 10) {
            newsDrop.innerText = (await getData(i)).headline;
            i++; 
        } else {
            clearInterval(intervalId); 
        }
    }, 5000);
}

set_newdrop();


//updating types
const types = document.querySelectorAll('.a > span > :nth-child(2)');

const updateTypes = async function () {
    for (let i = 0; i < 4; i++) {
        const type = (await getData(i)).type;
        if (types[i]) {
            types[i].innerText = type;
            types[i].style.color='white';
        }
    }
}

 updateTypes();


//updating headlines and sideheadlines
const newsheadings = document.querySelectorAll('.b');

const updateHeadlines = async function () {
    for (let i = 0; i < 4; i++) {
        const headline = (await getData(i)).headline;
        if (newsheadings[i]) {
            newsheadings[i].innerText = headline;
            newsheadings[i].style.color='white';
        }
    }
}

updateHeadlines();

const sideheadings = document.querySelectorAll('.bottom1-tt');

const updateSideHeadlines = async function () {
    for (let i = 4; i < 10; i++) {
        const sideheadline = (await getData(i)).headline;
        if (sideheadings[i-4]) {
            sideheadings[i-4].innerText = sideheadline;
        }
    }
}

updateSideHeadlines();


//updating author;
const authors=document.querySelectorAll('.person');

const updateAuthors = async function () {
    for (let i = 0; i < 4; i++) {
        const author = (await getData(i)).author;
        if (authors[i]) {
            authors[i].innerText = author;
            authors[i].style.color='white';
        }
    }
}

updateAuthors();


//updating newsdate and sidedate
const newsdates=document.querySelectorAll('.newsdate');

const updateNewsdate = async function () {
    for (let i = 0; i < 4; i++) {
        const newsdate = (await getData(i)).date;
        if (newsdates[i]) {
            newsdates[i].innerText = newsdate;
            newsdates[i].style.color='white';
        }
    }
}

updateNewsdate();

const sidedates=document.querySelectorAll('.date');

const updateSidedate = async function () {
    for (let i = 4; i < 10; i++) {
        const sidedate = (await getData(i)).date;
        if (sidedates[i-4]) {
           sidedates[i-4].innerText = sidedate;
           
        }
    }
}

updateSidedate();

//updating bg images
const news=document.querySelectorAll('#news1,#news2,#news3-a,#news3-b');

const updatebgImage = async function () {
    for (let i = 0; i < 4; i++) {
        const image = (await getData(i)).image;
        if (news[i]) {
            news[i].style.backgroundImage = `linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.70)), url('${image}')`;
        }
    }
}

updatebgImage();

//updating sideimages
const sideimages=document.querySelectorAll('.image');

const updatesideImage = async function () {
    for (let i = 4; i < 10; i++) {
        const image = (await getData(i)).image;
        if (sideimages[i-4]) {
            sideimages[i-4].src = image;
        }
    }
}

updatesideImage();

//blog-content-------------------------------------------------------------------------------------------------------


document.addEventListener('DOMContentLoaded', function() {
    const allnews = document.querySelectorAll('.bottom1,.bottom2,.bottom3,.bottom4,.bottom5,.bottom6,#news1,#news2,#news3-a,#news3-b');
    for (let i = 0; i < 10; i++) {
        allnews[i].addEventListener('mouseover', function () {
       
            this.classList.add('hand-cursor');
        });
        allnews[i].addEventListener('mouseout', function () {
            this.classList.remove('hand-cursor');
        });
    }
    const boxContainer = document.querySelector('#box-container');
    const closeBoxBtn = document.querySelector('#close-btn');
    const boxText=document.querySelector('#box-text');

    for(let i=0;i<10;i++) allnews[i].addEventListener('click', async function() {

        boxText.innerText=(await getData(i)).content;
        boxContainer.style.display = 'block';
        document.body.classList.add('blur'); 
    });

    closeBoxBtn.addEventListener('click', function() {
        boxContainer.style.display = 'none';
        document.body.classList.remove('blur'); 
    });
});
