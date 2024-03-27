// : Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.
function swapvariabel() {
    var a = 5;
    var b = 10;
    console.log("Before swapping  a =", a, "b =", b);
    var temp = a;
    a = b;
    b = temp;
    console.log("After swaping a =", a, "b = ", temp);
}
swapvariabel();
