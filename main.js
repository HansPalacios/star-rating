document.addEventListener("DOMContentLoaded",function(){
  ratingHoverStars(document.querySelector(".rating"));
});

// the mouseover hover effect
// the mouseout reset to data-default
// the click event to save the star rating & update data-default

function ratingHoverStars( el ) {
  console.log("ratingHoverStars", el)
  el.querySelectorAll("div").forEach( function(div,index) {
    console.log("attaching event listeners", div, index)
    div.addEventListener("mouseover",function(event){
      console.log(event);
      el.className = "rating " + event.target.className;
    });
  });
}
