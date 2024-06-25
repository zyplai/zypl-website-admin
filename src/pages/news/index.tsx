import React, { useState } from "react";
import "./news.scss";
import Sidebar from "components/sidebar/Sidebar";
import Navbar from "components/navbar/Navbar";
import Textarea from "components/textarea";
import News1 from "../../assets/screenshot/news1.png";
import News2 from "../../assets/screenshot/news2.png";
import Button from "@mui/material/Button";
import newsApiService from "service/news";
import { toast } from "react-toastify";
import EditorJS from "@editorjs/editorjs";
import { EDITOR_JS_TOOLS } from "utils/constants";
import { createReactEditorJS } from "react-editor-js";
import axios from "axios";
import { EditorOutputData, INewsItemCreateData, TNewsItemData } from "types";
import Icon from "icons";
import EditNews from "components/edit-news";
import ModalCenter from "components/modal-center";

interface IEditorData {
  time: number;
  blocks: Array<any>;
  version: string;
}

interface INewsCreateData {
  ru: {
    title: string;
    editor: IEditorData;
  };
  en: {
    title: string;
    editor: IEditorData;
  };
}

const initialFormState = {
  ru: {
    newsTitle: "",
    newsDesc: "",
  },
  en: {
    newsTitle: "",
    newsDesc: "",
  },
};

const News = () => {
  const [form, setForm] = useState(initialFormState);
  const [pending, setPending] = useState(false);
  const [dataChanged, setDataChanged] = useState(false);
  const [editorTitle, setEditorTitle] = useState<{
    ru: { title: string };
    en: { title: string };
  }>({ ru: { title: "" }, en: { title: "" } });
  const [editorText, setEditorText] = useState<{
    ru: { editor: IEditorData };
    en: { editor: IEditorData };
  }>({
    ru: { editor: { time: 0, blocks: [], version: "" } },
    en: { editor: { time: 0, blocks: [], version: "" } },
  });
  const [newsItem, setNewsItem] = useState<INewsItemCreateData[] | null>([]);
  const [fileNews, setFileNews] = useState<File | null>(null);
  const [modalNews, setModalNews] = useState(false);

  const instanceRef = React.useRef<any>(null);
  const instanceRuRef = React.useRef<any>(null);
  const ReactEditorJS = createReactEditorJS();
  // const EditorJS = createReactEditorJS();

  const handleSave = async () => {
    if (instanceRef.current) {
      const savedData = await instanceRef.current.save();
      // const savedDataRu = await instanceRuRef.current.save();
      setEditorText({
        ru: { editor: savedData },
        en: { editor: savedData },
      });
      await sendDataToBackend(savedData);
    }
  };
  // const handleSave = async () => {
  //   if (instanceRef.current && instanceRuRef.current) {
  //     try {
  //       const savedData = await instanceRef.current.save();
  //       const savedDataRu = await instanceRuRef.current.save();

  //       setEditorText({
  //         ru: { editor: savedDataRu },
  //         en: { editor: savedData },
  //       });

  //       await sendDataToBackend({
  //         ru: savedDataRu,
  //         en: savedData,
  //       });
  //     } catch (error) {
  //       console.error('Error saving data:', error);
  //     }
  //   } else {
  //     console.warn('One of the editor instances is null or undefined');
  //   }
  // };

  const sendDataToBackend = async (data: IEditorData) => {
    try {
      await axios.post("http://localhost:8000/news-item/create", {
        ru: {
          title: editorTitle.ru.title,
          editor: data,
        },
        en: {
          title: editorTitle.en.title,
          editor: data,
        },
      });
      setDataChanged(!dataChanged);
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        toast.error("Fill all the fields!");
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  };

  React.useEffect(() => {
    setPending(true);
    newsApiService
      .get()
      .then((res) =>
        setForm({
          ru: {
            newsTitle: res.ru.main.title,
            newsDesc: res.ru.main.description,
          },
          en: {
            newsTitle: res.en.main.title,
            newsDesc: res.en.main.description,
          },
        })
      )
      .finally(() => setPending(false));
  }, [dataChanged]);

  React.useEffect(() => {
    newsApiService
      .getNews()
      .then((res: INewsItemCreateData[]) => setNewsItem(res))
      .finally(() => setPending(false));
  }, [dataChanged]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await newsApiService
        .update({
          ru: {
            main: {
              title: form.ru.newsTitle,
              description: form.ru.newsDesc,
            },
          },
          en: {
            main: {
              title: form.en.newsTitle,
              description: form.en.newsDesc,
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
    await newsApiService
      .addImageNews(`/${id}`, data)
      .then((res) => {
        toast.success(res.message);
        setDataChanged(!dataChanged);
        setFileNews(null);
      })
      .catch((error: any) => toast.error(error.message));
  };

  const handleDeletePartner = async (id: string) => {
    await newsApiService
      .deleteNews(`/${id}`)
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
                imgSrc={News1}
                value={form["ru"].newsTitle}
                onChange={(newsTitle) =>
                  setForm({ ...form, ru: { ...form["ru"], newsTitle } })
                }
              />
              <Textarea
                title="Мы изменили кредитный скоринг с помощью нашего генеративного AI-стека."
                imgSrc={News2}
                value={form["ru"].newsDesc}
                onChange={(newsDesc) =>
                  setForm({ ...form, ru: { ...form["ru"], newsDesc } })
                }
              />
            </div>
            <div className="en">
              <h2>EN</h2>
              <Textarea
                title="Calm waters deliver huge storms"
                imgSrc={News1}
                value={form["en"].newsTitle}
                onChange={(newsTitle) =>
                  setForm({ ...form, en: { ...form["en"], newsTitle } })
                }
              />
              <Textarea
                title="We disrupt credit scoring with our generative ai stack"
                imgSrc={News2}
                value={form["en"].newsDesc}
                onChange={(newsDesc) =>
                  setForm({ ...form, en: { ...form["en"], newsDesc } })
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
                imgSrc={News1}
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
                imgSrc={News1}
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
            {/* <EditorJS
              onInitialize={(instance: any) => {
                instanceRuRef.current = instance;
              }}
              tools={EDITOR_JS_TOOLS}
            /> */}
            <Button className="submitButton" onClick={handleSave}>
              Save!
            </Button>
          </div>
        </div>
        <div className="home">
          <div className="content contentNews">
            {newsItem?.map((el) => (
              <div className="boxarea" style={{ width: "300px" }} key={el.id}>
                <img
                  src={
                    el.titleImage ??
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
                {/* <button
                  className="add_button"
                  onClick={() => setModalNews(true)}
                >
                  <Icon name="pencil" size={18} />
                </button> */}
                <Button
                  onClick={() => handleDeletePartner(el.id)}
                  className="delete"
                  style={{ background: "red", color: "white" }}
                >
                  Delete
                </Button>
                {/* <ModalCenter in={modalNews} onClose={() => setModalNews(false)}>
                  <EditNews
                    list={el.en.editor?.blocks?.map((el) => ({
                      text: el.data.text,
                    }))}
                  />
                </ModalCenter> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
