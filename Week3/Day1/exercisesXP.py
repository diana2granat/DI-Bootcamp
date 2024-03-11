# 🌟 Exercise 1: Cats
# Instructions

# Using this class

# class Cat:
#     def __init__(self, cat_name, cat_age):
#         self.name = cat_name
#         self.age = cat_age

#     Instantiate three Cat objects using the code provided above.
#     Outside of the class, create a function that finds the oldest cat and returns the cat.
#     Print the following string: “The oldest cat is <cat_name>, and is <cat_age> years old.”. Use the function previously created.
#================================================answer=========================================================
# class Cat:
#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

# little_cat = Cat('Tom', 7)
# black_cat = Cat('Jerry', 15)
# funny_cat = Cat('Tweety', 2)

# cats_list1= [little_cat, black_cat, funny_cat]

# def the_oldest_cat(cats):
#     oldest_age = max(cat.age for cat in cats)
#     for cat in cats:
#         if cat.age == oldest_age:
#             print(f'The oldest cat is {cat.name} with age {oldest_age}.')

# the_oldest_cat(cats_list1)

# 🌟 Exercise 2 : Dogs
# Instructions

#     Create a class called Dog.
#     In this class, create an __init__ method that takes two parameters : name and height. This function instantiates two attributes, which values are the parameters.
#     Create a method called bark that prints the following string “<dog_name> goes woof!”.
#     Create a method called jump that prints the following string “<dog_name> jumps <x> cm high!”. x is the height*2.
#     Outside of the class, create an object called davids_dog. His dog’s name is “Rex” and his height is 50cm.
#     Print the details of his dog (ie. name and height) and call the methods bark and jump.
#     Create an object called sarahs_dog. Her dog’s name is “Teacup” and his height is 20cm.
#     Print the details of her dog (ie. name and height) and call the methods bark and jump.
#     Create an if statement outside of the class to check which dog is bigger. Print the name of the bigger dog.
#================================================answer=========================================================
# class Dog:
#     def __init__(self, name, height):
#         self.name = name
#         self.height = height

#     def bark(self):
#         print(f'{self.name} goes woof!')

#     def jump(self):
#         x = (int(self.height))*2
#         print(f'{self.name} jumps {x} cm high!')

# davids_dog = Dog('Rex',50)
# davids_dog.jump()
# sarahs_dog = Dog('Teacup',20)
# sarahs_dog.jump()

# if davids_dog.height > sarahs_dog.height:
#     print(f'{davids_dog.name} is bigger')
# else:
#     print(f'{sarahs_dog.name} is bigger')




# 🌟 Exercise 3 : Who’s the song producer?
# Instructions

#     Define a class called Song, it will show the lyrics of a song.
#     Its __init__() method should have two arguments: self and lyrics (a list).
#     Inside your class create a method called sing_me_a_song that prints each element of lyrics on its own line.

#     Create an object, for example:

#     stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])


#     Then, call the sing_me_a_song method. The output should be:

#     There’s a lady who's sure
#     all that glitters is gold
#     and she’s buying a stairway to heaven
#================================================answer=========================================================
# class Song:
#     def __init__(self, lyrics):
#         self.lyrics = lyrics
    
#     def sing_me_a_song(self):
#         for line in self.lyrics:
#             print(line)

# stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])
# stairway.sing_me_a_song()




# Exercise 4 : Afternoon at the Zoo
# Instructions

#     Create a class called Zoo.
#     In this class create a method __init__ that takes one parameter: zoo_name.
#     It instantiates two attributes: animals (an empty list) and name (name of the zoo).
#     Create a method called add_animal that takes one parameter new_animal. This method adds the new_animal to the animals list as long as it isn’t already in the list.
#     Create a method called get_animals that prints all the animals of the zoo.
#     Create a method called sell_animal that takes one parameter animal_sold. This method removes the animal from the list and of course the animal needs to exist in the list.

#     Create a method called sort_animals that sorts the animals alphabetically and groups them together based on their first letter.
#     Example

#     { 
#         1: "Ape",
#         2: ["Baboon", "Bear"],
#         3: ['Cat', 'Cougar'],
#         4: ['Eel', 'Emu']
#     }

#     Create a method called get_groups that prints the animal/animals inside each group.
#     Create an object called ramat_gan_safari and call all the methods.
#     Tip: The zookeeper is the one who will use this class.
#     Example

#     Which animal should we add to the zoo --> Giraffe
#     x.add_animal(Giraffe)
#================================================answer=========================================================
class Zoo:

    def __init__(self, zoo_name):
        self.animals = []
        self.zoo_name = zoo_name

    def add_animal(self, new_animals):
        for animal in new_animals:
            if animal not in self.animals:
                self.animals.append(animal)

    def get_animals(self):
        print(self.animals)

    def sell_animal(self,animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
            print(f"{animal_sold} has been sold.")
        else:
            print(f"{animal_sold} is not in the zoo.")

    def sort_animals(self):
        sorted_animals = sorted(self.animals)
        grouped_animals = {}
        for animal in sorted_animals:
            key = animal[0]
            if key not in grouped_animals:
                grouped_animals[key] = [] 
        return grouped_animals
        

    def get_groups(self):
        grouped_animals = self.sort_animals()
        for key, animals in grouped_animals.items():
            print(f"{key}: {animals}")


ramat_gan_safari = Zoo("Ramat Gan Safari")
animals_to_add = input("Which animals should we add to the zoo (comma-separated): ").split(',')

#Calling all the methods
ramat_gan_safari.add_animal(animals_to_add)
ramat_gan_safari.get_animals()
ramat_gan_safari.sort_animals()
ramat_gan_safari.get_groups()
