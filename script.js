let faqbtn = Array.from(document.querySelectorAll('.Icon'));
let faqAns = Array.from(document.querySelectorAll('.answer'))

faqbtn.map((e,i)=>{
    e.addEventListener("click",function()
    {
        faqAns[i].classList.toggle('hidden');
        console.log(e.src);
            // e.src = "./assets/images/icon-minus.svg";

    });
});




