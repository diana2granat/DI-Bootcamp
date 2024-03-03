import random

input_string = input("Enter a word which is 10 characters long: ")
output_string= ""
char_list = list(input_string)

#If it’s less than 10 characters, print a message which states “string not long enough”.
if len(input_string) < 10:
    print("string is not long enough")
#If it’s more than 10 characters, print a message which states “string too long”.
elif len(input_string) > 10:
    print("string is too long")
#If it’s 10 characters, print a message which states “perfect string” and continue the exercise.
else:
    print("perfect string")
    print("First character:", input_string[0])
    print("Last character:", input_string[-1])

#Using a for loop, construct the string character by character: Print the first character, then the second, then the third, until the full string is printed
    for char in input_string:
        output_string += char
        print(output_string)

#Bonus: Swap some characters around then print the newly jumbled string (hint: look into the shuffle method). For example:
    random.shuffle(char_list)
    shuffled_string = ''.join(char_list)
    print("Shuffled characters:", shuffled_string)