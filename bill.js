
var q1qty,q2qty,p1price,p2price,total,r1,r2;
function display() {
	q1qty=document.getElementById("qty1").value
	p1price=document.getElementById("rate1").value
	q2qty=document.getElementById("qty2").value
	p2price=document.getElementById("rate2").value
	r1=p1price*q1qty;
    r2=p2price*q2qty;
    	total=r1+r2;
	document.getElementById("amount1").innerText=r1;
	document.getElementById("amount2").innerText=r2;
	document.getElementById("final").innerText=total;	
}


/*
function addRow() {         
    var itemInput = document.getElementById("item1"); 
    var qtyInput = document.getElementById("qty1"); 
    var rateInput = document.getElementById("rate1"); 
    var rowCount = table.rows.length; 
var row = table.insertRow(rowCount); 
    
} 
  
 
 let btnAdd = document.querySelector('button');
 let table = document.querySelector('table');

  let itemInput= document.querySelector('#item');                  
 let qtyInput=document.querySelector('#qty');
 let rateInput= document.querySelector('#rate');
 btnAdd.addEventListener('click',() => {
 	let item= itemInput.value;
 	let qty= qtyInput.value;
 	let rate=rateInput.value;

 	let template=`<tr>
 	<td>${item}</td>
 	<td>${qty}</td>
 	<td>${rate}</td>`;
 	table.innerHTML+=template;	

 });


 */








/*let pizza= 199;
let burger= 139;
let french_fries=129;
let pasta=179;

function lapTime() {
	let tot= pizza+burger;
	console.log(tot);
}
lapTime();*/

