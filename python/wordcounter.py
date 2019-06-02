
def wordcounting():
	words="python is a good language but python is is is a also difficult language and it can also be learn quickly "

#spliting words and keeping in wordlist
	wordlist = words.split()
	frequencies=[]

#counting words in wordlist and keeping counted number in frequencies 
	for word in wordlist:
		frequencies.append(wordlist.count(word))

		#sorting frequencies in decending order
	frequencies.sort(reverse=True)

#displaying top 3 highest number
	print(frequencies[0],frequencies[1],frequencies[2])


wordcounting()

