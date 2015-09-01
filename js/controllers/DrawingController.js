function createArtSpace() {
    $('#simple_sketch').sketch({
        defaultColor: "#000"
    });

    //return this;
}

function download() {
    var pngUrl = document.getElementById('simple_sketch').toDataURL();
    console.log(pngUrl);
}
