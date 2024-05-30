import React, { useState } from "react";
import "./contact.scss";
import Sidebar from "components/sidebar/Sidebar";
import Navbar from "components/navbar/Navbar";
import Textarea from "components/textarea";
import Contact1 from "../../assets/screenshot/contact1.png";
import Contact2 from "../../assets/screenshot/contact2.png";
import Contact3 from "../../assets/screenshot/contact3.png";
import Contact4 from "../../assets/screenshot/contact4.png";
import Contact5 from "../../assets/screenshot/contact5.png";
import Contact6 from "../../assets/screenshot/contact6.png";
import Button from "@mui/material/Button";
import contactApiService from "service/contact";
import { toast } from "react-toastify";

const initialFormState = {
  ru: {
    contactTitle: "",
    contactDesc: "",
    nameCity: "",
    address: "",
    nameCity2: "",
    address2: "",
  },
  en: {
    contactTitle: "",
    contactDesc: "",
    nameCity: "",
    address: "",
    nameCity2: "",
    address2: "",
  },
};

const Contact = () => {
  const [form, setForm] = useState(initialFormState);
  const [pending, setPending] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await contactApiService.update({
        ru: {
          main: {
            title: form.ru.contactTitle,
            description: form.ru.contactDesc,
          },
          addressSection: [
            {
              nameCity: form.ru.nameCity,
              address: form.ru.address,
            },
            { nameCity: form.ru.nameCity2, address: form.ru.address2 },
          ],
        },
        en: {
          main: {
            title: form.en.contactTitle,
            description: form.en.contactDesc,
          },
          addressSection: [
            {
              nameCity: form.en.nameCity,
              address: form.en.address,
            },
            { nameCity: form.en.nameCity2, address: form.en.address },
          ],
        },
      });
    } catch (error) {
      toast.error("Error!");
    }
  };

  React.useEffect(() => {
    setPending(true);
    contactApiService
      .get()
      .then((res) =>
        setForm({
          ru: {
            contactTitle: res.ru.main.title,
            contactDesc: res.ru.main.description,
            nameCity: res.ru.addressSection[0].nameCity,
            address: res.ru.addressSection[0].address,
            nameCity2: res.ru.addressSection[1].nameCity,
            address2: res.ru.addressSection[1].nameCity,
          },
          en: {
            contactTitle: res.en.main.title,
            contactDesc: res.en.main.description,
            nameCity: res.en.addressSection[0].nameCity,
            address: res.en.addressSection[0].address,
            nameCity2: res.en.addressSection[1].nameCity,
            address2: res.en.addressSection[1].address,
          },
        })
      )
      .finally(() => setPending(false));
  }, []);

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        {pending ? (
          "Loading..."
        ) : (
          <form action="" className="home" onSubmit={onSubmit}>
            <div className="content">
              <div className="ru">
                <h2>RU</h2>
                <Textarea
                  title="Один клик для связи"
                  imgSrc={Contact1}
                  value={form["ru"].contactTitle}
                  onChange={(contactTitle) =>
                    setForm({ ...form, ru: { ...form["ru"], contactTitle } })
                  }
                />
                <Textarea
                  title="Стремимся подтвердить наши результаты на деле"
                  imgSrc={Contact2}
                  value={form["ru"].contactDesc}
                  onChange={(contactDesc) =>
                    setForm({ ...form, ru: { ...form["ru"], contactDesc } })
                  }
                />
                <Textarea
                  title="Душанбе"
                  imgSrc={Contact3}
                  value={form["ru"].nameCity}
                  onChange={(nameCity) =>
                    setForm({ ...form, ru: { ...form["ru"], nameCity } })
                  }
                />
                <Textarea
                  title="Улица Шотемур, 21, 2 этаж"
                  imgSrc={Contact4}
                  value={form["ru"].address}
                  onChange={(address) =>
                    setForm({ ...form, ru: { ...form["ru"], address } })
                  }
                />
                <Textarea
                  title="Дубай"
                  imgSrc={Contact5}
                  value={form["ru"].nameCity2}
                  onChange={(nameCity2) =>
                    setForm({ ...form, ru: { ...form["ru"], nameCity2 } })
                  }
                />
                <Textarea
                  title="Подразделение IH-00-01-02-OF-01, уровень 2, IH 00-01-CP-05 Flexi Office (1-й этаж), DIFC Innovation Hub"
                  imgSrc={Contact6}
                  value={form["ru"].address2}
                  onChange={(address2) =>
                    setForm({ ...form, ru: { ...form["ru"], address2 } })
                  }
                />
              </div>
              <div className="en">
                <h2>EN</h2>
                <Textarea
                  title="On click to connect"
                  imgSrc={Contact1}
                  value={form["en"].contactTitle}
                  onChange={(contactTitle) =>
                    setForm({ ...form, en: { ...form["en"], contactTitle } })
                  }
                />
                <Textarea
                  title="Eager to prove our results in actions"
                  imgSrc={Contact2}
                  value={form["en"].contactDesc}
                  onChange={(contactDesc) =>
                    setForm({ ...form, en: { ...form["en"], contactDesc } })
                  }
                />
                <Textarea
                  title="Dushanbe"
                  imgSrc={Contact3}
                  value={form["en"].nameCity}
                  onChange={(nameCity) =>
                    setForm({ ...form, en: { ...form["en"], nameCity } })
                  }
                />
                <Textarea
                  title="Shotemur street 21, 2nd floor"
                  imgSrc={Contact4}
                  value={form["en"].address}
                  onChange={(address) =>
                    setForm({ ...form, en: { ...form["en"], address } })
                  }
                />
                <Textarea
                  title="Dubai"
                  imgSrc={Contact5}
                  value={form["en"].nameCity2}
                  onChange={(nameCity2) =>
                    setForm({ ...form, en: { ...form["en"], nameCity2 } })
                  }
                />
                <Textarea
                  title="Unit IH-00-01-02-OF-01, Level 2, IH 00-01-CP-05 Flexi Office (1st Floor), DIFC Innovation Hub"
                  imgSrc={Contact6}
                  value={form["en"].address2}
                  onChange={(address2) =>
                    setForm({ ...form, en: { ...form["en"], address2 } })
                  }
                />
              </div>
            </div>
            <Button type="submit" className="submitButton">
              Save
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
