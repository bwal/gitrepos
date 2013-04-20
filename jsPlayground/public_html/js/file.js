/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function handleFileSelection(evt) {
    var files = evt.target.files; // The files selected by the user (as a FileList object).

    if (!files) {
        alert("At least one selected file is invalid.");
        return;
    }
    if (files.length > 1){
        alert("Select only one file.");
        return;
    }
    var file = files[0];
        
    if (!file) {
        alert("Unable to access " + file.name);
        return; // Immediately move to the next file object.
    }
    if (file.size === 0) {
        alert("Skipping " + files[i].name.toUpperCase() + " because it is empty.");
        return;
    }
    if ( !file.type.match('application/javascript')) {
        alert("Ignoring " + file.name.toUpperCase() + " because it is not a known javascript file.");
        return;
    }
    var reader = new FileReader();

    // Set up asynchronous handlers for file-read-success, file-read-abort, and file-read-errors:
    reader.onloadend = displayFileText; // "onloadend" fires when the file contents have been successfully loaded into memory.
    reader.abort = handleFileReadAbort; 
    reader.onerror = handleFileReadError; 
    reader.readAsText(file); // Asynchronously start a file read thread. Other supported read methods include readAsArrayBuffer() and readAsDataURL().
}

function handleFileReadAbort(evt) {
    alert("File read aborted.");
} // handleFileReadAbort

function handleFileReadError(evt) {
    switch (evt.target.error.name) {
        case "NotFoundError":
            alert("File not found.");
            break;
        case "SecurityError":
            alert("File security error.");
            break;
        case "NotReadableError":
            alert("The file cannot be read. This can occur if the file is open in another application.");
            break;
        case "EncodingError":
            alert("The length of the data URL for the file is too long.");
            break;
        default:
            alert("File error code " + evt.target.error.name);
    } 
} 