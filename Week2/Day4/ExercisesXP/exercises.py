# Exercise 1 : What are you learning ?
# Instructions

#     Write a function called display_message() that prints one sentence telling everyone what you are learning in this course.
#     Call the function, and make sure the message displays correctly.
#============================================answer========================================================================================
# def display_message():
#     print('I\'m learning Python')
# display_message()


# 🌟 Exercise 2: What’s your favorite book ?
# Instructions

#     Write a function called favorite_book() that accepts one parameter called title.
#     The function should print a message, such as "One of my favorite books is <title>".
#     For example: “One of my favorite books is Alice in Wonderland”
#     Call the function, make sure to include a book title as an argument when calling the function.
#============================================answer========================================================================================
# def favorite_book(title):
#     print(f'One of my favorite books is {title}')
# favorite_book('Alice in Wonderland')


# 🌟 Exercise 3 : Some Geography
# Instructions

#     Write a function called describe_city() that accepts the name of a city and its country as parameters.
#     The function should print a simple sentence, such as "<city> is in <country>".
#     For example “Reykjavik is in Iceland”
#     Give the country parameter a default value.
#     Call your function.
#============================================answer========================================================================================
# def describe_city(city, country='France'):
#     print(f'{city} is in {country}')
# describe_city('Rome','Italy')


# Exercise 4 : Random
# Instructions

#     Create a function that accepts a number between 1 and 100 and generates another number randomly between 1 and 100. Use the random module.
#     Compare the two numbers, if it’s the same number, display a success message, otherwise show a fail message and display both numbers.
#============================================answer========================================================================================
# import random
# chosen_number = int(input('Pick the number between 1 and 100: '))

# def random_number(num):
#     if num <= 100 and num >= 1:
#         random_num = random.randint(1, 100)
#         print("Random number generated:", random_num)
#         if num == random_num:
#             print('Number you chose is equal to the random one')
#         else:
#             print('Number you chose is different than the random one')
#     else:
#         print('The numbers is not in 1-100 range')

# random_number(chosen_number)

# 🌟 Exercise 5 : Let’s create some personalized shirts !
# Instructions

#     Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
#     The function should print a sentence summarizing the size of the shirt and the message printed on it, such as "The size of the shirt is <size> and the text is <text>"
#     Call the function make_shirt().

#     Modify the make_shirt() function so that shirts are large by default with a message that reads “I love Python” by default.
#     Make a large shirt with the default message
#     Make medium shirt with the default message
#     Make a shirt of any size with a different message.
#     Bonus: Call the function make_shirt() using keyword arguments.
#============================================answer========================================================================================
# def make_shirt(size='L', message = '"I love Python”'):
#     print(f'The size of the shirt is {size} and the text is {message}')

# make_shirt()
# make_shirt('L')
# make_shirt('M')
# make_shirt('', 'I love coding')
# make_shirt(size='M',message='I love you')


# 🌟 Exercise 6 : Magicians …
# Instructions

# Using this list of magician’s names

# magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

#     Create a function called show_magicians(), which prints the name of each magician in the list.
#     Write a function called make_great() that modifies the original list of magicians by adding the phrase "the Great" to each magician’s name.
#     Call the function make_great().
#     Call the function show_magicians() to see that the list has actually been modified.
#============================================answer========================================================================================
# magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']
# def show_magicians(names=[]):
#     print(f'{names}')
#     return names

# def make_great(names=[]):
#     for i in range(len(names)):
#         names[i] = 'The Great ' + names[i]
#     return names

# modified_magicians = make_great(magician_names)
# show_magicians(modified_magicians)





# 🌟 Exercise 7 : Temperature Advice
# Instructions

#     Create a function called get_random_temp().
#         This function should return an integer between -10 and 40 degrees (Celsius), selected at random.
#         Test your function to make sure it generates expected results.

#     Create a function called main().
#         Inside this function, call get_random_temp() to get a temperature, and store its value in a variable.
#         Inform the user of the temperature in a friendly message, eg. “The temperature right now is 32 degrees Celsius.”

#     Let’s add more functionality to the main() function. Write some friendly advice relating to the temperature:
#         below zero (eg. “Brrr, that’s freezing! Wear some extra layers today”)
#         between zero and 16 (eg. “Quite chilly! Don’t forget your coat”)
#         between 16 and 23
#         between 24 and 32
#         between 32 and 40

#     Change the get_random_temp() function:
#         Add a parameter to the function, named ‘season’.
#         Inside the function, instead of simply generating a random number between -10 and 40, set lower and upper limits based on the season, eg. if season is ‘winter’, temperatures should only fall between -10 and 16.
#         Now that we’ve changed get_random_temp(), let’s change the main() function:
#             Before calling get_random_temp(), we will need to decide on a season, so that we can call the function correctly. Ask the user to type in a season - ‘summer’, ‘autumn’ (you can use ‘fall’ if you prefer), ‘winter’, or ‘spring’.
#             Use the season as an argument when calling get_random_temp().

#     Bonus: Give the temperature as a floating-point number instead of an integer.
#     Bonus: Instead of asking for the season, ask the user for the number of the month (1 = January, 12 = December). Determine the season according to the month.
#============================================answer========================================================================================
import random

def get_random_temp(season):
    if season == 'Winter':
        random_num = random.randint(-40, 5)
    elif season == 'Spring':
        random_num = random.randint(0, 15)
    elif season == 'Summer':
        random_num = random.randint(10, 35)
    else:
        random_num = random.randint(-5, 10)
    print(f'{random_num}*Celcius')
    return random_num

def main():
    temperature = get_random_temp(input(f'What is the season: '))
    print(f"The temperature right now is {temperature} degrees Celsius.")
    if temperature < 0:
        print('Brrr, thats freezing! Wear some extra layers today')
    elif 23 >= temperature >= 16:
        print('Quite chilly! Dont forget your coat')
    elif 32 >= temperature >= 24:
        print('No coats')
    elif 40 >= temperature > 32:
        print('Super hot')
    elif temperature > 40:
        print('Extremely hot')
    else:
        print('Balanced temperature')

main()


# 🌟 Exercise 8 : Star Wars Quiz
# Instructions

# This project allows users to take a quiz to test their Star Wars knowledge.
# The number of correct/incorrect answers are tracked and the user receives different messages depending on how well they did on the quiz.

# Here is an array of dictionaries, containing those questions and answers

# data = [
#     {
#         "question": "What is Baby Yoda's real name?",
#         "answer": "Grogu"
#     },
#     {
#         "question": "Where did Obi-Wan take Luke after his birth?",
#         "answer": "Tatooine"
#     },
#     {
#         "question": "What year did the first Star Wars movie come out?",
#         "answer": "1977"
#     },
#     {
#         "question": "Who built C-3PO?",
#         "answer": "Anakin Skywalker"
#     },
#     {
#         "question": "Anakin Skywalker grew up to be who?",
#         "answer": "Darth Vader"
#     },
#     {
#         "question": "What species is Chewbacca?",
#         "answer": "Wookiee"
#     }
# ]


#     Create a function that asks the questions to the user, and check his answers. Track the number of correct, incorrect answers. Create a list of wrong_answers
#     Create a function that informs the user of his number of correct/incorrect answers.
#     Bonus : display to the user the questions he answered wrong, his answer, and the correct answer.
#     If he had more then 3 wrong answers, ask him to play again.
