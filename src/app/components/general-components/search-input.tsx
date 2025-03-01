import React from 'react'

const SearchInput = () => {
  return (
    <div className="flex gap-3 w-fit py-3 px-5 h-fit dark:bg-klightGrey bg-white  dark:text-white  rounded-xl">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </svg>

    <input
      type="text"
      className="bg-transparent outline-none"
      placeholder="search here..."
    />
  </div>
  )
}

export default SearchInput