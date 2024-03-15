const boxes=document.querySelectorAll('.box'); 
const title=document.getElementById('title').textContent;
const articleImg=document.getElementById('article-img').src;  
const paragraph=document.getElementById('important').textContent; 

window.addEventListener('scroll',() =>{
    const windowBottom = window.innerHeight /1.3;

    boxes.forEach(box=>{
        const boxTop =box.getBoundingClientRect().top; 
        
        if(boxTop<windowBottom){
            box.classList.add('show');
        }
    })
    
   
})


    const shortArticles=document.querySelector('#shortArticles');



 let articletitle=()=>{
    return (shortArticles.innerHTML=threeLastOneArticle.map((x)=>{
      let {title,link}=x;
      
      return `
      <p><a href="${link}">${title}<a></p>
      
      `
    }).join(""))
  };

  articletitle();