$(document).ready(function(){
	
	function run(id, image, new_id, show, delay, start) {
		setTimeout(function() {     
     		$(id).append(image);
  		}, start);
     	setTimeout(function() {
     		$(new_id).show().delay(delay).fadeOut();
  		}, delay);			
	}	
	function replaceMe(id, image, new_id, show, delay, start) {
		setTimeout(function() {     
     		$(id).replaceWith(image);
  		}, start);
  		setTimeout(function() {
     		$(new_id).show().delay(delay).fadeOut();			
		}, start);
	}
	function color(id, color, start) {
		setTimeout(function() {
			$(id).css("background-color", color);
		}, start);	
	}	
		
			run("#one", "<img src='images/multnomah_thumbnail.jpg' id='one-pic' class='block'>", "#one-pic", "slow", 500, 1000); 	
			replaceMe("#one-pic", "<img src='images/ruby_thumbnail.jpg' id='seven-pic' class='block'>", "#seven-pic", "slow", 1750, 3500);
			color("#one", "#45C3B8", 5000);
			replaceMe("#seven-pic", "<img src='images/white-river_thumbnail.jpg' id='thirteen-pic' class='block'>", "#thirteen-pic", "slow", 3000, 6000);
			color("#one", "#104E8B", 8000);
			replaceMe("#thirteen-pic", "<img src='images/lower-south_thumbnail.jpg' id='nineteen-pic' class='block'>", "#nineteen-pic", "slow", 4000, 9000);


  			run("#two", "<img src='images/latourell_thumbnail.jpg' id='two-pic' class='block'>", "#two-pic", "slow", 1500, 3000);  
			color("#two", "#4D71A3", 4000);
			replaceMe("#two-pic", "<img src='images/bridal-veil_thumbnail.jpg' id='eight-pic' class='block'>", "#eight-pic", "slow", 2750, 5500);
			replaceMe("#eight-pic", "<img src='images/punch-bowl_thumbnail.jpg' id='fourteen-pic' class='block'>", "#fourteen-pic", "slow", 5000, 8000);
			color("#two", "#162252", 9000);			
			replaceMe("#fourteen-pic", "<img src='images/koosah_thumbnail.jpg' id='twenty-pic' class='block'>", "#twenty-pic", "slow", 6500, 11000);

  			run("#three", "<img src='images/rockcity_thumbnail.jpg' id='three-pic' class='block'>", "#three-pic", "slow", 2500, 5000);   			
			replaceMe("#three-pic", "<img src='images/christine_thumbnail.jpg' id='nine-pic' class='block'>", "#nine-pic", "slow", 3750, 7500);
			replaceMe("#nine-pic", "<img src='images/winter_thumbnail.jpg' id='fifteen-pic' class='block'>", "#fifteen-pic", "slow", 6000, 10000);
			color("#three", "#5190ED", 12000);
			replaceMe("#fifteen-pic", "<img src='images/elowah_thumbnail.jpg' id='twentyone-pic' class='block'>", "#twentyone-pic", "slow", 8000, 13000);
			color("#three", "#20BF9F", 14000);
																		
			run("#four", "<img src='images/minnehaha_thumbnail.jpg' id='four-pic' class='block'>", "#four-pic", "slow", 1000, 2000);
			color("#four", "#003F87", 3000);
			replaceMe("#four-pic", "<img src='images/wahclella_thumbnail.jpg' id='ten-pic' class='block'>", "#ten-pic", "slow", 2250, 4500);
			color("#four", "#283A90", 6000);
			replaceMe("#ten-pic", "<img src='images/toketee_thumbnail.jpg' id='sixteen-pic' class='block'>", "#sixteen-pic", "slow", 4000, 9000);
			replaceMe("#sixteen-pic", "<img src='images/triple_thumbnail.jpg' id='twentytwo-pic' class='block'>", "#twentytwo-pic", "slow", 7000, 12000);

  			run("#five", "<img src='images/snoqualmie_thumbnail.jpg' id='five-pic' class='block'>", "#five-pic", "slow", 3000, 6000);   
			replaceMe("#five-pic", "<img src='images/tumalo_thumbnail.jpg' id='eleven-pic' class='block'>", "#eleven-pic", "slow", 4250, 8500);
			color("#five", "#00CED1", 9000);
			replaceMe("#eleven-pic", "<img src='images/desoto_thumbnail.jpg' id='seventeen-pic' class='block'>", "#seventeen-pic", "slow", 7000, 13000);
			replaceMe("#seventeen-pic", "<img src='images/sheppards-dell_thumbnail.jpg' id='twentythree-pic' class='block'>", "#twentythree-pic", "slow", 10000, 15000);
			color("#five", "#4EEE94", 17000);
 
			run("#six", "<img src='images/hanawi_thumbnail.jpg' id='six-pic' class='block'>", "#six-pic", "slow", 2000, 4000);
			replaceMe("#six-pic", "<img src='images/south_thumbnail.jpg' id='twelve-pic' class='block'>", "#twelve-pic", "slow", 4000, 8000);
			color("#six", "#068481", 10000);
			replaceMe("#twelve-pic", "<img src='images/sahalie_thumbnail.jpg' id='eighteen-pic' class='block'>", "#eighteen-pic", "slow", 5000, 12000);     
			color("#six", "#50A6C2", 13000);
			replaceMe("#eighteen-pic", "<img src='images/wahkeena_thumbnail.jpg' id='twentyfour-pic' class='block'>", "#twentyfour-pic", "slow", 9000, 14000);     			

});