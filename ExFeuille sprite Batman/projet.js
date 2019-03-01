$(document).ready(function() {
	var mc = new JSMovieclip($('#my-element'),{
    framerate : 6,
    frames :[{x:0,y:0},{x:101,y:0},{x:202,y:0},{x:303,y:0},{x:0,y:100},{x:101,y:100},{x:202,y:100},{x:303,y:100},{x:0,y:200},{x:101,y:200},{x:202,y:200},{x:303,y:200},{x:0,y:300},{x:101,y:300}]
});	

mc.play(true);

});
