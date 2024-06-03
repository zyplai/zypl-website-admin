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
      </div>
    </div>
  );
};

export default News;
