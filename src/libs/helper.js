import { useMediaQuery } from "react-responsive";

export const TinyMobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 320 });
  return isMobile ? children : null;
};

export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

export const Tablelet = ({ children }) => {
  const isDesktop = useMediaQuery({ maxWidth: 991 });
  return isDesktop ? children : null;
};

export const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  return isDesktop ? children : null;
};

export const ExtraDesktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1539 });
  return isDesktop ? children : null;
};

export const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
};
