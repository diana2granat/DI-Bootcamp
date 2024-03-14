# Part I and II together

# First, we will analyze a simple string, like “A good book would sometimes cost as much as a good house.”

#     Create a class called Text that takes a string as an argument and store the text in a attribute.
#     Hint: You need to manually copy-paste the text, straight into the code

#     Implement the following methods:
#         a method to return the frequency of a word in the text (assume words are separated by whitespace) return None or a meaningful message.
#         a method that returns the most common word in the text.
#         a method that returns a list of all the unique words in the text.
#
#===============================================answer===============================================================
import os

dir_path = os.path.dirname(os.path.realpath('simplestring.txt'))
simple_string = open(dir_path + '\\simplestring.txt', 'r')
sample = simple_string.read()

# print(sample)

class Text:
    def __init__(self, text):
        self.text = text
    #a method to return the frequency of a word in the text
    def frequency(self):
        #changing the sentence to list of words
        words = [word.lower() for word in self.text.split()]
        print(words)
        #checking the frequency of a word in the list
        number_of_repeats=[]
        for i in range(len(words)):
            number_of_repeats.append(words.count(words[i]))
        print(number_of_repeats)
        combined_dict = {(words, number_of_repeats) for words, number_of_repeats in zip(words, number_of_repeats)}
        print(combined_dict)
        return combined_dict
    #a method that returns the most common word in the text.
    def comon_word(self):
        set = self.frequency()
        values = [value for _, value in set]
        max_value = max(values)
        print("Highest value in the set:", max_value)
        for key,value in set:
            if value == max_value:
                print({'the most common word': key, 'frequency': value})
            
    def unique_word(self):
        set = self.frequency()
        for key,value in set:
            if value == 1:
                print({'unique word': key})


sample_text = Text(sample)
print(sample_text.text)
sample_text.frequency()
sample_text.comon_word()
sample_text.unique_word()