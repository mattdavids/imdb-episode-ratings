# IMDB Episode Ratings

This is a Chrome Extension designed to add episode ratings to the episode list pages on IMDB. On the IMDB mobile app, it displays the episode ratings next to the episode titles. This adds that functionality to the desktop site. 

## Installation 

After cloning the repo you will need to download the latest version of jQuery which can be found [here](https://code.jquery.com/) and place it into the folder. 

Depending on the version of jQuery you download, you may need to change the manifest.json file to match. 

```javascript
"js": [
    "jquery-3.2.1.min.js",
    "app.js"
]
```

You will need to change the line that reads ```"jquery-3.2.1.min.js"``` to the title of the version of jQuery you have downloaded.  

After that, open Chrome and go chrome://extensions and select developer mode. After selecting Load Unpacked Extension you can select the folder you cloned the repo and you're done! Load up your favorite show and enjoy seeing the ratings for all the episodes. 
