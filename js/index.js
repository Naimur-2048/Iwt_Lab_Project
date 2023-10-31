// All catagory api
const catagoryHandler = async()=>{
    const response = await fetch(' https://openapi.programming-hero.com/api/videos/categories')
    const data = await response.json()
      console.log(data);
    const tabContainer=document.getElementById('tab-container')
    
// forEach(()=>{

// })
    data.data?.forEach((catagory) => {
      console.log(catagory)
      const div=document.createElement('div')
    //   div.innerHTML = `  <a class="tab">${catagory.category}</a>`
    div.innerHTML=` <button  onclick="handleCatagoryId('${catagory.category_id}')"  class="btn btn-sm  hover:bg-red-500">${catagory.category}</button>`
      tabContainer.appendChild(div) 
      
    });

}

const handleCatagoryId=async(Id)=>{
  
      const res=await fetch(` https://openapi.programming-hero.com/api/videos/category/${Id}`)
      const dat=await res.json();
      // console.log(dat.data)
      const cardContainer=document.getElementById('card-container')
      cardContainer.innerHTML='';
    
      dat.data?.forEach((cardDetails) => {
        
        console.log(cardDetails)
        
         const hourContainerValue=cardDetails.others.posted_date;
        
          
          const hour=Math.floor(hourContainerValue/3600);
          const remainingSecond=hourContainerValue % 3600;
          const min= Math.floor(remainingSecond/60);
        
          
          
         
            const div = document.createElement('div');
            div.innerHTML=`
            
            <div class="card bg-base-100 shadow-xl">
            <div class="relative">
            <figure><img src="${cardDetails.thumbnail}" class="h-36" /></figure>
            <div class="absolute bottom-4 left-24">
            
            <p id="validity" class="text-white text-xs bg-black">${  hour +' '+ 'hrs'+' ' + min+ ' '+ 'min ago' } </p>
        </div>
        </div>
            <div class="card-body">
             
              <div class="flex items-center gap-2">


                <div class="avatar">
                    <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src="${cardDetails.authors[0]?.profile_picture
                      }" />
                    </div>
                  </div>
                  <div>
                    <p class="text-sm text-black font-bold">${cardDetails.title}</p>
                </div>
            </div>
                    <div class="ml-16">
                    <div class="flex items-center gap-2">
                    <h2 class="text-xs text-gray-500">
                    ${cardDetails.authors[0]?.profile_name
                    }

                        
                      </h2>
                      <div>  
                      ${cardDetails.authors[0].verified ? '  <img src="images/fi_10629607.svg" alt="">   ' :''}
                      </div>
                      </div>
                      <p>${cardDetails.others?.views
                      } views</p>
                    </div>
                  

              
              
            </div>
          </div>
            
            `
            cardContainer.appendChild(div)

      }

        )


    
    
        if(dat.data.length===0) {
      const notFound=document.getElementById('not-found')
      notFound.innerHTML='';
      const div=document.createElement('div')
      div.innerHTML=`  <div class="card w-full bg-base-100">
      <figure class="px-10 pt-10">
        <img src="images/Icon.png" alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="text-center mt-12">
        <p class="text-3xl text-gray-700 font-bold">Oops!! Sorry, There is no <br> Content here</p>
      </div>
    </div>
`  
 notFound.appendChild(div)


}
else{
  const notFound=document.getElementById('not-found')
  notFound.innerHTML='';
  
}






     
}
const sortId=document.getElementById('sort-id').addEventListener('click',function() {
   
//   const sortHandler = async()=>{
//     const response = await fetch(' https://openapi.programming-hero.com/api/videos/categories')
//     const data = await response.json()
//     console.log(data)
  
// }
}

)
catagoryHandler();
handleCatagoryId("1001")


