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
