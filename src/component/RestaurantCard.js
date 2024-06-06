import React  from 'react'


//props i am getting from my main component"BODY.JS" in body component there is all the data available
const RestaurantCard = (props) => {

//i am constructing props data
  const {resData}=props;
  
  
 
  
  return (
    //from line number 27 to 30 i am getting this "info" keyword from "LIVE API"
   
    <div className=" bg-[#f0f0f0]  w-[250px] m-[20px] hover:bg-gray-300">
   <div>
       <img className=" h-[200px] w-[250px] p-4 rounded-2xl" alt='img-logo' src={ "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId
      }
     
      ></img>
      
      </div>
     <div className="w-[250px]">
       
    
       <h3 className="font-bold py-4 text-lg">{resData.info.name}</h3>
       <h5 className="break-words">{resData.info.cuisines.join(",")}</h5>
       <h4 className='font-bold'>{resData.info.costForTwo}</h4>
       <h4 className="bg-green-400 w-12 m-auto rounded-sm">⭐{resData.info.avgRating}</h4>
       </div>
     
    </div>
   
   
  )
}

export default RestaurantCard