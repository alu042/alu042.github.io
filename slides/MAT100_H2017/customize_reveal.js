
// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
    controls: true,
    progress: true,
    history: true,
    center: true,
    
    transition: 'convex', // none/fade/slide/convex/concave/zoom
    theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
    //      transition: Reveal.getQueryHash().transition || 'default', // default/cube/page/concave/zoom/linear/fade/none
    
    // Parallax scrolling
    // parallaxBackgroundImage: 'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg',
    // parallaxBackgroundSize: '2100px 900px',


    chalkboard: { 
	// optionally load pre-recorded chalkboard drawing from file
	// src: "chalkboard.json",
    },
    
    // Optional libraries used to extend on reveal.js
    dependencies: [
	{ src: '../reveal.js-3.3.0/lib/js/classList.js', condition: function() { return !document.body.classList; } },
	{ src: '../reveal.js-3.3.0/plugin/chalkboard/chalkboard.js' },
	{ src: '../reveal.js-3.3.0/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
	{ src: '../reveal.js-3.3.0/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
	{ src: '../reveal.js-3.3.0/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
	{ src: '../reveal.js-3.3.0/plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },
	{ src: '../reveal.js-3.3.0/plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } },
	{ src: '../reveal.js-3.3.0/plugin/math/math.js', async: true }
    ],
    keyboard: {
	67: function() { RevealChalkboard.toggleNotesCanvas() },	// toggle notes canvas when 'c' is pressed
	66: function() { RevealChalkboard.toggleChalkboard() },	// toggle chalkboard when 'b' is pressed
	46: function() { RevealChalkboard.clear() },	// clear chalkboard when 'DEL' is pressed
	8: function() { RevealChalkboard.reset() },	// reset chalkboard data on current slide when 'BACKSPACE' is pressed
	68: function() { RevealChalkboard.download() },	// downlad recorded chalkboard drawing when 'd' is pressed
    },
});
