var n=1;
var m=0;
var k=2;
var l=1;
function changeImage(e) {
    imageData = [
        [
            {
                src: "assets/6elements.jpg",
                caption: "6 elementer fra en mengde"
            },
            {
                src: "assets/partitionOf6_1.jpg",
                caption: "Partisjon i tre blokker med størrelser 1, 2, og 3"
            },
            {
                src: "assets/partitionOf6_2.jpg",
                caption: "Alternativ partisjon av typen 1, 2, 3"
            },
            {
                src: "assets/partitionOf6_3.jpg",
                caption: "Partisjon av typen 1, 1, 4"
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
	[

	    {
		src: "assets/grafer/branching-process.jpg",
		caption: "Nettverk av nevroner",
		source: "Kilde: Inria Bordeaux (P. Del Moral / ALEA project)"
	    },
	    {
		src: "assets/grafer/internet_graph.jpg",
		caption: "Graf av deler av internett",
		source: "Kilde: Wikipedia / Matt Britt"
	    },

	    {
		src: "assets/grafer/graph_neurosci_2.jpg",
		caption: "Elementer",
		source: "Kilde: Nature Reviews / Bullmore & Sporns"
	    },
	    {
		src: "assets/grafer/subway.jpg",
		caption: "T-bane-nettverk",
		source: "Kilde: Metropolitan Transportation Authority"
	    },
	    {
		src: "assets/grafer/genes.jpg",
		caption: "Geners samuttrykk som vektede grafer",
		source: "Kilde: http://bioinfow.dep.usal.es/coexpression/"
	    },
	    {
		src: "assets/grafer/dynamics.jpg",
		caption: "Dynamiske prosesser i grafer. ",
		source: "Kilde: Woolrich, Stephan, <i>Biophysical network models and the human connectome</i>, NeuroImage 80, 2013"
	    }

	    
	],
	[
            {
                src: "assets/flocking/flockgraph_1.png",
                caption: "6 (ordnede) elementer fra en mengde"
            },
            {
                src: "assets/flocking/flockgraph_2.png",
                caption: "Partisjon i tre blokker med størrelser 1, 2, og 3"
            },
            {
                src: "assets/flocking/flockgraph_3.png",
                caption: "Alternativ partisjon av typen 1, 2, 3"
            },
            {
                src: "assets/flocking/flockgraph_4.png",
                caption: "Partisjon av typen 1, 1, 4"
            },
            {
                src: "assets/flocking/flockgraph_5.png",
                caption: "Partisjon av typen 1, 1, 4"
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
    }
    else if (e==2) {
	document.getElementById('image2_1').src = imageData[2][k].src;
	document.getElementById('caption2_1').innerHTML = imageData[2][k].caption;
	document.getElementById('source_1').innerHTML = imageData[2][k].source;
	document.getElementById('image2_2').src = imageData[2][k+1].src;
	document.getElementById('caption2_2').innerHTML = imageData[2][k+1].caption;
	document.getElementById('source_2').innerHTML = imageData[2][k+1].source;
	k = (k+2) % 6;
    }
    else if (e==3) {
	document.getElementById('image3').src = imageData[3][l].src;
	l = (l+1) % 5;
    }
 


    return true;
}


