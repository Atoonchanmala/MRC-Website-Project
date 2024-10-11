import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const ScrollTransitionTop = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  return <> {children} </>;
};

ScrollTransitionTop.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ScrollTransitionTop;
