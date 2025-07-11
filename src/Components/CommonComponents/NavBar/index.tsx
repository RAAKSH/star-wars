import React,{ useState} from "react";


export   const NavBar=()=>{
    const[isOpen,setIsOpen]= useState(false);

  

    return (
        <nav className="bg-white shadow-md">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
        <div className="text-xl font-bold">MyLogo</div>

        <div className="sm:hidden">
         <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >

            <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >

              {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
                </svg>
                </button>
                </div>

                <div className={`flex-col sm:flex-row sm:flex ${isOpen ? 'flex' : 'hidden'} sm:items-center gap-4`}>

                 <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>


        </div>
        </div>
        </div>
        </nav>
    )
    
}