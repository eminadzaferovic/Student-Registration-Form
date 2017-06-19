$(document).ready(function(e) {

    $('input').on('keypress', function(event) {
        var $this = $(this),
            val = $this.val();

        val = val.substr(0, 1).toUpperCase() + val.substr(1).toLowerCase();
        $this.val(val);
    });
	
	var maxLength = 300;
	$('#comments').keyup(function() {
		var length = $(this).val().length;
		var length = maxLength-length;
		
		$('#count').text(length);
	});
	
	/*$('.calculate').change(function(){
		var sum=0;
		$('input[name=calc]').each(function(){
			sum=sum+parseInt($(this).val());
		})
		$('input[name=total]').val(sum);
	});*/
	
	$('.calculate').change(function(){
		var fee=$('#tut').val();
		var scholar=$('#scholarship').val();
		var cash=$('#cash').val();
		var inst=$('input[name=ins]:checked').val();
		var total=0;
		var total_inst=0;
		
		$('input[name=calc]').each(function(){
			if(scholar!=0){
				total=fee-(fee*(scholar/100))-cash;
			}
			else{
				total=fee-cash;
			}
		})
		$('#total').val(total);	
		
		
		$('input[name=ins]').each(function(){
				total_inst=total/inst;					
		})		
		$('#insamount').val(total_inst);
		
		var i=0;
		$('#newtext').empty();
		
		$('input[name=ins]').each(function(){
			if(i<inst)
			{
				$('#newtext').append('<div><input type="date" name="input[]"></div>');
				i++;
			}
		})
		
	});	
	
	
		
});


