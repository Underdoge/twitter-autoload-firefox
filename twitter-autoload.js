var target = document.getElementsByTagName('body');

var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if(window.scrollY <= 10 && mutation.target.getElementsByClassName('new-tweets-bar js-new-tweets-bar').length > 0)
            mutation.target.getElementsByClassName('new-tweets-bar js-new-tweets-bar')[0].click();
    });
});

var config = { childList: true, subtree: true };

observer.observe(target[0], config);

document.addEventListener('scroll', function(e) {
    if (window.scrollY === 0 && document.getElementsByClassName('new-tweets-bar js-new-tweets-bar').length > 0)
        document.getElementsByClassName('new-tweets-bar js-new-tweets-bar')[0].click();
});
