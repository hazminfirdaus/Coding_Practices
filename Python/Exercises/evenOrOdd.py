# Question:
# Write a program that:
# 1.Asks the user to enter a number.
# 2.Checks if the number is even or odd.
# 3.Prints the result.

# Step 1: Ask user for a number
num = int(input("Enter a number: "))

# Step 2: Check odd or even

result = num % 2
print("Result is:", result)

if num % 2 == 0:
    print(f"{num} is even")
else:
    print(f"{num} is odd")


