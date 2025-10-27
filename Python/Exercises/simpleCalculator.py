# Question:
# Write a program that:
# 1. Asks the user for two numbers.
# 2. Prints their sum, difference, product, and quotient.

# Step 1: Ask the user for two numbers
num1 = float(input("Enter a number here: "))
num2 = float(input("Enter another number here: "))

# Step 2: Do the calculation
sum_result = num1 + num2
diff_result = num1 - num2
prod_result = num1 * num2

if num2 != 0:
    quot_result = num1 /num2
else:
    quot_result = "Undefined: quote result cannot be 0"

# Step 3: Print out the results
print("Sum result is:", sum_result)
print("Difference result is:", diff_result)
print("Product result is:", prod_result)
print("Quotient result is:", quot_result)

