function ChkPrime(No : number) : boolean
{
    var Chk : boolean = false;
    for (var i= 2; i< No/2; i++)
    {
        if (No % i ==0)
        {
            Chk = false;
            break;
        }
        else
        {
            Chk = true;
        }       
    }    
    return Chk;
}

var check : boolean = false;

check = ChkPrime(11);

if (check == true)
{
    console.log("It is a prime number");
}
else
{
    console.log("It is not a prime number");
}