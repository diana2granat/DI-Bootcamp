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
#     Bonus (not mandatory) : Install the Turtle module, and draw the sorted circles


import math

class Circle():

    def __init__(self, radius=None, diameter=None) -> None:
        self.diameter = radius * 2
        self.radius = radius
    
    def circle(self):
        print(self.diameter, self.radius)

    def circle_area(self):
        area = math.pi * self.radius**2
        print(area)
        return area

    def __str__(self):
        area = self.circle_area()
        return f"Radius: {self.radius}, Diameter: {self.diameter}, Area: {area}"


circle1 = Circle(2)
print(circle1)