function addquestion() {

	
<<<<<<< HEAD
	var name = document.getElementById("cname").value;
=======
	var stmnt = document.getElementById("statement").value;
>>>>>>> 7bed89d4f14fc21d49155e46c80c554ab012e6e5
	var desc = document.getElementById("cdesc").value;

        if(!name)
        {
                return;
        }

        var request = db.transaction(["class"], "readwrite")
                .objectStore("class")
                .add({name: name, description: desc});
                                 
        request.onsuccess = function(event) {
                alert(name+" has been added to your database.");
        };
         
        request.onerror = function(event) {
                alert(name+" to add data\r\n"+name +"is aready exist in your database! ");        
        }
         
}