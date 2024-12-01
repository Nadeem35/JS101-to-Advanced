<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hoisting</title>
</head>

<body>

    <h1>Hoisting Concept</h1>

    <script>

        /*____ var ____*/
        // in var the variable declaration is Hoisted but initialisation is not Hoisted
        // Error ---> Undefined



        console.log(x); // Undefined
        var x = 5;
        console.log(x);


        var a;
        console.log(a); // Undefined
        a = 5
        console.log(a);


        var b;
        console.log(b); // Undefined
        b = 10
        console.log(b);



        /*____ let & const ____*/
        // Variable declared with let and const are Hoisted but remain in temporal dead zone "TDZ", from start until declaration is encountered
        // Simple Bhaasa me --> let & const me varible declared ho jata but TDZ me rahta hai from start to end(jahaan aapne variable declare kiya hai) jab tak ki aap variable ko initialise na kar de.
        // Access them before their declaration results is --> Uncaugt ReferenceError (Can't access before Initilisation)


        // console.log(y); // Uncaugt ReferenceError (Can't access before Initilisation)
        // let y = 111;
        // console.log(y);


        /*
        let y;
        console.log(y); // Uncaugt ReferenceError (Can't access before Initilisation)
        y = 5
        console.log(y);


        let y;
        console.log(y); // Uncaugt ReferenceError (Can't access before Initilisation)
        y = 10
        console.log(y);
        */



        /*____ function ____*/
        // Entire function declarations are hoisted, including their body. You can call the function before its definition in the code.

        greet()

        function greet() {
            console.log("I Hey");
        }

        // if kisi variable ko function assign kia hai ye Hoisted nahi hoga
        // The variable declaration is hoisted (if var is used), but the function assignment is not.


        console.log(hey); // undefined

        var hey = function () {
            console.log("Nadeem Khan");
        }


        console.log(hi); // ReferenceError

        let hi = function () {
            console.log("Hi Brother");
        }



        /***____________________________________________***/ 

        /*
        
        Key Points:
        1. Hoisting applies to declarations, not initializations.
        2. Variables declared with var are initialized to undefined during hoisting.
        3. Variables declared with let and const are hoisted but not initialized, leading to a temporal dead zone.
        4. Function declarations are fully hoisted, but function expressions are not.


        Conclusion:
        Hoisting is an important concept to understand how JavaScript organizes and executes code. Using let and const instead of var can help avoid unexpected behaviors caused by hoisting.



        
        */




    </script>

</body>

</html>
