let faqbtn = Array.from(document.querySelectorAll('.Icon'));
let faqAns = Array.from(document.querySelectorAll('.answer'))

faqbtn.map((e,i)=>{
    e.addEventListener("click",function()
    {
        faqAns[i].classList.toggle('hidden');
        f.style.transition = "all 3s ease";
        console.log(e.src);

    });
});




