function clear(){
    editorOutput.value="";
}

function help(){
    var helpText = [
"H E L P",
"~~~~~~~",
"These functions are provided for you:",
"",
"clear();",
"   Clears this output area.",
"",
"help();",
"   Displays this help text.",
"",
"print();",
"   Evaluates the parameters passed it and displays them in the output window.  This is the primary way of testing the results of the javascript.",
""
    ].join("\n");
    print(helpText);
}

function print() {
    var stuff = [];
    for (var x = 0; x < arguments.length; x++) {
        stuff.push(String(arguments[x]));
    }
    var combine = stuff.join();
    outputIt(combine);
}

function outputIt(data) {
    if (data!==undefined)
        editorOutput.value += data + "\n";
}