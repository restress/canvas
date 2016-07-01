/**
 * Created by Happy_yaonima on 2016/6/30.
 */
    var targram =[
    {p:[{x:0,y:0},{x:800,y:0},{x:400,y:400}],color:"#caff67"},
    {p:[{x:0,y:0},{x:400,y:400},{x:0,y:800}],color:"#67becf"},
    {p:[{x:800,y:0},{x:800,y:400},{x:600,y:600},{x:600,y:200}],color:"#ef3d61"},
    {p:[{x:600,y:200},{x:600,y:600},{x:400,y:400}],color:"#f9f51a"},
    {p:[{x:400,y:400},{x:600,y:600},{x:400,y:800},{x:200,y:600}],color:"#a594c0"},
    {p:[{x:200,y:600},{x:400,y:800},{x:0,y:800}],color:"#fa8ecc"},
    {p:[{x:800,y:400},{x:800,y:800},{x:400,y:800}],color:"#f6ca29"}
    ]

    window.onload = function() {
        var canvas = document.getElementById("canvas");


        canvas.width = 800;
        canvas.height = 800;

        var context = canvas.getContext("2d");
        for (var i = 0; i < targram.length; i++){
            draw(targram[i], context);
        }

    }


        function draw(piece,cxt) {

            cxt.beginPath();
            cxt.moveTo(piece.p[0].x, piece.p[0].y);
            for (var i = 1; i < piece.p.length; i++)
                cxt.lineTo(piece.p[i].x, piece.p[i].y);
                cxt.closePath();

            cxt.fillStyle = piece.color;
            cxt.fill();


        /*cxt.moveTo(piece.p[0].x,piece.p[0].y);*/

        /*context.beginPath();
        context.moveTo(100,100);
        context.lineTo(700,700);
        context.lineTo(700,100);
        context.lineTo(100,100);
        context.closePath();
        context.stroke();

        context.beginPath();
        context.moveTo(300,100);
        context.lineTo(500,700);
        context.closePath();

        context.lineWidth = 5;
        context.strokeStyle ="#508632"
        context.stroke();*/

        /*context.fillStyle ="rgb(2,100,30)";
        context.fill();*/
    }
