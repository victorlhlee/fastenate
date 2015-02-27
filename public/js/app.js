$(function(){

  // when "My Boards" is clicked
  // create an xhr get request to /api/my_boards.json


 // when the page loads, trigger the event listener that is bound to "My Boards"

  // $.getJSON(
  //     "/api/my_boards.json",
  //     function(data){
  //       console.log(data.data.children);
  //       var boards = data.data.children;

  //       for(var i = 0; i < boards.length; i++){
  //         // console.log(boards[i].data);
  //         renderBox(boards[i].data);
  //       }
  //     }
  //   );



  $(".boards").click(function(){
    $.getJSON(
      // "/api/my_boards.json",
      "http://www.reddit.com/r/EarthPorn.json",
      function(data){
        console.log(data.data.children);
        var boards = data.data.children;

        for(var i = 0; i < boards.length; i++){
          // console.log(boards[i].data);
          renderBox(boards[i].data);
        }
      }
    );
  });


  // when "Random" is clicked
  // create an xhr get request to /api/random.json

  $(".random").click(function(){
     $.getJSON(
      // "/api/random.json",
      'http://www.reddit.com/r/pimpcats.json',
      function(data){
        console.log(data.data.children);
        var boards = data.data.children;

        for(var i = 0; i < boards.length; i++){
          // console.log(boards[i].data);
          renderBox(boards[i].data);
        }
      }
    );
  });

  // when "Get the app" is clicked
  // create an xhr get request to /api/get_the_app.json

  $(".app").click(function(){
     $.getJSON(
      // "/api/get_the_app.json",
      "http://www.reddit.com/r/pics.json",
      function(data){
        console.log(data.data.children);
        var boards = data.data.children;

        for(var i = 0; i < boards.length; i++){
          // console.log(boards[i].data);
          renderBox(boards[i].data);
        }
      }
    );
  });

 

  // all of the json documents are structured the same
  // whenever a json document is loaded, generate the appropriate markup for your layout using the data:

  // image : url
  // title : title
  // author : author
  // age : created -> timestamp to "2 days ago" : use moment.js
  // views : score
  // description : hardcode 2 sentences of lorem ipsum

}); // end document ready

//this function will take in a board object and build HTML code for website

var buildBoardElement = function(board){
  // console.log('=======');
  // console.log(board.author);
  // console.log(board.created);
  // console.log(board.title);
  // console.log(ipsum);
};

var ipsum = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,";

function renderBox( article_data ){
  // create the outermost container element div class='box'
  // this will be returned in the end
  var box = $("<div>", { "class" : "box" });

  // create image div div class="boximage"
  var boximage = $( "<div>", { "class" : "boximage" });
  
  // set it's background image to article_data.url
  boximage.css("background-image", "url('"+ article_data.url + "')");

  // append the image to the box
  box.append(boximage);


  // create the title and add the article_data.title to it
  var title = $("<h2>", {
      "class" : "title",
      html : article_data.title
  });
  //append title to box
  box.append(title);

  // create author
  var who = $("<span>", {
    "class" : "who",
    html : article_data.author
  });

  //append author to box
  box.append(who);

  //create date
  var date = $("<span>", {
    "class" : "date",
    html : moment.unix(article_data.created).fromNow()
  });
  //append date to box
  box.append(date);

  //create views
  var views = $("<span>", {
    "class" : "views",
    html : article_data.score + " views"
  });

  //append views to box
  box.append(views);

  //create description
  var description = $("<p>", {
    "class" : "description",
    html : ipsum
  });

  //append description to box;
  box.append(description);

  // return the box, this could be added to your document
  $('.container').append(box);
}

