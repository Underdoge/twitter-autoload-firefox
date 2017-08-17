var target = document.getElementsByClassName('stream-item js-new-items-bar-container');

var observer = new MutationObserver(function(mutations) {
 mutations.forEach(function(mutation) {
   if(window.scrollY <= 10){
    mutation.target.getElementsByClassName('new-tweets-bar js-new-tweets-bar')[0].click();
   }
 });    
});

var config = { attributes: true, childList: true, characterData: true };

observer.observe(target[0], config);
