// Data
var url = ['parks/joshua.html', 'parks/redwood.html', 'parks/yosemite.html'];
var imageURL = ["cookies.jpg", "poke.jpg", "wings.jpg"];
var title = ["Cookies", "Poke", "Wings"];
var desc = [
    "Poke with fresh salmon and other ingredients on top of a steaming bed of rice.",
    "Chicken wings marinated in KBBQ sauce glistening with juices and ready to give you a kick.",
    "Soft, delicious cookies with large chunks of dark chocolate."];
let login = false;

// Initial
var imageIndex = 0;

// Grid
var grid = document.querySelectorAll('.card img');

let gridSrc = []; //grid src attributes
for(let i = 0; i < grid.length; i++) {
    gridSrc[i] = grid[i].getAttribute('src');
}

let gridFav = []; //grid fav buttons
for(let i = 0; i < grid.length; i++) {
    gridFav[i] = document.getElementById('favorite');
}

//Toggle Favorite Button and attach cookie to buttons
let heartIcon = document.querySelectorAll('#favorite');
for(let i = 0; i < heartIcon.length; i++) {
    heartIcon[i].addEventListener('click', function() {
        if(heartIcon[i].innerHTML == 'favorite_border') {
            heartIcon[i].innerHTML = 'favorite';
            heartIcon[i].style.color = 'red';
            setCookie('favorite_image' + i, imageURL[i]);
        } else {
            heartIcon[i].innerHTML = 'favorite_border';
            heartIcon[i].style.color = 'black';
            setCookie('favorite_image' + i, imageURL[i], true);
        }
    });
}

// run functions here
console.log(document.cookie);
checkCookie('favorite_image');

//Cookie remembers which image is favorited
function checkCookie(key) {
    let cookie = document.cookie;
    let cookieValue = '';
    // only favorite_image cookies
    let splitCookie = getSplitCookie(key);
    for (let i = 0; i < splitCookie.length; i++) {
        cookieValue = getCookieValue(splitCookie[i]);
        for (let i = 0; i < grid.length; i++) {
            if (gridSrc[i].includes(cookieValue)) {
                heartIcon[i].innerHTML = 'favorite';
                heartIcon[i].style.color = 'red';
            }
        }
    }
}

/**
 * Sets cookie for key, value and trims it
 */
function setCookie(key, value) {
    return document.cookie = key + '=' + value + ';';
}

/**
 * Sets cookie for key, value and expiration and trims it
 */
function setCookie(key, value, boolean) {
    if(boolean) {
        return document.cookie = key + '=;expires=Thu, 01 Dec 2020 00:00:00 UTC;';
    } else {
        return document.cookie = key + '=' + value + ';';
    }
}

// Returns arr with cookies with only the key 'favorite_image'
function getSplitCookie(key) {
    let cookie = document.cookie;
    let splitCookies = cookie.split(';');
    let filteredCookies = [];
    for(let i = 0; i < splitCookies.length; i++) {
        splitCookies[i] = splitCookies[i].trim();
        // take only key 'favorite_image' cookies
        // if left side of = includes(key)
        if(splitCookies[i].includes(key)) {
            filteredCookies[i] = splitCookies[i];
        }
    }
    for(let i = 0; i < filteredCookies.length; i++) {
        // doesn't include ';'
        filteredCookies[i] = filteredCookies[i].substr(0, filteredCookies[i].length);
    }
    return filteredCookies;
}

// get value of 'favorite_image = joseph.jpg'
// Get value of key-value cookie pair
function getCookieValue(cookie) {
    let valuePos = cookie.indexOf('=');
    let cookieValue = cookie.substr(valuePos + 1, cookie.length-2);
    return cookieValue;
}






