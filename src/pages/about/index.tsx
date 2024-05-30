import React, { useState } from "react";
import "./about.scss";
import Eco1 from "../../assets/screenshot/eco1.png";
import Sidebar from "components/sidebar/Sidebar";
import Navbar from "components/navbar/Navbar";
import Textarea from "components/textarea";
import Button from "@mui/material/Button";
import aboutApiService from "service/about";
import { toast } from "react-toastify";

const initialFormState = {
  ru: {
    aboutTitle: "",
    aboutDesc: "",
    team: "",
    director: "",
    ourStory: "",
  },
  en: {
    aboutTitle: "",
    aboutDesc: "",
    team: "",
    director: "",
    ourStory: "",
  },
};

const About = () => {
  const [form, setForm] = useState(initialFormState);
  const [pending, setPending] = useState(false);
  const [dataChanged, setDataChanged] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await aboutApiService.update({
        ru: {
          main: { title: form.ru.aboutTitle, description: form.ru.aboutDesc },
          team: {
            title: form.ru.team,
          },
          director: {
            title: form.ru.director,
          },
          ourStory: {
            title: form.ru.ourStory,
          },
        },
        en: {
          main: { title: form.en.aboutTitle, description: form.en.aboutDesc },
          team: {
            title: form.en.team,
          },
          director: {
            title: form.en.director,
          },
          ourStory: {
            title: form.en.ourStory,
          },
        },
      }).then((res) => {
        toast.success(res.message);
        setDataChanged(!dataChanged);
      }).finally(() => setPending(false))
    } catch (error) {
      toast.error("error!");
    }
  };

  React.useEffect(() => {
    setPending(true);
    aboutApiService
      .get()
      .then((res) =>
        setForm({
          ru: {
            aboutTitle: res.ru.main.title,
            aboutDesc: res.ru.main.description,
            team: res.ru.team.title,
            director: res.ru.director.title,
            ourStory: res.ru.ourStory.title,
          },
          en: {
            aboutTitle: res.en.main.title,
            aboutDesc: res.en.main.description,
            team: res.en.team.title,
            director: res.en.director.title,
            ourStory: res.en.ourStory.title,
          },
        })
      )
      .finally(() => setPending(false));
  }, [dataChanged]);

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <form className="home" onSubmit={onSubmit}>
          <div className="content">
            <div className="ru">
              <h2>RU</h2>
              <Textarea
                title="Больше, чем стартап"
                imgSrc={Eco1}
                value={form["ru"].aboutTitle}
                onChange={(aboutTitle) =>
                  setForm({ ...form, ru: { ...form["ru"], aboutTitle } })
                }
              />
              <Textarea
                title="Стэнфордские корни и глобальное видение"
                imgSrc={Eco1}
                value={form["ru"].aboutDesc}
                onChange={(aboutDesc) =>
                  setForm({ ...form, ru: { ...form["ru"], aboutDesc } })
                }
              />
              <Textarea
                title="Команда менеджеров"
                imgSrc={Eco1}
                value={form["ru"].team}
                onChange={(team) =>
                  setForm({ ...form, ru: { ...form["ru"], team } })
                }
              />
              <Textarea
                title="Совет директоров"
                imgSrc={Eco1}
                value={form["ru"].director}
                onChange={(director) =>
                  setForm({ ...form, ru: { ...form["ru"], director } })
                }
              />
              <Textarea
                title="Наша история"
                imgSrc={Eco1}
                value={form["ru"].ourStory}
                onChange={(ourStory) =>
                  setForm({ ...form, ru: { ...form["ru"], ourStory } })
                }
              />
            </div>
            <div className="en">
              <h2>EN</h2>
              <Textarea
                title="More than a startup"
                imgSrc={Eco1}
                value={form["en"].aboutTitle}
                onChange={(aboutTitle) =>
                  setForm({ ...form, en: { ...form["en"], aboutTitle } })
                }
              />
              <Textarea
                title="With Stanford roots and global vision"
                imgSrc={Eco1}
                value={form["en"].aboutDesc}
                onChange={(aboutDesc) =>
                  setForm({ ...form, en: { ...form["en"], aboutDesc } })
                }
              />
              <Textarea
                title="Management team"
                imgSrc={Eco1}
                value={form["en"].team}
                onChange={(team) =>
                  setForm({ ...form, en: { ...form["en"], team } })
                }
              />
              <Textarea
                title="Board of Directors"
                imgSrc={Eco1}
                value={form["en"].director}
                onChange={(director) =>
                  setForm({ ...form, en: { ...form["en"], director } })
                }
              />
              <Textarea
                title="Our story"
                imgSrc={Eco1}
                value={form["en"].ourStory}
                onChange={(ourStory) =>
                  setForm({ ...form, en: { ...form["en"], ourStory } })
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

export default About;
