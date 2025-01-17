const Contact = () => {
  return (
    <div>
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-gray-100 text-gray-800">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
              Let's talk!
            </h2>
            <div className="text-gray-600">
              Vivamus in nisl metus? Phasellus.
            </div>
          </div>
          <img
            src="https://www.mydock365.com/hubfs/The%20Dos%20and%20Donts%20of%20Contract%20Amendment.webp"
            alt=""
            className="p-6 w-full h-full md:h-64"
          />
        </div>
        <form noValidate="" className="space-y-6">
          <div>
            <label htmlFor="name" className="text-sm">
              Full name
            </label>
            <input
              id="name"
              type="text"
              label="text"
              placeholder="Name"
              className="w-full p-3 rounded bg-green-200"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              id="email"
              type="email"
               label="text"
               
              className="w-full p-3 rounded bg-green-200"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <textarea
              id="message"
              rows="3"
              className="w-full p-3 rounded bg-green-200"
            ></textarea>
          </div>
          <button
            type="submit"
             label="text"
            className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-lime-600 text-gray-50"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
