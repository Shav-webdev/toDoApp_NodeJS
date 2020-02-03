$(document).ready(function(){
    $('form#submit_to_do').on('submit', function(){
        let item = $('form input');
        let todo = {item: item.val()};
        $.ajax({
            type: 'POST',
            url: '/add',
            data: todo,
            success: function(data){
                console.log(data)
                //do something with the data via front-end framework
                location.reload();
            }
        });
        return false;
    });



});