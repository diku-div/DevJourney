let b = document.body
let table = document.createElement("table")
table.id="table1"
b.appendChild(table);

// row 1 table1
let row = document.createElement("tr")
table.appendChild(row)


let column1 = document.createElement("td")
column1.textContent = "Item"
row.appendChild(column1)

let column2 = document.createElement("td")
column2.textContent = "Quantite"
row.appendChild(column2)

let column3 = document.createElement("td")
column3.textContent = "Prix"
row.appendChild(column3)

let column4 = document.createElement("td")
column4.className = 'montant'
column4.textContent = "Montant"
row.appendChild(column4)

// rows 2 montont totale 

let row2 = document.createElement("tr")
table.appendChild(row2)

let column5 = document.createElement("td")
column5.textContent = "totale facture"
column5.colSpan = 3
row2.appendChild(column5)

let column6 = document.createElement("td")
column6.textContent= totale
row2.appendChild(column6)

var totale = 0 ;
const elements = document.querySelectorAll(`.montant`);


document.getElementById("button1").onclick = function () {

    var a1 = document.getElementById("input1").value
    var a2  = document.getElementById("input2").value
    var a3 = document.getElementById("input3").value

let tr = table.insertRow(1)
let td1 = tr.insertCell(0)
td1.textContent=a1
let td2 = tr.insertCell(1)
td2.textContent = a2
let td3 = tr.insertCell(2)
td3.textContent=a3
let td4 = tr.insertCell(3)
td4.textContent=a2*a3



totale = totale+(a2 * a3)
console.log(totale)
column6.textContent=totale;
}

document.getElementById("button2").onclick=function(){
    var choice = prompt("donner le nomber le line tu veus supprimier")
    //choice  = parseInt(choice,10);
    if (choice < 1 || choice >= table.rows.length-1){
      window.alert("the row is not corect ")
    }else{
        var selectindex = table.rows[choice];
        var cellvalue  = parseInt(selectindex.cells[3].innerText);
        console.log(cellvalue)
        console.log(totale)
         totale = totale - cellvalue;
         console.log(totale)
         column6.textContent=totale;
        table.deleteRow(choice)
    }
    

   
}
