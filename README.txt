Documentation for the Expedia-Assignment

•	Scope:
  ◦	  To show hotel deals in a manner user is easily able to view, sort and filter the deals according to his preference.

•	Assumptions made while development:
  ◦ 	Used JSON file are source instead of getting data directly from URL because cross origin resourse sharing seems disabled on server.
  ◦ 	Adapted Expedia’s styling to relate output with Expedia.

•	Tools used:
  ◦	Frontend:
    ▪ 	AngularJs, Bootstrap
  ◦	Service level: Used JSON file as data point

•	How to deploy
  ◦ In local machine:
    ▪ 	Keep the code files in a single folder location and open “main.html” file.
  ◦	On heroku:
    ▪ 	The html file of project is rendered using php file.

•	Test cases:
  ◦ 	By default showing all the hotel deals according to the Star rating of the hotels in their asecending order.
  ◦ 	Search functionality can be used to search for any specific or group of hotels
    ▪ 	Search functionality is generic, it can search from the content of deal’s details, like name of hotel, location, price.
    ▪ 	Searching initiates as user start writing in search box.
  ◦ 	User can also filter data according to price range and hotel star class.
  ◦ 	Sorting of filtered/ non-filtered deals are provided at the top of the deals. It is provided for following selections:
      ▪	By Price
      ▪	By Star rating
      ▪	Hotel Name
      ▪	Guest Rating
      ▪	Most Popular (Default Order)
  ◦ 	Functionalities implemented inside deals tile:
    ▪ 	User can go the specific deal related deals by clicking on Hotel name/ Hotel Image/ Book Now button
    ▪ 	Map functionality is integrated to show the map locality of the specific hotel selection
    ▪ 	User can also find similar deals by clicking on 'Show similar deals' button
    ▪ 	Minimal required UI is shown for extra-small devices to implement responsiveness of app

•	Improvements which can be made:
  ◦ 	Iframes can be used to implement Map functionality as sometimes its too much time to load a map
  ◦ 	External files are directly used from CDN, a fallback can be implemented
