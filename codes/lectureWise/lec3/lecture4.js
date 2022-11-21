function testAlert(){
    alert("Testing alert");
}
function press(){
    testAlert();
    document.getElementById("para").innerHTML= "Click on Submit Button below";
}


function abc() {
    var retval = confirm("Do you want to continue ?");
    if(retval==true){
        document.write("Hi Anurag ");
    }
    else{
        document.write("Get Lost!");
    }

    var promptText = prompt("Enter your name");
    document.write("Hi " + promptText);

    var num = parseInt(prompt("Enter a number"));

    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    if(num>=1 && num<12){
        document.write(months[num - 1]);
    }
    else{
        document.write("Wrong Input");
    }
    
    // switch(num) {
    //     case "1":
    //         document.write("January");
    //         break;
    //     case "2":
    //         document.write("February");
    //         break;
    //     case "3":
    //         document.write("March");
    //         break;
    //     case "4":
    //         document.write("April");
    //         break;
    //     case "5":
    //         document.write("May");
    //         break;
    //     case "6":
    //         document.write("June");
    //         break;
    //     case "7":
    //         document.write("July");
    //         break;
    //     case "8":
    //         document.write("August");
    //         break;
    //     case "9":
    //         document.write("September");
    //         break;
    //     case "10":
    //         document.write("October");
    //         break;
    //     case "11":
    //         document.write("November");
    //         break;
    //     case "  ":
    //         document.write("December");
    //         break;
    //     default:
    //         document.write("Wrong Input");
    // }
}