 jQuery(document).ready(function() {
    $('#dinput').connections({ to: '.n-input'});
    $('.n-input').connections({to: '.hlayer'});
    $('.hlayer').connections({to: '.outputs'});
    $('.outputs').connections({to: '#oinput'});

  });