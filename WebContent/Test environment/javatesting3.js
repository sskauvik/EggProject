// jQuery baby!
$(function() {
 alert("This works!");
  });
  
 /* $(function() {
 
	$('#clickme').click(function() {
	
		$.getJSON('test1.json', function(data) {
		
			var items = [];
			
		$.each(data, function(key,val) {
			
			items.push('<li id="' + key + '">' + val + '</li>');
		
		});
		
		$('<ul/>', {
			'class': 'interest-list',
			html: items.join('')
		}).appendTo('body');
		
	});
*/

$(function() {

		function buildACat() {
			var catName = "Mr. Tibbles";
			function catFactory() {
			
			
			alert(catName);
			}
		catFactory();
		}
	$('#buildcat').click(function() {
		buildACat();
	});

});


 
 
