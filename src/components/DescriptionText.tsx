import { useEffect, useRef, useState, FC } from "react";
import styles from "../app.module.css";
import FullDescription from "../modal/FullDescription";

type ChildProps = {
  text: string;
  id: number;
};

const DescriptionBody: FC<ChildProps> = ({ text, id }) => {
  let textBody: string = text;
  const [showButton, setShowButton] = useState(false);
  const [showDescription, setShowDescription] = useState<Boolean>(false);
  const refSpan = useRef(null);
  const handleSetState = (newState: boolean) => {
    setShowDescription(newState);
  };

  useEffect(() => {
    const { offsetHeight, scrollHeight } = refSpan.current || {
      offsetHeight: Number,
      scrollHeight: Number,
    };
    offsetHeight < scrollHeight ? setShowButton(true) : setShowButton(false);
  }, [refSpan]);
  return (
    <>
      <div className={styles.post__body}>
        <h3>Описание</h3>
        <div className={styles.post__body_content} ref={refSpan}>
          {textBody}
        </div>
        {showButton && (
          <button
            onClick={() => {
              setShowDescription(true);
            }}
            className={styles.post__body_button}
          >
            Больше...
          </button>
        )}
        {showDescription && (
          <FullDescription
            text={textBody}
            setStateProp={handleSetState}
            id={id}
          />
        )}
      </div>
    </>
  );
};

export default DescriptionBody;
