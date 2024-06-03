declare namespace IIcon {
  interface svgList {
    home: React.ReactNode;
    homeFilled: React.ReactNode;
    receiptSearch: React.ReactNode;
    receiptSearchFilled: React.ReactNode;
    filterTick: React.ReactNode;
    filterTickFilled: React.ReactNode;
    closeFilled: React.ReactNode;
    arrowRight: React.ReactNode;
    arrowLeft: React.ReactNode;
    longArrowLeft: React.ReactNode;
    verify: React.ReactNode;
    verifyFill: React.ReactNode;
    documentFilter: React.ReactNode;
    documentFilterFilled: React.ReactNode;
    logout: React.ReactNode;
    arrowDown: React.ReactNode;
    arrowUp: React.ReactNode;
    tickCircle: React.ReactNode;
    calendar: React.ReactNode;
    visibilityOff: React.ReactNode;
    visibility: React.ReactNode;
    sortDown: React.ReactNode;
    sortUp: React.ReactNode;
    sort: React.ReactNode;
    check: React.ReactNode;
    chevronDown: React.ReactNode;
    trash: React.ReactNode;
  }

  type name = keyof svgList;

  interface props {
    name: name;
    size?: number;
    className?: string;
    x?: string;
  }
}

export default IIcon;
