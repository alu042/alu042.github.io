var n=1;
var m=0;
var k=2;
var l=1;
function changeImage(e) {
    imageData = [
        [
            {
                src: "assets/elektrodiff1.png",
            },
            {
                src: "assets/elektrodiff2.png",
            },
            {
                src: "assets/elektrodiff4.png",
            },
            {
                src: "assets/elektrodiff5.png",
            },
	    {
                src: "assets/elektrodiff6.png",
            },
	    {
                src: "assets/elektrodiff7.png",
            },
	    {
                src: "assets/elektrodiff8.png",
	    },
	    {
                src: "assets/elektrodiff9.png",
	    },
	    {
                src: "assets/elektrodiff10.png",
	    },
	    {
                src: "assets/elektrodiff11.png",
	    },
        ],
    ];

    document.getElementById('image0').src = imageData[0][n].src;
    n = (n+1) % 10;

    
 
    return true;

}
