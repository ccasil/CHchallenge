
$(document).ready(function () {

        // for (var p = 1; p < 807; p++) {
        for (var p = 1; p < 152; p++) {
            $('#pokemon').append("<img id='" + p + "' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + p + ".png'>");
        }

        $(document).on('click', 'img', function () {
            var num = $(this).attr('id');

            $('#pic').html("<img id='" + num + "' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + num + ".png'>");
            $.get("https://pokeapi.co/api/v2/pokemon/" + num + "/", function (res) {
                var html_str = "";

                var name = res.name;
                $("#name").html(name);

                var height = res.height;
                $("#height").html(height);

                var weight = res.weight;
                $("#weight").html(weight);

                html_str += "<ul class='list-unstyled'>"; 
                for (var i = 0; i < res.types.length; i++) {
                    html_str += "<li>" + res.types[i].type.name + "</li>";
                }
                html_str += "<ul>";
                $("#type").html(html_str);
            }, "json");
        });

});

html_str += "<ul class='list-unstyled'>";
for (var i = 0; i < res.game_indices.length; i++) {
    html_str += "<li>" + res.game_indices[i].version.name + "</li>";
}
html_str += "<ul>";
$("#type").html(html_str);