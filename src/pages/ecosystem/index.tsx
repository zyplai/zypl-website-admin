import { useState } from "react";
import Navbar from "components/navbar/Navbar";
import Sidebar from "components/sidebar/Sidebar";
import Textarea from "components/textarea";
import Eco1 from "../../assets/screenshot/eco1.png";
import Eco2 from "../../assets/screenshot/eco2.png";
import Eco3 from "../../assets/screenshot/eco3.png";
import Eco4 from "../../assets/screenshot/eco4.png";
import Eco5 from "../../assets/screenshot/eco5.png";
import Eco6 from "../../assets/screenshot/eco6.png";
import Eco7 from "../../assets/screenshot/eco7.png";
import Eco8 from "../../assets/screenshot/eco8.png";
import Eco9 from "../../assets/screenshot/eco9.png";
import Eco10 from "../../assets/screenshot/eco10.png";
import Eco11 from "../../assets/screenshot/eco11.png";
import Eco12 from "../../assets/screenshot/eco12.png";
import "./ecosystem.scss";
import Button from "@mui/material/Button";
import ecosystemApiService from "service/ecosystem";
import React from "react";
import { toast } from "react-toastify";

const initialFormState = {
  ru: {
    ecosystemTitle: "",
    ecosystemDesc: "",
    overviewTitle: "",
    overviewDesc: "",
    ecosystem: "",
    buildingHolistic: "",
    b2b2c: "",
    b2b2cDesc: "",
    guaranteed: "",
    guaranteedDesc: "",
    remittanceBased: "",
    remittanceBasedDesc: "",
  },
  en: {
    ecosystemTitle: "",
    ecosystemDesc: "",
    overviewTitle: "",
    overviewDesc: "",
    ecosystem: "",
    buildingHolistic: "",
    b2b2c: "",
    b2b2cDesc: "",
    guaranteed: "",
    guaranteedDesc: "",
    remittanceBased: "",
    remittanceBasedDesc: "",
  },
};

