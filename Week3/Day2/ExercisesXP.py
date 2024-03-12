# 🌟 Exercise 1 
# Create another cat breed named Siamese which inherits from the Cat class.
# Create a list called all_cats, which holds three cat instances : one Bengal, one Chartreux and one Siamese.
# Those three cats are Sara’s pets. Create a variable called sara_pets which value is an instance of the Pet class, 
# and pass the variable all_cats to the new instance.
# Take all the cats for a walk, use the walk method.
# =========================================answer============================================================

# class Pets():
#     def __init__(self, animals):
#         self.animals = animals

#     def walk(self):
#         for animal in self.animals:
#             print(animal.walk())

# class Cat():
#     is_lazy = True

#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def walk(self):
#         return f'{self.name} is just walking around'

# class Bengal(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'

# class Chartreux(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'

# class Siamese(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'
    
# class AllCats(Bengal,Chartreux,Siamese):
#     pass
    
# all_cats = [Bengal('Ali',3),Chartreux('Bob',4),Siamese('Em',2)]
# sara_pets = Pets(all_cats)
# sara_pets.walk()



# 🌟 Exercise 2 : Dogs
# Instructions

#     Create a class called Dog with the following attributes name, age, weight.
#     Implement the following methods in the Dog class:
#         bark: returns a string which states: “<dog_name> is barking”.
#         run_speed: returns the dogs running speed (weight/age*10).
#         fight : takes a parameter which value is another Dog instance, called other_dog. This method returns a string stating which dog won the fight. The winner should be the dog with the higher run_speed x weight.

#     Create 3 dogs and run them through your class.
# =========================================answer============================================================
# class Dog():
#     def __init__(self, name, age, weight):
#         self.name = name
#         self.age = age
#         self.weight = weight

#     def bark(self):
#         return f'{self.name} is barking'

#     def run_speed(self):
#         return self.weight / self.age * 10

#     def fight(self, other_dog):
#         my_strength = self.run_speed() * self.weight
#         other_strength = other_dog.run_speed() * other_dog.weight

#         if my_strength > other_strength:
#             return f"{self.name} won the fight!"
#         elif my_strength < other_strength:
#             return f"{other_dog.name} won the fight!"
#         else:
#             return "It's a tie!"
        
# # Creating 3 dogs
# dog1 = Dog("Max", 5, 15)
# dog2 = Dog("Buddy", 4, 20)
# dog3 = Dog("Charlie", 6, 18)

# # the methods
# print(dog1.bark())  
# print(dog1.run_speed()) 
# print(dog2.bark()) 
# print(dog2.run_speed())  

# # fight method
# print(dog1.fight(dog2))  
# print(dog2.fight(dog3))  
# print(dog1.fight(dog3))  




# Exercise 4 : Family
# Instructions

#     Create a class called Family and implement the following attributes:
#         members: list of dictionaries
#         last_name : (string)

#     Implement the following methods:
#         born: adds a child to the members list (use **kwargs), don’t forget to print a message congratulating the family.
#         is_18: takes the name of a family member as a parameter and returns True if they are over 18 and False if not.
#         family_presentation: a method that prints the family’s last name and all the members’ details.

#     Create an instance of the Family class, with the last name of your choice, and the below members. Then call all the methods you created in Point 2.

#         [
#             {'name':'Michael','age':35,'gender':'Male','is_child':False},
#             {'name':'Sarah','age':32,'gender':'Female','is_child':False}
#         ]
# =========================================answer============================================================

class Family:

    def __init__(self, last_name, members):
        self.last_name = last_name
        self.members = members
    
    def born(self, **kwargs):
        self.members.append(kwargs)
        print(f'Congratulations {kwargs}')

    def is_18(self, member_name):
        for member in self.members:
            if member['name'] == member_name:
                return member['age'] > 18
        return False
    
    def family_presentation(self):
        print(f'Family {self.last_name}: {self.members}')

# members1 = [{'name':'Michael','age':35,'gender':'Male','is_child':False}, {'name':'Sarah','age':32,'gender':'Female','is_child':False}]
# familiada = Family('Granat', members1)
# print(familiada.is_18('Sarah'))
# familiada.born(name='Natali', age=0, gender='Male', is_child=True)
# familiada.family_presentation()


# Exercise 5 : TheIncredibles Family
# Instructions
#     Create a class called TheIncredibles. This class should inherit from the Family class:
#     This is no random family they are an incredible family, therefore the members attributes, will be a list of dictionaries containing the additional keys : power and incredible_name. 
#     (See Point 4)
#     Add a method called use_power, this method should print the power of a member only if they are over 18 years old. 
#     If not raise an exception (look up exceptions) which stated they are not over 18 years old.
#     Add a method called incredible_presentation which :
#         Print a sentence like “*Here is our powerful family **”
#         Prints the family’s last name and all the members’ details (ie. use the super() function, to call the family_presentation method)
#     Create an instance of the Incredibles class, with the “Incredibles” last name, and the below members.
#         [
#             {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
#             {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
#         ]
#     Call the incredible_presentation method.
#     Use the born method inherited from the Family class to add Baby Jack with the following power: “Unknown Power”.
#     Call the incredible_presentation method again.
# =========================================answer============================================================

class TheIncredibles(Family):

    def __init__(self, last_name, members):
        super().__init__(last_name, members)

    def use_power(self):
        try:
            for member in self.members:
                if not self.is_18(member['name']):
                    raise Exception(f'{member['name']} under 18')  # Raise an exception for member under 18
                print(member['power'])
        except Exception as e:
            print(f"Caught exception: {e}")

    
    def incredible_presentation(self):
        print('*Here is our powerful family **')
        super().family_presentation()

IncredibleFamilyMembers = [
            {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
            {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
        ]

IncredibleFamiliada = TheIncredibles('IncredibleLasName', IncredibleFamilyMembers)
IncredibleFamiliada.family_presentation()
IncredibleFamiliada.born(name='Jack',age=2,power='Unknown power')
IncredibleFamiliada.family_presentation()
IncredibleFamiliada.use_power()

