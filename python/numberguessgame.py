import random

def comparing(unum,gnum):

	if unum is gnum:      
		return True
	elif unum > gnum :
		print("My number is smaller than yours !!" + "\n")
		return False
	elif unum < gnum:
		print("My number is greater than yours !!" + "\n")
		return False		


def startgame(gnum):

	print("guess which number i have from 1 to 100:" + "\n")
	life=5
	while life is not 0:		#running until life is not over
		print(life)
		print("guess remaining")
		snum=input("enter number:")		#take input in string
		unum=int(snum)					#converts string input to int	

		check = comparing(unum,gnum)	#gets either user number is = to generated number as true or false

		if check:
			return True
		else:
			life-=1		#life gets decrease when user made wrong guess
	return False
			


def start():

	print("welcome to guess my number game" + "\n")
	decision = input("press y to start the game:")

	if decision is 'y':		#s game starts when user press y
		gnum = random.randint(1,100) #generates random number 
		gamestatus=startgame(gnum)
	if gamestatus: 
		print("you won a big banana")

	else:
		print("you lose a big banana" + "\n")
		print("My number was: ")
		print(gnum)
		print("\n")
	

start()
