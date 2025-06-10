import { useState } from "react";
import successIcon from "../src/assets/icon-success-check.svg";
import "./App.css";

function App() {
  const [success, setSuccess] = useState(false);

  const [Error, setError] = useState({});
  
  const [formData, setForrmData] = useState({
    firstName: "",
    LastName: "",
    emailAddress: "",
    queryType: "",
    message: "",
    contact: false,
  });

  function handleSubmit(e) {
    setSuccess(false);

    e.preventDefault();
    let newError = {};
    if (!formData.firstName.trim()) {
      newError.firstName = "This field is required";
    }
    if (!formData.LastName.trim()) {
      newError.LastName = "This field is required";
    }
    if (!formData.emailAddress.includes("@")) {
      newError.emailAddress = "Please enter a vaild email address";
    }
    if (!formData.queryType.trim()) {
      newError.queryType = "Please select a query type";
    }
    if (!formData.message.trim()) {
      newError.message = "This field is required";
    }
    if (!formData.contact) {
      newError.contact =
        "To submit this from, please consent to being contacted";
    }
    setError(newError);
    const valid = Object.keys(newError).length;
    console.log(valid)

    if (valid) {
      setSuccess(true);

    }
  
  }


  return (
    <>
      <div className="px-3 py-10 bg-green-200 text-green-950 ">
        <div className="">
          {success && (
            <div className="p-5 text-white bg-green-950 md:w-100 m-auto rounded-2xl">
              <div className=" flex gap-3">
                <img src={successIcon} alt="" />
                <p>Message Sent !</p>
              </div>
              <p>Thanks for completing the form. we'll be in touch soon!</p>
            </div>
          )}
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl p-5 md:w-180 lg:w-220 md:m-auto flex flex-col md:grid grid-cols-2 gap-4"
        >
          <h1 className="text-3xl font-bold mb-10 col-span-2">Contact Them</h1>
          <div className="">
            <label>
              First Name <span className="text-green-600">*</span>
            </label>
            <input
              type="text"
              onChange={(e) =>
                setForrmData({ ...formData, firstName: e.target.value })
              }
              value={formData.firstName}
              className={`${
                Error.firstName && "border-red-500"
              } h-12 w-full rounded-xl border mt-2 pl-3 text-lg duration-500 hover:border-green-400 focus:outline-green-500`}
            />
            <p className="text-red-400">{Error.firstName}</p>
          </div>

          <div className="">
            <label>
              Last Name <span className="text-green-600">*</span>
            </label>
            <input
              type="text"
              onChange={(e) =>
                setForrmData({ ...formData, LastName: e.target.value })
              }
              value={formData.LastName}
              className={` ${
                Error.LastName && "border-red-500"
              } h-12 w-full rounded-xl border mt-2 pl-2 text-lg duration-500 hover:border-green-400 focus:outline-green-500`}
            />
            <p className="text-red-400">{Error.LastName}</p>
          </div>

          <div className="col-span-2">
            <label>
              Email Address <span className="text-green-600">*</span>
            </label>
            <input
              type="text"
              onChange={(e) =>
                setForrmData({ ...formData, emailAddress: e.target.value })
              }
              value={formData.emailAddress}
              className={`${
                Error.emailAddress && "border-red-500"
              } h-12 w-full rounded-xl border mt-2 pl-2 text-lg duration-500 hover:border-green-400 focus:outline-green-500 `}
            />
            <p className="text-red-400">{Error.emailAddress}</p>
          </div>

          <div className=" col-span-2">
            <label>
              Query Type <span className="text-green-600 ">*</span>
            </label>
            <div className="md:flex gap-4">
              <div className="  h-12 w-full rounded-xl border mt-2  flex items-center pl-5 gap-2 duration-500 hover:border-green-400 focus:outline-green-500 ">
                <input
                  type="radio"
                  name="queryType"
                  className=" accent-green-700 w-5 h-5 "
                  value={"General Enquiry"}
                  onChange={(e) =>
                    setForrmData({ ...formData, queryType: e.target.value })
                  }
                />
                <p>General Enquiry</p>
              </div>
              <div className="h-12 w-full rounded-xl border mt-2 flex items-center pl-5 gap-2 duration-500 hover:border-green-400 focus:outline-green-500 ">
                <input
                  type="radio"
                  name="queryType"
                  className=" accent-green-700 w-5 h-5 "
                  value={"Support Request"}
                  onChange={(e) =>
                    setForrmData({ ...formData, queryType: e.target.value })
                  }
                />
                <p>Support Request</p>
              </div>
            </div>
            <p className="text-red-400">{Error.queryType}</p>
          </div>

          <div className="col-span-2">
            <label>
              Message <span className="text-green-600">*</span>
            </label>
            <textarea
              value={formData.message}
              onChange={(e) =>
                setForrmData({ ...formData, message: e.target.value })
              }
              rows={6}
              type="text"
              className={`${
                Error.message && "border-red-500"
              } w-full rounded border mt-2 flex items-center pl-5 gap-2 text-lg duration-500 hover:border-green-400 focus:outline-green-500`}
            />
            <p className="text-red-400">{Error.message}</p>
          </div>

          <div>
            <div className="flex gap-3 items-center">
              <input
                type="checkbox"
                name=""
                id=""
                className=" accent-green-700 w-5 h-5  "
                onChange={(e) =>
                  setForrmData({ ...formData, contact: e.target.value })
                }
                checked={formData.contact}
              />

              <p className="text-lg col-span-2 ">
                i consent to being contacted by the team
                <span className="text-green-600">*</span>
              </p>
            </div>
            <p className="text-red-400">{Error.contact}</p>
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-green-800 rounded-xl text-white text-xl my-5 duration-300 hover:bg-green-950 col-span-2"
          >
            submit
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
