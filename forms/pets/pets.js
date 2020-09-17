// creates an array with pet names
let petNames = ["Darcy", "Jack", "Jerry", "Marty", "Vito", "Vinny", "Riley", "Saddie", "Marge", "Sam"]

//creates an array with the original pet names, and adds Marmaduke to the end
let withMarmaduke = petNames
withMarmaduke.push("Marmaduke")
alert(withMarmaduke)

//tells the position of Marty in the withMarmaduke array
alert(withMarmaduke.indexOf("Marty"))

//allows the user to remove, add, get the index of a name, or show the withMarmaduke array

let answer = prompt("Do you want to add, remove, get an index, or see the array withMarmaduke?")

if (answer =="add")
{
  let addAns = prompt("Do you want to add Nancy, or your name? if your name, enter your name")
  petNames.unshift(addAns)
  console.log(`Action taken was: added ${addAns}`)
  console.log(`Remaining array data are ${petNames}`)
  }
else  if (answer =="remove")
  {
    let remAns = prompt("Do you want to remove Vinny or Marty?")
    let vinny = petNames.indexOf("Vinny")
    let marty = petNames.indexOf("Marty")
    if (remAns=="Vinny")
    {
        petNames.splice(vinny,1)
        console.log(`Action taken was: Removed ${remAns}`)
        console.log(`Remaining array data are ${petNames}`)
    }
    else
    {
        petNames.splice(marty,1)
        console.log(`Action taken was: Removed ${remAns}`)
        console.log(`Remaining array data are ${petNames}`)
    }}
else if (answer =="get an index")
    {
    let indAns = prompt("Do you want the index of Cindy or Riley?")
    if (indAns=="Riley")
    {
    console.log(`The index of Riley is ${petNames.indexOf("Riley")}`)
    console.log("Action taken was: got index of Riley")
    console.log(`Remaining array data are ${petNames}`)
    }
    else
    {
      console.log(`The index of Cindy is ${petNames.indexOf("Cindy")}`)
      console.log("Action taken was: got index of Riley")
      console.log(`Remaining array data are ${petNames}`)
    }}
  else if (answer =="see the array withMarmaduke")
  {
      console.log(withMarmaduke)
      console.log("Action taken was: showed withMarmaduke array")
      console.log(`Remaining array data are ${petNames}`)
      
      }
else {
    console.log("Please enter a valid option")
      }

      
