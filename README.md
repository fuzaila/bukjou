# BukJou - Your own book journal

BukJou is a web application developed using MEAN stack software. It is an application where user's can track what they have read, discover more books, read book blogs, and get recommendations based on their favorite books. In short, it's a book-lover's dream come true!

### How to run application

The node-modules and dependencies required to run the application are included in the package.json file. 
1. Start by initializing your database. 
2. Open the terminal and use command "nodemon app.js" to start the backend.
3. To compile the frontend, use command "ng serve"
4. The API's for frontend are loaded from the local URL's - localhost:3000/books and localhost:3000/blogs (Or whatever port number your node server runs on). Open these on you browser.

### Admin 

Admin credentials are fixed and are as follows -
##### Email: admin@gmail.com
##### Password: 1234567

### User

Start by signing up for an account. Login to your account using the signed up credentials. 

You can browse the books list and add books to your 'Read' list and 'Favorites' list. Books in your 'Favorites' list are configured to always be a subset of your 'Read' list. User can also add reviews for books they have read.

Adding books to your 'Favorites' list will activate your 'Recommendations' page. If any user has favorited books from your 'Favorites' list, the rest of that user's Favorite books will be recommended to you, provided you haven't 'Read' the book. 

You can also read blogs. Only a brief of the blog is displayed on user dashboard. Clicking on 'Read more' will result in navigating to an external link.

### Bugs 

###Update [15/04/2021] - User can now add reviews and these reviews are reflected in the backend as well. But the response from the backend causes an error {header message error) which makes the frontend not respond with a postive message even if user review has been added. The user will have to manually reload the page to see the newly added review.

#### Thank you for checking out my project. You can see a working video of the project here - https://drive.google.com/drive/folders/1qPXO6kk9UmNFKTV7W-TljRu5jqViJ1ex?usp=sharing
#### For more information, or in case of any queries, mail me at ha.fuzaila@gmail.com


