import Link from "next/link"
import React, { useEffect, useState } from "react";
export default  function header(){
  return ( <div id="head1">
    <ul id="li">
        <li><button><Link href={"http://localhost:3001"}>Home</Link></button></li>
          <li><button><Link href={"http://localhost:3001/about"}>About Us</Link></button></li>
          <li><button><Link href={"http://localhost:3001/contact"}>Contact Us</Link></button></li>
          <li><button><Link href={"https://en.wikipedia.org/wiki/History_of_books"}>History</Link></button></li>
          </ul>
    
         <br /> <br />
       
     <div >
      <img id="img1"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyiUs3JVrkgu8PuQWGDrNp2EQp39i0LcsUDA&s" alt="loading...." />
     </div>
    
    <div id="intro" ><h1 id="para">Introduction:</h1>
    <h2 id="para2">Books are portals to diverse worlds, offering knowledge, entertainment, and inspiration. They transport readers through time and space, unraveling stories that shape minds and hearts. From classic literature to modern bestsellers, each book is a unique journey, blending imagination with reality. Whether for learning or leisure, books remain timeless companions in the quest for understanding and enjoyment.</h2></div>
    <br />
    <br />
   
   <div>
    <h1 id="sell1">Read Your Favourite Novels Online</h1>
   </div>
    <br /><br />
   <div id="img2">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRm0-a9PlVW9NG12DJehKY_sN2b9B89MW1hA&s" alt="Loading..." title="Peer-e-kamil novel by Umera Ahmed"  /> 
    <Link id="read-more" href={"https://drive.google.com/file/d/1Wqdlesxd_bteUF8EKZ9VevTZN6OE7dta/view"} target="_blank">Read Online</Link>
   </div>
   <div id="img3">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpGN3YZ33Ey5FjavLDmtWABJlvI1VjXFiZjA&s" alt="Loading..." title="Mushf novel by Umera Ahmed" height={200} /> 
    <Link id="read-more" href={"https://drive.google.com/file/d/1eH_qGUivzntBTa6PUzKyuA9MLuUm0nEq/view"} target="_blank">Read Online</Link>
   </div>
   <div id="img2">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo1WLhJbzKfa_jdKHzKCBXsUZ7kNvkkr3zdg&s" alt="Loading..." title="Novel jannat k pattay by numera Ahmed"   /> 
    <Link id="read-more" href={"https://drive.google.com/file/d/1nHC5-qSqao13hQ-89K-nDrzD-1MwywEq/view"} target="_blank">Read Online</Link>
   </div>

<div id="img4">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1BWMH_pspBoHm-ddYK2Cz5cR7tR0FEZiA7w&s" alt="Loading..." title="Novel jannat k pattay by numera Ahmed"   /> 
  <Link id="read-more" href={"https://drive.google.com/file/d/1_c35wzJGJ5fYnpizqMk5n1pZRC0gwbC8/view"} target="_blank">Read Online</Link>
</div>

<br /> <br />
    <br />
   
   <div id="sell2">
    <h1  >Read Your Favourite Urdu Poetry Online</h1>
   </div>
<br /><br /> 
<hr />
   <div id="img2">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi52Njhtw04V9nUC7eX7MWXwx1RbEXUr5W3Q&s" alt="Loading..." title="Kulyate Iqbal"  /> 
    <Link id="read-more" href={"https://archive.org/details/Kuliyat-e-Iqbalurdu/page/n7/mode/2up"} target="_blank">Read Poetry</Link>
   </div>
   <div id="img3">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLfTesxzAloiXa_DvZ9XCi5aNcgzdtWEU_pA&s" alt="Loading..." title="Deewane Galib" height={200} /> 
    <Link id="read-more" href={"https://archive.org/details/DeewanEGhalib_201212"} target="_blank">Read Online</Link>
   </div>
   <div id="img2">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo1WLhJbzKfa_jdKHzKCBXsUZ7kNvkkr3zdg&s" alt="Loading..." title="Novel jannat k pattay by numera Ahmed"   /> 
    <Link id="read-more" href={"https://drive.google.com/file/d/1nHC5-qSqao13hQ-89K-nDrzD-1MwywEq/view"} target="_blank">Read Online</Link>
   </div>

<div id="img4">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1BWMH_pspBoHm-ddYK2Cz5cR7tR0FEZiA7w&s" alt="Loading..." title="Novel jannat k pattay by numera Ahmed"   /> 
  <Link id="read-more" href={"https://drive.google.com/file/d/1_c35wzJGJ5fYnpizqMk5n1pZRC0gwbC8/view"} target="_blank">Read Online</Link>
</div>










  </div>
  
  )
  
}