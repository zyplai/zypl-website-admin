import React from "react";

type IListItem = {
  text: string;
};

interface IEditNews {
  list: IListItem[];
}

const EditNews = ({ list }: IEditNews) => {
  return <div>{list.map((el) => el.text)}</div>;
};

export default EditNews;
