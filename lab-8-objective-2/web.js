var img=[];
var i=0;
img[0]="src/img1.jpg";
img[1]="src/img2.jpeg";
img[2]="src/img3.jpg";

function SS(){
    if(i==img.length){
        i=0;
    }
    document.slide.src=img[i];
    i++;
    setTimeout("SS()",2000);
}
window.onload=SS;