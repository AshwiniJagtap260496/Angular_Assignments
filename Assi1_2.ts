import * as promptSync from 'prompt-sync'

const prompt = promptSync();

function Area (R : number) : number
{
    var Ans : number = 0;
    var Pi : number = 3.14;

    Ans = Pi * R * R;

    return Ans;
}

var Rad : number = 0;

var Radstr = prompt('Enter the Radius : ');
Rad = parseInt(Radstr);

var ans :number = 0;
ans = Area(Rad);

console.log("Area of circle is : "+ans);
