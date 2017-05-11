var myButton = document.getElementById('loadData');
myButton.onclick = loadAjax;

function loadAjax() {
    var request;

    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    } else {
        request = new ActiveXObject('Microsoft.XMLHTTP');
    }

    request.open('GET', 'data.json');

    request.onreadystatechange = function () {
        if ((request.readyState === 4) && (request.status === 200)) {

            var items = JSON.parse(request.responseText);
            console.log(items);

            var output = '<ul class="list-group">';

            for (var key in items) {
                output += '<li class="list-group-item">' + items[key].name + '</li>';
            }

            output += '</ul>';

            document.getElementById('update').innerHTML = output;

        }
    }

    request.send();
}
