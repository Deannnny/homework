function changeimg1(){
	document.getElementById('mainlink').style.backgroundImage="url(img/team_dim.jpg)";
}
function changeimg2(){
	document.getElementById('mainlink').style.backgroundImage="url(img/group_dim.jpg)";
}
function changeimg3(){
	document.getElementById('mainlink').style.backgroundImage="url(img/pro_dim.jpg)";
}
function changeimg4(){
	document.getElementById('mainlink').style.backgroundImage="url(img/partner_dim.jpg)";
}
function changeimg5(){
	document.getElementById('mainlink').style.backgroundImage="url(img/recruit.jpg)";
}
function changeback(){
	document.getElementById('mainlink').style.backgroundImage="url(img/index_dim.jpg)";
}
function changewhite1(){
	document.getElementById('lk1').style.backgroundColor="#FFF";	
	
	
}	
function changewhite2(){
	document.getElementById('lk2').style.backgroundColor="#FFF";	
	
}	
function changewhite3(){
	document.getElementById('lk3').style.backgroundColor="#FFF";	
	
}	
function changewhite4(){
	document.getElementById('lk4').style.backgroundColor="#FFF";	
	
}	
function changewhite5(){
	document.getElementById('lk5').style.backgroundColor="#FFF";	
	
}	
function changewhiteback1(){
	document.getElementById('lk1').style.backgroundColor="";
}
function changewhiteback2(){
	document.getElementById('lk2').style.backgroundColor="";
}
function changewhiteback3(){
	document.getElementById('lk3').style.backgroundColor="";
}
function changewhiteback4(){
	document.getElementById('lk4').style.backgroundColor="";
}
function changewhiteback5(){
	document.getElementById('lk5').style.backgroundColor="";
}
function yellow(){
	document.getElementById('yellow').style.height="70px";	
	document.getElementById('point').style.display="none";
}
function yellowback()
{
	document.getElementById('yellow').style.height="7px";
	document.getElementById('point').style.display="";	
}
var count = 0;
function onClick(){
  count ++;
  if (count %2 != 0){
    getdown();
  }else {
     getup();
  }
}
function getdown(){
	document.getElementById('mainlogo').style.display="none";
	document.getElementById('ul').style.display="none";	
	document.getElementById('mainlink').style.height="50%";
	document.getElementById('cover').style.height="93%";	
	document.getElementById('down').style.top="78%";
	document.getElementById('dp').style.top="55%";
}
function getup(){
	document.getElementById('mainlogo').style.display="";
	document.getElementById('ul').style.display="";	
	document.getElementById('mainlink').style.height="100%";
	document.getElementById('cover').style.height="93%";	
	document.getElementById('down').style.top="89%";
	document.getElementById('dp').style.top="100%";
	
}