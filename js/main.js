
var today = new Date();
var hourNow = today.getHours();
var greeting;


if (!(hourNow >12 ) )
{
    greeting="wysłke jeszcze wyslemy dzis i jezeli masz pytania to zapraszamy do zakładki kontakt ";
}
else 
if (!(hourNow > 13) )
{
    greeting="nasz support jest dostepny  ale wysłki nie dostaniesz jutro ";
}
else
if(!(hourNow > 15) )
 {
    greeting = " support oraz wysyłki są dzisiaj niedostpne";
}
else
{
    greeting="witamy ";
}

document.write(greeting );
