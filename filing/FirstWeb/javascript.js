/**
 * Created by waqas.yaseen on 8/26/14.
 */
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
            output+='<li>'+item[key].title+ '</li>';
            document.getElementById('update').innerHTML=output;
        }
        output+='</ul>';
        document.getElementById('update').innerHTML=output;
    }
}

request.send();