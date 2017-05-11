$('#search').keyup(function () {
    var searchField = $('#search').val();
    // console.log(searchField);
    var myExp = new RegExp(searchField, 'i')

    $.getJSON('data.json', function (data) {
        var output = '<ul class="list-group" >';

        $.each(data, function (key, val) {
            if ((val.name.search(myExp) != -1) || (val.bio.search(myExp) != -1)) {
                output += '<li class="list-group-item clearfix">';
                output += '<h3>' + val.name + '</h3>';
                output += '<img src="images/' + val.shortname + '_tn.jpg" alt="val.name" class="img-thumbnail" >';
                output += '<p>' + val.bio + '</p>';
                output += '</li>';
            }
        });
        output += '</ul>';

        $('.update').html(output);

    }); //get JSON
});


/*$.getJSON('data.json', function (data) {
    
    var output = '<ul class="list-group" >';

    $.each(data, function (key, val) {
        
        output += '<li class="list-group-item clearfix">';
        output += '<h3>' + val.name + '</h3>';
        output += '<img src="images/' + val.shortname + '_tn.jpg" alt="val.name" class="img-thumbnail" >';
        output += '<p>' + val.bio + '</p>';
        output += '</li>';
        
    });
    
    output += '</ul>';

    $('.update').html(output);

}); //get JSON*/
