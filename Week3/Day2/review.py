# Try to recreate the class explained below:
# We have a class called Door that has an attribute of is_opened declared when an instance is initiated.
# We can create a class called BlockedDoor that inherits from the base class Door.
# We just override the parent class's functions of open_door() and close_door() with our 
#own BlockedDoor version of those functions, which simply raises an Error that a blocked door cannot be opened or closed.

class Alien:
    def __init__(self, name):
        self.name = name

    def make_sound(self):
        print('zzzzzzzzzzzzzzzzzzzz')

class Dog():

    def make_sound(self):
        print('chrrrrrrrr')

class AlienDog(Dog, Alien):
    pass


sleep = AlienDog('Burek')
sleep.make_sound()