function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
function WriteToFile( count, id)
            {
                var s = new File("data/"+id+".txt");
                s.open();
                s.write(count);
                s.close();
             }
function readTextFile(id)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "data/"+id+".txt", false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status == 404)
            {
                WriteToFile( ""+1 , id);
            }
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                rawFile.close();
                WriteToFile( ""+(Number(allText)+1) , id);
            }
        }
    }
    rawFile.send(null);
}
var id = getUrlVars()["id"];
readTextFile(id);

