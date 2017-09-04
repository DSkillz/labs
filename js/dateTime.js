var output = document.getElementById('output');
output.innerHTML = "";

var realtime = setInterval(function () {
    afficher()
}, 1000);

function afficher() {
    var offsetUTC = +12,
        lD = new Date(),
        oD = new Date();
    oD.setHours(lD.getUTCHours() + offsetUTC);

    document.getElementById('output').innerHTML = "Ici, on est : " + lD.toLocaleString() + "<br>" + "Là-bas, on est : " + oD.toLocaleString();
}
