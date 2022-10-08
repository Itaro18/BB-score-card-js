let home=0
let guest=0

let homeEl=document.getElementById('home-score')
let guestEl=document.getElementById('guest-score')

let newGame=document.getElementById('new-game')



function add1h() {
    home+=1
    homeEl.textContent=home
    if(home>guest)
    {
        homeEl.style.color="#009933"
        guestEl.style.color="#f94f6d"
    }
    else if(home===guest)
    {
        homeEl.style.color="#f94f6d"
        guestEl.style.color="#f94f6d"
    }
}

function add2h() {
    home+=2
    homeEl.textContent=home
    if(home>guest)
    {
        homeEl.style.color="#009933"
        guestEl.style.color="#f94f6d"
    }
    else if(home===guest)
    {
        homeEl.style.color="#f94f6d"
        guestEl.style.color="#f94f6d"
    }
}
function add3h() {
    home+=3
    homeEl.textContent=home
    if(home>guest)
    {
        homeEl.style.color="#009933"
        guestEl.style.color="#f94f6d"
    }
    else if(home===guest)
    {
        homeEl.style.color="#f94f6d"
        guestEl.style.color="#f94f6d"
    }
}
function add1g() {
    guest+=1
    guestEl.textContent=guest
    if(home<guest)
    {
        guestEl.style.color="#009933"
        homeEl.style.color="#f94f6d"
    }
    else if(home===guest)
    {
        guestEl.style.color="#f94f6d"
        homeEl.style.color="#f94f6d"
    }
}
function add2g() {
    guest+=2
    guestEl.textContent=guest
    if(home<guest)
    {
        guestEl.style.color="#009933"
        homeEl.style.color="#f94f6d"
    }
    else if(home===guest)
    {
        guestEl.style.color="#f94f6d"
        homeEl.style.color="#f94f6d"
    }
}
function add3g() {
    guest+=3
    guestEl.textContent=guest
    if(home<guest)
    {
        guestEl.style.color="#009933"
        homeEl.style.color="#f94f6d"
    }
    else if(home===guest)
    {
        guestEl.style.color="#f94f6d"
        homeEl.style.color="#f94f6d"
    }
}


function reset(){
    home=0
    homeEl.textContent=home
    guest=0
    guestEl.textContent=guest
    guestEl.style.color="#f94f6d"
        homeEl.style.color="#f94f6d"
}
