let descriptionCount = 0
let  authorCount = 0

function showMoreDescription(){
  descriptionCount+=1
  if(descriptionCount%2 !=0){ 
    document.getElementById("description").style.display="block";
    document.getElementById("descriptionlink").text="Show less";
  }
  else
  {
    document.getElementById("description").style.display="none"
    document.getElementById("descriptionlink").text="Show more"
  }
}

function showMoreAboutAuthor(){
  authorCount +=1
  if(authorCount%2 !=0)
  {
      document.getElementById("author").style.display="block"
      document.getElementById("authorlink").text="Show less";
  }
  else
  {
      document.getElementById("author").style.display="none"
      document.getElementById("authorlink").text="Show more";
  }
  
}
