// Length
let str="Moola Maheswar Reddy";
let length=str.length;
console.log("Length ="+length);

// charAt
let str1="Moola Maheswar Reddy"
let char=str.charAt(7);
console.log("Char At ="+char);

//charcodeAt
let str2="Moola Maheswar Reddy";
let char1=str.charCodeAt(9);
console.log("Char code ="+char1);

//at
let str3="Moola Maheswar Reddy"
let char2=str3.at(6);
console.log("At = "+char2);

// String
let str4="Moola Maheswar Reddy";
let char3=str4[8];
console.log("String ="+char3);

//slice
let str5="Moola Maheswar Reddy";
let char4=str5.slice(3,9)
console.log("Sliced = "+char4);

// substring
let str6="Moola Maheswar Reddy";
let char5=str5.substring(2,7);
console.log("Substring = "+char5);

//substr
let nam="Moola Maheswar Reddy";
let sub=nam.substr(0,6)
console.log("Sub Str = "+sub);

// Uppercase
let nam1="moola mahewar reddy"
let upper=nam1.toUpperCase()
console.log("Upper Case : "+upper);

//LowerCase
let nam2="MOOLA MAHESWAR REDDY"
let lower=nam2.toLowerCase();
console.log("Lower Case : "+lower);

//Concatenation
let m="Moola"
let n="Reddy"
let concatenated=m.concat("Mahewar",n);
console.log("Concatenation : "+concatenated);

//Trim
let t1="Moola Maheswar Reddy";
let tr=t1.trim()
console.log("Trim : "+tr);

// Trim Start
let t2="     Moola Maheswar Reddy";
let tr1=t2.trimStart()
console.log("Trim start : "+tr1);

// Trim End
let t3="Moola Maheswar Reddy     ";
let tr2=t3.trimEnd()
console.log("Trim ednd : "+tr2);

// Pad Start
let p1="Moola Maheswar Reddy";
let padding=p1.padStart(8,"----->");
console.log("Padstart : "+padding);

// Pad End
let p2="Moola Maheswar Reddy";
let padd=p2.padEnd(5,"<----")
console.log("Pad End : "+padd);

//repeat
let r="Mahesh Maaha"
let re=r.repeat(5);
console.log("Repeat : "+re);

//replace
let r1="Mahesh Reddy"
let rp=r1.replace("Reddy","Maaha");
console.log("Replace : "+rp);

//Replace All
let r2="Maheswar Reddy";
let rpa=r2.replaceAll("e","r")
console.log("Replace All : "+rpa);

// Spilt
let s="Maheswar Reddy";
let sp=s.split("mahe",5);
console.log("Split : "+sp);


// test code

















