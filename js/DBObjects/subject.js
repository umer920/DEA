function addsubject() {

	
	var subname = document.getElementById("sname").value;
	var classn = document.getElementById("classname").value;

        if(!subname)
        {
                return;
        }

        var request = db.transaction(["subject"], "readwrite")
                .objectStore("subject")
                .add({name: subname, classname: classn});
                                 
        request.onsuccess = function(event) {
                alert(subname+" has been added to your database.");
        };
         
        request.onerror = function(event) {
                alert(subname+" to add data\r\n"+name +"is aready exist in your database! ");        
        }
         
}

function loadSubjects(clas,ele){
        document.getElementById(ele).options.length=0;
        addOption(document.getElementById(ele), "Select Subject", "Select Subject");
        var classs = document.getElementById(clas).value;
        var subjectsStore = db.transaction("subject").objectStore("subject");
        subjectsStore.openCursor().onsuccess = function(event) {
          var cursor = event.target.result;
          if(cursor)
          {
                if(cursor.value.classname == classs)
                {
                        addOption(document.getElementById(ele), cursor.value.name, cursor.value.name);
                }
                cursor.continue();
          }
          };
}