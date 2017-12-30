$(function() {
       $('#hide').click(function() {
                $('td:nth-child(3)').hide();                
       });

    $('#show').click(function() {
                $('td:nth-child(3)').show();                
       });
    $('#toggle').click(function() {
                $('td:nth-child(3)').toggle();                
       });
	});