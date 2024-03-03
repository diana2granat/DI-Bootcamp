# print(3+7)

# print('python'.upper())

# print('hello world python'.replace('python','javascript'))
# print('hello world\' python \n' * 10)

# my_name="Diana"
# my_age=36
# print(my_name)

# my_future_age= my_age + 12345
# print(my_future_age)

# years_in_Israel='3'
# future= int(years_in_Israel) + 10
# print(future)

# my_number = 2024
# print(str(my_number))

# my_name = 'Diana'
# my_last_name = 'Granat'
# print(my_name,my_last_name)
# print(f'My name is {my_name} {my_last_name}')

# print(type(True))

# print(3<4)
# print('4'=='4')

# some_number=1
# print(some_number == future)
# print(some_number != future)
# print(some_number is not future)

# count=0
# count+=1
# count+=1
# count+=5
# print(count)

# age=int(input('what is your age: '))
# print(f'My ahe is {type(age)}')

# if age > 21:
#     print ("you can drink in the pub")
# elif age > 12 and age <= 18:
#     print("you are not allowed to come to the pub")
# elif age <= 12:
#     print("you are a child!")
# else:
#     print("you cannot come to the pub")


asked_number=int(input('Pick the number between 1 and 100: '))
print(f'My number is {type(asked_number)}')

if asked_number > 100 or asked_number < 1:
    print ("the number has to be in the range 1 - 100")
if asked_number % 3 == 0 and asked_number % 5 != 0:
    print("Fizz")
elif asked_number % 5 == 0 and asked_number % 3 != 0:
    print("Buzz")
elif asked_number % 3 == 0 and asked_number % 5 == 0:
    print("FizzBuzz")



