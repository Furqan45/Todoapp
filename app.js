function add(){ 
    var val = document.getElementById("val");
    var list = document.getElementById("list");
    var li = document.createElement("LI");
    var mybr = document.createElement("BR");
    var btn = document.createElement("BUTTON");
    var text = document.createTextNode(val.value);
    var delbtn = document.createTextNode("Delete");
    var edit = document.createTextNode("Edit");
    var btn2 = document.createElement("BUTTON");
 
    list.appendChild(li).appendChild(text);
    list.appendChild(mybr);
    list.appendChild(mybr);
    li.appendChild(btn).appendChild(delbtn);
    li.id="myli"
    btn.id="delbtn";
    btn.onclick= function deletee(){ document.getElementById("delbtn").parentElement.remove()};			
    li.appendChild(btn2).appendChild(edit);
   
    btn2.id="edit"
    
    btn2.onclick= function Edit(){
    var newuser = prompt("Edit your Todo");
    document.getElementById("delbtn").parentElement.innerHTML = newuser;
    li.appendChild(btn).appendChild(delbtn);
    li.appendChild(btn2).appendChild(edit);
    };	

    val.value ="";
        
  };