#We will create a program that will ask the user for a word.
#It will check if the word is a valid English word, and then find all possible anagrams for that word.
#==============================================answer==========================================
import os

dir_path = os.path.dirname(os.path.realpath('tekst.txt'))

class AnagramChecker():
    #should load the word list file (text file) into a variable, so that it can be searched later on in the code.
    def __init__(self) -> None:
        with open(dir_path + '\\tekst.txt', 'r') as f:
            content = f.read()
        self.words = content.split()

    #should check if the given word (ie. the word of the user) is a valid word.    
    def is_valid_word(self, a_word):
        upper_a_word = a_word.upper()
        if upper_a_word in self.words:
            print('Your word is a valid English word')
            return True
        else:
            print('Your word is NOT a valid English word')
            return False
        
    #should find all anagrams for the given word. (eg. if word of the user is ‘meat’, the function should return a list containing [“mate”, “tame”, “team”].)
    def get_anagrams(self, a_word):
        sorted_a_word = sorted(a_word)
        anagrams = []
        for word in self.words:
            #condition if the word is not the same
            if a_word != word:
                sorted_word = sorted(word)
                #comparing all the words from the file - sorted - with the given word, adding anagrams to the list
                if len(sorted_word) == len(sorted_a_word) and sorted_word == sorted_a_word:
                    anagrams.append(word)
                else:
                    continue
        print(f'Anagrams for your word:{anagrams}')


# # anagram_checker = AnagramChecker()
# # word_to_check = input('Say a word: ')
# anagram_checker.is_valid_word(word_to_check)
# anagram_checker.get_anagrams(word_to_check)


