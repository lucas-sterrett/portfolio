window.onscroll = function() {scrollAnimation()};

function scrollAnimation() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("logo").className = "logoAnimation";
  } else {
    document.getElementById("logo").className = " ";
  }
}

function openWrldMag() {
  document.getElementById("wrldMagMain").style.display = "inline-block";
}

function closeWrldMag() {
  document.getElementById("wrldMagMain").style.display = "none";
}

function openCenterSustain() {
  document.getElementById("centerSustainMain").style.display = "inline-block";
}

function closeCenterSustain() {
  document.getElementById("centerSustainMain").style.display = "none";
}

function openIkea() {
  document.getElementById("ikeaMain").style.display = "inline-block";
}

function closeIkea() {
  document.getElementById("ikeaMain").style.display = "none";
}

function openExpPort() {
  document.getElementById("expPortMain").style.display = "inline-block";
}

function closeExpPort() {
  document.getElementById("expPortMain").style.display = "none";
}

function openKanye() {
  document.getElementById("kanyeMain").style.display = "inline-block";
}

function closeKanye() {
  document.getElementById("kanyeMain").style.display = "none";
}

function openVote2020() {
  document.getElementById("vote2020Main").style.display = "inline-block";
}

function closeVote2020() {
  document.getElementById("vote2020Main").style.display = "none";
}

function openCrateDigger() {
  document.getElementById("crateDiggerMain").style.display = "inline-block";
}

function closeCrateDigger() {
  document.getElementById("crateDiggerMain").style.display = "none";
}

$(document).ready(function(){
  $("a").on('click', function(event) {

    if (this.hash !== "") {

      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        window.location.hash = hash;
      });
    }
  });
});
