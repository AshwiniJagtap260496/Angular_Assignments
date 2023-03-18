function Maximum(Arr : number[]): number
{
    var i : number =0;
    var largest: number = 0;
    var Second : number =0;
    
        if (Arr[0]>Arr[1])
        {
            largest = Arr[0];
            Second = Arr[1];
        }
        else
        {
            largest = Arr[1];
            Second = Arr[0];
        }

        for(i=2; i<Arr.length; i++)
        {
            if(largest< Arr[i])
            {
                Second= largest;
                largest= Arr[i];
            }
            else if(Second< Arr[i])
            {
                Second= Arr[i];
            }            
        }
        return Second;    
}

var Brr : number[]= [23, 89, 6, 29, 56, 45, 77, 32]
var Ans : number= 0;
Ans = Maximum(Brr);

console.log("Second Maximum Number is : "+Ans);