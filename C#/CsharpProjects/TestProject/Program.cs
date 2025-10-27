// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");

int num = 5;

Console.WriteLine(num);

Console.WriteLine("Rolling a dice...");

Random dice = new(); // C# 9.0 target-typed new expression
// Random dice = new Random(); // Traditional way
int roll = dice.Next();
Console.WriteLine(roll); // 1-6
