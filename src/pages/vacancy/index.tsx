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

const Vacancy = () => {
  const [form, setForm] = useState(initialFormState);
  const [pending, setPending] = useState(false);
  const [dataChanged, setDataChanged] = useState(false);
  // const editorInstance = useRef<typeof EditorJSComponent | null>(null)
  // const [note, setNote] = useState<null>(null)
  // const [loading, setLoading] = useState(false)


  // React.useEffect(() => {
  //   setLoading(true)
  //   axios.post("http://localhost:8000/news-item/create")
      
  //     .then((note) => {
  //       setNote(note.data)
  //     })
  //     .finally(() => setLoading(false))
  // }, [])


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
      </div>
    </div>
  );
};

export default Vacancy;
