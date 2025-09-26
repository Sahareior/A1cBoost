import React, { useEffect } from 'react';

const HelpNSupport = () => {

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])


  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 py-12 bg-gray-50">
      <h2 className="max-w-[771px] text-center font-bold md:text-5xl text-3xl leading-[62px] 
                     bg-gradient-to-r from-[#008ae2] via-[#00b5ca] to-[#f6c643] 
                     bg-clip-text text-transparent drop-shadow-md">
       Help & Support
      </h2>

      <p className="mt-6 text-xl text-gray-700 text-center max-w-2xl">
       Have a question or facing an issue? Please fill out the form below and our team will get back to you as soon as possible.
      </p>

      <div className="mt-8 w-full max-w-xl flex flex-col gap-4">
        <input
          type="email"
          placeholder="Enter your email address"
          className="w-full px-4 py-3 border-2 border-[#0094FF] rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-[#008AE2]"
        />
        <textarea
         rows={5}
          placeholder="Enter your email address"
          className="w-full px-4 py-3 border-2 border-[#0094FF] rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-[#008AE2]"
        />

        <button
          className="w-full py-3 rounded-lg text-white text-lg font-semibold bg-[#008AE2] hover:bg-[#0070C0] transition-all duration-300"
        >
          Submit Request
        </button>
      </div>
    </div>
  );
};

export default HelpNSupport;
