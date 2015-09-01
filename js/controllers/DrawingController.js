function createArtSpace() {
    $('#simple_sketch').sketch({
        defaultColor: constants.colors.initial
    });

    //return this;
}

function download() {
    var pngUrl = document.getElementById('simple_sketch').toDataURL();
    console.log(pngUrl);
}
