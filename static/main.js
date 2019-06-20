// document.querySelector('.about').scrollIntoView({
//   behavior: 'smooth'
// });

var callback = function(){
  console.log('works');

  // Handler when the DOM is fully loaded
  
};

if (
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
  callback();
} else {
  document.addEventListener("DOMContentLoaded", callback);
}
