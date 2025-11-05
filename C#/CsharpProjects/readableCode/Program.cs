char userOption;

userOption = 'A';

Console.WriteLine("User option is: " + userOption);

// This is a single line code comment!

/*
string firstName = "Bob";
int widgetPurchased = 7;
Console.WriteLine($"{firstName} purchased {widgetPurchased} widgets.");
*/

/*
  The following code creates five random OrderIDs
  to test the fraud detection process.  OrderIDs 
  consist of a letter from A to E, and a three
  digit number. Ex. A123.
*/
Random random = new Random();
string[] orderIDs = new string[5];

for (int i = 0; i < orderIDs.Length; i++)
{
    int prefixValue = random.Next(65, 70);
    string prefix = Convert.ToChar(prefixValue).ToString();
    string suffix = random.Next(1, 1000).ToString("000");

    orderIDs[i] = prefix + suffix;
}

foreach (var orderID in orderIDs)
{
    Console.WriteLine(orderID);
}

// This is to demonstrate how C# escapes whitespace

// Example 1:
Console.WriteLine("Below is the Example 1 output:");
Console
.
WriteLine
(
"Hello, this is Example 1"
)
;

// Example 2:
Console.WriteLine("Below is the Example 2 output:");
string firstWord="Hello";string lastWord="Example 2";Console.WriteLine(firstWord + ", this is " + lastWord);

// Dice rolling example

Console.WriteLine("-------------------------");
Console.WriteLine("Rolling three dice...");

Random dice = new Random();

int roll1 = dice.Next(1, 7);
int roll2 = dice.Next(1, 7);
int roll3 = dice.Next(1, 7);

int total = roll1 + roll2 + roll3;
Console.WriteLine($"Dice roll: {roll1} + {roll2} + {roll3} = {total}");

if ((roll1 == roll2) || (roll2 == roll3) || (roll1 == roll3))
{
    if ((roll1 == roll2) && (roll2 == roll3))
    {
        Console.WriteLine("You rolled triples!  +6 bonus to total!");
        total += 6;
    }
    else
    {
        Console.WriteLine("You rolled doubles!  +2 bonus to total!");
        total += 2;
    }
}

Console.WriteLine("--------------------------");
Console.WriteLine("Exercise: Code Readability");

/*
   The following code takes a string, reverses it,
   counts the number of times the letter 'o' appears,
   and prints the results to the console.
*/

string originalMessage = "The quick brown fox jumps over the lazy dog.";

char[] charMessage = originalMessage.ToCharArray();
Array.Reverse(charMessage);

int letterCount = 0;

foreach (char charLetter in charMessage)
{
    if (charLetter == 'o')
    {
        letterCount++; 
    } 
}

string new_message = new String(charMessage);

Console.WriteLine(new_message);
Console.WriteLine($"'o' appears {letterCount} times.");