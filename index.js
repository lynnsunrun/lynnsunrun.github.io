document.getElementById('timer').innerHTML =
02 + ":" + 00;
startTimer();

function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  if(s===0 && m === 0) {
    clearInterval();
  }
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
};