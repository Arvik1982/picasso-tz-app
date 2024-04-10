import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import getPosts from "../api";

interface ElInterface {
  id: number;
  body: string;
  title: string;
  userId: number;
}

const PostPage = () => {
  const params = useParams();
  const emptyData: ElInterface = { id: 0, body: "", title: "", userId: 0 };
  const [postsData, setPostsData] = useState([]);
  const [selectedPostData, setSelectedPostData] = useState(emptyData);
  const navigate = useNavigate();

  useEffect(() => {
    getPosts().then((data) => {
      setPostsData(data);
    });
  }, []);

  useEffect(() => {
    const newArr: ElInterface | undefined = postsData.find(
      (el: ElInterface) => {
        return el.id === Number(params.id);
      }
    );
    if (newArr !== undefined) {
      setSelectedPostData(newArr);
    }
    console.log(selectedPostData);
  }, [postsData]);

  return (
    <div>
      <h3>Заголовок</h3>
      <h2>{selectedPostData.title}</h2>
      <h3>Описание</h3>
      <p>{selectedPostData.body}</p>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Назад
      </button>
    </div>
  );
};
export default PostPage;
