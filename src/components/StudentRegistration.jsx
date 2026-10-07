import { useState } from "react";

export default function StudentRegistration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if(name.trim()===""){
        newErrors.name = "Name is required";
    }
    if(name.trim().length<3){
        newErrors.name="Name should be at least 3 characters.";
    }
    if(email.trim()===""){
        newErrors.email = "Email is required";
    } 
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        newErrors.email = "Email is invalid";
    }  
    if(phone.trim()===""){
        newErrors.phone = "Phone is required";
    }
    if(!/^\d{10}$/.test(phone)){
        newErrors.phone = "Phone number is invalid";
    }
    if(course.trim()===""){
        newErrors.course = "Course is required";
    }
    if(password===""){
        newErrors.password="Password is required";
    }
    if(password.length<6){
        newErrors.password="password must contain at least 6 characters";
    }
    if(confirmPassword===""){
        newErrors.confirmPassword="Confirm Password is required";
    }
    if(password!==confirmPassword){
        newErrors.confirmPassword="Passwords do not match";
    }
    setError(newErrors);
    if(Object.keys(newErrors).length === 0) {
        console.log("Registration successful");
    }
    console.log({ name, email, phone, course, password, confirmPassword });
    };

    const isFormValid= name.trim().length>=3 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && /^\d{10}$/.test(phone) && course.trim()!=="" && password.length>=6 && password===confirmPassword;
  return (
    <div>
      <h1>Student Registration</h1>
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="tel"
        placeholder="Enter your phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <select value={course} onChange={(e) => setCourse(e.target.value)}>
        <option>MERN</option>
        <option>React</option>
        <option>Java Full Stack</option>
      </select>
      <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />

            <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button type="submit" disabled={!isFormValid} onClick={handleSubmit}>Register</button>
            </form>
            {error.name && <p>{error.name}</p>}
            {error.email && <p>{error.email}</p>}
            {error.phone && <p>{error.phone}</p>}
            {error.course && <p>{error.course}</p>}
            {error.password && <p>{error.password}</p>}
            {error.confirmPassword && <p>{error.confirmPassword}</p>}
    </div>
  );
}
