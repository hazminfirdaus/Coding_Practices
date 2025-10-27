# Exercise 6: Palindrome Checker

# Your task:
# 1. Ask the user to enter a word.
# 2. Check if it’s a palindrome.
# 3. Print a message saying whether it is or is not a palindrome.

word = str(input("Please enter a word: "))

if word == word[::-1]:
    print(f"{word} is a palindrome.")
else:
    print(f"{word} is not a palindrome.")