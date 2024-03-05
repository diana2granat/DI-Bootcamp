#Lists vs Dictionaries
user_info = ['John', 'john@gmail.com', 77] 

#In lists data doesn't have a description, in disctionaries it has (as key)

# user_info_dict = {'name' : 'John',
#                   'email' : 'john@gmail.com',
#                   'age' : 77,
#                   'married': True,
#                   'address': 'Tel Aviv',
#                   'pets': ['Caramel', 'Fluffy', 'Gingi', 'Chatuli'],
#                   'family': {'name': 'Anna',
#                              'relation': 'wife',
#                              'age': 72},
#                   'hobbies' : ('football', 'swimming', 'running')}

# #Accesing dict data
# print(user_info_dict['name'])

# #Accessing lists indexes in dict
# print(user_info_dict['pets'][2])

# #Acessing nestead dicts
# print(user_info_dict['family']['name'])

# shirts = [
#   {
#     'name': 'Awesome T-shirt 3000',
#     ('size_US','size_UK'): ['S', 'Small'],
#     'price': 20
#   },
#   {
#     'name': 'Awesome T-shirt 3000',
#     'size': 'M',
#     'price': 25
#   },
#   {
#     'name': 'Awesome T-shirt 3000',
#     'size': 'L',
#     'price': 30
#   },
# ]

# print(shirts[1]['size'])
# print(shirts[0][('size_US','size_UK')][0])

#ex1
# sample_dict = { 
#    "class":{ 
#       "student":{ 
#          "name":"Mike",
#          "marks":{ 
#             "physics":70,
#             "history":80
#          }
#       }
#    }
# }

# print(sample_dict['class']['student']['marks']['history'])

user_info_dict = {'name' : 'John Doe',
                  'email' : 'john@gmail.com',
                  'age' : 77,
                  'married': True,
                  'address': 'Tel Aviv',
                  'pets': ['Caramel', 'Fluffy', 'Gingi', 'Chatuli'],
                  'family': {'name': 'Anna',
                             'relation': 'wife',
                             'age': 72},
                  'hobbies' : ('football', 'swimming', 'running')}

#modifying entries
user_info_dict['address'] = 'Ranana'
# print(user_info_dict['address'])

#creating a new entry
user_info_dict['hair_color'] = 'Brown'
# print(user_info_dict)

#deleting entries in dict
del user_info_dict['email']
print(user_info_dict)

