console.log('Loaded!');
var element = document.getElementById('change-text');
element.InnerHtml = 'Wonder happens in a click';
// Moving the image 
var eleimg = document.getElementById('move');

var marginLeft = 0;

function moveright()
{
marginLeft +=10;
 img.style.marginLeft = marginLeft + 'px'; 
}

eleimg.onhover = function() {
    var interval = setInterval(moveright , 100);
  
};
