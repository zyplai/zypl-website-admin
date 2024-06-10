const transcript = {
  director: (key: string) =>
    ({
      Yes: true,
      No: false,
      true: "Yes",
      false: "No",
    }[key]),
};

export default transcript;
