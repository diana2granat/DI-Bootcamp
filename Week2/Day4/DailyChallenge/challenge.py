# Instructions

# Given a “Matrix” string:

#     7ii
#     Tsx
#     h%?
#     i #
#     sM 
#     $a 
#     #t%
#     ^r!


# The matrix is a grid of strings (alphanumeric characters and spaces) with a hidden message in it.
# A grid means that you could potentially break it into rows and columns, like here:
# 7 	i 	i
# T 	s 	x
# h 	% 	?
# i 		#
# s 	M 	
# $ 	a 	
# # 	t 	%
# ^ 	r 	!

# Matrix: A matrix is a two-dimensional array. It is a grid of numbers arranged in rows and columns.
# To reproduce the grid, the matrix should be a 2D list, not a string

# To decrypt the matrix, Neo reads each column from top to bottom, starting from the leftmost column,
# selecting only the alpha characters and connecting them. Then he replaces every group of symbols between two alpha
# characters by a space.
# Using his technique, try to decode this matrix.

# Hints:
# Use
# ● lists for storing data
# ● Loops for going through the data
# ● if/else statements to check the data
# ● String for the output of the secret message

# Hint (if needed) : Look at the remote learning “Matrix” videos
import re

matrix_strings= [
    ['7', 'i', 'i'],
    ['T', 's', 'x'],
    ['h', '%', '?'],
    ['i', ' ', '#'],
    ['s', 'M', ' '],
    ['$', 'a', ' '],
    ['#', 't', '%'],
    ['^', 'r', '!'],
]
print(matrix_strings)

pattern = r'(?<=[a-zA-Z])\W+(?=[a-zA-Z])'

def neo():
    result_leftpart = ''
    result_middlepart = ''
    result_rightpart = ''
    result = ''
    final_result = ''
    for each_list in matrix_strings:
        first_value = each_list[0]
        result_leftpart += first_value
        second_value = each_list[1]
        result_middlepart += second_value
        third_value = each_list[2]
        result_rightpart += third_value
    message =result_leftpart+result_middlepart+result_rightpart
    result = "".join(message.split())
    print(result)
    result2 = re.sub(pattern, ' ', result)
    for letter in result2:
        if letter.isalpha() or letter == ' ':
            final_result += letter    
    print(final_result)

neo()


