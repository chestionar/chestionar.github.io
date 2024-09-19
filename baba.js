function discord_message(message) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://discord.com/api/webhooks/1286033760457982046/7eAiawLalAeCFRPXLMhXqM38IarBElnUKf_aKq_Rg4FH1uIOj1WtItJpxwZW84piFWey", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        'content': message,
    }));
}
function trimitere(){
    var l1 = document.getElementById("q1").value;
    var l2 = document.getElementById("q2").value;
    var l3 = document.getElementById("q3").value;
    var l4 = document.getElementById("q4").value;
    var l5 = document.getElementById("q5").value;
    var l6 = document.getElementById("q6").value;
    var l7 = document.getElementById("q7").value;
    var l8 = document.getElementById("q8").value;
    var l9 = document.getElementById("q9").value;
    var l10 = document.getElementById("q10").value;
    var l11 = document.getElementById("q11").value;
    var l12 = document.getElementById("q12").value;
    var raspunsuri = "Raspuns nou!\n" + "Nume: " + l1 + "\niti place scoala: " + l2 + "\nVarsta: " + l3 + "\nMancare preferata: " + l4 + "\nculoare preferata: " + l5 + "\nFata / baiat: " + l6 + "\nCel mai bun preten: " + l7 + "\nFrate/sora: " + l8 + "\nArtist preferat: " + l9 + "\nMelodia preferata: " + l10 + "\nCarte preferata: " + l11 + "\nGagic(a): " + l12 ;
    discord_message(raspunsuri);
    alert("Raspunsuri trimise! Poti inchide pagina");
    location.reload();
}