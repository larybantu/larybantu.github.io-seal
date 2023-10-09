

var mygallery=new simpleGallery({
	wrapperid: "simplegallery1", //ID of main gallery container,
	dimensions: [800, 250], //width/height of gallery in pixels. Should reflect dimensions of the images exactly
	imagearray: [
		["img/seal1.jpg", "", "", "SEAL's Ben(centre) at a training event with ITCs Angela(left)"],
		["img/seal2.jpg", "", "", "Business  Strategy Design Session in Uganda - SEAL Consult supports such."],
		["img/seal3.jpg", "", "", "Ben in capacity building"]
	],
	autoplay: [true, 2500, 4], //[auto_play_boolean, delay_btw_slide_millisec, cycles_before_stopping_int]
	persist: false, //remember last viewed slide and recall within same session?
	fadeduration: 500, //transition duration (milliseconds)
	oninit:function(){ //event that fires when gallery has initialized/ ready to run
		//Keyword "this": references current gallery instance (ie: try this.navigate("play/pause"))
	},
	onslide:function(curslide, i){ //event that fires after each slide is shown
		//Keyword "this": references current gallery instance
		//curslide: returns DOM reference to current slide's DIV (ie: try alert(curslide.innerHTML)
		//i: integer reflecting current image within collection being shown (0=1st image, 1=2nd etc)
	}
});
