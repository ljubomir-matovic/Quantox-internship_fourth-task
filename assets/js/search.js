const baseUrl = "https://api.github.com/users";
const form = document.querySelector("form");
const button = document.querySelector("button");
const input = document.querySelector(`[name="text"]`);
const clickHandler = (e) => {
    e.preventDefault();
}, submitHandler = (e) => {
    e.preventDefault();
    let response = await fetch(baseUrl + input.value);
    if (!response.ok) {
        console.error("Error");
        return;
    }
    let result = await response.json();
};
button.addEventListener("keypress", );
form.addEventListener("submit", submitHandler);