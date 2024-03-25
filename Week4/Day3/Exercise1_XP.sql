-- 🌟 Exercise 1: DVD Rental
-- Instructions

--     1) Get a list of all the languages, from the language table.
--======================answer=========================================================
-- SELECT name
-- FROM language

--     2) Get a list of all films joined with their languages – select the following details : film title, description, and language name.
--======================answer=========================================================
-- SELECT film.title, film.description, language.name
-- FROM film
-- JOIN language ON film.language_id = language.language_id
-- ORDER BY language.name

--     3) Get all languages, even if there are no films in those languages – select the following details : film title, description, and language name.
--======================answer=========================================================
-- SELECT language.name AS language_name,
-- GROUP_CONCAT(CONCAT(film.title, ' - ', film.description) 
-- ORDER BY film.title) AS film_details
-- FROM language
-- LEFT JOIN film ON language.language_id = film.language_id
-- GROUP BY language.name;

--     4) Create a new table called new_film with the following columns : id, name. Add some new films to the table.
--======================answer=========================================================
-- CREATE TABLE new_film (
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(255) NOT NULL
-- );
-- INSERT INTO new_film (name) VALUES
-- ('Film A'),
-- ('Film B'),
-- ('Film C');

--     5) Create a new table called customer_review, which will contain film reviews that customers will make.
--     Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.
--     It should have the following columns:
--         review_id – a primary key, non null, auto-increment.
--         film_id – references the new_film table. The film that is being reviewed.
--         language_id – references the language table. What language the review is in.
--         title – the title of the review.
--         score – the rating of the review (1-10).
--         review_text – the text of the review. No limit on the length.
--         last_update – when the review was last updated.
--======================answer=========================================================
-- CREATE TABLE customer_review (
--     review_id SERIAL PRIMARY KEY,
--     film_id INT NOT NULL,
--     language_id INT NOT NULL,
--     title VARCHAR(255),
--     score INT CHECK (score >= 1 AND score <= 10),
--     review_text TEXT,
--     last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     FOREIGN KEY (film_id) REFERENCES new_film(id) ON DELETE CASCADE,
--     FOREIGN KEY (language_id) REFERENCES language(language_id)
-- );

--     6) Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
--======================answer=========================================================
-- INSERT INTO customer_review (film_id, language_id, title, score, review_text)
-- VALUES (1, 2, 'Great Movie!', 9, 'This movie was fantastic!');

-- INSERT INTO customer_review (film_id, language_id, title, score, review_text)
-- VALUES (1, 1, 'Great Movie!', 9, 'This movie was fantastic. I highly recommend it.');

--     7) Delete a film that has a review from the new_film table, what happens to the customer_review table?
-- DELETE FROM new_film WHERE id = 1;
-- The movie is deleted and the its review is deleted