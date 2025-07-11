
const Faq = () => {
  return (
    <div>
        <h1 className='text-xl md:text-2xl font-medium text-purple-600 text-center'>FAQ</h1>
        <h2 className='text-2xl md:text-4xl font-bold text-center py-2'>Some Common Questions</h2>
      <div className="join join-vertical bg-base-100 flex justify-center pt-5">
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="checkbox" />
          <div className="collapse-title font-semibold">
            How do I create an account?
          </div>
          <div className="collapse-content text-sm">
            Click the "Sign Up" button in the top right corner and follow the registration process.
          </div>
        </div>

        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="checkbox" />
          <div className="collapse-title font-semibold">
            I forgot my password. What should I do?
          </div>
          <div className="collapse-content text-sm">
            Click on "Forgot Password" on the login page and follow the instructions sent to your email.
          </div>
        </div>

        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="checkbox" />
          <div className="collapse-title font-semibold">
            How do I update my profile information?
          </div>
          <div className="collapse-content text-sm">
            Go to "My Account" settings and select "Edit Profile" to make changes.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
