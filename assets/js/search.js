const baseUrl = "https://api.github.com/users/";
const form = document.querySelector("form");
const button = document.querySelector("button");
const input = document.querySelector(`[name="text"]`);
const clickHandler = (e) => {
    e.preventDefault();

};
async function submitHandler (e){
    e.preventDefault();
    let response = await fetch(baseUrl + input.value);
    if (!response.ok) {
        //console.error("Error");
        return;
    }
    let result = await response.json();
    console.log(result);
}
button.addEventListener("keypress", clickHandler);
form.addEventListener("submit", submitHandler);


/*Change mode*/
let mode = 0;
const themes = [{ theme:"light",src:"./assets/images/icon-moon.svg",text:"dark"}, { theme:"dark",src:"./assets/images/icon-sun.svg",text:"light"}];
const text=document.querySelector("#theme span");
const img = document.querySelector("#theme img");
const changeMode = (e) => {
    let classList = document.querySelector("body").classList;
    classList.remove(themes[mode].theme);
    mode = (mode+1)%2;
    classList.add(themes[mode].theme);
    text.innerHTML= themes[mode].text;
    img.src = themes[mode].src;
};
document.querySelector("#theme").addEventListener("click",changeMode);