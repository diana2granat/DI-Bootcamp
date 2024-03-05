list1 = [1,2,3,4]
list2 = ['a','b','c','d']
list3 = [1.1, 2.2, 3.3, 4.4, 5.5, 6.6]

zipped = zip(list1, list2, list3)
# print(zipped)

# for item in zipped:
#     print(item)

zipped_list = list(zip(list1, list2, list3))
# print(zipped_list)


names = ['Anna', 'Daniel', 'Maria', 'Leo']
scores = [50, 55, 78, 100]

# users = dict(zip(names, scores))
# print(users)

users = zip(scores, names)
print(users)

