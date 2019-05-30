

function setFooterDate() {
    var year = new Date().getFullYear();
    document.getElementById("footer").innerHTML = 
        "Created by Zelenyy -- Copyright www.zelenyy.info 2019 - " + 
        year.toString() + 
        "&copy;";
}

window.onload = function(){setFooterDate()};

