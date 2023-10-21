"use client";
import { useRouter } from "next/navigation";
import { useState, useContext, useEffect } from "react";
import { AdminContext } from "@/app/context/adminContext";

const FormProject = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [description, setDescription] = useState("");
  const [entreprise, setEntreprise] = useState("");
  const [siteWeb, setSiteWeb] = useState("");
  const [technos, setTechnos] = useState("");
  const [image, setImage] = useState("");
  const router = useRouter();
  const { isAdmin } = useContext(AdminContext);

  const isLogin = () => {
    if (!isAdmin) {
      alert("you're not a admin");
      router.push("/");
    }
  };

  useEffect(() => {
    isLogin();
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    isLogin();
    try {
      const response = await fetch("api/projects", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          title,
          date,
          shortDescription,
          description,
          entreprise,
          siteWeb,
          technos,
          image,
        }),
      });

      if (res.ok) {
        alert("created project");
        setTitle("");
        setDate("");
        setShortDescription("");
        setDescription("");
        setEntreprise("");
        setSiteWeb("");
        setTechnos("");
        setImage("");
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
    return;
  };
  console.log(isAdmin);
  return (
    <>
      {isAdmin ? (
        <>
          <h1>Nouveau projet</h1>

          <form onSubmit={handleSubmit}>
            <label htmlFor="title">title</label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              name=""
              id="title"
              placeholder="enter title"
              required
            />
            <label htmlFor="date">date</label>
            <input
              onChange={(e) => setDate(e.target.value)}
              type="text"
              name=""
              id="date"
              placeholder="enter date"
              required
            />
            <label htmlFor="shortDescription">short description</label>
            <input
              onChange={(e) => setShortDescription(e.target.value)}
              type="text"
              name=""
              id="shortDescription"
              placeholder="enter short description"
              required
            />
            <label htmlFor="description">description</label>
            <input
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              name=""
              id="description"
              placeholder="enter description"
              required
            />
            <label htmlFor="entreprise">entreprise</label>
            <input
              onChange={(e) => setEntreprise(e.target.value)}
              type="text"
              name=""
              id="entreprise"
              placeholder="enter entreprise"
            />
            <label htmlFor="siteWeb">site web</label>
            <input
              onChange={(e) => setSiteWeb(e.target.value)}
              type="text"
              name=""
              id="siteWeb"
              placeholder="enter site web"
            />
            <label htmlFor="technos">technos</label>
            <input
              onChange={(e) => setTechnos(e.target.value)}
              type="text"
              name=""
              id="technos"
              placeholder="enter technos"
              required
            />
            <label htmlFor="image">image</label>
            <input
              onChange={(e) => setImage(e.target.value)}
              type="text"
              name=""
              id="image"
              placeholder="enter image"
              required
            />
            <button type="submit">ajouter projet</button>
          </form>
        </>
      ) : null}
    </>
  );
};

export default FormProject;
