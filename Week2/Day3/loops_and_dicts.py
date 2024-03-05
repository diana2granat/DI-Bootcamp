#for and while loop quick review

# for i in range(1,11):
#     print('Python')

my_fav_nums = [5, 7, 13, 15, 55, 77]

squared = []
for num in my_fav_nums:
    squared.append(num ** 2)

# print(squared)

# print(my_fav_nums)

for i, num in enumerate(my_fav_nums):
    num = num ** 2
    my_fav_nums[i] = num

# keep_asking = True
while True:
    topping = input('add your topping')
    if topping == 'quit':
        break
    
# print(my_fav_nums)
    
#list of dictionaries

shirts = [
  {
    'name': 'Awesome T-shirt 3000',
    'size': 'S',
    'price': 20
  },
  {
    'name': 'Awesome T-shirt 3000',
    'size': 'M',
    'price': 25
  },
  {
    'name': 'Awesome T-shirt 3000',
    'size': 'L',
    'price': 30
  },
]


# for shirt_dict in shirts:
#     print(shirt_dict)

first_dict = shirts[0]


# access to only keys
for each_key in first_dict.keys():
    first_dict[each_key] = 'hello there'

# print(first_dict)

#access to only values
for each_value in first_dict.values():
    print(each_value)

# print(first_dict)

# access to keys and values
for key, value in first_dict.items():
    print('key:', key,"value: ", value)

#update method: adding a key:value or a whole dictionary in an existing dictionary
first_dict.update({'color':'blue', 
                   'brand': 'FOX'}) 
# print(first_dict)

# first_dict['color'] = 'blue'
# print(first_dict)


#ex2
sample_dict = {
  "name": "Kelly",
  "age":25,
  "salary": 8000,
  "city": "New york"

}
keys_to_remove = ["name", "salary"]

for key in keys_to_remove:
    del sample_dict[key]

print(sample_dict)

    

