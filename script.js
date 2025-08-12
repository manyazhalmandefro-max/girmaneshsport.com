// smooth scroling for ancer tags links
document.querySelectorAll('a[herf^="#"]').forEach((anchor) =>{
    anchor.addEventListener("click",function(e){
        e.preventdefault();
        document.querySelector(this.getAttribute("href")).scrollIntoview({

        })
    });
});


























