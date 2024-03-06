# Challenge 1

#     Ask a user for a word

#     Write a program that creates a dictionary. This dictionary stores the indexes of each letter in a list.
#         Make sure the letters are the keys.
#         Make sure the letters are strings.
#         Make sure the indexes are stored in a list and those lists are values.
#====================================answer===================================================================
# word = input('Type a word: ')
# letters = {}
# #This loop iterates through each character in the input word along with its index. enumerate() function is used to get both the index and the character simultaneously.
# for index, letter in enumerate(word):
# #This condition checks if the current letter is already a key in the letters dictionary.
#     if letter in letters:
# #If the letter is already in the dictionary, it appends the current index to the list associated with that letter key.
#         letters[letter].append(index) 
#     else:
#         letters[letter] = [index]
# print(letters)    




# Challenge 2

#     Create a program that prints a list of the items you can afford in the store with the money you have in your wallet.
#     Sort the list in alphabetical order.
#     Return “Nothing” if you can’t afford anything from the store.

# Hint : make sure to convert the amount from dollars to numbers. Create a program that deletes the $ sign, and the comma (for thousands)

# Examples

# The key is the product, the value is the price

# items_purchase = {
#   "Water": "$1",
#   "Bread": "$3",
#   "TV": "$1,000",
#   "Fertilizer": "$20"
# }

# wallet = "$300"

# ➞ ["Bread", "Fertilizer", "Water"]

# items_purchase = {
#   "Apple": "$4",
#   "Honey": "$3",
#   "Fan": "$14",
#   "Bananas": "$4",
#   "Pan": "$100",
#   "Spoon": "$2"
# }

# wallet = "$100" 

# ➞ ["Apple", "Bananas", "Fan", "Honey", "Spoon"]

# # In fact the prices of Apple + Honey + Fan + Bananas + Pan is more that $100, so you cannot by the Pan, 
# # instead you can by the Spoon that is $2

# items_purchase = {
#   "Phone": "$999",
#   "Speakers": "$300",
#   "Laptop": "$5,000",
#   "PC": "$1200"
# }

# wallet = "$1" 

# ➞ "Nothing"
#====================================answer===================================================================
#1)
items_purchase = {
  "Water": "$1",
  "Bread": "$3",
  "TV": "$1,000",
  "Fertilizer": "$20"
}
wallet = "$300"
wallet_digits_only = ''
for letter in wallet:
    if letter != '$' and letter != ',':
        wallet_digits_only += letter
    else:
        continue
wallet_reality = int(wallet_digits_only)
# print(f'You have {wallet_reality}$ in your wallet')
# items_purchase_sorted = sorted(items_purchase)
# print(f'You want tu purchase these items: {items_purchase_sorted}')

items_purchase_with_converted_value = {}
converted_value = ''
for key, value in items_purchase.items():
    converted_value = ''.join(char for char in value if char.isdigit())
    items_purchase_with_converted_value[key] = int(converted_value)
print(items_purchase_with_converted_value)


basket = []
for item, price in items_purchase_with_converted_value.items():
    if price <= wallet_reality:
        while sum(basket.values()) <= wallet_reality:
            basket.append(item)
        else:
            break
    else:
        print('too much')
print(basket)
        
        

