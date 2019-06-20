# Mobile Web Specialist Certification Course
---
#### _Three Stage Course Material Project - Restaurant Reviews_

# The project  Source code getting by using GitHub and Zip file.
  + The Git-Hub Link is:https://github.com/udacity/mws-restaurant-stage-1
  + The Zip File Link is:https://github.com/udacity/mws-restaurant-stage-1.git.

## Extract Zip File
     + After getting the Zip file we have to Extract the Zip file. After Extract the file default  there have be creating one folder.
     + In this folder there some files. Those are
       + css
         - styles.css
       + data
        - restaurants.json
      + img
      + js
       - dbhelper.js
       - main.js
       - restaurant_info.js
      + CODEOWNERS
      + index.html
      + README.md
      + restaurant.html

## Project Overview: Stage 1

For the **Restaurant Reviews** projects, you will incrementally convert a static webpage to a mobile-ready web application. In **Stage One**, you will take a static design that lacks accessibility and convert the design to be responsive on different sized displays and accessible for screen reader use. You will also add a service worker to begin the process of creating a seamless off-line experience for your users.

### Specification

You have been provided the code for a restaurant reviews website. The code has a lot of issues. It’s barely usable on a desktop browser, much less a mobile device. It also doesn’t include any standard accessibility features, and it doesn’t work off-line at all. Your job is to update the code to resolve these issues while still maintaining the included functionality.

### Project Rubric

Your project will be evaluated by a Udacity code reviewer according to the [Restaurant Reviews project rubric](https://review.udacity.com/#!/rubrics/1090/view). Please review for detailed project requirements. The rubric should be a resource you refer to periodically to make sure your project meets specifications.

### What do I do from here?

1. In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.

    * In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.
   * Note -  For Windows systems, Python 3.x is installed as `python` by default. To start a Python 3.x server, you can simply enter `python -m http.server 8000`.
2. With your server running, visit the site: `http://localhost:8000`, and look around for a bit to see what the current experience looks like.
3. Explore the provided code, and start making a plan to implement the required features in three areas: responsive design, accessibility and offline use.
4. Write code to implement the updates to get this site on its way to being a mobile-ready website.

## Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to replace `<your MAPBOX API KEY HERE>` with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information.

## My map box key (or) token
+ map box token: `pk.eyJ1IjoibXZzbmF2ZWVuayIsImEiOiJjand1OWdpeTMwMDNlNDRtaWVlbmFlcnFrIn0.f0OWd_8RzpTmB+3plchs8w`.


### Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future-proofing JavaScript code. As much as possible, try to maintain use of ES6 in any additional JavaScript you write.


## My Project Overall Summary
+   Here in this project there are two html pages `index.html` and `Restaurant.html`.
+   It will be run using command prompt by installing the python server.
+   `Restaurant.html` is continue of `index.html` when in index page click on view details to go fo  seeing the restaurant details.
+   Here to display the map, map box tokens are used.
+   web page will opened in off line with the help of Service Worker and event listeners.
+   And use file `sw.js` for off line getting of web page.
+   I use tab Index=0 for easy to enter ,when click on tab button in keyboard it will select and display with a different color.
+   Using media queries we can implement the project in mobile view and tablet view.




## Conclusion:
+   Process to done this project is very large.
+   By done this project we can know that many event listeners and about tab Index.
+   When working with this project we can know about server status and server running in command prompt.
