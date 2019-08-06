var target = document.body;
var scrollPoss = window.scrollY;

var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (scrollPoss === 0 && window.scrollY > 0) {
                 document.getElementsByClassName("css-1dbjc4n r-1awozwy r-sdzlij r-18u37iz r-1777fci r-dnmrzs r-1sp51qo r-o7ynqc r-6416eg")[0].click();
                mutation.target.parentNode.click();
                window.scrollTo(0,0);
        }
    });
});

var config = { childList: true, attributes: true, characterData: true, subtree: true };

observer.observe(target, config);

document.addEventListener('scroll', function(e) {
        scrollPoss = window.scrollY;
});
