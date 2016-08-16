tweetApp.controller('tweetController', function($scope, $http){
    var tweetArray = [];
    function Tweet(title, content, date, author){
        this.title = title,
        this.content = content,
        this.date = date,
        this.author = author
    }
    var newTweet = new Tweet();
    tweetArray.push(newTweet);
});
