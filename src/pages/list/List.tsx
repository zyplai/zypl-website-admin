import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import ZyplAi from "../../assets/screenshot/home1.png";
import Home2 from "../../assets/screenshot/home2.png";
import Home3 from "../../assets/screenshot/home3.png";
import Home4 from "../../assets/screenshot/home4.png";
import Home5 from "../../assets/screenshot/home5.png";
import Home6 from "../../assets/screenshot/home6.png";
import Home7 from "../../assets/screenshot/home7.png";
import Home8 from "../../assets/screenshot/home8.png";
import Home9 from "../../assets/screenshot/home9.png";
import Home10 from "../../assets/screenshot/home10.png";
import Home11 from "../../assets/screenshot/home11.png";
import Home12 from "../../assets/screenshot/home12.png";
import Home13 from "../../assets/screenshot/home13.png";
import Home14 from "../../assets/screenshot/home14.png";
import Home15 from "../../assets/screenshot/home15.png";
import Home16 from "../../assets/screenshot/home16.png";
import Home17 from "../../assets/screenshot/home17.png";
import Home18 from "../../assets/screenshot/home18.png";
import Home19 from "../../assets/screenshot/home19.png";
import Home20 from "../../assets/screenshot/home20.png";
import Home21 from "../../assets/screenshot/home21.png";
import Home22 from "../../assets/screenshot/home22.png";
import Home23 from "../../assets/screenshot/home23.png";
import Home24 from "../../assets/screenshot/home24.png";
import Home25 from "../../assets/screenshot/home25.png";
import Home26 from "../../assets/screenshot/home26.png";
import Home27 from "../../assets/screenshot/home27.png";
import Home28 from "../../assets/screenshot/home28.png";
import Home29 from "../../assets/screenshot/home29.png";
import Home30 from "../../assets/screenshot/home30.png";
import { useState } from "react";
import Textarea from "components/textarea";
import { Button } from "@mui/material";
import homeApiService from "service/home";
import { toast } from "react-toastify";
import React from "react";
import axios from "axios";
import baseApiService from "service/base";
import { HomeModel, IHomeCreateData } from "types";

const initialFormState = {
  ru: {
    zyplAi: "",
    pioneering: "",
    ecosystem: "",
    banks: "",
    zyplScore: "",
    creditScoringSaaS: "",
    b2b2c: "",
    remittanceBased: "",
    guaranteed: "",
    learnMore: "",
    ourResults: "",
    result1: "",
    result2: "",
    result3: "",
    result4: "",
    leadingFinancialInstitutions: "",
    historicalLoansAccumulated: "",
    portfoliUunderwritten: "",
    portfolioCommitted: "",
    ourPartners: "",
    ourPartnersDesc: "",
    contactNumber: "",
    contactNumberDesc: "",
    labelFirstInput: "",
    labelSecondInput: "",
    placeholderFirstInput: "",
    placeholderSecondInput: "",
    requestDemo: "",
    lastestNews: "",
    buttonAllnews: "",
  },
  en: {
    zyplAi: "",
    pioneering: "",
    ecosystem: "",
    banks: "",
    zyplScore: "",
    creditScoringSaaS: "",
    b2b2c: "",
    remittanceBased: "",
    guaranteed: "",
    learnMore: "",
    ourResults: "",
    result1: "",
    result2: "",
    result3: "",
    result4: "",
    leadingFinancialInstitutions: "",
    historicalLoansAccumulated: "",
    portfoliUunderwritten: "",
    portfolioCommitted: "",
    ourPartners: "",
    ourPartnersDesc: "",
    contactNumber: "",
    contactNumberDesc: "",
    labelFirstInput: "",
    labelSecondInput: "",
    placeholderFirstInput: "",
    placeholderSecondInput: "",
    requestDemo: "",
    lastestNews: "",
    buttonAllnews: "",
  },
};

