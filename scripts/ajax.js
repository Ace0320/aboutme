const x = new XMLHttpRequest();
x.open('GET', 'https://codepen.io/eclairereese/pen/BzQBzR.html')
x.onreadystatechange = function () { 
    if (x.readyState === 4) {
        document.getElementById('ajax').innerHTML = x.responseText;
    }
};

function theAJAX() {
    x.send();
    document.getElementById('ajax-test').style.display = 'none';
}




//Inpiration from: https://www.w3schools.com/jquery/ajax_ajax.asp