const Ecosystem = () => {
  const [pending, setPending] = useState(false);
  const [updatePending, setUpdatePending] = useState(false);
  const [form, setForm] = useState(initialFormState);
  const [dataChanged, setDataChanged] = useState(false);
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUpdatePending(true);
    try {
      await ecosystemApiService
        .update({
          ru: {
            main: {
              title: form.ru.ecosystemTitle,
              description: form.ru.ecosystemDesc,
            },
            overview: {
              title: form.ru.overviewTitle,
              description: form.ru.overviewDesc,
            },
            ecosystemSection: {
              title: form.ru.ecosystem,
              description: form.ru.buildingHolistic,
              sections: [
                {
                  title: form.ru.b2b2c,
                  description: form.ru.b2b2cDesc,
                },
                {
                  title: form.ru.guaranteed,
                  description: form.ru.guaranteedDesc,
                },
                {
                  title: form.ru.remittanceBased,
                  description: form.ru.remittanceBasedDesc,
                },
              ],
            },
          },
          en: {
            main: {
              title: form.en.ecosystemTitle,
              description: form.en.ecosystemDesc,
            },
            overview: {
              title: form.en.overviewTitle,
              description: form.en.overviewDesc,
            },
            ecosystemSection: {
              title: form.en.ecosystem,
              description: form.en.buildingHolistic,
              sections: [
                {
                  title: form.en.b2b2c,
                  description: form.en.b2b2cDesc,
                },
                {
                  title: form.en.guaranteed,
                  description: form.en.guaranteedDesc,
                },
                {
                  title: form.en.remittanceBased,
                  description: form.en.remittanceBasedDesc,
                },
              ],
            },
          },
        }).then((res) => {
          toast.success(res.message);
          setDataChanged(!dataChanged);
        })
        .finally(() => setPending(false));
    } catch (error) {
      toast.error("error!");
    }
  };

  React.useEffect(() => {
    setPending(true);
    ecosystemApiService
      .get()
      .then((res) =>
        setForm({
          ru: {
            ecosystemTitle: res.ru.main.title,
            ecosystemDesc: res.ru.main.description,
            overviewTitle: res.ru.overview.title,
            overviewDesc: res.ru.overview.description,
            ecosystem: res.ru.ecosystemSection.title,
            buildingHolistic: res.ru.ecosystemSection.description,
            b2b2c: res.ru.ecosystemSection.sections[0].title,
            b2b2cDesc: res.ru.ecosystemSection.sections[0].description,
            guaranteed: res.ru.ecosystemSection.sections[1].title,
            guaranteedDesc: res.ru.ecosystemSection.sections[1].description,
            remittanceBased: res.ru.ecosystemSection.sections[2].title,
            remittanceBasedDesc:
              res.ru.ecosystemSection.sections[2].description,
          },
          en: {
            ecosystemTitle: res.en.main.title,
            ecosystemDesc: res.en.main.description,
            overviewTitle: res.en.overview.title,
            overviewDesc: res.en.overview.description,
            ecosystem: res.en.ecosystemSection.title,
            buildingHolistic: res.en.ecosystemSection.description,
            b2b2c: res.en.ecosystemSection.sections[0].title,
            b2b2cDesc: res.en.ecosystemSection.sections[0].description,
            guaranteed: res.en.ecosystemSection.sections[1].title,
            guaranteedDesc: res.en.ecosystemSection.sections[1].description,
            remittanceBased: res.en.ecosystemSection.sections[2].title,
            remittanceBasedDesc:
              res.en.ecosystemSection.sections[2].description,
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
        {pending ? (
          "Loading..."
        ) : (
          <form className="home" onSubmit={onSubmit}>
            <div className="content">
              <div className="ru">
                <h2>RU</h2>
                <Textarea
                  title="Генеративный искусственный интеллект в полном режиме"
                  imgSrc={Eco1}
                  value={form["ru"].ecosystemTitle}
                  onChange={(ecosystemTitle) =>
                    setForm({ ...form, ru: { ...form["ru"], ecosystemTitle } })
                  }
                />
                <Textarea
                  title="Создание целостной экосистемы для предоставления более качественных услуг"
                  imgSrc={Eco2}
                  value={form["ru"].ecosystemDesc}
                  onChange={(ecosystemDesc) =>
                    setForm({ ...form, ru: { ...form["ru"], ecosystemDesc } })
                  }
                />
                <Textarea
                  title="Обзор на zypl.score: кредитное решение SaaS"
                  imgSrc={Eco3}
                  value={form["ru"].overviewTitle}
                  onChange={(overviewTitle) =>
                    setForm({ ...form, ru: { ...form["ru"], overviewTitle } })
                  }
                />
                <Textarea
                  title="Подход zypl основан на нашем глубоком изучении черных лебедей"
                  imgSrc={Eco4}
                  value={form["ru"].overviewDesc}
                  onChange={(overviewDesc) =>
                    setForm({ ...form, ru: { ...form["ru"], overviewDesc } })
                  }
                />
                <Textarea
                  title="Экосистема"
                  imgSrc={Eco5}
                  value={form["ru"].ecosystem}
                  onChange={(ecosystem) =>
                    setForm({ ...form, ru: { ...form["ru"], ecosystem } })
                  }
                />
                <Textarea
                  title="Создание целостной экосистемы для предоставления более качественных услуг"
                  imgSrc={Eco6}
                  value={form["ru"].buildingHolistic}
                  onChange={(buildingHolistic) =>
                    setForm({
                      ...form,
                      ru: { ...form["ru"], buildingHolistic },
                    })
                  }
                />
                <Textarea
                  title="b2b2c кредитование"
                  imgSrc={Eco7}
                  value={form["ru"].b2b2c}
                  onChange={(b2b2c) =>
                    setForm({ ...form, ru: { ...form["ru"], b2b2c } })
                  }
                />
                <Textarea
                  title="Наш рынок предлагает финансовым организациям (банкам, МФО, МДО) уникальную возможность увеличить свою долю на рынке, предоставляя мгновенные займы клиентам через собственную платформу кредитного скоринга на основе искусственного интеллекта. "
                  imgSrc={Eco8}
                  value={form["ru"].b2b2cDesc}
                  onChange={(b2b2cDesc) =>
                    setForm({ ...form, ru: { ...form["ru"], b2b2cDesc } })
                  }
                />
                <Textarea
                  title="гарантированное кредитование"
                  imgSrc={Eco9}
                  value={form["ru"].guaranteed}
                  onChange={(guaranteed) =>
                    setForm({ ...form, ru: { ...form["ru"], guaranteed } })
                  }
                />
                <Textarea
                  title="Гарантированное кредитование покрывает часть риска дефолта по кредитам, предоставляемым финансовыми учреждениями-партнерами (ФУП) своим клиентам."
                  imgSrc={Eco10}
                  value={form["ru"].guaranteedDesc}
                  onChange={(guaranteedDesc) =>
                    setForm({ ...form, ru: { ...form["ru"], guaranteedDesc } })
                  }
                />
                <Textarea
                  title="кредитование на основе денежных переводов"
                  imgSrc={Eco11}
                  value={form["ru"].remittanceBased}
                  onChange={(remittanceBased) =>
                    setForm({ ...form, ru: { ...form["ru"], remittanceBased } })
                  }
                />
                <Textarea
                  title="Кредитование на основе денежных переводов основано на истории денежных переводов клиентов и служит альтернативой традиционным показателям оценки при выдаче кредитов (кредитная история, подтверждение дохода и т. д.)."
                  imgSrc={Eco12}
                  value={form["ru"].remittanceBasedDesc}
                  onChange={(remittanceBasedDesc) =>
                    setForm({
                      ...form,
                      ru: { ...form["ru"], remittanceBasedDesc },
                    })
                  }
                />
              </div>
              <div className="en">
                <h2>EN</h2>
                <Textarea
                  title="Generative AI in full mode"
                  imgSrc={Eco1}
                  value={form["en"].ecosystemTitle}
                  onChange={(ecosystemTitle) =>
                    setForm({ ...form, en: { ...form["en"], ecosystemTitle } })
                  }
                />
                <Textarea
                  title="Building holistic ecosystem to provide better services"
                  imgSrc={Eco2}
                  value={form["en"].ecosystemDesc}
                  onChange={(ecosystemDesc) =>
                    setForm({ ...form, en: { ...form["en"], ecosystemDesc } })
                  }
                />
                <Textarea
                  title="Overview on zypl.score: credit decision SaaS"
                  imgSrc={Eco3}
                  value={form["en"].overviewTitle}
                  onChange={(overviewTitle) =>
                    setForm({ ...form, en: { ...form["en"], overviewTitle } })
                  }
                />
                <Textarea
                  title="The zypl approach stems from our deep study of black swans."
                  imgSrc={Eco4}
                  value={form["en"].overviewDesc}
                  onChange={(overviewDesc) =>
                    setForm({ ...form, en: { ...form["en"], overviewDesc } })
                  }
                />
                <Textarea
                  title="Ecosystem"
                  imgSrc={Eco5}
                  value={form["en"].ecosystem}
                  onChange={(ecosystem) =>
                    setForm({ ...form, en: { ...form["en"], ecosystem } })
                  }
                />
                <Textarea
                  title="Building holistic ecosystem to provide better services"
                  imgSrc={Eco6}
                  value={form["en"].buildingHolistic}
                  onChange={(buildingHolistic) =>
                    setForm({
                      ...form,
                      en: { ...form["en"], buildingHolistic },
                    })
                  }
                />
                <Textarea
                  title="b2b2c lending"
                  imgSrc={Eco7}
                  value={form["en"].b2b2c}
                  onChange={(b2b2c) =>
                    setForm({ ...form, en: { ...form["en"], b2b2c } })
                  }
                />
                <Textarea
                  title="Our financial marketplace offers financial organizations (banks, MFIs, MDOs) a unique opportunity to increase their market share by providing instant loans to customers through our own credit scoring platform based on artificial intelligence."
                  imgSrc={Eco8}
                  value={form["en"].b2b2cDesc}
                  onChange={(b2b2cDesc) =>
                    setForm({ ...form, en: { ...form["en"], b2b2cDesc } })
                  }
                />
                <Textarea
                  title="guaranteed lending"
                  imgSrc={Eco9}
                  value={form["en"].guaranteed}
                  onChange={(guaranteed) =>
                    setForm({ ...form, en: { ...form["en"], guaranteed } })
                  }
                />
                <Textarea
                  title="Guaranteed lending covers a share of the default risk of loans provided by Partner Financial Institutions (PFIs) to their customers."
                  imgSrc={Eco10}
                  value={form["en"].guaranteedDesc}
                  onChange={(guaranteedDesc) =>
                    setForm({ ...form, en: { ...form["en"], guaranteedDesc } })
                  }
                />
                <Textarea
                  title="remittance-based lending"
                  imgSrc={Eco11}
                  value={form["en"].remittanceBased}
                  onChange={(remittanceBased) =>
                    setForm({ ...form, en: { ...form["en"], remittanceBased } })
                  }
                />
                <Textarea
                  title="Remittance-based lending is based on the remittance history of the customers and serves as an alternative to traditional evaluation metrics for providing loans (credit history, proof of income, etc.)."
                  imgSrc={Eco12}
                  value={form["en"].remittanceBasedDesc}
                  onChange={(remittanceBasedDesc) =>
                    setForm({
                      ...form,
                      en: { ...form["en"], remittanceBasedDesc },
                    })
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

export default Ecosystem;
