// : Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.

function swapvariabel(){
    let a = 5;
    let b = 10;
    console.log("Before swapping  a =",a ,"b =",b)

    let temp = a;
    a = b;
    b = temp;
    console.log("After swaping a =",a , "b = ",temp)
}

swapvariabel()