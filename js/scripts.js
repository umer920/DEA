
$(document).ready(function(){/* activate scrollspy menu */
$('body').scrollspy({
  target: '#navbar-collapsible',
  offset: 50
});

/* smooth scrolling sections */
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 50
        }, 1000);
        return false;
      }
    }
});

});

function addOption(selectbox,text,value )
{var optn = document.createElement("OPTION");
optn.text = text;
optn.value = value;
selectbox.options.add(optn);
}

function loadForQuestion()
{
  loadLanguages('qlanguage');
  loadClasses('qclass');
}

var $plansHolders = $('#section1, #section2').hide();
$('#section1').show();
$('#section2').hide();
$('.formsSwitch').click(function () {
    var href = $(this).attr('href');
    console.log(href);
    $plansHolders.hide();
    console.log(href);
    $(href).show();
})