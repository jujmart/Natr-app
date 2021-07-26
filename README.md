# Natr

The live site can be found here: [Natr](https://natr-app.herokuapp.com/)

Natr, a Flickr clone, is an application for nature photo management and sharing.

Below is a list of links to information about the site:

-   [Feature List](../../wiki/Feature-List)

-   [Database Schema](../../wiki/Database-Schema)

## Technologies Used

-   React
-   Express
-   Redux
-   Heroku
-   Sequelize
-   PostgreSQL

## Site Feature Screenshots

Homepage:
![Homepage](./Homepage-Screenshot)

Login Screen Modal:
![Homepage](./Login-Modal-Screenshot)

Signup Screen Modal:
![Homepage](./Signup-Modal-Screenshot)

Logged Out Individual Photo Page:
![Homepage](./Photo-Page-Screenshot)

Logged In Individual Photo Page:
![Homepage](./Logged-In-Photo-Page-Screenshot)

Edit Image Form:
![Homepage](./Edit-Image-Screenshot)

## How to build/run the site locally

### Step 1

1. Clone the repository to your local machine

### Step 2

1. Go into the backend directory and create a .env file using the .env.example (stay away from using a port of 3000)
2. Create a user with CREATEDB access in your local sql database
3. Run `npm install` in your backend directory
4. Run `npx dotenv sequelize db:create` in your backend directory
5. Run `npx dotenv sequelize db:migrate` in your backend directory
6. Run `npx dotenv sequelize db:seed:all` in your backend directory
7. Run `npm start` in your backend directory and keep this backend server running

### Step 3

1. Go into the frontend directory and run `npm install`
2. Run npm start in your frontend directory and keep this frontend server running

### Step 4

1. Open a browser and navigate to localhost:3000
2. You should see the homepage appear and be able to use the app

## Technical Implementation

## Future Features

-   User profile page
    -   Update/Delete a user
    -   Shows which photos/albums/faves were created by this user
-   Albums - a collection of photos that have a single shared characteristic or are grouped together for the user's ease
    -   Create/Read/Update/Delete an album
-   Favorite a photo
-   "Like"/"Unlike" a comment
-   Photo tags
    -   Create/Read/Update/Delete a tag
    -   Gives clarifying information to what is in the photo
    -   Can be used to search through available photos
-   Search bar
    -   Can search by photo tag or search for a specific title of a photo
