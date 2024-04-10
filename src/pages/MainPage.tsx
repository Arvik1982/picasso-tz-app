import { useEffect, useState } from "react";
import getPosts from "../api";
import DescriptionBody from "../components/DescriptionText";
import styles from "../app.module.css";

export default function MainPage() {
  interface ElInterface {
    id: number;
    body: string;
    title: string;
    userId: number;
  }

  const [postsData, setPostsData] = useState([]);

  useEffect(() => {
    getPosts().then((data) => {
      setPostsData(data);
    });
  }, []);

  return (
    <>
      {postsData.map((el: ElInterface, index: number) => {
        return (
          <div key={index} className={styles.post}>
            <span>N {el.id}</span>
            <h3>Заголовок:</h3>
            <h2 className={styles.post__title}>{el.title}</h2>
            <DescriptionBody id={el.id} text={el.body} />
          </div>
        );
      })}
    </>
  );
}
