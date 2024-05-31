import React from "react";
import classNames from "classnames";
import { CSSTransition } from "react-transition-group";

import Icon from "icons";
import styles from "./multi-select.module.scss";
import RippleBox from "daler-ripple-box";

interface IMultiSelectProps {
  list: { id: string; name: string }[];
  onClear: () => void;
  placeholder: string;
  selectedList: string[];
  onSelect: (id: string, value: string) => void;
}

const MultiSelect = ({
  list,
  onClear,
  onSelect,
  placeholder,
  selectedList,
}: IMultiSelectProps) => {
  const searchRef = React.useRef<HTMLInputElement | null>(null);

  const [opened, setOpened] = React.useState(false);

  const handleSelect = (id: string, user: string) => {
    onSelect(id, user);
  };

  const handleClear = () => {
    setOpened(false);
    onClear();
  };

  const handleDone = () => {
    setOpened(false);
  };

  React.useEffect(() => {
    if (opened) searchRef.current?.focus();
  }, [opened]);

  return (
    <div className={classNames(styles.multiSelect, opened && styles.opened)}>
      <button
        type="button"
        className={classNames(
          styles.label,
          selectedList.length > 0 && styles.focus
        )}
        onClick={() => setOpened(!opened)}
      >
        <div className={styles.placeholder}>{placeholder}</div>
        {selectedList.map((item) => (
          <div className={styles.placeholderItem} key={item}>
            {item}
          </div>
        ))}
        <div className={styles.arrow}>
          <Icon name="chevronDown" />
        </div>
      </button>
      <CSSTransition
        in={opened}
        unmountOnExit
        timeout={150}
        classNames={{
          enter: styles.enter,
          enterActive: styles.enterActive,
          exit: styles.exit,
          exitActive: styles.exitActive,
        }}
      >
        <Menu
          list={list}
          ref={searchRef}
          handleDone={handleDone}
          handleClear={handleClear}
          handleSelect={handleSelect}
          selectedList={selectedList}
        />
      </CSSTransition>
      {opened && (
        <div className={styles.cover} onMouseDown={() => setOpened(false)} />
      )}
    </div>
  );
};

interface IMenuProps {
  list: { id: string; name: string }[];
  selectedList: string[];
  handleDone: () => void;
  handleClear: () => void;
  handleSelect: (id: string, name: string) => void;
}
const Menu = React.forwardRef<HTMLInputElement, IMenuProps>(
  (
    { list, selectedList, handleDone, handleSelect, handleClear },
    searchRef
  ) => {
    const [search, setSearch] = React.useState("");
    const [filteredList, setFilteredList] = React.useState(list);

    React.useEffect(() => {
      setFilteredList(
        list.filter(
          (el) => el.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
        )
      );
    }, [list, search]);

    return (
      <div className={styles.menu}>
        <div className={styles.tools}>
          <input
            ref={searchRef}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="search..."
            className={styles.search}
          />
          <RippleBox rippleColor="rgba(29, 129, 228, 0.2)">
            {(ref, contentRef) => (
              <button
                ref={ref}
                type="button"
                className={styles.buttonClear}
                onClick={handleClear}
              >
                <pre ref={contentRef}>Clear</pre>
              </button>
            )}
          </RippleBox>
          <RippleBox>
            {(ref, contentRef) => (
              <button
                ref={ref}
                type="button"
                className={styles.buttonDone}
                onClick={handleDone}
              >
                <pre ref={contentRef}>Done</pre>
              </button>
            )}
          </RippleBox>
        </div>
        {filteredList.map((item) => (
          <RippleBox key={item.id}>
            {(ref, contentRef) => (
              <button
                ref={ref}
                type="button"
                className={styles.item}
                onClick={() => handleSelect(item.id, item.name)}
              >
                <div className={styles.check}>
                  {selectedList.find((el) => el === item.name) && (
                    <Icon name="check" size={14} />
                  )}
                </div>
                <pre ref={contentRef}>{item.name}</pre>
              </button>
            )}
          </RippleBox>
        ))}
      </div>
    );
  }
);

export default MultiSelect;
