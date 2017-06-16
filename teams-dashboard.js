function start() {
    var team = (location.hash).replace('#','');
    if (team == 'wildcards') {
        showWildcard();
    }
    if (team == 'bitsplease') {
        showBitsPlease();
    }
    if (team == 'sqlinjectors') {
        showSqlInjectors();
    }
    if (team == 'theblogrammers') {
        showTheBlogrammers();
    }
}

function showWildcard() {
    var elements = document.getElementsByClassName("wildcards")

    for (var i = 0; i < elements.length; i++){
        elements[i].style.display = "inline";
    }

    var elements = document.getElementsByClassName("bitsplease")

    for (var i = 0; i < elements.length; i++){
        elements[i].style.display = "none";
    }

    var elements = document.getElementsByClassName("sqlinjectors")

    for (var i = 0; i < elements.length; i++){
        elements[i].style.display = "none";
    }

    var elements = document.getElementsByClassName("theblogrammers")

    for (var i = 0; i < elements.length; i++){
        elements[i].style.display = "none";
    }
}

function showBitsPlease() {
    var elements = document.getElementsByClassName("wildcards")

    for (var i = 0; i < elements.length; i++){
        elements[i].style.display = "none";

    }

    var elements = document.getElementsByClassName("bitsplease")

    for (var i = 0; i < elements.length; i++){
        elements[i].style.display = "inline";
    }

    var elements = document.getElementsByClassName("sqlinjectors")

    for (var i = 0; i < elements.length; i++){
        elements[i].style.display = "none";
    }

    var elements = document.getElementsByClassName("theblogrammers")

    for (var i = 0; i < elements.length; i++){
        elements[i].style.display = "none";
    }
}

function showSqlInjectors() {
    var elements = document.getElementsByClassName("wildcards")

    for (var i = 0; i < elements.length; i++){
        elements[i].style.display = "none";

    }

    var elements = document.getElementsByClassName("bitsplease")

    for (var i = 0; i < elements.length; i++){
        elements[i].style.display = "none";
    }

    var elements = document.getElementsByClassName("sqlinjectors")

    for (var i = 0; i < elements.length; i++){
        elements[i].style.display = "inline";
    }

    var elements = document.getElementsByClassName("theblogrammers")

    for (var i = 0; i < elements.length; i++){
        elements[i].style.display = "none";
    }
}

function showTheBlogrammers() {
    var elements = document.getElementsByClassName("wildcards")

    for (var i = 0; i < elements.length; i++){
        elements[i].style.display = "none";

    }

    var elements = document.getElementsByClassName("bitsplease")

    for (var i = 0; i < elements.length; i++){
        elements[i].style.display = "none";
    }

    var elements = document.getElementsByClassName("sqlinjectors")

    for (var i = 0; i < elements.length; i++){
        elements[i].style.display = "none";
    }

    var elements = document.getElementsByClassName("theblogrammers")

    for (var i = 0; i < elements.length; i++){
        elements[i].style.display = "inline";
    }
}

window.onload = start;