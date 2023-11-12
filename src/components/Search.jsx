import React from 'react'

export const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder='Find A User'/>
      </div>
      <div className="userChat">
        <img src="https://images.pexels.com/photos/2773977/pexels-photo-2773977.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
        <div className="userChatInfo">
          <span>John</span>
        </div>
      </div>
    </div>
  )
}
