const art = require('ascii-art');

art.font( 'Hello world', 'Doom',  (err, renderer) => {
  console.log(err || renderer)
})

//console.log(art.style("Hello World", "red"));
//console.log(art.style('', 'white'));
