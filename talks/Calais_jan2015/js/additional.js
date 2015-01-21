var n=1;
var m=0;

function changeImage(e) {
    imageData = 
	[
            [
		{
                    src: "assets/6elements.jpg",
                    caption: "6 elements from a set"
		},
		{
                    src: "assets/partitionOf6_1.jpg",
                    caption: "Partition in three blocks of sizes 1, 2, and 3"
		},
		{
                    src: "assets/partitionOf6_2.jpg",
                    caption: "Another partition of type 1, 2, 3"
		},
		{
                    src: "assets/partitionOf6_3.jpg",
                    caption: "Partition of type 1, 1, 4"
		}
            ],
	    [
		{ 
		    src: "assets/partsOf6/1.jpg"
		},
		{ 
		    src: "assets/partsOf6/2.jpg"
		},
		{ 
		    src: "assets/partsOf6/3.jpg"
		},
		{ 
		    src: "assets/partsOf6/4.jpg"
		},
		{ 
		    src: "assets/partsOf6/4.jpg"
		}
	    ],
	];

    if (e==0) {
	document.getElementById('image0').src = imageData[0][n].src;
	document.getElementById('caption0').innerHTML = imageData[0][n].caption;
	n = (n+1) % 4;
	}
    else if (e==1) {
	document.getElementById('image1').src = imageData[1][m].src;
	m = (m+1) % 5;
    };
    
    return true;
};


