$(document).ready(function () {
    var dim = 16;
    var box = "<div class='box'></div>";

    function createGrid() {
        for (var x = 1; x <= (dim * dim); x++) {
            if (x % dim === 0) {
                $('.container').append(box + '<br>');
            } else {
                $('.container').append(box);
            };
        };
    };

    function testInput() {
        while (dim>50) {
            dim = prompt("How many blocks per side?  (1 - 50)");
        };
    }

    createGrid();

    $('.box').mouseenter(function () {
        $(this).css('background-color', 'black');
    });

    $('#newgrid').click(function () {
        $('.container').empty();

        dim = prompt("How many blocks per side?  (1 - 50)");
        testInput();

        var boxD = 512 / dim;

        createGrid();

        $('.box').width(boxD);
        $('.box').height(boxD);

        $('.box').mouseenter(function () {
            $(this).css('background-color', '#000000');
        });
    });

    $('#colors').click(function () {
        $('.container').empty();

        dim = prompt("How many blocks per side?  (1 - 50)");
        testInput();
        
        var boxD = 512 / dim;

        createGrid();

        $('.box').width(boxD);
        $('.box').height(boxD);

        $('.box').mouseenter(function () {
            var randColor = "rgb(" + (Math.floor(Math.random() * 256)) + "," + (Math.floor(Math.random() * 256)) + "," + (Math.floor(Math.random() * 256)) + ")";
            $(this).css('background-color', randColor);
        });
    });

    $('#watercolor').click(function () {
        $('.container').empty();

        dim = prompt("How many blocks per side?  (1 - 50)");
        testInput();
        
        var boxD = 512 / dim;

        createGrid();
        
        $('.box').width(boxD);
        $('.box').height(boxD);
        $('.box').css('background-color', 'black');
        $('.box').css('opacity', '0');

        $('.box').mouseenter(function () {
            var o = $(this).css("opacity");
            $(this).css('opacity', '+=.1');
        });
    });
});