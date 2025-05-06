import { useState } from "react";

export const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: 0,
    city: "",
    primarySubject: "",
  });

  const handleChange = (e) => {
    console.log("dadsad", e);

    const { name, value } = e.target;

    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-start"
        onChange={(e) => handleChange(e)}
      >
        Name:
        <input
          type="text"
          name="name"
          value={formData?.name}
          className="border-1 border-black w-100 "
        />
        Age:
        <input
          type="number"
          name="age"
          value={formData?.age}
          className="border-1 border-black w-100"
        />
        City:
        <input
          type="text"
           name="city"
          value={formData?.city}
          className="border-1 border-black w-100"
        />
        <select
          value={formData?.primarySubject}
          className="border-1 border-black w-100 m-2"
          name="primarySubject"
        >
          <option value={""} disabled>
            --Selected Subject ---
          </option>
          <option value={"Maths"}>Maths</option>
          <option value={"Science"}>Science</option>
          <option value={"Social"}>Social</option>
        </select>
      </form>
      {formData &&<div className="flex flex-col items-start">
        <p>Name:{formData?.name}</p>
        <p>age:{formData?.age}</p>
        <p> city:{formData?.city}</p>
        <p> Primary Subject:{formData?.primarySubject}</p>
      </div>}
    </div>
  );
};
