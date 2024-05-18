

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



//changin-mouse-cursor-----------------------------------------------------------------------------------

const allnews = document.querySelectorAll('.bottom1,.bottom2,.bottom3,.bottom4,.bottom5,.bottom6,#news1,#news2,#news3-a,#news3-b');
    for (let i = 0; i < 10; i++) {
        allnews[i].addEventListener('mouseover', function () {
       
            this.classList.add('hand-cursor');
        });
        allnews[i].addEventListener('mouseout', function () {
            this.classList.remove('hand-cursor');
        });
}
