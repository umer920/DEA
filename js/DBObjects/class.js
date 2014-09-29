function addclass() {

	
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

function loadClasses(ele){
        document.getElementById(ele).options.length=0;
        addOption(document.getElementById(ele), "Select Class", "Select Class");
        var classesStore = db.transaction("class").objectStore("class");
        classesStore.openCursor().onsuccess = function(event) {
          var cursor = event.target.result;
          if(cursor)
          {
                addOption(document.getElementById(ele), cursor.value.name, cursor.value.name);
                cursor.continue();
          }
          };

}