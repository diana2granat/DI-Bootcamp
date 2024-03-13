#Built-in Decorators:

# @staticmethod: doesnt use the self or the class

class MyClass:
    
    @staticmethod
    def add(a,b):
        return a+b
    
class Child(MyClass):
    pass

child_obj = Child()
print(child_obj.add(5,3))

#@classmethod: Method for the class

class MyClass:
    counter = 0

    @classmethod
    def add(cls, a):
        cls.counter += a
        return cls.counter

MyClass().add(5)
print(MyClass.counter)


class Circle:
    def __init__(self, radius, diameter) -> None:
        self.radius = radius
        self.diameter = diameter

    @classmethod
    def from_radius(cls, radius):
        return cls(radius = radius, diameter = radius *2)
                #Circle(5,5*2)
    
    @classmethod
    def from_diameter(cls, diameter):
        return cls(radius = diameter /2, diameter = diameter)


circle_obj = Circle.from_radius(5)
print(circle_obj.diameter)
circle_obj = Circle.from_diameter(12)
print(circle_obj.radius)
# Circle.from_diameter(5)

#@property: makes the method acessible as a attribute of the class.
#Usually used to facilitate the acess of private and protected attributes.
#example from the atm.py:

@property
    def balance(self):
        return self._balance
        
        

    