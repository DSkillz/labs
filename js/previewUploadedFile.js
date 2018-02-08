var output = document.getElementById('output');
output.innerHTML = '<form id="form1" runat="server">\n' +
    '    <input type=\'file\' id="imgInp" />\n' +
    '    <img id="blah" src="#" alt="your image" /> \n' +
    '    </form>';

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$("#imgInp").change(function(){
    readURL(this);
});