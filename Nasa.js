var date;
var picture = {
    date: " ",
    explanation: " ",
    hdurl: " ",
    title: " ",
    url: " ",
    msg: " ",
    code: " "
};
window.addEventListener('load',function (){
})
document.getElementsByTagName('button')[0].addEventListener('click', function(r) {
    getUser(document.getElementsByTagName('input')[0].value);
  });
  document.getElementById('hd').addEventListener('click', function (){
    if(picture.title == " " || picture.title == undefined)
    {alert("Must enter valid date first");}  
    else{document.getElementById('pic').src = picture.hdurl;}
    });
function getUser(name) {
  fetch('https://api.nasa.gov/planetary/apod?api_key=HYhabtrLATpBw0tyy330paRhBB0gn35244I1DQc1&date=' + name)
    .then(function(r) {
      return r.json();
    })
    .then(function(j) {
      picture = j;
      if (picture.code == undefined)
      {
      assignValues();
      console.log(picture);
      }
      else
      {
          messages();
      }
    })
}
function assignValues() {
    document.getElementsByClassName("lightbox")[0].style.display = "block";
    document.getElementById("message").innerText = "";
    document.getElementById('pic').src = picture.url;
    document.getElementById('title').innerText = picture.title;
    document.getElementById('date').innerText = picture.date;
    document.getElementById('explanation').innerText = picture.explanation;
}

function messages(){
    alert(picture.msg);
}