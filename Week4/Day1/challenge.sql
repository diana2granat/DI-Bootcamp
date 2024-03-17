-- CREATE TABLE actors (
--     actor_id SERIAL PRIMARY KEY,
--     first_name VARCHAR(50) NOT NULL,
--     last_name VARCHAR(100) NOT NULL,
--     age DATE NOT NULL,
--     number_oscars SMALLINT NOT NULL
-- )

-- INSERT INTO actors (first_name, last_name, age, number_oscars) VALUES
--     ('Tom', 'Hanks', '1956-07-09', 2),
--     ('Meryl', 'Streep', '1949-06-22', 3),
--     ('Leonardo', 'DiCaprio', '1974-11-11', 1),
--     ('Jennifer', 'Lawrence', '1990-08-15', 1),
--     ('Brad', 'Pitt', '1963-12-18', 1),
--     ('Angelina', 'Jolie', '1975-06-04', 1),
--     ('Denzel', 'Washington', '1954-12-28', 2),
--     ('Charlize', 'Theron', '1975-08-07', 1),
--     ('Matt', 'Damon', '1970-10-08', 2),
--     ('Scarlett', 'Johansson', '1984-11-22', 0),
--     ('Johnny', 'Depp', '1963-06-09', 1),
--     ('Julia', 'Roberts', '1967-10-28', 1),
--     ('Robert', 'Downey Jr.', '1965-04-04', 0),
--     ('Emma', 'Stone', '1988-11-06', 1),
--     ('Chris', 'Evans', '1981-06-13', 0);

-- SELECT COUNT(*) AS actor_count FROM actors;

-- INSERT INTO actors (first_name, last_name, age, number_oscars) VALUES ('John', '', NULL, 0);
-- =======OUTCOME===================:
-- ERROR:  Failing row contains (16, John, , null, 0).null value in column "age" of relation "actors" violates not-null constraint 
-- ERROR:  null value in column "age" of relation "actors" violates not-null constraint
-- SQL state: 23502
-- Detail: Failing row contains (16, John, , null, 0).