function myFunction(id) {
    const x = document.getElementById(id);
    if (x.className.indexOf("show") == -1) {
      x.className += " show";
    } else { 
      x.className = x.className.replace(" show", "");
    }
  }



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




