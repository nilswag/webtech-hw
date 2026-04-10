ID = 20

Names:
- Nils Wagemaker, ID = 9397388
- Lorenzo Vacca, ID = 1769995
- Jordy Mostert, ID = 5446589

http://webtech.science.uu.nl/group20/

==========================================================================================================================================================================

This is a New Zealand sailing / America's Cup fan site built as a web technology university assignment (Group 20, Utrecht University). 
It lets visitors browse teams and players, view upcoming games with a countdown, see a leaderboard, and manage accounts. 
Admins can create/edit/delete players and teams.

webtech-hw-1/
├── backend/          ← Express server
│   ├── src/
│   │   ├── server.js              ← Entry point, mounts all routes
│   │   ├── controllers/           ← Request handlers
│   │   ├── routes/                ← Route definitions
│   │   ├── services/              ← Business logic / DB calls
│   │   ├── models/                ← Data model helpers
│   │   ├── middleware/            ← Auth + logging middleware
│   │   └── util/                  ← Helpers (path resolution, logging)
│   └── database/
│       ├── database.js            ← SQLite connection + query helpers
│       ├── setup.js               ← Table creation (DDL)
│       ├── db.db                  ← SQLite database file
│       └── queries/               ← Named SQL queries per entity
├── frontend/
│   └── public/
│       ├── html/                  ← Static HTML pages
│       ├── css/                   ← Stylesheets
│       ├── js/                    ← Client-side JavaScript
│       └── media/images/          ← Photos, portraits, boat images
└── shared/
    └── models/User.js             ← Shared User model (front+back)

backend/src/server.js — Creates the Express app, registers middleware, mounts all routes, initializes DB tables on startup, listens on port 8020.
backend/package.json — Dependencies: express, sqlite3, bcrypt, cookie-parser, express-validator.
backend/src/routes/frontendRoutes.js — Serves HTML pages
backend/src/routes/playersRoutes.js — /api/players endpoints
backend/src/routes/teamsRoutes.js — /api/teams endpoints
backend/src/routes/usersRoutes.js — /api/users (auth: register, login, profile)
backend/src/routes/statisticsRoute.js — /api/statistics (leaderboard/stats)
backend/src/controllers/frontendController.js — Sends HTML files
backend/src/controllers/playersController.js — CRUD for players
backend/src/controllers/teamsController.js — CRUD for teams
backend/src/controllers/usersController.js — Register, login, logout, profile, favorites
backend/src/controllers/statisticsController.js — Leaderboard and team statistics
backend/src/services/playersService.js — Get/create/update/delete players
backend/src/services/teamsServices.js — Get/create/update/delete teams
backend/src/services/usersService.js — Register, login (bcrypt), profile, favorites
backend/src/services/authService.js — Token-based session validation
backend/src/services/sessionsService.js — Create/delete/validate sessions
backend/src/services/statisticsService.js — Query aggregated stats
backend/src/middleware/authMiddleware.js — Checks session cookie, protects routes
backend/src/middleware/utilityMiddleware.js — Request logging and error handling
backend/src/util/frontendUtil.js — Resolves __rootDirName for static file serving
backend/src/util/logging.js — Logging helper
backend/src/models/Session.js — Session data model
backend/database/database.js — SQLite3 connection + 4 helper functions: execQuery, runQuery, fetchAll, fetchFirst
backend/database/setup.js — CREATE TABLE IF NOT EXISTS for all 6 tables
backend/database/queries/playersQueries.js — SQL for player CRUD
backend/database/queries/teamsQueries.js — SQL for team CRUD
backend/database/queries/usersQueries.js — SQL for user CRUD
backend/database/queries/sessionsQueries.js — SQL for session management
backend/database/queries/adminsQueries.js — SQL for admin lookup
backend/database/queries/gamesQueries.js — SQL for upcoming games
backend/database/db.db — The actual SQLite database file
shared/models/User.js — User model shared between frontend and backend
shared/package.json - To fix import errors of shared models
frontend/public/html/index.html — Home/landing page
frontend/public/html/login.html / register.html — Auth pages
frontend/public/html/profile.html — User profile with favorite team
frontend/public/html/players.html / player.html — Browse players, single player view
frontend/public/html/players-admin.html / player-admin.html — Admin: list/edit players
frontend/public/html/teams.html / team.html — Browse teams, single team view
frontend/public/html/teams-admin.html / team-admin.html — Admin: list/edit teams
frontend/public/html/upcomingGames.html — Upcoming games with countdown timer
frontend/public/js/util/api.js — Shared fetch wrapper for API calls
frontend/public/js/util/response-handler.js — Handles API response errors
frontend/public/js/session.js — Checks login state, shows/hides nav elements
frontend/public/js/login.js / js/logout.js / js/register.js — Auth forms
frontend/public/js/profile.js — Loads and updates user profile/favorites
frontend/public/js/players.js / js/player.js — Fetch and render player data
frontend/public/js/players-admin.js / js/adminPlayer.js — Admin player management
frontend/public/js/teams.js / js/team.js — Fetch and render team data
frontend/public/js/teams-admin.js / js/team-admin.js — Admin team management
frontend/public/js/cards.js — Renders player/team card components
frontend/public/js/leaderboard.js — Renders the statistics leaderboard
frontend/public/js/countdown.js — Countdown timer for upcoming games
frontend/public/js/upcomingGames.js — Fetches and renders upcoming games
frontend/public/css/reset.css — CSS reset
frontend/public/css/color-themes.css — Color variables/themes
frontend/public/css/style.css — Main global styles
frontend/public/css/index.css — Home page styles
frontend/public/css/login-form.css — Login/register form styles
frontend/public/css/player.css / player-admin.css — Player page styles
frontend/public/css/profile.css — Profile page styles
frontend/public/css/team.css — Team page styles
frontend/public/css/cards.css — Card component styles
frontend/public/css/table-of-contents.css — TOC/sidebar styles

==========================================================================================================================================================================

Logins & Passwords:

Admins:
John Cena - EMail = j.cena@fake-email.com, Password = JCena1 

Normal Users:
Nils Wagemaker - EMail = n.l.wagemaker@students.uu.nl, Password = 1234
John Snow - EMail = j.targaryen@westeros.com, Password = 67420

==========================================================================================================================================================================

CREATE TABLE Users(
    id INTEGER PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    firstName TEXT NOT NULL,
    lastName TEXT NOT NULL,
    password TEXT NOT NULL,
    favoriteTeam TEXT
);

CREATE TABLE Sessions(
    id INTEGER PRIMARY KEY,
    userId INTEGER NOT NULL,
    token TEXT UNIQUE NOT NULL,
    expires TEXT NOT NULL,
    FOREIGN KEY (userId) REFERENCES Users(id) ON DELETE CASCADE
);

CREATE TABLE Admins(
    userId INTEGER UNIQUE NOT NULL,
    FOREIGN KEY (userId) REFERENCES Users(id) ON DELETE CASCADE
);

CREATE TABLE Games(
    date BIGINT PRIMARY KEY NOT NULL,
    venue TEXT,
    defender TEXT,
    scoreDefender INTEGER,
    challenger TEXT,
    scoreChallenger INTEGER
);

CREATE TABLE Teams(
    id INTEGER PRIMARY KEY,
    name TEXT, 
    image TEXT,
    wins INTEGER,
    losses INTEGER,
    totalPoints INTEGER
);

CREATE TABLE Players(
    id INTEGER PRIMARY KEY,
    firstName TEXT,
    lastName TEXT,
    age INTEGER,
    role TEXT,
    number INTEGER,
    photo TEXT, 
    teamId INTEGER
);