$(document).ready(function() {
  postData();
  $('#animalinfo').on('submit', function(event) {
      event.preventDefault();


      var values = {};
      $.each($('#animalinfo').serializeArray(), function(i, field) {
          values[field.name] = field.value;
      });

      $.ajax({
          type: 'POST',
          url: '/random',
          data: values,
          success: function() {
              $('#display').empty();
              postData();
              console.log('post complete')
          }
      });

  });

  function postData(){
 $.ajax({
   type:'GET',
   url:'/random',
   success: function(data) {
     data.forEach( function (animal) {
         $('#display').append('<p>' + animal.animal_type + '  ' +  animal.quantity + '</p>');



     console.log('got the data');
   });

 }
});

}






});
