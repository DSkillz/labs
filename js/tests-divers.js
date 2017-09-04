function addTextNode(text) {
    var newtext = document.createTextNode(text),
        p1 = document.querySelector('#output');
    p1.appendChild(newtext);
    console.log(p1);
}

addTextNode('ydeguygf');
