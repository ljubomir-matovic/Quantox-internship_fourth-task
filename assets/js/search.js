const BASE_URL = "https://api.github.com/users/";
const FORM = document.querySelector("form");
const INPUT = document.querySelector(`[name="text"]`);
const NAME = document.querySelector(".name");
const USERNAME = document.querySelector(".username");
const BIO = document.querySelector(".bio");
const AVATAR = document.querySelector(".avatar");
const REPOS = document.querySelector(".repos");
const FOLLOWERS = document.querySelector(".followers");
const FOLLOWING = document.querySelector(".following");
const LOCATION = document.querySelector(".location");
const BLOG = document.querySelector(".blog");
const TWITTER = document.querySelector(".twitter");
const COMPANY = document.querySelector(".company");
const DATE = document.querySelector(".date");
const ERR = document.querySelector(".error");

const notAvailable = (el,value) => {
    if (el.getAttribute("href")!==undefined)
    {
        el.setAttribute("href",value || "");
    }
    el.innerHTML = value || "Not available";
    let parent = el.parentElement.classList, c = "not-available";
    if (value === null || value==="") 
    {
        parent.add(c);
    } else {
        parent.remove(c);
    }
};

async function submitHandler (e){
    e.preventDefault();
    let response = await fetch(BASE_URL + INPUT.value);
    if (!response.ok) {
        ERR.classList.remove("hide");
        return;
    }
    ERR.classList.add("hide");
    let result = await response.json();
    INPUT.value = "";
    NAME.innerHTML = result.name || "User have no name";
    USERNAME.innerHTML = "@"+result.login;
    AVATAR.src = result.avatar_url;
    BIO.innerHTML = result.bio || "User have no bio";
    REPOS.innerHTML = result.public_repos;
    FOLLOWERS.innerHTML = result.followers;
    FOLLOWING.innerHTML = result.following;
    notAvailable(LOCATION, result.location);
    notAvailable(BLOG, result.blog);
    notAvailable(TWITTER, result.twitter_username);
    notAvailable(COMPANY, result.company);
    let date = new Date(result.created_at);
    DATE.innerHTML = `${date.getDate()} ${date.toLocaleString({}, { month: "short" }).replace(/^\w/, c => c.toUpperCase())} ${date.getFullYear()}`;
}
FORM.addEventListener("submit", submitHandler);


/*Change mode*/
let mode = 0;
const THEMES = [{ theme:"light",src:"./assets/images/icon-moon.svg",text:"dark"}, { theme:"dark",src:"./assets/images/icon-sun.svg",text:"light"}];
const TEXT=document.querySelector("#theme span");
const IMG = document.querySelector("#theme img");
const changeMode = (e) => {
    let classList = document.querySelector("body").classList;
    classList.remove(THEMES[mode].theme);
    mode = (mode+1)%2;
    classList.add(THEMES[mode].theme);
    TEXT.innerHTML= THEMES[mode].text;
    IMG.src = THEMES[mode].src;
};
document.querySelector("#theme").addEventListener("click",changeMode);