import math
# def starting(*number):
# 	first=True
# 	second=54
# 	third=43
# 	if second is number:
# 		print("is not keyword worked!!")
# 	else:	
# 		print("is not keyword still worked but in else")

# starting(54,45,37637)

# def loopbasic():
# 	x=[3,4,5,6,7,8,9]
# 	print ("the numbers are:")
# 	for i in x:
# 		if i is 6:
# 			continue
# 		print(i)

# loopbasic()		

# def dictionariesdemo():
# 	students = [{
# 		"name" : "sagar",
# 		"age" : 22,
# 		"student_id" : 2212
# 	},{
# 		"name" : "nora",
# 		"age" : 18,
# 		"student_id" : 2322
# 	}
# 	]
# 	print(students.values())
		

	# if students["name"] is "sagar":
	# 	print("name not found")
	# elif students["name"] == "nora":
	# 	students["age"] +=1
	# 	print("age is increased " + students["age"])

# def showodd():
# 	a=[1,2,3,4,5,6,7,8,9,12,34,45,456,346,43,576,245,45,42,5724,5724,57]
# 	print("odd numbers are:")
# 	for index in a:
# 		if index % 2 is 0:
# 			continue
# 		else:
# 			print(index)	

# showodd()

studentlist=[]

def addStudent(student_name,student_id):
	student={"name":student_name,"id":student_id}
	studentlist.append(student)
	save_file(student)



def getStudent():
	student_title = []
	for student in studentlist:
		student_title.append(student["name"])
	return student_title


def printStudent():
	student_title = getStudent()
	print(student_title)

def save_file(student):
	try:
		file = open("students.txt", "a")
		file.write(student + "\n")
		file.close()
		
	except Exception:
		print("could not save file")


def read_file()
	file=open("students.txt", "r")
	for student in file.readlines():
		studentlist.append(student)
		
	file.close()	


def enterinfo():
	name=input("enter student name:" + "\n")
	sid = input("enter student id:")
	sids = int(sid)
	decision = input("Do you want to add student? y/n:")
	if decision is 'y':
		addStudent(name,sids)
		print("sucessfully added")
		print(getStudent())
	elif decision is 'n':
		print("student did not added")


enterinfo()













