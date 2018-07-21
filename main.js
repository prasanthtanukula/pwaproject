function loadjson(file,callback){
  var x =new XMLHttpRequest();
x.overrideMimeType("application/json");
x.open("GET",file,true);
x.onreadystatechange=function(){
  if(x.readyState===4 && x.status=="200"){
    callback(x.responseText);
  }
};
x.send(null);
}

loadjson("data.json",function(text){
  var data = JSON.parse(text);
  console.log(data);
  basics(data.details);
  careerinfo(data.career);
  education(data.education);
  keyskills(data.keyskills);
})

var child1=document.querySelector(".child1");
 function basics(det){
var image = document.createElement("img");
image.src=det.image;
child1.appendChild(image);
var name=document.createElement("h3");
name.textContent=det.name;
child1.appendChild(name);
var phoneno=document.createElement("e");
phoneno.textContent=det.phoneno;
child1.appendChild(phoneno);
var email=document.createElement("a");
email.href="mailto:rakeshmunagala26@gmail.com";
email.textContent=det.email;
child1.appendChild(email);
var address=document.createElement("h2");
address.textContent="address:SRKR engineering college";
child1.appendChild(address);
 var hr=document.createElement("hr");
 child1.appendChild(hr);
}
var child2=document.querySelector(".child2");
function careerinfo(info1){
  var career=document.createElement("h2");
  career.textContent="careerobjective";
  child2.appendChild(career);

  var hr=document.createElement("hr");
  child2.appendChild(hr);

  var careerinfo=document.createElement("p");
  careerinfo.textContent=info1.info;
  child2.appendChild(careerinfo);
}
}
 function education(edu){
   var ed = document.createElement("h2");
   ed.textContent="education qualification:";
   child2.appendChild(ed);

   var hr=document.createElement("hr");
   child2.appendChild(hr);

   for(i=0;i<edu.length;i++){
     var deg = document.createElement("h4");
     deg.textContent=edu[i].degree;
     child2.appendChild(deg);

     var ul=document.createElement("ul");
     var li=document.createElement("li");
     li.textContent=edu[i].institute;
     ul.appendChild(li);
     child2.appendChild(ul);

     var ul=document.createElement("li");
     li.textContent=edu[i].date;
     ul.appendChild(li2);
     li.appendChild(ul);
   }
 }
}
function skillsset(skilldata){
  var sk=document.createElement("h2");
  sk.textContent="technical skills";
  child2.appendchild(sk);


  var hr=document.createElement(hr);
  child2.appendChild(hr);
  var skilltable=document.createElement("table");
  skilltable.border="1";
  child2.appendChild(skilltable);

  tabledata="";
    for(i=0;i<skilldata.length;i++){
      tabledata+="<tr<td>"+skilldata[i].title+"</td><td>"+skilldata[i].info+"</td><td>";

    }
    tabledata.innerHTML=skilldata;
}
