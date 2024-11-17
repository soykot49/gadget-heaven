import contactImg from "../assets/contact.png"

const Contact = () => {
  return (
    <div className="2xl:container 2xl:mx-auto">
      <div className={`mx-0 bg-[#9538E2] py-5 relative flex flex-col gap-5`}>
        <h1 className="text-5xl mb-2 text-center font-bold text-white">
          Contact
        </h1>
        <p className="text-white text-center">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices <br /> to the coolest accessories, we have
          it all!
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center  py-10 px-4">
        <div className="md:w-1/2">
          <img className="w-full md:w-[75%]" src={contactImg} alt="" />
        </div>
        <div className="w-full max-w-lg bg-gray-100 rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Contact Us
          </h1>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 resize-none h-32"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 text-white bg-[#9538E2] rounded-lg "
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
