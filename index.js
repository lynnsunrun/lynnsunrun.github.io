function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  //if(m<0){alert('timer completed')}
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}

function submitComment(e){
   e.preventDefault();
   var name = $('#name').val();
   var commenttext = $('#commenttext').val();
   console.log('hello', commenttext);
   $('#userName').append(name);
   $('#userComment').append(commenttext);
   $('#name').val('');
   $('#commenttext').val('');
   showDiv();
};

function showDiv() {
  if (document.getElementById('commentSection').style.display === "block") {
    document.getElementById('commentSection').style.display = "none";
  } else {
    document.getElementById('commentSection').style.display = "block";
  }
}

$( document ).ready(function() {
  console.log( "ready!" );
  $('.carousel').carousel({
    interval: 120000
  })
});
