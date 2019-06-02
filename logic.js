var topics = ["guitar", "piano", "drums", "bass", "flute", "naruto", "venom", "computers", "skyrim", "fallout"];


 function displayGif() {

    var topic = $(this).attr("data-name");
  
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=58Kw1KJaCnhqmZ84jnKoevMK0LVaASRp&q="+ topic +"&limit=10&offset=0&rating=R&lang=en";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
  
       console.log(response)
      for (var i = 0; i < 10; i++)
      {
       var gifDiv = $("#gif-view");
  
       var imgUrl = response.data[i].images.original.url;

       var image = $("<img>").attr("src", imgUrl);
  
       gifDiv.append(image);
      }
    });
  }
  
  function renderButtons() {
  
   $("#buttons-view").empty();
  
   for (var i = 0; i < topics.length; i++) 
   {
  
     var a = $("<button>");
     
     a.addClass("gif-btn");
     
     a.attr("data-name", topics[i]);
    
     a.text(topics[i]);
     
     $("#buttons-view").append(a);
   }
  }
  
  
  $("#add-gif").on("click", function(event)
  {
   
   event.preventDefault();
   
   var gifs = $("#gif-input").val().trim();
  
   topics.push(gifs);
  
   renderButtons();
  });
  
  $(document).on("click", ".gif-btn", displayGif);
  
  renderButtons()