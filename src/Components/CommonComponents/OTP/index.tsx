import { useState } from "react";

export const OTP = ({ digits }) => {
  const [otp, setOtp] = useState(new Array(digits).fill(""));

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };
  return (
    <div>
      {otp?.map((_, index) => (
        <input
          key={index}
          id={`otp-${index}`}
          value={otp[index]}
          type="number"
          maxLength={1}
          className="px-1 py-1 border m-2"
          onChange={(e) => handleChange(e, index)}
        />
      ))}
    </div>
  );
};
