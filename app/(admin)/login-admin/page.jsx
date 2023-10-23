"use client";
import { useRouter } from "next/navigation";
import { useState, useContext } from "react";
import { AdminContext } from "@/app/context/adminContext";
import styles from "./page.module.css"

const LoginAdmin = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { setIsAdmin } = useContext(AdminContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name === process.env.NEXT_PUBLIC_NAME &&
      password === process.env.NEXT_PUBLIC_PASSWORD
    ) {
      setIsAdmin(true);
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
    <div className={styles.formAdminContainer}>
      <h1>Admin</h1>
      <form className={styles.formAdmin} onSubmit={handleSubmit}>
        <label htmlFor="name">name</label>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          name=""
          id="name"
          placeholder="enter name"
          required
        />
        <label htmlFor="password">password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name=""
          id="password"
          placeholder="enter password"
          required
        />
        <button type="submit">connect</button>
      </form>
      </div>
    </>
  );
};

export default LoginAdmin;
