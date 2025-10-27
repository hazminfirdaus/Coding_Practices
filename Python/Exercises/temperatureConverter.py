# Exercise 4: Temperature Converter 🌡
# Write a program that:
# 1. Asks the user to enter a temperature.
# 2. Asks whether it’s in Celsius or Fahrenheit.
# 3. Converts it to the other unit and prints the result.

temp = int(input("Enter a temperature: "))

unit = input("Is the unit Celcius (C) or Fahrenheit (F):? ").upper()

if unit == "C":
    converted = (temp * 9/5) + 32
    print(f"The temperature is {converted}°F")
elif unit == "F":
    converted = (temp - 32) * 5/9
    print(f"The temperature is {converted}°C")
else:
    print("Invalid unit! Please enter C or F.")