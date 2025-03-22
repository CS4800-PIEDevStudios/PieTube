CREATE TABLE PieTube.Director (
    DirectorID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    DateOfBirth DATE NOT NULL
);

CREATE TABLE PieTube.Actor (
    ActorID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    DateOfBirth DATE NOT NULL
);

CREATE TABLE PieTube.Genre (
    GenreID INT AUTO_INCREMENT PRIMARY KEY,
    GenreName VARCHAR(100) NOT NULL
);

CREATE TABLE PieTube.Movie (
    MovieID INT AUTO_INCREMENT PRIMARY KEY,
    DirectorID INT,
    GenreID INT,
    ActorID INT,
    Summary TEXT,
    Title VARCHAR(255) NOT NULL,
    AgeRating VARCHAR(50),
    Rating float,
    Duration float,
    Language VARCHAR(100),
    ReleaseDate DATE,
    SubtitleAvailability BOOLEAN,
    FOREIGN KEY (DirectorID) REFERENCES PieTube.Director(DirectorID),
    FOREIGN KEY (GenreID) REFERENCES PieTube.Genre(GenreID),
    FOREIGN KEY (ActorID) REFERENCES PieTube.Actor(ActorID)
);

CREATE TABLE PieTube.User (
    UserID INT AUTO_INCREMENT PRIMARY KEY,
    Username VARCHAR(100) NOT NULL UNIQUE,
    Email VARCHAR(255) NOT NULL UNIQUE,
    PasswordHash VARCHAR(255) NOT NULL,
    FirstName VARCHAR(100),
    LastName VARCHAR(100),
    DateOfBirth DATE
);


CREATE TABLE PieTube.Trailer (
    TrailerID INT AUTO_INCREMENT PRIMARY KEY,
    URL VARCHAR(255) NOT NULL,
    MovieID INT,
    FOREIGN KEY (MovieID) REFERENCES PieTube.Movie(MovieID)
);

CREATE TABLE PieTube.MovieRole (
    RoleID INT AUTO_INCREMENT PRIMARY KEY,
    ActorID INT,
    MovieID INT,
    CharacterName VARCHAR(255) NOT NULL,
    FOREIGN KEY (ActorID) REFERENCES PieTube.Actor(ActorID),
    FOREIGN KEY (MovieID) REFERENCES PieTube.Movie(MovieID)
);

CREATE TABLE PieTube.MovieGenre (
    MovieGenreID INT AUTO_INCREMENT PRIMARY KEY,
    GenreID INT,
    MovieID INT,
    FOREIGN KEY (GenreID) REFERENCES PieTube.Genre(GenreID),
    FOREIGN KEY (MovieID) REFERENCES PieTube.Movie(MovieID)
);

CREATE TABLE PieTube.Recommendation (
    RecommendationID INT AUTO_INCREMENT PRIMARY KEY,
    MovieID INT,
    UserID INT,
    FOREIGN KEY (MovieID) REFERENCES PieTube.Movie(MovieID),
    FOREIGN KEY (UserID) REFERENCES PieTube.User(UserID)
);
