"use strict";

// Declare and Initialize data types
const region1 = [1540, 1130, 1580, 1105];
const region2 = [2010, 1168, 2305, 4102];
const region3 = [2450, 1847, 2710, 2391];
const region4 = [1845, 1491, 1284, 1575];
const region5 = [2120, 1767, 1599, 3888];


let q1Total=0;
let q2Total=0;
let q3Total=0;
let q4Total=0;

let region1Total =0;
let region2Total =0;
let region3Total =0;
let region4Total =0;
let region5Total =0;

let totalSales=0;


//Total Sales by Quarter
document.write('<h2>Sales by Quarter</h2>');

q1Total += region1[0]+region2[0]+region3[0]+ region4[0]+ region5[0];
document.write('Q1: $' + q1Total);
document.write('<br>');

q2Total += region1[1]+region2[1]+region3[1]+ region4[1]+region5[1];
document.write('Q2: $' + q2Total);
document.write('<br>');

q3Total += region1[2]+region2[2]+region3[2]+ region4[2]+region5[2];
document.write('Q3: $' + q3Total);
document.write('<br>');

q4Total += region1[3]+region2[3]+region3[3]+ region4[3]+region5[3];
document.write('Q4: $' + q4Total);
document.write('<br>');


//Total sales by region
document.write('<h2>Sales by Region</h2>');

for(let i =0; i< region1.length; i++ ){
    region1Total += region1[i];
        
    }
document.write('Region 1: $' + region1Total);
document.write('<br>');


for(let i =0; i< region2.length; i++ ){
    region2Total += region2[i];
        
    }
document.write('Region 2: $' + region2Total);
document.write('<br>');


for(let i =0; i< region3.length; i++ ){
    region3Total += region3[i];
        
    }
document.write('Region 3: $' + region3Total);
document.write('<br>');


for(let i =0; i< region4.length; i++ ){
    region4Total += region4[i];
        
    }
document.write('Region 4: $' + region4Total);
document.write('<br>');


for(let i =0; i< region5.length; i++ ){
    region5Total += region5[i];
        
    }
document.write('Region 5: $' + region5Total);
document.write('<br>');

//Calculate total company sales for the year
document.write('<h2>Total Sales</h2>');
totalSales = q1Total+q2Total+q3Total+q4Total;
document.write('$'+totalSales);
document.write('<br>');