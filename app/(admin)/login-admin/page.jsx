"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginAdmin = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name === process.env.NEXT_PUBLIC_NAME &&
      password === process.env.NEXT_PUBLIC_PASSWORD
    ) {
      alert("admin connect");
      setName("");
      setPassword("");
      router.push("/form-projects");
    } else {
      alert("error connect");
      router.push("/");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">name</label>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          name=""
          id="name"
          placeholder="enter name"
        />
        <label htmlFor="password">password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name=""
          id="password"
          placeholder="enter password"
        />
        <button type="submit">connect</button>
      </form>
    </>
  );
};

export default LoginAdmin;
