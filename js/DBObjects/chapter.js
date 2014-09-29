function addchapter() {

	
	var chapname = document.getElementById("chapname").value;
	var chapclass = document.getElementById("chapclass").value;
        var chapsubject = document.getElementById("chapsubject").value;
        if(!chapname)
        {
                return;
        }

        var request = db.transaction(["chapter"], "readwrite")
                .objectStore("chapter")
                .add({name: chapname, chapclass: chapclass, chapsub: chapsubject});
                                 
        request.onsuccess = function(event) {
                alert(chapname+" has been added to your database.");
        };
         
        request.onerror = function(event) {
                alert(chapname+" to add data\r\n"+chapname +"is aready exist in your database! ");        
        }
         
}

function loadChapters(clas,sub,ele){
        document.getElementById(ele).options.length=0;
        addOption(document.getElementById(ele), "Select Chapter", "Select Chapter");
        var classs = document.getElementById(clas).value;
        var subb = document.getElementById(sub).value;
        var chaptersStore = db.transaction("chapter").objectStore("chapter");
        chaptersStore.openCursor().onsuccess = function(event) {
          var cursor = event.target.result;
          if(cursor)
          {
                if(cursor.value.chapsub == subb && cursor.value.chapclass == classs)
                {
                        addOption(document.getElementById(ele), cursor.value.name, cursor.value.name);
                }
                cursor.continue();
          }
          };
}
