from anagram_checker import AnagramChecker

def main():
    

    while True:
        print("\n1. Input a word")
        print("2. Exit")
        choice = input("Choose an option: ")
        anagram_checker = AnagramChecker()

        if choice == "1":
            word_to_check = input("Enter a word: ")
            anagram_checker.is_valid_word(word_to_check)
            if anagram_checker.is_valid_word(word_to_check):
                anagram_checker.get_anagrams(word_to_check)
        elif choice == "2":
            print("Exiting program...")
            break
        else:
            print("Error")

if __name__ == "__main__":
    main()
