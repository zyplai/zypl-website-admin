import React, { useRef, useState } from "react";
import "./vacancy.scss";
import Sidebar from "components/sidebar/Sidebar";
import Navbar from "components/navbar/Navbar";
import vacancyApiService from "service/vacancy";
import { toast } from "react-toastify";
import Textarea from "components/textarea";
import Vacancy1 from "../../assets/screenshot/vacancy1.png";
import Vacancy2 from "../../assets/screenshot/vacancy2.png";
import { Button } from "@mui/material";
import axios from "axios";
import { EDITOR_JS_TOOLS } from "utils/constants";
import { createReactEditorJS } from "react-editor-js";
import {
  EditorOutputData,
  INewsItemCreateData,
  TNewsItemData,
  TVacancyItemCreateData,
} from "types";
import baseApiService from "service/base";

const initialFormState = {
  ru: {
    vacancyTitle: "",
    vacancyDesc: "",
  },
  en: {
    vacancyTitle: "",
    vacancyDesc: "",
  },
};
const initialTitleState = {
  en: {
    title: "",
  },
  ru: {
    title: "",
  },
};

const initialFormStateEditor = {
  editor: {},
};

const Vacancy = () => {
  const [form, setForm] = useState(initialFormState);
  const [pending, setPending] = useState(false);
  const [dataChanged, setDataChanged] = useState(false);
  const [editorText, setEditorText] = useState(initialFormStateEditor);
  const [editorTitle, setEditorTitle] = useState(initialTitleState);
  const [newsItem, setNewsItem] = useState<TVacancyItemCreateData[] | null>([]);
  const [fileNews, setFileNews] = useState<File | null>(null);
  const instanceRef = React.useRef<any>(null);
  const ReactEditorJS = createReactEditorJS();

  async function handleSave() {
    if (instanceRef.current) {
      const savedData = await instanceRef.current.save();
      setEditorText(savedData);
      sendDataToBackend(savedData);
    }
  }
  const sendDataToBackend = async (data: TNewsItemData) => {
    try {
      await baseApiService
        .POST("vacancy-item/create", {
          ru: {
            title: editorTitle.ru.title,
            editor: editorText,
          },
          en: {
            title: editorTitle.en.title,
            editor: editorText,
          },
        })
        .then((res) => res.data)
        .finally(() => {
          setDataChanged(!dataChanged);
        });
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  React.useEffect(() => {
    vacancyApiService
      .getVacancy()
      .then((res: TVacancyItemCreateData[]) => setNewsItem(res))
      .finally(() => setPending(false));
  }, [dataChanged]);

  React.useEffect(() => {
    setPending(true);
    vacancyApiService
      .get()
      .then((res) =>
        setForm({
          ru: {
            vacancyTitle: res.ru.main.title,
            vacancyDesc: res.ru.main.description,
          },
          en: {
            vacancyTitle: res.en.main.title,
            vacancyDesc: res.en.main.description,
          },
        })
      )
      .finally(() => setPending(false));
  }, [dataChanged]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await vacancyApiService
        .update({
          ru: {
            main: {
              title: form.ru.vacancyTitle,
              description: form.ru.vacancyDesc,
            },
          },
          en: {
            main: {
              title: form.en.vacancyTitle,
              description: form.en.vacancyDesc,
            },
          },
        })
        .then((res) => {
          toast.success(res.message);
          setDataChanged(!dataChanged);
        })
        .finally(() => setPending(false));
    } catch (error) {
      toast.error("Error!");
    }
  };

  const handleAddImageTeam = async (id: string) => {
    const data = {
      file: fileNews,
    };
    await vacancyApiService
      .addIconsVacancy(`/${id}`, data)
      .then((res) => {
        toast.success(res.message);
        setDataChanged(!dataChanged);
        setFileNews(null);
      })
      .catch((error: any) => toast.error(error.message));
  };

  const handleDeletePartner = async (id: string) => {
    await vacancyApiService
      .deleteVacancy(`/${id}`)
      .then((res) => {
        toast.success(res.message);
        setDataChanged(!dataChanged);
      })
      .catch((error: any) => toast.error(error.message));
  };

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <form action="" className="home" onSubmit={onSubmit}>
          <div className="content">
            <div className="ru">
              <h2>RU</h2>
              <Textarea
                title="Спокойные воды приносят огромные штормы"
                imgSrc={Vacancy1}
                value={form["ru"].vacancyTitle}
                onChange={(vacancyTitle) =>
                  setForm({ ...form, ru: { ...form["ru"], vacancyTitle } })
                }
              />
              <Textarea
                title="Мы изменили кредитный скоринг с помощью нашего генеративного AI-стека."
                imgSrc={Vacancy2}
                value={form["ru"].vacancyDesc}
                onChange={(vacancyDesc) =>
                  setForm({ ...form, ru: { ...form["ru"], vacancyDesc } })
                }
              />
            </div>
            <div className="en">
              <h2>EN</h2>
              <Textarea
                title="Calm waters deliver huge storms"
                imgSrc={Vacancy1}
                value={form["en"].vacancyTitle}
                onChange={(vacancyTitle) =>
                  setForm({ ...form, en: { ...form["en"], vacancyTitle } })
                }
              />
              <Textarea
                title="We disrupt credit scoring with our generative ai stack"
                imgSrc={Vacancy2}
                value={form["en"].vacancyDesc}
                onChange={(vacancyDesc) =>
                  setForm({ ...form, en: { ...form["en"], vacancyDesc } })
                }
              />
            </div>
          </div>
          <Button type="submit" className="submitButton">
            Save
          </Button>
        </form>
        <div className="home">
          <div className="content">
            <div className="ru">
              <h2>RU</h2>
              <Textarea
                title="Заголовок"
                imgSrc={Vacancy1}
                value={editorTitle["ru"].title}
                onChange={(title) =>
                  setEditorTitle({
                    ...editorTitle,
                    ru: { ...editorTitle["ru"], title },
                  })
                }
              />
            </div>
            <div className="en">
              <h2>EN</h2>
              <Textarea
                title="Title"
                imgSrc={Vacancy1}
                value={editorTitle["en"].title}
                onChange={(title) =>
                  setEditorTitle({
                    ...editorTitle,
                    en: { ...editorTitle["en"], title },
                  })
                }
              />
            </div>
          </div>
          <div className="boxarea">
            <ReactEditorJS
              onInitialize={(instance: any) => {
                instanceRef.current = instance;
              }}
              tools={EDITOR_JS_TOOLS}
            />
            <Button className="submitButton" onClick={handleSave}>
              Save!
            </Button>
          </div>
        </div>
        <div className="home">
          <div className="content contentNews">
            {newsItem?.map((el) => (
              <div
                className="boxarea"
                style={{ width: "300px" }}
                key={el.id}
                // onClick={() => setModalNews(true)}
              >
                <img
                  width={"100px"}
                  height={"100px"}
                  src={
                    el.icon ??
                    "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                  }
                />
                <input
                  type="file"
                  className="inputImg"
                  id="file"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const files = e.target.files;
                    if (files?.[0]) {
                      setFileNews(files[0]);
                    }
                  }}
                />
                <Button
                  style={{ background: "#6439ff", color: "white" }}
                  onClick={() => handleAddImageTeam(el.id)}
                >
                  Save
                </Button>
                <h2>{el.en.title}</h2>
                {/* <div>{el.en.editor?.blocks?.map((el) => el.data.text)}</div> */}
                <Button
                  onClick={() => handleDeletePartner(el.id)}
                  className="delete"
                  style={{ background: "red", color: "white" }}
                >
                  Delete
                </Button>
                {/* <ModalCenter in={modalNews} onClose={() => setModalNews(false)}>
                  <EditNews list={el.en.editor?.blocks?.map((el) => ({text: el.data.text}))} />
                </ModalCenter> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vacancy;
