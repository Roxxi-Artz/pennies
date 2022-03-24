var pennies, nickels, dimes, quarters, dollars

function submitBtn(){

    pennies = document.getElementById("input").value

    dollars = Math.floor(pennies / 100).toFixed(0);
    document.getElementById('dollar').innerHTML = `Dollars: ${dollars}`;
    pennies % 100;

    quarters = Math.floor(pennies / 25).toFixed(0);
    document.getElementById("quarter").innerHTML = `Quarters: ${quarters}`;
    pennies % 25;

    dimes = Math.floor(pennies / 10).toFixed(0);
    document.getElementById("dime").innerHTML = `Dimes: ${dimes}`;
    pennies % 10;

    nickels = Math.floor(pennies / 5).toFixed(0);
    document.getElementById("nickel").innerHMTL = `Nickels: ${nickels}`;
    pennies % 5;

    document.getElementById("penny").innerHTML = `Pennies: ${pennies}`;


}

function clearResults(){
    document.getElementById("input").value = "";
    document.getElementById("penny").innerHTML = "Pennies:"
    document.getElementById("nickel").innerHTML = "Nickels:"
    document.getElementById("dime").innerHTML = "Dimes:"
    document.getElementById("quarter").innerHTML = "Quarters:"
    document.getElementById("dollar").innerHTML = "Dollars:"
}