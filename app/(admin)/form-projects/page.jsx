"use client";
import { useRouter } from "next/navigation";
import { useState, useContext, useEffect } from "react";
import { AdminContext } from "@/app/context/adminContext";
import styles from "./page.module.css";

const FormProject = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [description, setDescription] = useState("");
  const [detail1, setDetail1] = useState("");
  const [detail2, setDetail2] = useState("");
  const [detail3, setDetail3] = useState("");
  const [detail4, setDetail4] = useState("");
  const [detail5, setDetail5] = useState("");
  const [detail6, setDetail6] = useState("");
  const [entreprise, setEntreprise] = useState("");
  const [siteWeb, setSiteWeb] = useState("");
  const [github, setGithub] = useState("");
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
          detail1,
          detail2,
          detail3,
          detail4,
          detail5,
          detail6,
          entreprise,
          siteWeb,
          github,
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
        setDetail1("");
        setDetail2("");
        setDetail3("");
        setDetail4("");
        setDetail5("");
        setDetail6("");
        setEntreprise("");
        setSiteWeb("");
        setGithub("");
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
          <div className={styles.formProjectsContainer}>
            <h1>Nouveau projet</h1>
            <form className={styles.formProjects} onSubmit={handleSubmit}>
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
              <label htmlFor="detail1">détail 1</label>
              <input
                onChange={(e) => setDetail1(e.target.value)}
                type="text"
                name=""
                id="detail1"
                placeholder="enter détail 1"
              />
              <label htmlFor="detail2">détail 2</label>
              <input
                onChange={(e) => setDetail2(e.target.value)}
                type="text"
                name=""
                id="detail2"
                placeholder="enter détail 2"
              />
              <label htmlFor="detail3">détail 3</label>
              <input
                onChange={(e) => setDetail3(e.target.value)}
                type="text"
                name=""
                id="detail3"
                placeholder="enter détail 3"
              />
              <label htmlFor="detail4">détail 4</label>
              <input
                onChange={(e) => setDetail4(e.target.value)}
                type="text"
                name=""
                id="detail4"
                placeholder="enter détail 4"
              />
              <label htmlFor="detail5">détail 5</label>
              <input
                onChange={(e) => setDetail5(e.target.value)}
                type="text"
                name=""
                id="detail5"
                placeholder="enter détail 5"
              />
              <label htmlFor="detail6">détail 6</label>
              <input
                onChange={(e) => setDetail6(e.target.value)}
                type="text"
                name=""
                id="detail6"
                placeholder="enter détail 6"
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
                placeholder="enter link site web"
              />
              <label htmlFor="github">github</label>
              <input
                onChange={(e) => setGithub(e.target.value)}
                type="text"
                name=""
                id="github"
                placeholder="enter link github"
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
          </div>
        </>
      ) : null}
    </>
  );
};

export default FormProject;
