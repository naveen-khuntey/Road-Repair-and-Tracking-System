import React from 'react'
import { Link } from 'react-router-dom';
export default function Admin() {
  const data = [
    {
      id: 1,
      name: "Check Resource",
      link: "/"
    },
    {
      id: 2,
      name: "Update Resource",
      link: "/"
    },
    {
      id: 3,
      name: "Repair Schedule",
      link: "/"
    },
    {
      id: 4,
      name: "Repair Work",
      link: "/"
    },
    {
      id: 5,
      name: "Statistics",
      link: "/"
    }
  ]
  return (
    <div className="flex justify-center gap-10 items-center mt-11 flex-wrap">
      {
        data.map((item) => (
          <button key={item.id} className="hover:bg-blue-500 w-[200px] h-[150px] bg-blue-700 text-white font-bold py-2 px-4 rounded m-2">
            <Link to={item.link}>{item.name}</Link>
          </button>
        ))
      }
    </div>
  )
}
