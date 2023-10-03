import { useCallback, useEffect } from "react";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
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
    <div className={styles.landingPage}>
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
        <section className={styles.options1}>
          <div className={styles.denysNevozhaiD68adlemh5qUns} />
          <div className={styles.getApalledByParent}>
            <b className={styles.getApalledBy}>GET APALLED BY</b>
            <b className={styles.rockGarden}>Rock Garden</b>
          </div>
        </section>
        <section className={styles.options2}>
          <div className={styles.zhijianDaiMuunrhz0xmaUnspla} />
          <div className={styles.turnBackTheTimeParent}>
            <b className={styles.getApalledBy}>TURN BACK THE TIME</b>
            <b className={styles.rockGarden}>International Doll Museum</b>
          </div>
        </section>
        <section className={styles.options3}>
          <div className={styles.zhijianDaiNcgpqcasrnuUnspla} />
          <div className={styles.getImpressedByParent}>
            <b className={styles.getApalledBy}>GET IMPRESSED BY</b>
            <b className={styles.rockGarden}>{`Japanese Garden `}</b>
          </div>
        </section>
        <section className={styles.options4}>
          <div className={styles.zhijianDaiNcgpqcasrnuUnspla} />
          <div className={styles.getIntotheSerenityInParent}>
            <b className={styles.getApalledBy}>GET INTOTHE SERENITY IN</b>
            <b className={styles.rockGarden}>Sukhna Lake</b>
          </div>
        </section>
        <section className={styles.info}>
          <img
            className={styles.romeoASlil9ezjwucUnsplash1Icon}
            alt=""
            src="/romeoaslil9ezjwucunsplash-1@2x.png"
            data-animate-on-scroll
          />
          <h2 className={styles.chandigarhStories}>Chandigarh Stories</h2>
          <p className={styles.areYouReady}>
            Are you ready to embark on an unforgettable journey through the
            heart of India's first planned city? Chandigarh, the city beautiful,
            is not just a destination; it's an experience waiting to be
            explored. From its well designed architecture to its lush green
            gardens, Chandigarh is a paradise for travelers seeking a perfect
            blend of urban charm and natural beauty.
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
    </div>
  );
};

export default LandingPage;
