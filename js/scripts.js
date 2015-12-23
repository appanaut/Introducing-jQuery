$(function() {
  $("h1").click(function() {
    alert("This is a header.");
    var name = prompt("What is your name?");
    alert("Hello, " + name + ". How is your day going?");
  });

  $("p").click(function() {
    alert("This is a paragraph.");
  });

  $("img").click(function() {
    alert("This is an image.");
  });
});
