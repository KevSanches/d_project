var followingImages = ['images/001.jpg', 'images/002,jpg', 'images/003.jpg', 'images/004.jpg','images/005.jpg', 'images/006.jpg', 'images/007.jpg', 'images/008.jpg', 'images/009.jpg', 'images/010.jpg', 'images/011.jpg', 'images/012.jpg', 'images/013.jpg', 'images/014.jpg', 'images/015.jpg', 'images/016.jpg', 'images/017.jpg', 'images/018.jpg', 'images/019.jpg', 'images/020.jpg', 'images/021.jpg', 'images/022.jpg', 'images/023.jpg', 'images/024.jpg', 'images/025.jpg', 'images/026.jpg', 'images/027.jpg', 'images/028.jpg', 'images/029.jpg', 'images/030.jpg', 'images/031.jpg', 'images/032.jpg', 'images/033.jpg', 'images/034.jpg', 'images/035.jpg', 'images/036.jpg', 'images/037.jpg', 'images/038.jpg', 'images/039.jpg', 'images/040.jpg', 'images/041.jpg', 'images/042.jpg', 'images/043.jpg', 'images/044.jpg', 'images/045.jpg', 'images/046.jpg', 'images/047.jpg', 'images/048.jpg', 'images/049.jpg', 'images/050.jpg', 'images/051.jpg', 'images/052.jpg', 'images/053.jpg', 'images/054.jpg', 'images/055.jpg', 'images/056.jpg', 'images/057.jpg'];
var image = document.querySelector('img');
var i = 1;

image.onclick = function() {
	image.setAttribute('src', followingImages[i]);
	i = i+1;
}