import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../store/itemSlice";

const ItemCard = () => {
  const items = useSelector(state => state.itemsArr)
  const dispatch = useDispatch()
  
  
 
 
  return (
    // items.length== 0  ? <>true</> : <>false</>
    <>

<div class="flex flex-col bg-green-500">
  <div class="-m-1.5 overflow-x-auto">
    <div class="p-1.5 min-w-full inline-block align-middle">
      <div class="overflow-hidden">
        <table class="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-white uppercase">Website Name</th>
              <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-white uppercase">Email</th>
              <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-white uppercase">Password</th>
              <th scope="col" class="px-6 py-3 text-end text-xs font-medium text-white uppercase">Action</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            {items.map((item) => (
        // <div className=" w-full h-fit bg-gr-500 px-4 text-white font-medium grid grid-cols-4 grid-rows-1 text-xl " 
        // key={item.id} >
        //   <h1 > {item.website}</h1>

        //   <h1>{item.email}</h1>

        //   <h1>{item.password}</h1>
        //   <button onClick={()=>  dispatch(removeItem(item.id)) }
        //   >Remove</button>
        // </div>


            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white"> {item.website} </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-white"> {item.email} </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{item.password}</td>
              <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                onClick={()=>  dispatch(removeItem(item.id)) }
                >Delete</button>
              </td>
            </tr>
      ))
    }

 
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

        
      

    </>
  );
};

export default ItemCard;
