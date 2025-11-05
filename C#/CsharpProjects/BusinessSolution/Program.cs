Random random = new Random();
int daysUntilExpiration = random.Next(12);
int discountPercentage = 0;

daysUntilExpiration = 5; // For testing purposes, set a specific value

if (daysUntilExpiration == 0)
{
    Console.WriteLine($"Your subscription has expired!");
}
else if (daysUntilExpiration == 1)
{
    Console.WriteLine($"Your subscription expires in {daysUntilExpiration} day!");
    discountPercentage = 20;
}
else if (daysUntilExpiration <= 5)
{
    discountPercentage = 10;
    Console.WriteLine($"Your subscription expires in {daysUntilExpiration} days!");
}
else if (daysUntilExpiration <= 10)
{
    Console.WriteLine($"Your subscription will expire soon. Renew now!");
}

if (discountPercentage > 0)
{
    Console.WriteLine($"Renew now and save {discountPercentage}%");
}