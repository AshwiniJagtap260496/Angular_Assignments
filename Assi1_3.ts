function DisplayFactors (No : number) : void
{
   var i : number = 0;

   for (i= 1; i<= No; i++)
   {
    if (No% i==0)
    {
        console.log(i);
    }
   }
}

DisplayFactors(20);
