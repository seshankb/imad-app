console.log('Loaded!');
alert('Seshan');
var element = document.getElementById('main-text');
element.innerHTML = "Wonder happens in a click";

// Moving the image 
var eleimg = document.getElementById('moves');
var marginLeft = 0;

function moveright()
{
marginLeft = marginLeft + 10;
 img.style.marginLeft = marginLeft + 'px'; 
}

eleimg.onhover = function() {
    var interval = setInterval(moveright , 100);
  
};
