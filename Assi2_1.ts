function Maximum (Arr: number[]) : number
{
    var Cnt : number =0;
    var No : number=Arr[0];

    for (Cnt =0; Cnt< Arr.length; Cnt++)
    {
        if(No <=Arr[Cnt])
        {
            No= Arr[Cnt];
        }
        else
        {
            No= No;
        }
    }
    return No;
}

var Brr: number[]= [23, 89, 6, 29, 56, 45, 77, 32];
var Ans : number= 0;
Ans= Maximum(Brr);
console.log("MAximum number is : "+Ans);