var codeEditor = null;

$(document).ready(function () {
    var ctl = document.getElementById("editor");
    codeEditor = createEditor(ctl);

    changeTheme();

    //themeSelector.onchange=changeTheme;
    fileChooser.onchange=handleFileSelection;

    $("#btnRun").click(function() {
        runCode();
        codeEditor.focus();
    });

    $("#btnClear").click(function () {
        clearCode();
        codeEditor.focus();
    });

    $("#btnSave").click(function(){
        saveCode();
        codeEditor.focus();
    });

    $("#btnLoad").click(function (evt) {
        evt.preventDefault();
        if (typeof window.FileReader == "undefined"){
            alert("Your browser does not support required FileReader api for this operation.");
            return;
        }
        $("#fileChooser").trigger("click");
        codeEditor.focus();
    });
    $("#btnRun").trigger("click");
});
function createEditor(id) {
    id.value = [
"// example code",
"",
"clear(); //clear output area",
"",
"help();  //display help",
"",
"function Con() {",
"  this.p1 = 'hello';",
"  this.p2 = 'world';",
"}",
"",
"var z = new Con();",
"print(\"z.p1 = \" + z.p1);",
"print(\"z.p2 = \" + z.p2);"
    ].join("\n");
    CodeMirror.commands.autocomplete = function(cm) {
        CodeMirror.showHint(cm, CodeMirror.javascriptHint);
      }
    return CodeMirror.fromTextArea(id, {
        mode: "text/javascript",
        lineNumbers: true,
        matchBrackets:true,
        extraKeys: {"Ctrl-Space": "autocomplete"}
    });
}
function changeTheme() {
    //var theme = themeSelector.options[themeSelector.selectedIndex].innerHTML;
    var theme = "vibrant-ink"
    codeEditor.setOption("theme", theme);
}
function displayFileText(evt) {
    var fileString = evt.target.result; // Obtain the file contents, which was read into memory.
    var goOn = window.confirm("Load this code into the editor?\n"+fileString.substring(0,200));
    if (goOn===true) codeEditor.setValue(fileString);
}
function runCode() {
    try{
        var result = eval(codeEditor.getValue());
    } catch (e) {
        result = e;
    }
    outputIt(result);
}
function clearCode() {
    codeEditor.setValue("");
    editorOutput.value="";
}
function saveCode() {
    alert("Not implemented.");
}