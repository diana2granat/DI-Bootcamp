# 🌟 Exercise 3 : Dogs Domesticated
# Instructions

#     Create a new python file and import your Dog class from the previous exercise.
#     In the new python file, create a class named PetDog that inherits from Dog.
#     Add an attribute called trained to the __init__ method, this attribute is a boolean and the value should be False by default.
#     Add the following methods:
#         train: prints the output of bark and switches the trained boolean to True

#         play: takes a parameter which value is a few names of other Dog instances (use *args). The method should print the following string: “dog_names all play together”.

#         do_a_trick: If the dog is trained the method should print one of the following sentences at random:
#             “dog_name does a barrel roll”.
#             “dog_name stands on his back legs”.
#             “dog_name shakes your hand”.
#             “dog_name plays dead”.
#==============================================import==============================================================
from ExercisesXP import Dog, dog1, dog2, dog3
import random

class PetDog(Dog):

    def __init__(self, name, age, weight, trained=False):
        super().__init__(name, age, weight)
        self.trained = trained

    def train(self):
        print(f'{self.bark()}')

    def play(self, *args):
        names = ', '.join(arg.name for arg in args)
        print(f'{names} all play together')
  
    def do_a_trick(self):
        if self.trained == True:
            print(f'{self.name}{random.choice(random_texts)}')       

random_texts = [' does a barrel roll', ' stands on his back legs', ' shakes your hand',' plays dead']       
dog4 = PetDog('Burek', 2, 20, trained=True)
dog4.play(dog4, dog1, dog2, dog3)
dog4.do_a_trick()


