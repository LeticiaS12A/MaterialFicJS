import React from 'react'
import './App.css'

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
document.documentElement.classList.toggle(
  "dark",
  localStorage.theme === "dark" ||
    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
);
// Whenever the user explicitly chooses light mode
localStorage.theme = "light";
// Whenever the user explicitly chooses dark mode
localStorage.theme = "dark";
// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem("theme");

export default function App() {

  return (
    <div>
        <div class="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
          <div>
            <span class="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
              <svg class="h-6 w-6 stroke-white">
                
              </svg>
            </span>
          </div>
          <h3 class="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight ">Writes upside-down</h3>
          <p class="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
            The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
          </p>
        </div>
        
        <h1 className='text-3x1 font-bold underline bg-sky-400'>Taiwind</h1>
    </div>
  )

}
