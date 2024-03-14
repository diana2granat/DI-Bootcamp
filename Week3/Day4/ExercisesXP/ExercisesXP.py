
# 🌟 Exercise 1 – Random Sentence Generator
# Instructions

# Description: In this exercise we will create a random sentence generator. We will do this by asking the user how long the sentence should be and then printing the generated sentence.

# Hint : The generated sentences do not have to make sense.

#     Download this word list

#     Save it in your development directory.

#     Create a function called get_words_from_file. This function should read the file’s content and return the words as a collection. What is the correct data type to store the words?

#     Create another function called get_random_sentence which takes a single parameter called length. The length parameter will be used to determine how many words the sentence should have. The function should:
#         use the words list to get your random words.
#         the amount of words should be the value of the length parameter.

#     Take the random words and create a sentence (using a python method), the sentence should be lower case.

#     Create a function called main which will:
#         Print a message explaining what the program does.

#         Ask the user how long they want the sentence to be. Acceptable values are: an integer between 2 and 20. Validate your data and test your validation!
#             If the user inputs incorrect data, print an error message and end the program.
#             If the user inputs correct data, run your code.
#=========================================================answer================================================================
# import os
# import random

# dir_path = os.path.dirname(os.path.realpath('tekst.txt'))
# #This function should read the file’s content and return the words as a collection. 
# def get_words_from_file():
#     f = open(dir_path + '\\tekst.txt', 'r')
#     content = f.read()
#     words = content.split()
#     # print(words)
#     return words

# #creating a lower case sentence from the random words (the number is the parameter)
# def get_random_sentence(length):
#     random_words = get_words_from_file()
#     sentence = " ".join(random.sample(random_words, length)).lower()
#     return sentence

# def main():
#     print("This program generates a random sentence.")
#     try:
#         length = int(input("How long the sentence should be: "))
#         if length in range(2,20):
#             words = get_words_from_file()
#             sentence = get_random_sentence(length)
#             print("Random sentence:", sentence)
#         else:
#             print("Length should be between 2 and 20.")
#     except ValueError:
#         print("Invalid input. Please enter a valid integer length.")

# main()




# 🌟 Exercise 2: Working with JSON
# Instructions

# import json
# sampleJson = """{ 
#    "company":{ 
#       "employee":{ 
#          "name":"emma",
#          "payable":{ 
#             "salary":7000,
#             "bonus":800
#          }
#       }
#    }
# }"""

#     Access the nested “salary” key from the JSON-string above.
#     Add a key called “birth_date” to the JSON-string at the same level as the “name” key.
#     Save the dictionary as JSON to a file.
#=========================================================answer================================================================
import json
sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

# Parse JSON string
data = json.loads(sampleJson)

# Access the salary value
salary_in_json = data["company"]["employee"]["payable"]["salary"]

data["company"]["employee"]["birth_date"] = (12,12,1987)
updatedJson = json.dumps(data, indent=1)

# Save the updated JSON data to a file
with open("updatedJson.json", "w") as json_file:
    json_file.write(updatedJson)