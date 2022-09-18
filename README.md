# BlogList (WIP)
This app let's users add their favourite blogs or articles to a list. Other users can "Like" those blogs to show their aproval. Those blogs can be created (added to the list), modified and deleted by their creators from a beatiful dashboard which they can only access to if they are logged in. To be able to log in they obviously first need to create their user or sign in, they can do that too by providing an email, username and password and, after that, they will be automatically logged in.

The objective of this app is to show my knowledge in full stack web development.
This are some of the Technologies and Frameworks I'm currently using in this app:
- React
- Node.js
- MongoDB
- Mongoose
- Redux
- Axios
- Jest
- React-Router-Dom
- JWT
- bcrypt
- dotenv


### Features:
- [x] Sign in with email, username and password.
- [x] Email and Usernames must be Unique 
- [x] Log In and Log out actions
- [x] Save token, username and name to LocalStorage
- [x] Don't save literal passwords on the database, only their hashed versions.
- [x] Add new blogs from database if you are logged in
- [x] Update and modify your blogs if you are logged in
- [x] Remove your blogs if you are logged in
- [x] Like yours and others blogs
- [x] List all blogs from the database
- [x] Filter through the list of blogs with a text input
- [x] Dashboard page, which you can only access if you are logged in
- [x] 404 Not Found page for all not defined routes.
- [ ] Only allow 1 like per blog per user
- [ ] Single blog page to display data better
- [ ] Let users modify their information
- [ ] Add more information to users. Things like image, biography, website, etc
- [ ] Add more information to blogs. Things like image(s), category, etc
- [ ] Filter by Category and author name
- [ ] Filter by range of likes (optional)
- [ ] Create user profile page to display their information and blogs
- [ ] Blogs List Pagination
- [ ] Session expiration
