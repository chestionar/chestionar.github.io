function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
currentscale = 1
const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const gagica = urlParams.get('p')
const nume = httpGet("http://cenanmihai.go.ro/cineegagica?num=" + gagica)
document.getElementById("nume").innerText = nume + ","
function discord_message(message) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://discord.com/api/webhooks/1339326480186081422/mntnqLzOoMoya6q5nF_5tXgfRJGWGQvfhdAJlahVYdWPwGuY5jEuW6jUJXd5CYmcX-Gq", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        'content': message,
    }));
}
function nu(){
    currentscale = currentscale + 10
    document.getElementById("da").style.transform= "scale("+currentscale+")";
    discord_message("`" + nume + "` a apasat butonul NU!!!")
}
function da(){
    discord_message("`" + nume + "` a apasat butonul DA! YAYYY")
    window.location = "/da.html?nume=" + nume
}