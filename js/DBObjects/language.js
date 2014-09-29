function addlanguage() {

		var idd = 5;
		var name = document.getElementById("lname").value;
		var dir = document.getElementById("ldir").value;
                if(!name)
                {
                        return;
                }

        var request = db.transaction(["language"], "readwrite")
                .objectStore("language")
                .add({name: name, direction: dir});
                                 
        request.onsuccess = function(event) {
                alert(name+" has been added to your database.");
        };
         
        request.onerror = function(event) {
                alert(name+" to add data\r\n"+name +" already exist in your database! ");        
        }
         
}

function loadLanguages(ele)
{
       document.getElementById(ele).options.length=0;
        addOption(document.getElementById(ele), "Select Language", "Select Language");
        var classesStore = db.transaction("language").objectStore("language");
        classesStore.openCursor().onsuccess = function(event) {
          var cursor = event.target.result;
          if(cursor)
          {
                addOption(document.getElementById(ele), cursor.value.name, cursor.value.name);
                cursor.continue();
          }
          };
          loadClasses('qclass');
}