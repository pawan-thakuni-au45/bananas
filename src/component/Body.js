import React, {  useState } from 'react'
import { useEffect } from 'react';
import RestaurantCard from './RestaurantCard.js';

//SHIMMER UI I AM USING --WHEN USER WILL COME TO MY PAGE THEN DATA WILL TAKE SOME TIME TO DISPLAY SO TO MAKE BETTER USER EXPERIENCE I WILL SHOW FAKE DATA
import Shimmer from './Shimmer.js';

import {RES_URL} from '../utils/constant.js'

const Body = () => {
    //THIS IS WHERE I WILL STORE ALL THE DATA ,GETTING FROM LIVE API
    const[restaurantList,setrestaurantList]=useState([])
   
    // I WILL STORE THOSE RESTAURANT IN IT WHOSE "RATING" IS GREATER THAN "4 OR 4.3"
    const [filterres,setFilterres]=useState([]);
    
// I WILL STORE RESTAURANT IN IT ,SO THAT WHEN USER WILL SEARCH BY NAME USER CAN GET ONLY THOSE RES
    const[searchText,setSearchText]=useState("")
    
  
    

//I DONT WANT  RECONCILIATION MY COMPONENT EVERY TIME REACT RE-RENDER AND I ALSO WANT FETCH DATA SO -FOR THAT I AM USING USEeFFECT
    useEffect(()=>{
      fetchData();
  },[]);

           const fetchData =async ()=>{
               const data= await fetch(
                //RES_URL coming from constant.js file "this is swiggy's live API"
                RES_URL
               );
                const jso=await data.json();
                console.log(jso);
               
               
                     setrestaurantList(jso?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
                     setFilterres(jso?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

                      
        


           }

           


           if(restaurantList?.length===0)
            {
              return(
                <Shimmer/>
              )
            }

          
           
  return (
    <div className=' m-0 w-full md:m-auto md:w-4/5 flex flex-col justify-center '>
    <div className='filter  m-0 w-full md:m-auto md:w-4/5 flex flex-col  justify-center'>
    <div className='flex  flex-col md:flex-row '>
    <div className='search m-4 p-4 border-black '>
    <input type="text" className='ser-box border-solid  border-black bg-gray-300' value={searchText} onChange={(e)=>{
      setSearchText(e.target.value); 
    }} />
    <button className="px-8 py-2 bg-green-100 m-4 rounded-3xl" onClick={()=>{
      const filteredRes=restaurantList.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
      setFilterres(filteredRes);
    }}>
    search
    </button>
 
    
    </div>
    <div className="px-1 py-1 bg-gray-100 my-12 p-4 rounded-lg hover:bg-red-400">
     <button className='filter-btn'  onClick={()=>{ const filterlist=restaurantList.filter((res) => res.info.avgRating > 4.3 );
        setFilterres(filterlist);
        
           
     }} >Top Rated Restaurants</button>
    
     </div>
     </div>
    
  
    <div className="search m-4 p-4 flex items-center">
    
   
   
    
 
    
     
    </div>
    
    </div>
    <div className="ml-[40px] flex flex-wrap bg-black-600 mt-2">

    {filterres.map((restaurant)=>(
          
          
          <RestaurantCard  resData={restaurant}/>
  ))}
    
       </div>
    </div>
  )
}

export default Body