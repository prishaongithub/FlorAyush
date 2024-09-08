import React,{ useState } from 'react';
import './App.css';
import { Helmet } from 'react-helmet';

const App = () => {
  const [login, setLogin] = useState("Student");

  const handleLoginChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === "/login/student") {
      setLogin("Student");
    } else if (selectedValue === "/login/admin") {
      setLogin("Admin");
    } else {
      setLogin("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <Helmet>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
        <title>FlorAyush</title>
      </Helmet>

      {/* Navbar */}
      <header class="text-white bg-black body-font sticky z-50 shadow-lg border-b border-gray-700">
        <div class="container mx-auto flex flex-wrap p-5 md:flex-row items-center navbar-mobile">
            <a href="http://localhost:3000/" class="flex title-font font-medium items-center text-white mb-1 md:mb-0">
                <img  src="https://images.unsplash.com/photo-1724688901449-ddec7f4ba207?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufD" alt="P.I.F.S Logo" class="w-12 h-12 mr-2" />
                <span class="text-xl mt-1 text-center">FlorAyush</span>
            </a>
            {/* <!-- Hamburger menu button for small screens --> */}
            <button id="menu-btn"
                class="inline-flex items-center text-white bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded md:hidden ml-auto">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
            {/* <!-- Desktop Menu --> */}
            <nav
                class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center hidden md:flex">
                <a href="http://localhost:3000/#faculty" class="mr-5 hover:text-indigo-400">About</a>
                <a href="http://localhost:3000/members" class="mr-5 hover:text-indigo-400">FloraExplore</a>
                <a href="http://localhost:3000/stats" class="mr-5 hover:text-indigo-400">Mentors</a>
                <a href="http://localhost:3000/events" class="mr-5 hover:text-indigo-400">BuyFlora</a>
                {/* <!-- <a href="http://localhost:5173" class="mr-5 hover:text-indigo-400">Login</a> --> */}
            </nav>
            <div class="hidden md:flex pr-6">
              <a href="http://localhost:5173/" class="hover:text-indigo-400">
              <button class="bg-gray-700 hover:bg-black hover:text-indigo-500 flex items-center justify-center text-center p-2 w-28 rounded-lg">
                Login
              </button>
            </a>
              
        </div>
        {/* <!-- Mobile Menu --> */}
        <div id="mobile-menu" class="md:hidden flex flex-col items-center hidden bg-gray-800 text-white">
            <a href="http://localhost:3000/#faculty"
                class="py-2 hover:text-indigo-400">Placement Faculty</a>
            <a href="http://localhost:3000/members"
                class="py-2 hover:text-indigo-400">Members</a>
            <a href="http://localhost:3000/stats"
                class="py-2 hover:text-indigo-400">Placement Stats</a>
            <a href="http://localhost:3000/events"
                class="py-2 hover:text-indigo-400">Events</a>
            <select name="login-select-mobile" id="login-select-mobile" class="bg-gray-800 hover:bg-gray-700 text-white mt-2">
                <option disabled selected hidden value="">Login</option>
                <option value="">As Student</option>
                <option value="">As Admin</option>
            </select>
        </div>
        </div>
    </header>

      {/* Login Form Section
      <div className="relative">
            <select
              name="login-select"
              id="login-select"
              className="bg-gray-800 mt-10 mb-14 px-6 py-2 text-2xl  hover:bg-gray-700 text-white rounded py-1 px-3 focus:outline-none"
              onChange={handleLoginChange}
              defaultValue="">
              <option value="/login/student">As Student</option>
              <option value="/login/admin">As Admin</option>
            </select>
          </div> */}
      <section className="flex-grow flex items-center justify-center text-gray-400">
        <div className="w-full max-w-lg px-6 pt-4 pb-8 bg-gray-900 ring-gray-900/5 sm:rounded-xl sm:px-10">
          <h1 className="text-3xl font-bold text-center mb-8">Login</h1>
          <form className="flex flex-col items-center">
          <div className="relative mt-6 w-full">
            <input
            type="text"
            name="User_Id"
            id="User_Id"
            placeholder="User Id"
            className="h-12 w-full border-2 border-gray-300 rounded-full px-4 py-2 text-gray-800 focus:border-gray-500 focus:outline-none text-center"
            />
        </div>
        <div className="relative mt-6 w-full">
          <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className="h-12 w-full border-2 border-gray-300 rounded-full px-4 py-2 text-gray-800 focus:border-gray-500 focus:outline-none text-center"
        />
        </div>
        <div className="my-6">
          <button
          type="submit"
          className="w-60 rounded-full bg-black px-4 py-4 text-white hover:bg-gray-800 focus:bg-gray-600 focus:outline-none"
          >
          Submit
          </button>
          <p>     Dont have an account? <a> Sign in</a></p>
        </div>
      </form>
    </div>
    </section>
    </div>
  );
};

export default App;