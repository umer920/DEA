function addquestion() {

	
	var name = document.getElementById("cname").value;
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