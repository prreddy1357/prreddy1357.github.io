var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/rocky.jpg') {
      myImage.setAttribute ('src','images/rocky1.png');
    } else {
      myImage.setAttribute ('src','images/rocky.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Holaaa I am => ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Holaaa I am => ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
