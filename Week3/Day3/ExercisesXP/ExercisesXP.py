# 🌟 Exercise 1: Currencies
# Instructions

# class Currency:
#     def __init__(self, currency, amount):
#         self.currency = currency
#         self.amount = amount
#     #Your code starts HERE

#     Using the code above, implement the relevant methods and dunder methods which will output the results below.
#     Hint : When adding 2 currencies which don’t share the same label you should raise an error.

# >>> c1 = Currency('dollar', 5)
# >>> c2 = Currency('dollar', 10)
# >>> c3 = Currency('shekel', 1)
# >>> c4 = Currency('shekel', 10)

# >>> str(c1)
# '5 dollars'

# >>> int(c1)
# 5

# >>> repr(c1)
# '5 dollars'

# >>> c1 + 5
# 10

# >>> c1 + c2
# 15

# >>> c1 
# 5 dollars

# >>> c1 += 5
# >>> c1
# 10 dollars

# >>> c1 += c2
# >>> c1
# 20 dollars

# >>> c1 + c3
# TypeError: Cannot add between Currency type <dollar> and <shekel>
#==========================================================answer=============================================
# class Currency:
#     def __init__(self, currency, amount):
#         self.currency = currency
#         self.amount = amount

#     def __str__(self):
#         return f"{self.amount} {self.currency}"

#     def __int__(self):
#         return self.amount

#     def __repr__(self):
#         return f"'{self.amount} {self.currency}'"
    
#     def __add__(self, other):
#         if isinstance(other, int):
#             return Currency(self.currency, self.amount + other)
#         elif isinstance(other, Currency):
#             if self.currency == other.currency:
#                 return Currency(self.currency, self.amount + other.amount)
#             else:
#                 raise TypeError(f'Cannot add between Currency type {self.currency} and {other.currency}')
        
#     def __iadd__(self, other):
#         if isinstance(other, Currency):
#             if self.currency == other.currency:
#                 self.amount += other.amount
#                 return self
#             else:
#                 raise TypeError(f'Cannot add between Currency type {self.currency} and {other.currency}')

# c1 = Currency('dollars', 5)
# c2 = Currency('dollars', 10)
# c3 = Currency('shekel', 1)
# c4 = Currency('shekel', 10)


# print(str(c1))  
# print(int(c1))  
# print(repr(c1)) 
# print(str(c1),int)
# result1 = c1 + 5
# result2 = c2 + c1
# print(result1)
# print(result2)
# print(c1)
# c1 += c2
# print(c1)
# print(c1 + c3)


# 🌟 Exercise 3: String module
# Instructions
#     Generate random String of length 5
#     Note: String must be the combination of the UPPER case and lower case letters only. No numbers and a special symbol.
#     Hint: use the string module
#==========================================================answer=============================================
# import string
# import random

# def generate_random_string(length):
#     letters = string.ascii_letters
#     return ''.join(random.choice(letters) for char in range(length))

# random_string = generate_random_string(5)
# print(random_string)


# 🌟 Exercise 4 : Current Date
# Instructions

#     Create a function that displays the current date.
#     Hint : Use the datetime module.
#==========================================================answer=============================================
# import datetime

# def current_date():
#     current_date = datetime.date.today()
#     print("Current date:", current_date)

# current_date()



# Exercise 5 : Amount of time left until January 1st
# Instructions

#     Create a function that displays the amount of time left from now until January 1st.
#     (Example: the 1st of January is in 10 days and 10:34:01hours).
#==========================================================answer=============================================
# import datetime

# def current_date(certain_datetime):
#     current_datetime = datetime.datetime.today()
#     print("Current date:", current_datetime)
#     how_much_left_until = certain_datetime - current_datetime
#     print(f'The {certain_datetime} is in {how_much_left_until}')

# certain_datetime1 = datetime.datetime(2025, 1, 1)
# current_date(certain_datetime1)


# Exercise 6 : Birthday and minutes
# Instructions

#     Create a function that accepts a birthdate as an argument (in the format of your choice), 
#     then displays a message stating how many minutes the user lived in his life.
#==========================================================answer=============================================
# import datetime

# def how_many_minutes(birthday):
#     current_datetime = datetime.datetime.today()
#     print("Current date:", current_datetime)
#     birthday_datetime = datetime.datetime(*birthday)
#     how_much_you_live = (current_datetime - birthday_datetime).total_seconds() / 60
#     print(f'You live {how_much_you_live} minutes')

# birthday = (1987, 12, 12)
# how_many_minutes(birthday)



# Exercise 7 : Faker Module
# Instructions

#     Install the faker module, and take a look at the documentation and learn how to properly implement faker in your code.
#     Create an empty list called users. Tip: It should be a list of dictionaries.
#     Create a function that adds new dictionaries to the users list. Each user has the following keys: name, adress, langage_code. 
#     Use faker to populate them with fake data.
#==========================================================answer=============================================
from faker import Faker
import random

# Create an instance of the Faker class
fake = Faker()

users = [{}]

def new_user():
    name = fake.name()
    address = fake.address()
    language_code = random.choice(['en', 'fr', 'es'])
    user = {
        'name': name,
        'address': address,
        'language_code': language_code
    }
    users.append(user)

new_user()
new_user()
new_user()

print(users)