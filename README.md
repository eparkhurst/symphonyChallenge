# This is a code challenge for Symphony Commerce

This app was created using AngularJS 1.X. I haven't built an AngularJS app for a while so this was a fun app to build(I've mostly been building react apps). I went for a simple style and focused mostly on making it functional and responsive. You can use the search area on the left to order by name and price and also use the search bar and price inputs to filter the products.

## To Run

Fork and clone the repo and the either open index.html or run a static server in the root

## Future Features

One of the first things I would do is add routing. Currently there is only the one view but if it were a production site it would undoubtedly need other views.

I would turn the header into a nav bar. A nav bar wasn't necessary but if more views were added it would be a high priority.

I would also create some sort of a banner. I like the current style but I feel like a well made banner would add to the overall look.

## What I got blocked on

I ended up writing a custom filter to use the max and min price functions. For some reason the filter is loading before the controller and thus throws an error that the range.max is undefined. The controller loads immediately after so there isn't any real effect on the site but there is an error that shows. I ended up overwriting the exceptionHandler so that it doesn't show up in the console but that is pretty hacky and I would definitely spend more time on that bug if this were for a client. 
