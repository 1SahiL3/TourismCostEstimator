import { useCallback, useEffect } from "react";
import FilterOptions1 from "./FilterOptions1";
import styles from "./Property1Default.module.css";

const Property1Default = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onContactUsClick = useCallback(() => {
    // Please sync "Frame 4" to the project
  }, []);

  const onTravelCostClick = useCallback(() => {
    // Please sync "Frame 2" to the project
  }, []);

  const onDestinationsClick = useCallback(() => {
    // Please sync "Frame 3" to the project
  }, []);

  return (
    <div className={styles.property1default} data-animate-on-scroll>
      <img
        className={styles.property1defaultChild}
        alt=""
        src="/rectangle-1@2x.png"
      />
      <header className={styles.header}>
        <button className={styles.contactUs} onClick={onContactUsClick}>
          Contact Us
        </button>
        <button className={styles.travelCost} onClick={onTravelCostClick}>
          Travel Cost
        </button>
        <button className={styles.destinations} onClick={onDestinationsClick}>
          Destinations
        </button>
        <textarea className={styles.enhanceYouTravel} />
        <section className={styles.search}>
          <div className={styles.searchChild} />
          <div className={styles.searchParent}>
            <b className={styles.search1}>SEARCH...</b>
            <img className={styles.searchIcon} alt="" src="/search.svg" />
          </div>
        </section>
        <div className={styles.exploreButton}>
          <div className={styles.exploreButtonChild} />
          <button className={styles.explore}>EXPLORE</button>
        </div>
      </header>
      <h1 className={styles.wanderwise}>WANDERWISE</h1>
      <FilterOptions1
        gardenDescription="GET APALLED BY"
        gardenTitle="Rock Garden"
      />
      <FilterOptions1
        gardenDescription="TURN BACK THE TIME"
        gardenTitle="International Doll Museum"
        propLeft="506px"
        propWidth="351px"
        propBoxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        propWidth1="262px"
      />
      <FilterOptions1
        gardenDescription="GET IMPRESSED BY"
        gardenTitle="Japanese Garden "
        propLeft="906px"
        propWidth="262px"
        propBoxShadow="unset"
        propWidth1="173px"
      />
      <FilterOptions1
        gardenDescription="GET INTOTHE SERENITY IN"
        gardenTitle="Sukhna Lake"
        propLeft="1346px"
        propWidth="312px"
        propBoxShadow="unset"
        propWidth1="223px"
      />
      <section className={styles.info}>
        <img
          className={styles.romeoASlil9ezjwucUnsplash1Icon}
          alt=""
          src="/romeoaslil9ezjwucunsplash-1@2x.png"
          data-animate-on-scroll
        />
        <h2 className={styles.chandigarhStories}>Chandigarh Stories</h2>
        <p className={styles.areYouReady}>
          Are you ready to embark on an unforgettable journey through the heart
          of India's first planned city? Chandigarh, the city beautiful, is not
          just a destination; it's an experience waiting to be explored. From
          its well designed architecture to its lush green gardens, Chandigarh
          is a paradise for travelers seeking a perfect blend of urban charm and
          natural beauty.
        </p>
        <nav className={styles.sector17Parent}>
          <div className={styles.sector17}>Sector 17</div>
          <div className={styles.sector19}>Sector 19</div>
          <div className={styles.sector1}>Sector 1</div>
        </nav>
        <button className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <b className={styles.planAVisit}>Plan A Visit</b>
        </button>
      </section>
      <div className={styles.scrol}>
        <div className={styles.scrolChild} />
        <div className={styles.scrolItem} />
        <div className={styles.explore1}>Explore</div>
      </div>
    </div>
  );
};

export default Property1Default;
