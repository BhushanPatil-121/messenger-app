'use client';

import * as React from 'react'
import { User } from "@prisma/client";

import UserBox from "./UserBox";
import { useState } from 'react'
interface UserListProps {
  items: User[];
}



const UserList: React.FC<UserListProps> = ({
  items,
}) => {

  const [valueforSearch, setvalueforSearch] = React.useState<string>("")
  const [listArray, setlistArray] = React.useState<User[]>([])
  const [found, setfound] = React.useState(true);
  function hangleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    let valuefor = e.target.value
    setvalueforSearch(valuefor)
  }
  const handleClick = () => {
    // console.log(valueforSearch)
    let filteredArray = items.filter((item) => item.name?.toLowerCase().startsWith(valueforSearch.toLowerCase()));
    setlistArray(filteredArray);
    // console.log(filteredArray);
    
    if (filteredArray.length==0) {
      setfound(false)
    }
   
  }
  return (
    <aside
      className="
        fixed 
        inset-y-0 
        pb-20
        lg:pb-0
        lg:left-20 
        lg:w-80 
        lg:block
        overflow-y-auto 
        border-r 
        border-gray-200
        block w-full left-0
      "
    >
      <div className="px-5">
        <div className="flex-col">
          <div
            className="
              text-2xl 
              font-bold 
              text-neutral-800 
              py-4
            "
          >
            <center>Search Your Friend</center>
          </div>
          <div>
            {/* add search bar */}
            {/* <div className="flex items-center "> */}
            <div className="flex border border-purple-200 rounded">
              <input
                type="text"
                name="searchid"
                id="seachid"
                placeholder='Search User Name ...'
                onChange={hangleInputChange}
                className="block w-full px-6 py-2 text-purple-700 bg-white border 
                rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none
                 focus:ring focus:ring-opacity-40"
              />
              <button className="px-2 text-white bg-purple-900 border-l rounded " onClick={handleClick}>
                Search
              </button>
            </div>
            {/* </div> */}


          </div>
        </div>
        {
          listArray.length > 0 ? 
          listArray.map((item) => (
            <UserBox
              key={item.id}
              data={item}
            />
          )): found?<></>:
          <center><div  className="
          text-2xl 
          font-bold 
          text-neutral-800 
          py-4
        " style={{width:"100%",marginTop:"40px",fontSize:"24px",textAlign:"center"}}>User Not Found !!</div></center>}
      </div>
    </aside>
  );
}

export default UserList;
