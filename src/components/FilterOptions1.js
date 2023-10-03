import { useMemo } from "react";
import styles from "./FilterOptions1.module.css";

const FilterOptions1 = ({
  gardenDescription,
  gardenTitle,
  propLeft,
  propWidth,
  propBoxShadow,
  propWidth1,
}) => {
  const options1Style = useMemo(() => {
    return {
      left: propLeft,
      width: propWidth,
    };
  }, [propLeft, propWidth]);

  const denysNevozhaiD68ADLeMh5QUnsStyle = useMemo(() => {
    return {
      boxShadow: propBoxShadow,
    };
  }, [propBoxShadow]);

  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <section className={styles.options1} style={options1Style}>
      <div
        className={styles.denysNevozhaiD68adlemh5qUns}
        style={denysNevozhaiD68ADLeMh5QUnsStyle}
      />
      <div className={styles.getApalledByParent} style={frameDivStyle}>
        <b className={styles.getApalledBy}>{gardenDescription}</b>
        <b className={styles.rockGarden}>{gardenTitle}</b>
      </div>
    </section>
  );
};

export default FilterOptions1;
