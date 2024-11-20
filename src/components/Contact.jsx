

import TrackVisibility from "react-on-screen";
import "animate.css"; 
import { useState } from "react";
import contactImg from "../assets/img/contact-img.svg"; // Assuming image path is correct

 const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});
  const [error, setError] = useState("");  // State to store error message

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if any field is empty
    if (!formDetails.firstName || !formDetails.lastName || !formDetails.email || !formDetails.phone || !formDetails.message) {
      setError("Please fill all fields.");
      return;  // Prevent form submission if fields are empty
    }
    
    setError("");  // Reset error message if all fields are filled
    setButtonText("Sending...");
    
    // Prepare the data to send to Web3Forms API
    const formData = new FormData();
    formData.append('name', formDetails.firstName + " " + formDetails.lastName);
    formData.append('email', formDetails.email);
    formData.append('phone', formDetails.phone);
    formData.append('message', formDetails.message);
    formData.append('apikey', '77282dd3-9b39-4d23-82e4-8ec879e537a3'); // Your Web3Forms API key

    try {
      // Send form data to Web3Forms API
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus({ success: true, message: "Message sent successfully!" });
      } else {
        setStatus({ success: false, message: "Something went wrong, please try again later." });
      }
    } catch (error) {
      setStatus({ success: false, message: "Error while sending message." });
    }

    setButtonText("Send");
    setFormDetails(formInitialDetails);
  };

  return (

  

    <section className="contact" id="connect">
        

       <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center">
                  <div className="w-full md:w-1/2 mb-8 md:mb-0">
             
            <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn  img-updown" : ""}>
                <img src={contactImg} alt="Header Img"   className="w-full h-auto"/>
                </div>}
           </TrackVisibility>
        </div>
          
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Get In Touch With Me.... </h2>
            <h2  className="text-3xl font-bold mb-6"> Or Ask any Question I will get Back to you soon...</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Error Message */}
              {error && <p className="text-blue-300">{error}</p>}
              
              <div className="flex flex-wrap -mx-2">
                <div className="w-full sm:w-1/2 px-2 mb-4">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div className="w-full sm:w-1/2 px-2 mb-4">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div className="w-full sm:w-1/2 px-2 mb-4">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email Address"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div className="w-full sm:w-1/2 px-2 mb-4">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone No."
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>
              <div className="mb-4">
                <textarea
                  rows="6"
                  value={formDetails.message}
                  placeholder="Message"
                  onChange={(e) => onFormUpdate("message", e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
              >
                <span>{buttonText}</span>
              </button>
              {status.message && (
                <p
                  className={`mt-4 ${
                    status.success ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {status.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};


// import { useState } from "react";
// import contactImg from "../assets/img/contact-img.svg"; // Assuming image path is correct


// const Contact = () => {
//   const formInitialDetails = {
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     message: "",
//   };
  
//   const [formDetails, setFormDetails] = useState(formInitialDetails);
//   const [buttonText, setButtonText] = useState("Send");
//   const [status, setStatus] = useState({});

//   const onFormUpdate = (category, value) => {
//     setFormDetails({
//       ...formDetails,
//       [category]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setButtonText("Sending...");
    
//     // Prepare the data to send to Web3Forms API
//     const formData = new FormData();
//     formData.append('name', formDetails.firstName + " " + formDetails.lastName);
//     formData.append('email', formDetails.email);
//     formData.append('phone', formDetails.phone);
//     formData.append('message', formDetails.message);
//     formData.append('apikey', '77282dd3-9b39-4d23-82e4-8ec879e537a3'); // Your Web3Forms API key

//     try {
//       // Send form data to Web3Forms API
//       const response = await fetch('https://api.web3forms.com/submit', {
//         method: 'POST',
//         body: formData,
//       });

//       const result = await response.json();

//       if (result.success) {
//         setStatus({ success: true, message: "Message sent successfully!" });
//       } else {
//         setStatus({ success: false, message: "Something went wrong, please try again later." });
//       }
//     } catch (error) {
//       setStatus({ success: false, message: "Error while sending message." });
//     }

//     setButtonText("Send");
//     setFormDetails(formInitialDetails);
//   };

//   return (
//     <section className="contact" id="connect">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-wrap items-center">
//           <div className="w-full md:w-1/2 mb-8 md:mb-0">
//             <img className="w-3/4 h-auto mx-auto transition-transform transform hover:scale-105"  src={contactImg}  alt="Contact Us"  />
//           </div>

//           <div className="w-full md:w-1/2">
//             <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div className="flex flex-wrap -mx-2">
//                 <div className="w-full sm:w-1/2 px-2 mb-4">
//                   <input
//                     type="text"
//                     value={formDetails.firstName}
//                     placeholder="First Name"
//                     onChange={(e) => onFormUpdate("firstName", e.target.value)}
//                     className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                   />
//                 </div>
//                 <div className="w-full sm:w-1/2 px-2 mb-4">
//                   <input
//                     type="text"
//                     value={formDetails.lastName}
//                     placeholder="Last Name"
//                     onChange={(e) => onFormUpdate("lastName", e.target.value)}
//                     className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                   />
//                 </div>
//                 <div className="w-full sm:w-1/2 px-2 mb-4">
//                   <input
//                     type="email"
//                     value={formDetails.email}
//                     placeholder="Email Address"
//                     onChange={(e) => onFormUpdate("email", e.target.value)}
//                     className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                   />
//                 </div>
//                 <div className="w-full sm:w-1/2 px-2 mb-4">
//                   <input
//                     type="tel"
//                     value={formDetails.phone}
//                     placeholder="Phone No."
//                     onChange={(e) => onFormUpdate("phone", e.target.value)}
//                     className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                   />
//                 </div>
//               </div>
//               <div className="mb-4">
//                 <textarea
//                   rows="6"
//                   value={formDetails.message}
//                   placeholder="Message"
//                   onChange={(e) => onFormUpdate("message", e.target.value)}
//                   className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 ></textarea>
//               </div>
//               <button
//                 type="submit"
//                 className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
//               >
//                 <span>{buttonText}</span>
//               </button>
//               {status.message && (
//                 <p
//                   className={`mt-4 ${
//                     status.success ? "text-green-500" : "text-red-500"
//                   }`}
//                 >
//                   {status.message}
//                 </p>
//               )}
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

export default Contact;





// import { useState } from "react";
// import contactImg from "../assets/img/contact-img.svg";

// export const Contact = () => {
//   const formInitialDetails = {
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     message: "",
//   };
//   const [formDetails, setFormDetails] = useState(formInitialDetails);
//   const [buttonText, setButtonText] = useState("Send");
//   const [status, setStatus] = useState({});

//   const onFormUpdate = (category, value) => {
//     setFormDetails({
//       ...formDetails,
//       [category]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setButtonText("Sending...");
//     let response = await fetch("http://localhost:5000/contact", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json;charset=utf-8",
//       },
//       body: JSON.stringify(formDetails),
//     });
//     setButtonText("Send");
//     let result = await response.json();
//     setFormDetails(formInitialDetails);
//     if (result.code === 200) {
//       setStatus({ success: true, message: "Message sent successfully" });
//     } else {
//       setStatus({ success: false, message: "Something went wrong, please try again later." });
//     }
//   };

//   return (
//     <section className="contact " id="connect">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-wrap items-center">
//         <div className="w-full md:w-1/2 mb-8 md:mb-0">
//         <img
//            className="w-3/4 h-auto mx-auto transition-transform transform hover:scale-105"
//            src={contactImg}
//            alt="Contact Us" />
//         </div>

//           <div className="w-full md:w-1/2">
//             <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div className="flex flex-wrap -mx-2">
//                 <div className="w-full sm:w-1/2 px-2 mb-4">
//                   <input
//                     type="text"
//                     value={formDetails.firstName}
//                     placeholder="First Name"
//                     onChange={(e) => onFormUpdate("firstName", e.target.value)}
//                     className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                   />
//                 </div>
//                 <div className="w-full sm:w-1/2 px-2 mb-4">
//                   <input
//                     type="text"
//                     value={formDetails.lastName}
//                     placeholder="Last Name"
//                     onChange={(e) => onFormUpdate("lastName", e.target.value)}
//                     className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                   />
//                 </div>
//                 <div className="w-full sm:w-1/2 px-2 mb-4">
//                   <input
//                     type="email"
//                     value={formDetails.email}
//                     placeholder="Email Address"
//                     onChange={(e) => onFormUpdate("email", e.target.value)}
//                     className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                   />
//                 </div>
//                 <div className="w-full sm:w-1/2 px-2 mb-4">
//                   <input
//                     type="tel"
//                     value={formDetails.phone}
//                     placeholder="Phone No."
//                     onChange={(e) => onFormUpdate("phone", e.target.value)}
//                     className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                   />
//                 </div>
//               </div>
//               <div className="mb-4">
//                 <textarea
//                   rows="6"
//                   value={formDetails.message}
//                   placeholder="Message"
//                   onChange={(e) => onFormUpdate("message", e.target.value)}
//                   className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 ></textarea>
//               </div>
//               <button
//                 type="submit"
//                 className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
//               >
//                 <span>{buttonText}</span>
//               </button>
//               {status.message && (
//                 <p
//                   className={`mt-4 ${
//                     status.success ? "text-green-500" : "text-red-500"
//                   }`}
//                 >
//                   {status.message}
//                 </p>
//               )}
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
    
//   );
// };















// //     return (
// //         // <div className="min-h-screen flex items-center justify-evenly">
// //         //     <p className="hover:bg-green-500 rounded-md w-40 flex justify-center" >Contact Me</p>
// //         //     <div className="flex flex-col">
// //         //         <p>Email : Aayushpratapbansal.email@example.com</p>
// //         //        <button>Click me</button>
// //         //     </div>
// //         // </div>


//  export default Contact;
