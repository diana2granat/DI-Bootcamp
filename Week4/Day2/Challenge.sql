-- CREATE TABLE FirstTab (
--      id integer, 
--      name VARCHAR(10)
-- )

-- INSERT INTO FirstTab VALUES
-- (5,'Pawan'),
-- (6,'Sharlee'),
-- (7,'Krish'),
-- (NULL,'Avtaar')

-- SELECT * FROM FirstTab

-- CREATE TABLE SecondTab (
--     id integer 
-- )

-- INSERT INTO SecondTab VALUES
-- (5),
-- (NULL)


-- SELECT * FROM SecondTab
-- ======================================
-- Questions

-- Q1. What will be the OUTPUT of the following statement?
--     SELECT COUNT(*) 
--     FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )
--=======================================answer================================================
-- Selecting all the elements in FirstTab where ID = NULL but is not in NULL.
-- OUTPUT: 0.


-- Q2. What will be the OUTPUT of the following statement?
--     SELECT COUNT(*) 
--     FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )
--=======================================answer================================================
-- Selecting the all the rows with IDs which are not included in the SecondTab
-- OUTPUT: 2

-- Q3. What will be the OUTPUT of the following statement?
--     SELECT COUNT(*) 
--     FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )
--=======================================answer================================================
-- Selecting all the elements which are in SecondTab but not presented in FirstTab
-- OUTPUT: 0


-- Q4. What will be the OUTPUT of the following statement?
--     SELECT COUNT(*) 
--     FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )
--=======================================answer================================================
-- Selecting all the element with ID not NULL but we can find them in the FirstTab and SecondTab
-- OUTPUT: 2

