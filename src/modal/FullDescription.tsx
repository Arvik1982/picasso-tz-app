import { FC } from "react";
import styles from "../app.module.css";
import { useNavigate } from "react-router-dom";

type ChildProps = {
  setStateProp: (newState: boolean) => void;
  text: string;
  id: number;
};

const FullDescription: FC<ChildProps> = ({ text, setStateProp, id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const newState = { key: false };
    setStateProp(newState.key);
  };

  return (
    <div className={styles.description__block}>
      <h3>Описание</h3>
      <p>{text}</p>
      <button onClick={handleClick}>Закрыть</button>
      <button
        onClick={() => {
          navigate(`/post/${id}`);
        }}
      >
        На страницу поста
      </button>
    </div>
  );
};
export default FullDescription;
