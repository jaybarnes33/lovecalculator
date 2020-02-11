function checkloveper(){

 var name = document.getElementById('name').value;
 var lname = document.getElementById('lovename').value;

 if(name == ""){
  alert('Please enter your name');
 }else if (name.length <=2 ) {
  alert('Minimum name length is 3')
 }else if(!isNaN(name)){
  alert('Numbers are not allowed');
 }

 else if(lovename == ""){
  alert('Please enter your love name');
}else if (lovename.length <=2 ) {
  alert('Minimum name length is 3')
 }else if(!isNaN(lname)){
  alert('Numbers are not allowed');
 }
 else{
 var lovdata = (Math.random() * 100)+1;
 lovdata = Math.floor(lovdata);
 document.getElementById('lovevalue').value = lovdata + "%";
 }

}
