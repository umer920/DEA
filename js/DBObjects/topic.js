function addtopic() {

	
        var topname = document.getElementById("tname").value;
	var topchap = document.getElementById("topic_chapter").value;
	var topclass = document.getElementById("topic_class").value;
        var topsubject = document.getElementById("topic_subject").value;
        if(!topname)
        {
                return;
        }

        var request = db.transaction(["topic"], "readwrite")
                .objectStore("topic")
                .add({name: topname, chapter: topchap, classs: topclass, subject: topsubject});
                                 
        request.onsuccess = function(event) {
                alert(topname+" has been added to your database.");
        };
         
        request.onerror = function(event) {
                alert(topname+" to add data\r\n"+topname +"is aready exist in your database! ");        
        }
         
}

function loadTopics(clas,sub,chap,ele){
        document.getElementById(ele).options.length=0;
        addOption(document.getElementById(ele), "Select topic", "Select topic");
        var classs = document.getElementById(clas).value;
        var subb = document.getElementById(sub).value;
        var chapp = document.getElementById(chap).value;
        //alert(classs + " ; "+subb+" ; "+chapp);
        var chaptersStore = db.transaction("topic").objectStore("topic");
        chaptersStore.openCursor().onsuccess = function(event) {
          var cursor = event.target.result;
          if(cursor)
          {
                if(cursor.value.subject == subb && cursor.value.classs == classs && cursor.value.chapter == chapp)
                {
                        addOption(document.getElementById(ele), cursor.value.name, cursor.value.name);
                }
                cursor.continue();
          }
          };
}