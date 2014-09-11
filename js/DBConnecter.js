//document.write('<scr'+'ipt type="text/javascript" src="js/language.js" ></scr'+'ipt>');

var db;
function connect(){
var request = window.indexedDB.open("db4", 1);
 
request.onerror = function(event) {
  console.log("error: ");
};
 
request.onsuccess = function(event) {
  db = request.result;
  console.log("success: "+ db);
};
 
request.onupgradeneeded = function(event) {
        var db = event.target.result;
        db.createObjectStore("language", {"keyPath":"name", autoIncrement : true });
        db.createObjectStore("class", {"keyPath":"name", autoIncrement : true });
        db.createObjectStore("subject", {autoIncrement : true });
        db.createObjectStore("chapter", {autoIncrement : true });
        db.createObjectStore("topic", {autoIncrement : true });
        db.createObjectStore("question", {autoIncrement : true });
}

}
window.onload = connect;