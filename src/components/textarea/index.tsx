import React, { useState } from "react";
import InfoIcon from "@mui/icons-material/Info";
import ModalCenter from "components/modal-center";
import "./textarea.scss";

interface ITextareaProps {
  title: string;
  imgSrc: string;
}

const Textarea = ({ title, imgSrc }: ITextareaProps) => {
  const [modalImg, setModalImg] = useState(false);
  return (
    <div className="boxarea">
      <div className="title">
        <span>{title}</span>
        <InfoIcon
          className="icon"
          style={{
            color: "crimson",
            backgroundColor: "rgba(255, 0, 0, 0.2)",
          }}
          onClick={() => setModalImg(true)}
        />
        <ModalCenter in={modalImg} onClose={() => setModalImg(false)}>
          <img src={imgSrc} onClick={() => setModalImg(false)} />
        </ModalCenter>
      </div>
      <textarea rows={3} placeholder="text..." className="textarea" />
    </div>
  );
};

export default Textarea;
