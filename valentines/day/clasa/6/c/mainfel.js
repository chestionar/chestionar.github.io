const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const nume = urlParams.get('nume')
document.getElementById("numefata").innerText = "Draga " + nume + "," 
function discord_message(message) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://discord.com/api/webhooks/1339326480186081422/mntnqLzOoMoya6q5nF_5tXgfRJGWGQvfhdAJlahVYdWPwGuY5jEuW6jUJXd5CYmcX-Gq", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        'content': message,
    }));
}

function felicitare(){
    discord_message("`" + nume + "` a deschis felicitarea! YEYYY!")
    document.getElementById("scrisoare").style.display = "block"
}
function iesirescrisoare(){
    discord_message("`" + nume + "` a inchis felicitarea.")
document.getElementById("scrisoare").style.display = "none"
}