(function(){
    function dataUpload(data,tag){
        var table_row=document.createElement("tr");
        for(let index=0;index<5;index++){
            var row=document.createElement(tag);
            row.appendChild(document.createTextNode(data[index]));
            table_row.appendChild(row);
    
        }
        return table_row;
    
    }
    
    document.body.style = "display: flex;justify-content: center;align-items: center;height: 100vh;";
    var Table=document.createElement("table");
    var tablehead=document.createElement("thead");
    var tablebody=document.createElement("tbody");
    Table.setAttribute("border","2");
    tablebody.setAttribute("class","table table-hover")
    Table.appendChild(tablehead);
    Table.appendChild(tablebody);
    tablehead.appendChild(dataUpload(["Name","Age","DOB","Email","Company"],"th"));
    tablebody.appendChild(dataUpload(["XYZ","90","dd-mm-yyyy","example@sample.com","Gemini"],"td"));
    tablebody.appendChild(dataUpload(["XYZ","90","dd-mm-yyyy","example@sample.com","Gemini"],"td"));
    tablebody.appendChild(dataUpload(["XYZ","90","dd-mm-yyyy","example@sample.com","Gemini"],"td"));
    tablebody.appendChild(dataUpload(["XYZ","90","dd-mm-yyyy","example@sample.com","Gemini"],"td"));
    tablebody.appendChild(dataUpload(["XYZ","90","dd-mm-yyyy","example@sample.com","Gemini"],"td"));
    document.body.appendChild(Table);
})();