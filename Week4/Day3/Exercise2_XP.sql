-- 🌟 Exercise 2 : DVD Rental
-- Instructions

--     1) Use UPDATE to change the language of some films. Make sure that you use valid languages.
-- =========================================answer==========================================================
-- UPDATE customer_review 
-- SET language_id = 3 
-- WHERE language_id IN (1, 2);

--     2) Which foreign keys (references) are defined for the customer table? 
-- 		  How does this affect the way in which we INSERT into the customer table?
-- =========================================answer==========================================================
-- language_id
-- film_id
--Attempting to insert a row with a foreign key value that does not exist in the referenced table will result in a constraint violation error.

--     3) We created a new table called customer_review. 
-- 		  Drop this table. Is this an easy step, or does it need extra checking?
-- =========================================answer==========================================================
-- DROP TABLE customer_review; 
-- it was easy

--     4) Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
-- =========================================answer==========================================================
-- SELECT COUNT(*)
-- FROM rental
-- WHERE return_date is NULL
-- output: 183

--     5) Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
-- =========================================answer==========================================================
SELECT film.name, payment.amount
FROM film JOIN ON payment.film
WHERE 

--     6) Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember their names. Can you help him find which movies he wants to rent?
--         The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.

--         The 2nd film : A short documentary (less than 1 hour long), rated “R”.

--         The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.

--         The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.
-- =========================================answer==========================================================


