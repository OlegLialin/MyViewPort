var d = new Date();


var month=new Array("Jan","Feb","Mar","Apr","May","June",
"July","Aug","Sept","Oct","Nov","Dec");

document.write(d.getDate()+ " " + month[d.getMonth()]
+ " " + d.getFullYear());