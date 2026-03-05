import { useState } from "react";

export default function EnquiryBox() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",

    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `Name: ${formData.name}\nMobile: ${formData.mobile}\nClinic: ${formData.service}\nMessage: ${formData.message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);

    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    const whatsappUrl = isDesktop
      ? `https://web.whatsapp.com/send?phone=919051553253&text=${encodedMessage}`
      : `https://api.whatsapp.com/send?phone=919051553253&text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
    setFormData({
      name: "",
      mobile: "",
      service: "",
      message: "",
    });
  };

  return (
    <div className="relative w-full p-4 lg:p-6 rounded-md">
    

      <div className="absolute inset-0 bg-site-gray rounded-md opacity-80 bg-opacity-80"></div>

      <div className="relative flex flex-col gap-8 justify-center items-center w-full text-center">
        <h1 className="text-2xl font-semibold text-site-main">
          Book Appointment
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 w-full justify-center items-center"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="w-full px-4 rounded-md h-[3.5rem] bg-white/50 backdrop-blur-[2px] outline-none placeholder:text-site-typo text-site-typo text-sm"
          />
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Mobile No"
            required
            className="w-full px-4 rounded-md h-[3.5rem] bg-white/50 backdrop-blur-[2px] outline-none placeholder:text-site-typo text-site-typo text-sm"
          />

          <select
            name="service"
            value={formData.service}
            aria-label="service"
            onChange={handleChange}
            className="w-full px-4 rounded-md h-[3.5rem] bg-white/50 backdrop-blur-[2px] outline-none placeholder:text-site-typo text-site-typo text-sm"
          >
            <option value="">Choose Clinic</option>
            <option value="Dentity Dental Gariahat">
              Dentity Dental Gariahat
            </option>
            <option value="Dentity Dental Tollygunge Netaji Nagar">
              Dentity Dental Tollygunge Netaji Nagar
            </option>
            <option value="Dentity Dental Tollygunge Suryanagar">
              Dentity Dental Tollygunge Suryanagar
            </option>
            <option value="Dentity Dental Sonarpur">
              Dentity Dental Sonarpur
            </option>
            <option value="Dentity Dental Dum Dum Cantonment">
              Dentity Dental Dum Dum Cantonment
            </option>
            <option value="Dentity Dental Rajarhat Teghoria Newtown">
              Dentity Dental Rajarhat Teghoria Newtown
            </option>
            <option value="Dentity Dental Teghoria (Dr. S Paul's Modern Dental World)">
              Dentity Dental Teghoria (Dr. S Paul's Modern Dental World)
            </option>
            <option value="Dentity Dental Beleghata CIT More">
              Dentity Dental Beleghata CIT More
            </option>
            <option value="Dr. Saikat Paul (Dental Mid World) Midnapore">
              Dr. Saikat Paul (Dental Mid World) Midnapore
            </option>
          </select>
          <textarea
            type="text"
            name="message"
            value={formData.message}
            rows={6}
            onChange={handleChange}
            placeholder="Message"
            className="w-full px-4 rounded-md resize-none bg-white/50 backdrop-blur-[2px] outline-none placeholder:text-site-typo text-site-typo text-sm py-2"
          />
          <button className="h-[3.5rem] relative px-6 w-fit flex justify-center items-center bg-site-main rounded-md text-base font-medium text-white buttonshine">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
}
