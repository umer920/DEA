
$(document).ready(function(){/* activate scrollspy menu */
$('body').scrollspy({
  target: '#navbar-collapsible',
  offset: 50
});

/* smooth scrolling sections */
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 50
        }, 1000);
        return false;
      }
    }
});
<<<<<<< HEAD
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function exportTableToCSV($table, filename) {

        var $rows = $table.find('tr:has(td)'),

        // Temporary delimiter characters unlikely to be typed by keyboard
        // This is to avoid accidentally splitting the actual contents
            tmpColDelim = String.fromCharCode(11), // vertical tab character
            tmpRowDelim = String.fromCharCode(0), // null character

        // actual delimiter characters for CSV format
            colDelim = '","',
            rowDelim = '"\r\n"',

        // Grab text from table into CSV formatted string
        /*   csv = '"' + $rows.map(function (i, row) {
         var $row = $(row),
         $cols = $row.find('td');

         return $cols.map(function (j, col) {
         var $col = $(col),
         text = $col.text();

         return text.replace('"', '""'); // escape double quotes

         }).get().join(tmpColDelim);

         }).get().join(tmpRowDelim)
         .split(tmpRowDelim).join(rowDelim)
         .split(tmpColDelim).join(colDelim) + '"',*/
            table1 = $('#example-table').tableToJSON(),
            csv=JSON.stringify(table1),




        // Data URI
            csvData = 'data:application/json;charset=utf-8,' + encodeURIComponent(csv);

        $(this)
            .attr({

                'download': filename,
                'href': csvData,
                'target': '_blank'
            });
    }

    // This must be a hyperlink
    $(".export").on('click', function (event) {
        // CSV

        exportTableToCSV.apply(this, [$('#dvData>table'), 'export.json']);

        // IF CSV, don't do event.preventDefault() or return false
        // We actually need this to be a typical hyperlink
    });
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    $("#importButton").click(function(){
        var request;
        if(window.XMLHttpRequest)
        {
            request=new XMLHttpRequest();

        }
        else
        {
            request=new ActiveXObject('Microsoft.XMLHTTP');
        }
        request.open('GET','data.json');
        request.onreadystatechange=function(){
            if((request.readyState==4 ) && (request.status==200))
            {
                var item=JSON.parse(request.responseText);
                console.log(item);
                var output='<ul>';
                for(var key in item)
                {
                    output+='<li>'+item[key][0].firstName+ '</li>';
                    output+='<li>'+item[key][1].firstName+ '</li>';
                    output+='<li>'+item[key][2].firstName+ '</li>';
                   // document.getElementById('update').innerHTML=output;
                }
                output+='</ul>';
                document.getElementById('update').innerHTML=output;
            }
        }

        request.send();
    });
=======

>>>>>>> 7bed89d4f14fc21d49155e46c80c554ab012e6e5
});

function addOption(selectbox,text,value )
{var optn = document.createElement("OPTION");
optn.text = text;
optn.value = value;
selectbox.options.add(optn);
}

function loadForQuestion()
{
  loadLanguages('qlanguage');
  loadClasses('qclass');
}

var $plansHolders = $('#section1, #section2').hide();
$('#section1').show();
$('#section2').hide();
$('.formsSwitch').click(function () {
    var href = $(this).attr('href');
    console.log(href);
    $plansHolders.hide();
    console.log(href);
    $(href).show();
})