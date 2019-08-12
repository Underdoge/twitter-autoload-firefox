var target = document.body;
var scrollPos = window.scrollY;

var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (document.getElementsByClassName("css-1dbjc4n r-1awozwy r-sdzlij r-18u37iz r-1777fci r-dnmrzs r-1sp51qo r-o7ynqc r-6416eg").length > 0){ //windows
            if (scrollPos === 0 && scrollPos < window.scrollY && window.location.href.includes("twitter.com/home"))
                 document.getElementsByClassName("css-1dbjc4n r-1awozwy r-sdzlij r-18u37iz r-1777fci r-dnmrzs r-1sp51qo r-o7ynqc r-6416eg")[0].click();
        } else
            if (document.getElementsByClassName("css-1dbjc4n r-1awozwy r-sdzlij r-18u37iz r-1777fci r-dnmrzs r-1bq9uc5 r-o7ynqc r-6416eg").length > 0){ //mac
                if (scrollPos === 0 && scrollPos < window.scrollY && window.location.href.includes("twitter.com/home"))
                    document.getElementsByClassName("css-1dbjc4n r-1awozwy r-sdzlij r-18u37iz r-1777fci r-dnmrzs r-1bq9uc5 r-o7ynqc r-6416eg")[0].click();
            }
        if(window.scrollY <= 10 && mutation.target.getElementsByClassName('new-tweets-bar js-new-tweets-bar').length > 0) //old design
            mutation.target.getElementsByClassName('new-tweets-bar js-new-tweets-bar')[0].click();
    });
});

var config = { childList: true, attributes: true, characterData: true, subtree: true };

observer.observe(target, config);

document.addEventListener('scroll', function(e) {
    scrollPos = window.scrollY;
    if (window.scrollY === 0 && document.getElementsByClassName('new-tweets-bar js-new-tweets-bar').length > 0) // old design
        document.getElementsByClassName('new-tweets-bar js-new-tweets-bar')[0].click();
});