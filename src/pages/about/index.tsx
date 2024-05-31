import React, { useState } from "react";
import "./about.scss";
import Eco1 from "../../assets/screenshot/eco1.png";
import Sidebar from "components/sidebar/Sidebar";
import Navbar from "components/navbar/Navbar";
import Textarea from "components/textarea";
import Button from "@mui/material/Button";
import aboutApiService from "service/about";
import { toast } from "react-toastify";
import InfoIcon from "@mui/icons-material/Info";
import partnerApiService from "service/partner";
import ModalCenter from "components/modal-center";
import teamApiService from "service/team";
import Input from "components/input";
import MultiSelect from "components/multi-select";
import { IPartnerGet, ITeamCreateData, ITeamGetData } from "types";

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
const initialFormStateTeam = {
  ru: {
    fullName: "",
    position: "",
  },
  en: {
    fullName: "",
    position: "",
  },
  director: "",
  partnerIds: "",
};

const About = () => {
  const [form, setForm] = useState(initialFormState);
  const [teamForm, setTeamForm] = useState(initialFormStateTeam);
  const [partnerId, setPartnerId] = useState<IPartnerGet[]>([]);
  const [getTeam, setGetTeam] = useState<ITeamGetData[] | null>([]);
  const [getTeamLoading, setGetTeamLoading] = useState(false);
  const [createPartner, setCreatePartner] = React.useState<
    { id: string; name: string }[]
  >([]);
  const [file, setFile] = useState<File | null>(null);
  const [partnerName, setPartnerName] = useState<string>("");
  const [pending, setPending] = useState(false);
  const [dataChanged, setDataChanged] = useState(false);
  const [modalImg, setModalImg] = useState(false);

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

  React.useEffect(() => {
    setGetTeamLoading(true);
    teamApiService
      .get()
      .then((res: ITeamGetData[]) => setGetTeam(res))
      .finally(() => setGetTeamLoading(false));
  }, [dataChanged]);

  // React.useEffect(() => {
  //   setPending(true);
  //   partnerApiService
  //     .get()
  //     .then((res) => {
  //       const ids = res.map((e) => e.id);
  //       setPartnerId(ids);
  //     })
  //     .finally(() => setPending(false));
  // }, [dataChanged]);
  React.useEffect(() => {
    setPending(true);
    partnerApiService
      .get()
      .then((res: IPartnerGet[]) => setPartnerId(res))
      .finally(() => setPending(false));
  }, [dataChanged]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await aboutApiService
        .update({
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
        })
        .then((res) => {
          toast.success(res.message);
          setDataChanged(!dataChanged);
        })
        .finally(() => setPending(false));
    } catch (error) {
      toast.error("error!");
    }
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    } else {
      setFile(null);
    }
  };

  const handleSavePartner = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      alert("Please select an image to upload");
      return;
    }

    const data = {
      name: partnerName,
      file: file,
    };
    try {
      await partnerApiService
        .create(data)
        .then((res) => toast.success(res.message))
        .finally(() => {
          setFile(null);
          setPartnerName("");
        });
      return;
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const handleCreateTeam = async (e: React.FormEvent) => {
    e.preventDefault();
    await teamApiService.create({
      ru: {
        fullName: teamForm.ru.fullName,
        position: teamForm.ru.position,
      },
      en: {
        fullName: teamForm.en.fullName,
        position: teamForm.en.position,
      },
      // director: teamForm.director === "false",
      director: teamForm.director === "false",
      partnerIds: createPartner.map((el) => el.id),
    });
  };

  const handleDeleteTeam = async (id: string) => {
    await teamApiService.delete(`/${id}`).then((res) => {
      toast.success(res.message);
      setDataChanged(!dataChanged);
    })
  };

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        {pending ? (
          "Loading..."
        ) : (
          <>
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
            <form className="formTeam" onSubmit={handleCreateTeam}>
              <div className="contentTeam">
                <div className="ru">
                  <Textarea
                    title="Имя"
                    imgSrc={Eco1}
                    value={teamForm["ru"].fullName}
                    onChange={(fullName) =>
                      setTeamForm({
                        ...teamForm,
                        ru: { ...teamForm["ru"], fullName },
                      })
                    }
                  />
                  <Textarea
                    title="Дольжность"
                    imgSrc={Eco1}
                    value={teamForm["ru"].position}
                    onChange={(position) =>
                      setTeamForm({
                        ...teamForm,
                        ru: { ...teamForm["ru"], position },
                      })
                    }
                  />
                  <Input
                    title="Director"
                    id="director"
                    value={teamForm.director}
                    type="select"
                    onSelect={(option) =>
                      setTeamForm({ ...teamForm, director: option })
                    }
                    options={["Yes", "No"]}
                  />
                </div>
                <div className="ru">
                  <Textarea
                    title="FullName"
                    imgSrc={Eco1}
                    value={teamForm["en"].fullName}
                    onChange={(fullName) =>
                      setTeamForm({
                        ...teamForm,
                        en: { ...teamForm["en"], fullName },
                      })
                    }
                  />
                  <Textarea
                    title="Position"
                    imgSrc={Eco1}
                    value={teamForm["en"].position}
                    onChange={(position) =>
                      setTeamForm({
                        ...teamForm,
                        en: { ...teamForm["en"], position },
                      })
                    }
                  />
                  <div className="">
                    <MultiSelect
                      list={partnerId}
                      selectedList={createPartner.map((el) => el.name)}
                      placeholder="Partner"
                      onClear={() => setCreatePartner([])}
                      onSelect={(id, value) => {
                        if (createPartner.find((el) => el.name === value))
                          setCreatePartner(
                            createPartner.filter((e) => e.name !== value)
                          );
                        else
                          setCreatePartner([
                            ...createPartner,
                            { id: id, name: value },
                          ]);
                      }}
                    />
                  </div>
                </div>
              </div>
              <Button type="submit" className="submitButton">
                Save
              </Button>
            </form>
            <form className="partner" onSubmit={handleSavePartner}>
              <div className="contentPartner">
                <div className="title">
                  <span>Image Partner</span>
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
                      <img
                        src={Eco1}
                        onClick={() => setModalImg(false)}
                        style={{ width: "100%", objectFit: "cover" }}
                      />
                    </div>
                  </ModalCenter>
                </div>
                <div
                  className=""
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Input
                    // className={inputImg}
                    placeholder="Name"
                    type="string"
                    value={partnerName}
                    onInput={(value) => setPartnerName(value)}
                  />
                  <input
                    type="file"
                    className="inputImg"
                    id="file"
                    onChange={handleFileChange}
                  />
                  <img
                    width={"150px"}
                    height={"100px"}
                    style={{ objectFit: "contain" }}
                    src={
                      file
                        ? URL.createObjectURL(file)
                        : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                    }
                    alt=""
                  />
                </div>
                <Button type="submit" className="submitButton">
                  Save
                </Button>
              </div>
            </form>
            {getTeamLoading ? (
              "Loading"
            ) : (
              <div className="team">
                {getTeam?.map((item) => (
                  <div className="managment_card">
                    <img
                      className="image"
                      alt=""
                      src={
                        item.imgUrl ??
                        "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                      }
                    />
                    <div className="footer">
                      <div className="title">{item.en.fullName}</div>
                      <div className="description">{item.en.position}</div>
                      <div className="partners">
                        {item.partnerIds?.map((img) => (
                          <div className="">
                            <img src={img.imgUrl} alt="" />
                          </div>
                        ))}
                      </div>
                      <Button
                        className="delete"
                        onClick={() => handleDeleteTeam(item.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default About;
