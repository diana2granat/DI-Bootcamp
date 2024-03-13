#Decorators

#Syntax: how to apply the decorator:

# @nameoffunction
# def do_this():
#     pass
import time

def tictoc(func): #the decorator function
    def wrapper():
        t1 = time.time() #11:50:03:5
        func() #function called, executed and returned
        total = time.time() - t1 #11:50:06:2 - #11:50:03:5 = 03:3
        print(f'{func.__name__} took {total} seconds')
        # code to calculate the execution time
    return wrapper

@tictoc
def do_this():    
    #code of the function
    time.sleep(2)

@tictoc
def do_that():
    time.sleep(1.5)

@tictoc
def do_something():
    time.sleep(.5)

do_this()
do_that()
do_something()

print('Finished')