function check() {
  var p = document.getElementById('password').value;
  if(p == '1829') {
    window.location.replace("https://HTML-TEXTBOOK-FORMS.lolboilol.repl.co/chat.html");
  }else{
    document.getElementById('fail').innerHTML = "Please Try Again ";
  }
}

function insertmessage() {
  var n = document.getElementById('name').value + ':';
  var text = document.getElementById('text').value;
  if(localStorage.t1 == "") {
    localStorage.t1 = text;
  }else if(localStorage.t2 == ""){
    localStorage.t2 = text;
  }else if(localStorage.t3 == ""){
    localStorage.t3 = text;
  }else if(localStorage.t4 == ""){
    localStorage.t4 = text;
  }else if(localStorage.t5 == ""){
    localStorage.t5 = text;
  }else{
    localStorage.t5 = localStorage.t4;
    localStorage.t4 = localStorage.t3;
    localStorage.t3 = localStorage.t2;
    localStorage.t2 = localStorage.t1;
    localStorage.t1 = n + " " + text;
  }
  document.getElementById('1m').innerHTML = localStorage.t1;
  document.getElementById('2m').innerHTML = localStorage.t2;
  document.getElementById('3m').innerHTML = localStorage.t3;
  document.getElementById('4m').innerHTML = localStorage.t4;
  document.getElementById('5m').innerHTML = localStorage.t5;  
}

function oc() { 
  document.getElementById('load').innerHTML = "";
  document.getElementById('1m').innerHTML = localStorage.t1;
  document.getElementById('2m').innerHTML = localStorage.t2;
  document.getElementById('3m').innerHTML = localStorage.t3;
  document.getElementById('4m').innerHTML = localStorage.t4;
  document.getElementById('5m').innerHTML = localStorage.t5; 
}
