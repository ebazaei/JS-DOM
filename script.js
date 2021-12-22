// const body = document.querySelector('body'); // you can also use 'document.body'
// const newParagraph = document.createElement('p');
// newParagraph.innerText = 'This paragraph will be added to the body!';
// newParagraph.style.background = 'red';
// body.appendChild(newParagraph);




// *** dastresi ba ID
//gereftane etelaat az mohtaviate html va chap an
/* var myElement = document.getElementById("intro");

document.getElementById("demo").innerHTML = 
"The text from the intro paragraph is " + myElement.innerHTML;

console.log(myElement.innerHTML)

//mesale 2
var myElement2 = document.getElementById('manbae');
console.log(myElement2.innerHTML)
document.getElementById('chap').innerHTML ='test A: ' + myElement2.innerHTML;

document.getElementById('chap2').innerHTML ='test B: ' + myElement2.innerHTML;
*/



// *** dastresi ba TAG
var tagManbae = document.getElementsByTagName("p");

//این دستور کل تک های پاراگراف صفحه را میگیرد و چاپ میکند
/*function loopAllTagsP(){
    for(i=0; i < tagManbae.length; i++){
        document.write(tagManbae[i].innerHTML);
    }
}
loopAllTagsP()
*/


//dastresi be yek paragraf dar yek id

/*var x = document.getElementById("main");
var y = x.getElementsByTagName("p");
document.getElementById("demo").innerHTML = 
'The first paragraph (index 0) inside "main" is: ' + y[0].innerHTML;
*/

//dastresi be class
/*var x = document.getElementsByClassName("intro");
document.getElementById("demo").innerHTML = 
'The first paragraph (index 0) with class="intro": ' + x[0].innerHTML;
*/

//در مثال زیر می خواهیم تمام <p> هایی را پیدا کنیم که در آن ها "class="intro باشد:

/*var x = document.querySelectorAll("p.intro");
document.getElementById("demo").innerHTML = 
'The first paragraph (index 0) with class="intro": ' + x[0].innerHTML;*/

//دسترسی از طریق مجموعه اشیاء HTML
//در مثال زیر می خواهیم از بین فرم های ، فرمی را پیدا کنیم که "id="frm1 باشد و مقادیر مختلف آن را نشان دهیم
function myFunction() {
    var x = document.forms["frm1"];
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
      text += x.elements[i].value + "<br>";
    }
    document.getElementById("demo").innerHTML = text;
  }

