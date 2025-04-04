
"use client";
import React from 'react'
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from 'react-hot-toast';



function CreateForm() {


    const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [salary, setSalary] = useState("");
      const [days, setDays] = useState("");
    
      const [loading, setLoading] = useState(false);
    
      const router = useRouter();

      

      const handleSubmit = async(e) =>{
        try{
         e.preventDefault();
         setLoading(true);
         console.log({name, email, salary, days})
         const response = await fetch('/api/create', {
          method: "POST",
          headers:{
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            salary,
            days
          }),
         });

         const data = await response.json();
         console.log(data);
         if(!response.ok){
          toast.error(data.err);
          setLoading(false);
         }else{
          toast.success(data.success);
          router.push('/team');
         }
        }catch(err){
            console.log(err);
            setLoading(false);
        }

      }
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Add Employees
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm/6 font-medium text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm/6 font-medium text-gray-900">
                  Salary
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="salary"
                  name="salary"
                  type="text"
                  required
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm/6 font-medium text-gray-900">
                  Days of Work
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="days"
                  name="days"
                  type="text"
                  required
                  value={days}
                  onChange={(e) => setDays(e.target.value)}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading || !name || !email || !salary || !days}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {loading ? "Please Wait..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateForm;