const List = () => {
  const [form, setForm] = useState(initialFormState);
  const [pending, setPending] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);
    try {
      await homeApiService
        .update({
          ru: {
            main: {
              description: form.ru.pioneering,
              title: form.ru.zyplAi,
            },
            ecosystemSection: {
              title: form.ru.ecosystem,
              description: form.ru.banks,
              mainSectionTitle: form.ru.zyplScore,
              mainSectionDescription: form.ru.creditScoringSaaS,
              circleSectionsText: [
                form.ru.b2b2c,
                form.ru.remittanceBased,
                form.ru.guaranteed,
              ],
              buttonText: form.ru.learnMore,
            },
            resultsSection: {
              title: form.ru.ourResults,
              sections: [
                {
                  title: form.ru.result1,
                  description: form.ru.leadingFinancialInstitutions,
                },
                {
                  title: form.ru.result2,
                  description: form.ru.historicalLoansAccumulated,
                },
                {
                  title: form.ru.result3,
                  description: form.ru.portfoliUunderwritten,
                },
                {
                  title: form.ru.result4,
                  description: form.ru.portfolioCommitted,
                },
              ],
            },
            partnersSection: {
              title: form.ru.ourPartners,
              description: form.ru.ourPartnersDesc,
            },
            requestDemoSections: {
              title: form.ru.contactNumber,
              description: form.ru.contactNumberDesc,
              labelFirstInput: form.ru.labelFirstInput,
              labelSecondInput: form.ru.labelSecondInput,
              placeholderFirstInput: form.ru.placeholderFirstInput,
              placeholderSecondInput: form.ru.placeholderSecondInput,
              buttonText: form.ru.requestDemo,
            },
            newsSection: {
              title: form.ru.lastestNews,
              buttonText: form.ru.buttonAllnews,
            },
          },
          en: {
            main: {
              description: form.en.pioneering,
              title: form.en.zyplAi,
            },
            ecosystemSection: {
              title: form.en.ecosystem,
              description: form.en.banks,
              mainSectionTitle: form.en.zyplScore,
              mainSectionDescription: form.en.creditScoringSaaS,
              circleSectionsText: [
                form.en.b2b2c,
                form.en.remittanceBased,
                form.en.guaranteed,
              ],
              buttonText: form.en.learnMore,
            },
            resultsSection: {
              title: form.en.ourResults,
              sections: [
                {
                  title: form.en.result1,
                  description: form.en.leadingFinancialInstitutions,
                },
                {
                  title: form.en.result2,
                  description: form.en.historicalLoansAccumulated,
                },
                {
                  title: form.en.result3,
                  description: form.en.portfoliUunderwritten,
                },
                {
                  title: form.en.result4,
                  description: form.en.portfolioCommitted,
                },
              ],
            },
            partnersSection: {
              title: form.en.ourPartners,
              description: form.en.ourPartnersDesc,
            },
            requestDemoSections: {
              title: form.en.contactNumber,
              description: form.en.contactNumberDesc,
              labelFirstInput: form.en.labelFirstInput,
              labelSecondInput: form.en.labelSecondInput,
              placeholderFirstInput: form.en.placeholderFirstInput,
              placeholderSecondInput: form.en.placeholderSecondInput,
              buttonText: form.en.requestDemo,
            },
            newsSection: {
              title: form.en.lastestNews,
              buttonText: form.en.buttonAllnews,
            },
          },
        })
        .then((res) => {
          toast.success(res.message);
        })
        .finally(() => setPending(false));
    } catch (error) {
      setPending(false);
      toast.error("error!");
    }
  };

  React.useEffect(() => {
    setPending(true);
    homeApiService
      .get()
      .then((res) =>
        setForm({
          ru: {
            zyplAi: res.ru.main.title,
            pioneering: res.ru.main.description,
            ecosystem: res.ru.ecosystemSection.title,
            banks: res.ru.ecosystemSection.description,
            zyplScore: res.ru.ecosystemSection.mainSectionTitle,
            creditScoringSaaS: res.ru.ecosystemSection.mainSectionDescription,
            b2b2c: res.ru.ecosystemSection.circleSectionsText[0],
            remittanceBased: res.ru.ecosystemSection.circleSectionsText[1],
            guaranteed: res.ru.ecosystemSection.circleSectionsText[2],
            learnMore: res.ru.ecosystemSection.buttonText,
            ourResults: res.ru.resultsSection.title,
            result1: res.ru.resultsSection.sections[0].title,
            result2: res.ru.resultsSection.sections[1].title,
            result3: res.ru.resultsSection.sections[2].title,
            result4: res.ru.resultsSection.sections[3].title,
            leadingFinancialInstitutions:
              res.ru.resultsSection.sections[0].description,
            historicalLoansAccumulated:
              res.ru.resultsSection.sections[1].description,
            portfoliUunderwritten:
              res.ru.resultsSection.sections[2].description,
            portfolioCommitted: res.ru.resultsSection.sections[3].description,
            ourPartners: res.ru.partnersSection.title,
            ourPartnersDesc: res.ru.partnersSection.description,
            contactNumber: res.ru.requestDemoSections.title,
            contactNumberDesc: res.ru.requestDemoSections.description,
            labelFirstInput: res.ru.requestDemoSections.labelFirstInput,
            labelSecondInput: res.ru.requestDemoSections.labelSecondInput,
            placeholderFirstInput:
              res.ru.requestDemoSections.placeholderFirstInput,
            placeholderSecondInput:
              res.ru.requestDemoSections.placeholderSecondInput,
            requestDemo: res.ru.requestDemoSections.buttonText,
            lastestNews: res.ru.newsSection.title,
            buttonAllnews: res.ru.newsSection.buttonText,
          },
          en: {
            zyplAi: res.en.main.title,
            pioneering: res.en.main.title,
            ecosystem: res.en.ecosystemSection.title,
            banks: res.en.ecosystemSection.description,
            zyplScore: res.en.ecosystemSection.mainSectionTitle,
            creditScoringSaaS: res.en.ecosystemSection.mainSectionDescription,
            b2b2c: res.en.ecosystemSection.circleSectionsText[0],
            remittanceBased: res.en.ecosystemSection.circleSectionsText[1],
            guaranteed: res.en.ecosystemSection.circleSectionsText[2],
            learnMore: res.en.ecosystemSection.buttonText,
            ourResults: res.en.resultsSection.title,
            result1: res.en.resultsSection.sections[0].title,
            result2: res.en.resultsSection.sections[1].title,
            result3: res.en.resultsSection.sections[2].title,
            result4: res.en.resultsSection.sections[3].title,
            leadingFinancialInstitutions:
              res.en.resultsSection.sections[0].description,
            historicalLoansAccumulated:
              res.en.resultsSection.sections[1].description,
            portfoliUunderwritten:
              res.en.resultsSection.sections[2].description,
            portfolioCommitted: res.en.resultsSection.sections[3].description,
            ourPartners: res.en.partnersSection.title,
            ourPartnersDesc: res.en.partnersSection.description,
            contactNumber: res.en.requestDemoSections.title,
            contactNumberDesc: res.en.requestDemoSections.description,
            labelFirstInput: res.en.requestDemoSections.labelFirstInput,
            labelSecondInput: res.en.requestDemoSections.labelSecondInput,
            placeholderFirstInput:
              res.en.requestDemoSections.placeholderFirstInput,
            placeholderSecondInput:
              res.en.requestDemoSections.placeholderSecondInput,
            requestDemo: res.en.requestDemoSections.buttonText,
            lastestNews: res.en.newsSection.title,
            buttonAllnews: res.en.newsSection.buttonText,
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
          "loading..."
        ) : (
          <form className="home" onSubmit={onSubmit}>
            <div className="content">
              <div className="ru">
                <h2>RU</h2>
                <Textarea
                  title={"zypl.ai"}
                  imgSrc={ZyplAi}
                  value={form["ru"].zyplAi}
                  onChange={(zyplAi) =>
                    setForm({ ...form, ru: { ...form["ru"], zyplAi } })
                  }
                />
                <Textarea
                  title={
                    "новаторские синтетические данные для оптимизации кредитного скоринга"
                  }
                  imgSrc={Home2}
                  value={form["ru"].pioneering}
                  onChange={(pioneering) =>
                    setForm({ ...form, ru: { ...form["ru"], pioneering } })
                  }
                />
                <Textarea
                  title={"zypl's ai экосистема"}
                  imgSrc={Home3}
                  value={form["ru"].ecosystem}
                  onChange={(ecosystem) =>
                    setForm({ ...form, ru: { ...form["ru"], ecosystem } })
                  }
                />
                <Textarea
                  title={
                    "Банки строят модели кредитного скоринга, склонные к нормальному распределению - для мира 'черных лебедей', которые являются аномальными"
                  }
                  imgSrc={Home4}
                  value={form["ru"].banks}
                  onChange={(banks) =>
                    setForm({ ...form, ru: { ...form["ru"], banks } })
                  }
                />
                <Textarea
                  title={"zypl.score"}
                  imgSrc={Home5}
                  value={form["ru"].zyplScore}
                  onChange={(zyplScore) =>
                    setForm({ ...form, ru: { ...form["ru"], zyplScore } })
                  }
                />
                <Textarea
                  title={"Кредитный скоринг SaaS"}
                  imgSrc={Home6}
                  value={form["ru"].creditScoringSaaS}
                  onChange={(creditScoringSaaS) =>
                    setForm({
                      ...form,
                      ru: { ...form["ru"], creditScoringSaaS },
                    })
                  }
                />
                <Textarea
                  title={"b2b2c кредитование"}
                  imgSrc={Home8}
                  value={form["ru"].b2b2c}
                  onChange={(b2b2c) =>
                    setForm({ ...form, ru: { ...form["ru"], b2b2c } })
                  }
                />
                <Textarea
                  title={"кредитование на основе денежных переводов"}
                  imgSrc={Home7}
                  value={form["ru"].remittanceBased}
                  onChange={(remittanceBased) =>
                    setForm({ ...form, ru: { ...form["ru"], remittanceBased } })
                  }
                />
                <Textarea
                  title={"гарантированное кредитование"}
                  imgSrc={Home9}
                  value={form["ru"].guaranteed}
                  onChange={(guaranteed) =>
                    setForm({ ...form, ru: { ...form["ru"], guaranteed } })
                  }
                />
                <Textarea
                  title={"Подробнее о zypl.score"}
                  imgSrc={Home10}
                  value={form["ru"].learnMore}
                  onChange={(learnMore) =>
                    setForm({ ...form, ru: { ...form["ru"], learnMore } })
                  }
                />
                <Textarea
                  title={"Наши результаты"}
                  imgSrc={Home11}
                  value={form["ru"].ourResults}
                  onChange={(ourResults) =>
                    setForm({ ...form, ru: { ...form["ru"], ourResults } })
                  }
                />
                <Textarea
                  title={"30+"}
                  imgSrc={Home12}
                  value={form["ru"].result1}
                  onChange={(result1) =>
                    setForm({ ...form, ru: { ...form["ru"], result1 } })
                  }
                />
                <Textarea
                  title={">$5M"}
                  imgSrc={Home13}
                  value={form["ru"].result2}
                  onChange={(result2) =>
                    setForm({ ...form, ru: { ...form["ru"], result2 } })
                  }
                />
                <Textarea
                  title={"$200M+"}
                  imgSrc={Home14}
                  value={form["ru"].result3}
                  onChange={(result3) =>
                    setForm({ ...form, ru: { ...form["ru"], result3 } })
                  }
                />
                <Textarea
                  title={"$1B"}
                  imgSrc={Home15}
                  value={form["ru"].result4}
                  onChange={(result4) =>
                    setForm({ ...form, ru: { ...form["ru"], result4 } })
                  }
                />
                <Textarea
                  title={
                    "Ведущие финансовые учреждения на 12 рынках Евразии, Ближнего Востока и Северной Африки и Юго-Восточной Азии успешно внедрили zypl.score"
                  }
                  imgSrc={Home16}
                  value={form["ru"].leadingFinancialInstitutions}
                  onChange={(leadingFinancialInstitutions) =>
                    setForm({
                      ...form,
                      ru: { ...form["ru"], leadingFinancialInstitutions },
                    })
                  }
                />
                <Textarea
                  title={"исторические кредиты, накопленные в базе данных"}
                  imgSrc={Home17}
                  value={form["ru"].historicalLoansAccumulated}
                  onChange={(historicalLoansAccumulated) =>
                    setForm({
                      ...form,
                      ru: { ...form["ru"], historicalLoansAccumulated },
                    })
                  }
                />
                <Textarea
                  title={
                    "портфель с PAR30+ от 0,6% (кумулятивный показатель за 2 года)"
                  }
                  imgSrc={Home18}
                  value={form["ru"].portfoliUunderwritten}
                  onChange={(portfoliUunderwritten) =>
                    setForm({
                      ...form,
                      ru: { ...form["ru"], portfoliUunderwritten },
                    })
                  }
                />
                <Textarea
                  title={"портфель на 2024-25 гг."}
                  imgSrc={Home19}
                  value={form["ru"].portfolioCommitted}
                  onChange={(portfolioCommitted) =>
                    setForm({
                      ...form,
                      ru: { ...form["ru"], portfolioCommitted },
                    })
                  }
                />
                <Textarea
                  title={"Наши партнеры"}
                  imgSrc={Home20}
                  value={form["ru"].ourPartners}
                  onChange={(ourPartners) =>
                    setForm({
                      ...form,
                      ru: { ...form["ru"], ourPartners },
                    })
                  }
                />
                <Textarea
                  title={"30+ партнеров в 12 странах"}
                  imgSrc={Home21}
                  value={form["ru"].ourPartnersDesc}
                  onChange={(ourPartnersDesc) =>
                    setForm({
                      ...form,
                      ru: { ...form["ru"], ourPartnersDesc },
                    })
                  }
                />
                <Textarea
                  title={
                    "Для получения демо-запроса просто оставьте нам контактный телефон"
                  }
                  imgSrc={Home22}
                  value={form["ru"].contactNumber}
                  onChange={(contactNumber) =>
                    setForm({
                      ...form,
                      ru: { ...form["ru"], contactNumber },
                    })
                  }
                />
                <Textarea
                  title={
                    "Мы будем рады услышать вас. Пожалуйста, заполните эту форму"
                  }
                  imgSrc={Home23}
                  value={form["ru"].contactNumberDesc}
                  onChange={(contactNumberDesc) =>
                    setForm({
                      ...form,
                      ru: { ...form["ru"], contactNumberDesc },
                    })
                  }
                />
                <Textarea
                  title={"Имя"}
                  imgSrc={Home24}
                  value={form["ru"].labelFirstInput}
                  onChange={(labelFirstInput) =>
                    setForm({
                      ...form,
                      ru: { ...form["ru"], labelFirstInput },
                    })
                  }
                />
                <Textarea
                  title={"Заполнитель Имя"}
                  imgSrc={Home25}
                  value={form["ru"].placeholderFirstInput}
                  onChange={(placeholderFirstInput) =>
                    setForm({
                      ...form,
                      ru: { ...form["ru"], placeholderFirstInput },
                    })
                  }
                />
                <Textarea
                  title={"Телефон"}
                  imgSrc={Home26}
                  value={form["ru"].labelSecondInput}
                  onChange={(labelSecondInput) =>
                    setForm({
                      ...form,
                      ru: { ...form["ru"], labelSecondInput },
                    })
                  }
                />
                <Textarea
                  title={"Заполнитель Телефон"}
                  imgSrc={Home27}
                  value={form["ru"].placeholderSecondInput}
                  onChange={(placeholderSecondInput) =>
                    setForm({
                      ...form,
                      ru: { ...form["ru"], placeholderSecondInput },
                    })
                  }
                />
                <Textarea
                  title={"Запрос демо версии"}
                  imgSrc={Home28}
                  value={form["ru"].requestDemo}
                  onChange={(requestDemo) =>
                    setForm({
                      ...form,
                      ru: { ...form["ru"], requestDemo },
                    })
                  }
                />
                <Textarea
                  title={"Последние новости"}
                  imgSrc={Home29}
                  value={form["ru"].lastestNews}
                  onChange={(lastestNews) =>
                    setForm({
                      ...form,
                      ru: { ...form["ru"], lastestNews },
                    })
                  }
                />
                <Textarea
                  title={"Посмотреть все новости"}
                  imgSrc={Home30}
                  value={form["ru"].buttonAllnews}
                  onChange={(buttonAllnews) =>
                    setForm({
                      ...form,
                      ru: { ...form["ru"], buttonAllnews },
                    })
                  }
                />
              </div>

              <div className="en">
                <h2>EN</h2>
                <Textarea
                  title={"zypl.ai"}
                  imgSrc={ZyplAi}
                  value={form["en"].zyplAi}
                  onChange={(zyplAi) =>
                    setForm({ ...form, en: { ...form["en"], zyplAi } })
                  }
                />
                <Textarea
                  title={"pioneering synthetic data to optimize credit scoring"}
                  imgSrc={Home2}
                  value={form["en"].pioneering}
                  onChange={(pioneering) =>
                    setForm({ ...form, en: { ...form["en"], pioneering } })
                  }
                />
                <Textarea
                  title={"zypl's ai ecosystem"}
                  imgSrc={Home3}
                  value={form["en"].ecosystem}
                  onChange={(ecosystem) =>
                    setForm({ ...form, en: { ...form["en"], ecosystem } })
                  }
                />
                <Textarea
                  title={
                    "banks build credit scoring models that are prone to normal distributions - for a world of 'black swans' that are abnormal"
                  }
                  imgSrc={Home4}
                  value={form["en"].banks}
                  onChange={(banks) =>
                    setForm({ ...form, en: { ...form["en"], banks } })
                  }
                />
                <Textarea
                  title={"zypl.score"}
                  imgSrc={Home5}
                  value={form["en"].zyplScore}
                  onChange={(zyplScore) =>
                    setForm({ ...form, en: { ...form["en"], zyplScore } })
                  }
                />
                <Textarea
                  title={"Credit scoring SaaS"}
                  imgSrc={Home6}
                  value={form["en"].creditScoringSaaS}
                  onChange={(creditScoringSaaS) =>
                    setForm({
                      ...form,
                      en: { ...form["en"], creditScoringSaaS },
                    })
                  }
                />
                <Textarea
                  title={"b2b2c lending"}
                  imgSrc={Home8}
                  value={form["en"].b2b2c}
                  onChange={(b2b2c) =>
                    setForm({ ...form, en: { ...form["en"], b2b2c } })
                  }
                />
                <Textarea
                  title={"remittance-based lending"}
                  imgSrc={Home7}
                  value={form["en"].remittanceBased}
                  onChange={(remittanceBased) =>
                    setForm({ ...form, en: { ...form["en"], remittanceBased } })
                  }
                />
                <Textarea
                  title={"guaranteed lending"}
                  imgSrc={Home9}
                  value={form["en"].guaranteed}
                  onChange={(guaranteed) =>
                    setForm({ ...form, en: { ...form["en"], guaranteed } })
                  }
                />
                <Textarea
                  title={"Learn more about zypl.score"}
                  imgSrc={Home10}
                  value={form["en"].learnMore}
                  onChange={(learnMore) =>
                    setForm({ ...form, en: { ...form["en"], learnMore } })
                  }
                />
                <Textarea
                  title={"Our results"}
                  imgSrc={Home11}
                  value={form["en"].ourResults}
                  onChange={(ourResults) =>
                    setForm({ ...form, en: { ...form["en"], ourResults } })
                  }
                />
                <Textarea
                  title={"30+"}
                  imgSrc={Home12}
                  value={form["en"].result1}
                  onChange={(result1) =>
                    setForm({ ...form, en: { ...form["en"], result1 } })
                  }
                />
                <Textarea
                  title={">$5M"}
                  imgSrc={Home13}
                  value={form["en"].result2}
                  onChange={(result2) =>
                    setForm({ ...form, en: { ...form["en"], result2 } })
                  }
                />
                <Textarea
                  title={"$200M+"}
                  imgSrc={Home14}
                  value={form["en"].result3}
                  onChange={(result3) =>
                    setForm({ ...form, en: { ...form["en"], result3 } })
                  }
                />
                <Textarea
                  title={"$1B"}
                  imgSrc={Home15}
                  value={form["en"].result4}
                  onChange={(result4) =>
                    setForm({ ...form, en: { ...form["en"], result4 } })
                  }
                />
                <Textarea
                  title={
                    "leading financial institutions across 12 markets in Eurasia, MENA and South East Asia have successfully deployed zypl.score"
                  }
                  imgSrc={Home16}
                  value={form["en"].leadingFinancialInstitutions}
                  onChange={(leadingFinancialInstitutions) =>
                    setForm({
                      ...form,
                      en: { ...form["en"], leadingFinancialInstitutions },
                    })
                  }
                />
                <Textarea
                  title={"historical loans accumulated in database"}
                  imgSrc={Home17}
                  value={form["en"].historicalLoansAccumulated}
                  onChange={(historicalLoansAccumulated) =>
                    setForm({
                      ...form,
                      en: { ...form["en"], historicalLoansAccumulated },
                    })
                  }
                />
                <Textarea
                  title={
                    "portfolio underwritten with PAR30+ of 0.6% (2-year cumulative)"
                  }
                  imgSrc={Home18}
                  value={form["en"].portfoliUunderwritten}
                  onChange={(portfoliUunderwritten) =>
                    setForm({
                      ...form,
                      en: { ...form["en"], portfoliUunderwritten },
                    })
                  }
                />
                <Textarea
                  title={"portfolio committed for 2024-25"}
                  imgSrc={Home19}
                  value={form["en"].portfolioCommitted}
                  onChange={(portfolioCommitted) =>
                    setForm({
                      ...form,
                      en: { ...form["en"], portfolioCommitted },
                    })
                  }
                />
                <Textarea
                  title={"Our partners"}
                  imgSrc={Home20}
                  value={form["en"].ourPartners}
                  onChange={(ourPartners) =>
                    setForm({
                      ...form,
                      en: { ...form["en"], ourPartners },
                    })
                  }
                />
                <Textarea
                  title={"30+ partners in 12 countries"}
                  imgSrc={Home21}
                  value={form["en"].ourPartnersDesc}
                  onChange={(ourPartnersDesc) =>
                    setForm({
                      ...form,
                      en: { ...form["en"], ourPartnersDesc },
                    })
                  }
                />
                <Textarea
                  title={"For demo request just leave us contact number"}
                  imgSrc={Home22}
                  value={form["en"].contactNumber}
                  onChange={(contactNumber) =>
                    setForm({
                      ...form,
                      en: { ...form["en"], contactNumber },
                    })
                  }
                />
                <Textarea
                  title={
                    "We'd love to hear from you. Please fill out this form."
                  }
                  imgSrc={Home23}
                  value={form["en"].contactNumberDesc}
                  onChange={(contactNumberDesc) =>
                    setForm({
                      ...form,
                      en: { ...form["en"], contactNumberDesc },
                    })
                  }
                />
                <Textarea
                  title={"Name"}
                  imgSrc={Home24}
                  value={form["en"].labelFirstInput}
                  onChange={(labelFirstInput) =>
                    setForm({
                      ...form,
                      en: { ...form["en"], labelFirstInput },
                    })
                  }
                />
                <Textarea
                  title={"placeholder Name"}
                  imgSrc={Home25}
                  value={form["en"].placeholderFirstInput}
                  onChange={(placeholderFirstInput) =>
                    setForm({
                      ...form,
                      en: { ...form["en"], placeholderFirstInput },
                    })
                  }
                />
                <Textarea
                  title={"Phone"}
                  imgSrc={Home26}
                  value={form["en"].labelSecondInput}
                  onChange={(labelSecondInput) =>
                    setForm({
                      ...form,
                      en: { ...form["en"], labelSecondInput },
                    })
                  }
                />
                <Textarea
                  title={"placeholder phone"}
                  imgSrc={Home27}
                  value={form["en"].placeholderSecondInput}
                  onChange={(placeholderSecondInput) =>
                    setForm({
                      ...form,
                      en: { ...form["en"], placeholderSecondInput },
                    })
                  }
                />
                <Textarea
                  title={"Request demo"}
                  imgSrc={Home28}
                  value={form["en"].requestDemo}
                  onChange={(requestDemo) =>
                    setForm({
                      ...form,
                      en: { ...form["en"], requestDemo },
                    })
                  }
                />
                <Textarea
                  title={"Lastest news"}
                  imgSrc={Home29}
                  value={form["en"].lastestNews}
                  onChange={(lastestNews) =>
                    setForm({
                      ...form,
                      en: { ...form["en"], lastestNews },
                    })
                  }
                />
                <Textarea
                  title={"View all news"}
                  imgSrc={Home30}
                  value={form["en"].buttonAllnews}
                  onChange={(buttonAllnews) =>
                    setForm({
                      ...form,
                      en: { ...form["en"], buttonAllnews },
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

export default List;
