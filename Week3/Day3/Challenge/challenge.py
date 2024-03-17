# Instructions :

# The goal is to create a class that represents a simple circle.
# A Circle can be defined by either specifying the radius or the diameter.
# The user can query the circle for either its radius or diameter.

# Other abilities of a Circle instance:

#     Compute the circle’s area
#     Print the attributes of the circle - use a dunder method
#     Be able to add two circles together, and return a new circle with the new radius - use a dunder method
#     Be able to compare two circles to see which is bigger, and return a Boolean - use a dunder method
#     Be able to compare two circles and see if there are equal, and return a Boolean- use a dunder method
#     Be able to put them in a list and sort them
#======================================================answer=====================================================

import math

class Circle():

    def __init__(self, radius=None, diameter=None) -> None:
        if radius is not None:
            self.radius = radius
            self.diameter = radius * 2
        elif diameter is not None:
            self.diameter = diameter
            self.radius = diameter / 2
        else:
            raise ValueError("radius or diameter must be provided")
    
    def circle(self):
        print(self.diameter, self.radius)

    def circle_area(self):
        return math.pi * self.radius**2

    def __str__(self):
        area = self.circle_area()
        return f"Radius: {self.radius}, Diameter: {self.diameter}, Area: {area}"
    
    # Be able to add two circles together, and return a new circle with the new radius - use a dunder method
    def __add__(self, other):
        if isinstance(other, Circle):
            return Circle(radius=self.radius + other.radius)
        else:
            raise TypeError("Unsupported operand type for +: Circle and {}".format(type(other)))
    
    # Be able to compare two circles to see which is bigger, and return a Boolean - use a dunder method
    def __lt__(self, other):
        if isinstance(other, Circle):
            return self.radius < other.radius
        else:
            raise TypeError("Unsupported operand type for <: Circle and {}".format(type(other)))
    
    # Be able to compare two circles and see if there are equal, and return a Boolean- use a dunder method
    def __eq__(self, other):
        if isinstance(other, Circle):
            return self.radius == other.radius
        else:
            raise TypeError("Unsupported operand type for ==: Circle and {}".format(type(other)))

circle1 = Circle(2)
print(circle1)

circle2 = Circle(3)
circle3 = Circle(3)

# Adding two circles together
result_circle = circle1 + circle2
print("Circle after addition:", result_circle)

# Comparing two circles to see which is bigger
print("Circle 1 is bigger than Circle 2:", circle1 > circle2)

# Comparing two circles to see if they are equal
print("Circle 2 is equal to Circle 3:", circle2 == circle3)

# Putting circles in a list and sorting them
circles = [circle1, circle2, circle3]
circles.sort()
print("Sorted circles by radius:", [str(circle) for circle in circles])