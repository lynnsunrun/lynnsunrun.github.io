var url = new URLSearchParams(window.location.search)
var name = url.get('name') ? url.get('name').replace(/[^a-zA-Z]+/gi, " ") : '';
var message = url.get('message');

var timeLeft = 30;
var elem = document.getElementById('timer');

var timerId = setInterval(countdown, 1000);

function countdown() {
  if (timeLeft < 0) {
    elem.innerHTML = "00:00"
    timeLeft = 30;
  } else {
    if (timeLeft < 10) {
      elem.innerHTML = "00:0" + timeLeft;
    } else {
      elem.innerHTML = "00:" + timeLeft;
    }
    timeLeft--;
  }
}

function getNext() {
  timeLeft = 30;
  countdown();
}

$('#carousel').on('slide.bs.carousel', function () {
  timeLeft = 30;
})

function showComment() {
  document.getElementById('input-comment').style.display = "block";
}
function submitComment(e){
   e.preventDefault();
   showComment();
   var name = $('#name').val();
   var email = $('#email').val();
   var commenttext = $('#commenttext').val();
   var newComment = '"' + commenttext + '"';
   var inputName =  ' -' + ' ' + name;

   $('#new-comment').prepend(newComment);
   $('#inputName').append(inputName)
   $('#name').val('');
   $('#email').val('');
   $('#commenttext').val('');
   showDiv();
};

function showDiv() {
  if (document.getElementById('comment-section').style.display === "block") {
    document.getElementById('comment-section').style.display = "none";
  } else {
    document.getElementById('comment-section').style.display = "block";
  }
}

function displayCustomText() {
  var properCaseName = name.charAt(1).toUpperCase() + name.slice(2).toLowerCase();

  if (name !== '') {
    $('#customMsg').append(properCaseName + ' says, ' + '"' + message + '"');
  }
}

$( document ).ready(function() {
  displayCustomText();
  $('.carousel').carousel({
    interval: 31000
  })
});
