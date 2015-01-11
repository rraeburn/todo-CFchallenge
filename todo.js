$(function(){

//adds user created item to todo list
	$('button').on('click', function(e){
		e.preventDefault();
		var $item = $('input').val();
		$('.toDoList').append('<li><a href="">x</a>' + $item + '</li>');
	})

//toggle line through todo list item
//keep in tact for user to refer to at a later date
	$(document).on('click', 'li', function(e){
		e.preventDefault();
		$(this).toggleClass('completed');
	});

//remove todo list item from list completely
	$(document).on('click', 'a', function(e){
		e.preventDefault();
		$(this).parent().remove();
	});

});