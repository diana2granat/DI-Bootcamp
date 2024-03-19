-- 🌟 Exercise 2 : dvdrental database
-- Instructions
-- We will use the newly installed dvdrental database.

--1) In the dvdrental database write a query to select all the columns from the “customer” table.
--answer:
-- SELECT *
-- FROM customer

--2) Write a query to display the names (first_name, last_name) using an alias named “full_name”.
--answer:
-- SELECT customer.first_name || ' ' || customer.last_name as full_name 
-- FROM customer;

--3) Lets get all the dates that accounts were created. Write a query to select all the create_date from the “customer” table (there should be no duplicates).
--answer:
-- SELECT customer.create_date, COUNT(*) AS count
-- FROM customer
-- GROUP BY create_date
-- ORDER BY count DESC;

--4) Write a query to get all the customer details from the customer table, it should be displayed in descending order by their first name.
--answer:
-- SELECT *
-- FROM customer
-- ORDER BY first_name DESC;

--5) Write a query to get the film ID, title, description, year of release and rental rate in ascending order according to their rental rate.
--answer:
-- SELECT film_id, title, description, release_year, rental_rate
-- FROM film
-- ORDER BY rental_rate ASC;

--6) Write a query to get the address, and the phone number of all customers living in the Texas district, these details can be found in the “address” table.
--answer:
-- SELECT address.address, address.phone
-- FROM customer
-- INNER JOIN address ON customer.address_id = address.address_id
-- INNER JOIN city ON city.city_id = address.city_id
-- WHERE address.district = 'Texas';

--7) Write a query to retrieve all movie details where the movie id is either 15 or 150.
--answer:
-- SELECT *
-- FROM film
-- WHERE film_id = 15 OR film_id = 150

--8) Write a query which should check if your favorite movie exists in the database. Have your query get the film ID, title, description, length and the rental rate, these details can be found in the “film” table.
--answer:
-- SELECT film_id, title, description, length, rental_rate
-- FROM film
-- WHERE title = 'Titanic';

--9) No luck finding your movie? Maybe you made a mistake spelling the name. Write a query to get the film ID, title, description, length and the rental rate of all the movies starting with the two first letters of your favorite movie.
--answer:
-- SELECT film_id, title, description, length, rental_rate
-- FROM film
-- WHERE title LIKE 'T%';

--10) Write a query which will find the 10 cheapest movies.
--answer:
-- SELECT film_id, title, description, length, rental_rate
-- FROM film
-- ORDER BY rental_rate ASC
-- LIMIT 10;

--11) Not satisfied with the results. Write a query which will find the next 10 cheapest movies.
--answer:
-- SELECT film_id, title, description, length, rental_rate
-- FROM film
-- ORDER BY rental_rate ASC
-- LIMIT 10 OFFSET 10;


--12) Write a query which will join the data in the customer table and the payment table. You want to get the first name and last name from the curstomer table, as well as the amount and the date of every payment made by a customer, ordered by their id (from 1 to…).
--answer:
-- SELECT customer.first_name || ' ' || customer.last_name as full_name, 
--        payment.amount, 
--        payment.payment_date
-- FROM customer 
-- INNER JOIN payment ON customer.customer_id = payment.customer_id
-- ORDER BY payment.customer_id;

--13) You need to check your inventory. Write a query to get all the movies which are not in inventory.
--answer:
-- SELECT film.film_id, film.title, film.description, film.length, film.rental_rate
-- FROM film
-- LEFT JOIN inventory ON film.film_id = inventory.film_id
-- WHERE inventory.film_id IS NULL;

--14) Write a query to find which city is in which country.
--answer:
-- SELECT city.city, country.country
-- FROM city
-- INNER JOIN country ON city.country_id = country.country_id;