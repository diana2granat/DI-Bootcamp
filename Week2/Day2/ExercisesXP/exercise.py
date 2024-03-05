#Exercise 1 : Set
# my_fav_numbers={12,14,18,24}
# my_fav_numbers.update([30,36])
# print(my_fav_numbers)
# my_fav_numbers.discard(36)
# print(my_fav_numbers)

# friend_fav_numbers={13,17,19}
# our_fav_numbers=my_fav_numbers.union(friend_fav_numbers)
# print(our_fav_numbers)

#Exercise 2 : Tuple
# tuple1 = (1,4,6)
# tuple2 = (7,8,9)
# combined_tuple = tuple1 + tuple2
# print(combined_tuple)

#Exercise 3 : List
# basket = ["Banana", "Apples", "Oranges", "Blueberries"]
# basket.remove('Banana')
# print(basket)
# basket.append('Kiwi')
# print(basket)
# basket.insert(0,'Apples')
# print(basket)
# print(basket.count('Apples'))

#Exercise 4 : Floats
#Recap – What is a float? What is the difference between an integer and a float? Answe examples: 1 vs 1.5; 2 vs 2.33
#Create a list containing the following sequence 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 (don’t hard-code the sequence).
#Can you think of another way to generate a sequence of floats?
# list_sequence = [1.5 + i * 0.5 for i in range(int((5.0 - 1.5) / 0.5) + 1)]
# print(list_sequence)

#Exercise 5: For Loop
# Instructions
# Use a for loop to print all numbers from 1 to 20, inclusive.
# for number in range(0,20):
#     number += 1
#     print(number)
# for number in range(1, 21):
#     print(number)
# Using a for loop, that loops from 1 to 20(inclusive), print out every element which has an even index.
# for number in range(0,20):
#     number += 1
#     if number % 2 == 0:
#         print(number)

# Exercise 6 : While Loop
# Instructions
# Write a while loop that will continuously ask the user for their name, unless the input is equal to your name.
# while input("Enter your name: ") != 'Diana':
#     print('Access denied')
# else:
#     print('Access granted')

# Exercise 7: Favorite fruits
# Instructions
#Ask the user to input their favorite fruit(s) (one or several fruits).
#Hint : Use the built in input method. Ask the user to separate the fruits with a single space, eg. "apple mango cherry".
#Store the favorite fruit(s) in a list (convert the string of words into a list of words).
#Now that we have a list of fruits, ask the user to input a name of any fruit.
#If the user’s input is in the favorite fruits list, print “You chose one of your favorite fruits! Enjoy!”.
#If the user’s input is NOT in the list, print, “You chose a new fruit. I hope you enjoy”.
# the_fav_fruits = input('Type your favourite fruits, comma separated: ')
# print(the_fav_fruits)
# y = input('Type any fruit that you have on your mind right now: ')
# if y in the_fav_fruits:
#     print('You chose one of your favorite fruits! Enjoy!')
# else:
#     print('You chose a new fruit. I hope you enjoy')

# Exercise 8: Who ordered a pizza ?
# Instructions
#Write a loop that asks a user to enter a series of pizza toppings, when the user inputs ‘quit’ stop asking for toppings.
#As they enter each topping, print a message saying you’ll add that topping to their pizza.
#Upon exiting the loop print all the toppings on the pizza pie and what the total price is (10 + 2.5 for each topping).
# toppings = []
# while True:
#     topping = input("Pick the toppings to your pizza (type 'quit' if you finish): ") 
#     if topping == 'quit':
#         print('You have finished your order with toppings')
#         break
#     else:
#         print('You have added a topping to your pizza')
#         toppings.append(topping)
# print(toppings)


# Exercise 9: Cinemax
# Instructions
#     A movie theater charges different ticket prices depending on a person’s age.
#         if a person is under the age of 3, the ticket is free.
#         if they are between 3 and 12, the ticket is $10.
#         if they are over the age of 12, the ticket is $15.
#     Ask a family the age of each person who wants a ticket.
# input_string = input("Enter a list of numbers separated by spaces: ")
# ages = [int(x) for x in input_string.split()]
#     Store the total cost of all the family’s tickets and print it out.
# amount = 0
# for person_age in ages:
#     if person_age < 3:
#         amount += 0
#     elif person_age > 3 and person_age < 12:
#         amount += 10
#     else:
#         amount += 15
# print(amount)

#     A group of teenagers are coming to your movie theater and want to watch a movie that is restricted for people between the ages of 16 and 21.
#     Given a list of names, write a program that asks teenager for their age, if they are not permitted to watch the movie, remove them from the list.
#     At the end, print the final list.
# names = ['Ann', 'Mia', 'Nathalie', 'Zoe']
# names_allowed = []
# for person in names[:]:
#     age = int(input(f'{person} what is your age? '))
#     if 16 <= age <= 21:
#         names_allowed.append(person)
#         print('You are allowed to enter')
#     else:
#         print('You are not allowed to enter')
# print(f'The group {names_allowed} is joining')

# Exercise 10 : Sandwich Orders
# Instructions
# Using the list below :
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
#     The deli has run out of pastrami, use a while loop to remove all occurrences of “Pastrami sandwich” from sandwich_orders.
pastrami = 'Pastrami'
for element in sandwich_orders:
    if pastrami in element:
        sandwich_orders.remove(element)
    else:
        continue
else:
    print('Pastrami is removed', sandwich_orders)


#     We need to prepare the orders of the clients:
#         Create an empty list called finished_sandwiches.
#         One by one, remove each sandwich from the sandwich_orders while adding them to the finished_sandwiches list.
#     After all the sandwiches have been made, print a message listing each sandwich that was made, such as:
# I made your tuna sandwich
# I made your avocado sandwich
# I made your egg sandwich
# I made your chicken sandwich
# sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
# finished_sandwiches = []
# for sandwich in sandwich_orders:
#     sandwich_orders.remove(sandwich)
#     print(f'I made your {sandwich}')
#     finished_sandwiches.append(sandwich)
# else:
#     print('All the sandwiches are ready:',finished_sandwiches)






