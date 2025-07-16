import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct mailto link
    const mailtoLink = `mailto:ranjohnsarkershuvo12@gmail.com
      ?subject=Contact%20from%20Website
      &body=Name:%20${encodeURIComponent(formData.name)}%0A
      Email:%20${encodeURIComponent(formData.email)}%0A
      Message:%20${encodeURIComponent(formData.message)}`;

    // Open the user's email client
    window.location.href = mailtoLink;
  };

  return (
    <div className='md:w-8/12 w-10/12 mx-auto pt-20 space-y-20'>
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
            <div className="dark:text-gray-600">Feel free to reach out by filling the form below.</div>
          </div>
          <img src="https://media.tenor.com/COY0IAxV79UAAAAM/milk-mocha.gif" alt="" className="p-6 h-52 md:h-64" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="text-sm">Full name</label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded dark:bg-gray-200"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm">Email</label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded dark:bg-gray-200"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm">Message</label>
            <textarea
              id="message"
              rows="3"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded dark:bg-gray-200"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-600 dark:text-gray-50"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
