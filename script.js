
// const obseverr = new IntersectionObserver((e)=>{
//     e.forEach((entry)=>{
//         console.log(entry);
//        if(entry.isIntersecting){
//            entry.target.classList.add('show');
//        }else{
//         entry.target.classList.remove('show');
//        }
//     });
// });

//  const hiddnElement = document.querySelectorAll('.hiddn');
// hiddnElement.forEach((el) => obseverr.obsever(el));


var expandDiv = document.getElementById("expand");
var speed = 5;

function expanding() {
  var scrolltop = window.pageYOffset;
  var scrollAndSpeed = (scrolltop / speed);
  expandDiv.style.width = Math.min(Math.max(scrollAndSpeed,10),50) + "%";
}

window.addEventListener('scroll', function() { 
  requestAnimationFrame(expanding()); 
}, false);

