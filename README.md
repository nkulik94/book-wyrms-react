# Book Wyrms 2.0

## How to Run the App

At this point this app has not been deployed online, although I hope to do so. It was created with [Create React App](https://github.com/facebook/create-react-app), so if you fork and clone the repo and run npm install and npm start you should be able to run it locally. The backend has been deployed to Heroku ([here](https://book-wyrm-api.herokuapp.com/) if you want to see the data we're working with), so no local json-server is necessary to run the app.

## What it Does

Much of the functionality is similar to my first [Book Wyrm](https://github.com/nkulik94/book-wyrmz) app, but with the help of React and React Bootstrap I was able to improve on a few things, not least of which was the styling. I used React Router to split some of the app's functionality into different pages, and to add a few more features (such as a home page, the featured book page, etc). Here's a brief summary of the app's features. The app opens to the home page, which displays a nav bar and an introductory message. The featured book tab navigates to a static page which displays a featured book with an "official" Book Wyrms review. The last tab, Contact, is also static, and displays some basic information about the Chief Book Wyrm (me). The Search tab navigates to a search bar where books can be searched by title or author and displayed in pages of five books each, navigated with page buttons (shoutout to React Bootstrap for making those much cleaner and easier to create than last time!), clicking on the button in each book card displays a more detailed version of the book on the left side of the window, including any relevant Book Wyrms information (ratings, reviews, etc).

> Note: Due to the somewhat disorganized nature of the Open Library API, selecting a book with no cover image will throw an error. I know what's causing the bug and I hope to get to it one day

The Shelf tab will redirect the user to a login page if they are not already logged in. Once logged in, the Shelf tab will display a read list, and a set of buttons to toggle to the wish list and back. Each book on the lists will have a button to display more a more detailed version of the book (like on the search page). The book cards on the read list will also display the user's rating or review if applicable, as well as buttons to change the rating or edit/delete the review.