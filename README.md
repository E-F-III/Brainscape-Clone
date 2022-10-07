# Leitner-scape ( A clone of BrainScape )
Leitner-scape is a clone of the webapp "BrainScape" known for allowing students to make and utilize flashcards.

## This project was developed utilizing:

### Frontend
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)&nbsp;
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)&nbsp;
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)&nbsp;
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)&nbsp;

### Backend
![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)&nbsp;
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)&nbsp;
![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)&nbsp;
![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)&nbsp;
![SQLAlchemy](https://img.shields.io/badge/SQLAlchemy-100000?style=for-the-badge&logo=sql&logoColor=BA1212&labelColor=AD0000&color=A90000)&nbsp;

## Wiki Links:
* [Database Schema](https://github.com/E-F-III/Brainscape-Clone/wiki/Database-Schema)
* [User Stories](https://github.com/E-F-III/Brainscape-Clone/wiki/User-Stories)
* [API Routes](https://github.com/E-F-III/Brainscape-Clone/wiki/API-Routes)
* [Redux State Shape](https://github.com/E-F-III/Brainscape-Clone/wiki/Redux-State-Shape)
* [App Features](https://github.com/E-F-III/Brainscape-Clone/wiki/Features-List)
* [Wireframes](https://github.com/E-F-III/Brainscape-Clone/wiki/Wireframes)
***

## Pages
### Splashpage
* On the splashpage, a user can find about links to the project repo, and socials of the dev
* At the top, a user can find a navbar where they can either sign up or log in
![image](https://user-images.githubusercontent.com/75222415/194492361-43ca4038-dd24-47b0-9c29-1df03a36d806.png)

### Sidebar
* On a user's dashboard, one can find a sidebar where they can see their classes
* As of 10/06/22, a user cannot create/edit/delete a class, however on signup, they are given a class to add decks onto
![image](https://user-images.githubusercontent.com/75222415/194492503-fb44a3a4-e3df-4ba3-b587-5aa5309f6c2d.png)

### Class page
* On the class page, a user can find the decks that they have created for their classes.
* A user may also create additional decks on this page
![image](https://user-images.githubusercontent.com/75222415/194492586-91b8ab20-0088-445c-9008-fce58cf0897a.png)

### Deck page

#### Preview Cards
* A user can view cards assigned to a specific deck
![image](https://user-images.githubusercontent.com/75222415/194492780-b44118ec-3f76-48e3-bb02-8d5b9327ffe8.png)

#### Edit Cards
* A user can create/edit/delete cards assigned to a specific deck
![image](https://user-images.githubusercontent.com/75222415/194493003-cb5cd4ee-4ade-4ff1-946d-ed027e350ade.png)

### Browse Deck
* A user can browse through a deck, where they can see a card's question. 
* Upon clicking the button below, they can 'flip' the card to reveal the answer.
* Along the sides of this page, a user can switch between cards by clicking on the arrow buttons
![image](https://user-images.githubusercontent.com/75222415/194493112-60ebfb60-78ef-4f63-b92d-b0df866440ed.png)


## How to run Leitner-scape Locally:
## Run Locally
- Clone the repository
- cd into the project directory and run ``pipenv install``
- Create a ``.env`` file in the root of the project and add the following variables
```
SECRET_KEY=<<SECRET_KEY>>
DATABASE_URL=sqlite:///dev.db
```
- Create another ``.env`` file in the root of the react-app directory and add the following variables
```
REACT_APP_BASE_URL=http://localhost:5000
```
- You will need two terminals to run this locally.
- The first terminal will be used for the backend server, run ``pipenv shell``
- Then run the following commands in the terminal
```
flask db upgrade
flask seed all
```
- The second terminal will be used for the frontend server. cd into the react-app directory and run the following commands
```
npm install
```
- Finally run the following command in the second terminal while still in the react-app directory
```
npm start
```
