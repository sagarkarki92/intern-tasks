import math

def roundpi():
	stringnumber= input("enter number to roundup pi" + "\n")
	number=int(stringnumber)
	print("the value of pi is:" + "\n")
	print(round(math.pi, number))

roundpi()	