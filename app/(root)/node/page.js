import React from 'react'

const page = () => {
  return (
    <>
      <section className="flex items-center flex-col justify-center py-29 bg-[#363636]">
        <div className="border border-[#181818] p-8">
          <h2 className="text-[30px] pb-4 font-semibold font-serif text-[#ffffffdc]">
            Enter Your name & Password
          </h2>
          <div className="flex flex-col gap-4">
            <input
              className="text-white px-10 py-2 bg-[#4e4e4e]"
              placeholder="Your UserName"
            ></input>
            <input
              className="text-white px-10 py-2 bg-[#4e4e4e]"
              placeholder="Password"
            ></input>
          </div>
        </div>
        <p className='pt-10 text-white opacity-25'>This site not for everyone</p>
      </section>
    </>
  );
}

export default page