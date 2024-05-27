import React, { useState } from "react";
import InfoIcon from "@mui/icons-material/Info";
import ModalCenter from "components/modal-center";
import "./textarea.scss";

interface ITextareaProps {
  title: string;
  imgSrc: string;
  value: string;
  onChange: (value: string) => void;
}

const Textarea = ({ title, imgSrc, value, onChange }: ITextareaProps) => {
  const [modalImg, setModalImg] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    onChange(e.target.value);
  };

  return (
    <div className="boxarea">
      <div className="title">
        <span>{title.charAt(0).toUpperCase() + title.slice(1)}</span>
        <InfoIcon
          className="icon"
          style={{
            color: "crimson",
            backgroundColor: "rgba(255, 0, 0, 0.2)",
          }}
          onClick={() => setModalImg(true)}
        />
        <ModalCenter in={modalImg} onClose={() => setModalImg(false)}>
          <div style={{ width: "900px", height: "600px" }}>
            <img src={imgSrc} onClick={() => setModalImg(false)} style={{width:"100%", objectFit:"cover"}}/>
          </div>
        </ModalCenter>
      </div>
      <textarea
        rows={3}
        value={value}
        onChange={handleChange}
        placeholder="text..."
        className="textarea"
      />
    </div>
  );
};

export default Textarea;
