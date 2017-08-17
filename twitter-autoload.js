var target = document.getElementsByClassName('stream-item js-new-items-bar-container');

// create an observer instance
var observer = new MutationObserver(function(mutations) {
 mutations.forEach(function(mutation) {
   if(window.scrollY <= 10){
    mutation.target.getElementsByClassName('new-tweets-bar js-new-tweets-bar')[0].click();
   }
 });    
});

// configuration of the observer:
var config = { attributes: true, childList: true, characterData: true };

// pass in the target node, as well as the observer options
observer.observe(target[0], config);

// later, you can stop observing
//observer.disconnect();

//new-tweets-bar js-new-tweets-bar

//https://developer.mozilla.org/en/docs/Web/API/MutationObserver
