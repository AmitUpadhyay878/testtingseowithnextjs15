'use client';
import React, { useEffect, useRef, useState } from 'react';
import Marquee from 'react-fast-marquee';
import styles from './banner.module.scss';
// import { HomePageContent } from '@/components/JsonDataFile/pages/home';
// import ClientsLogoMarquee from '@/components/ClientsLogoMarquee/ClientsLogoMarquee';
// import NavButton from '@/components/NavButton/NavButton';
import WebGLFluidEnhanced from 'webgl-fluid-enhanced';

const HomeBanner = ({content}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const simulation = new WebGLFluidEnhanced(containerRef.current);

    // Configuring the simulation for a clean, smooth transition without blurry or dark effects
    simulation.setConfig({
      simResolution: 900,           // High resolution for better clarity
      dyeResolution: 500,           // Increased dye resolution for better color clarity
      captureResolution: 800,       // High resolution rendering
      densityDissipation: 0.15,     // Slightly slower fade for smoother transitions
      velocityDissipation: 0.05,    // Reduced velocity dissipation for smoother trails
      pressure: 0.1,                // Subtle pressure for smooth flow
      pressureIterations: 0.7,      // Increased iterations for even smoother fluid dynamics
      curl: 0,                      // Light swirl effects for a more natural fluid flow
      splatRadius: 1,             // Focused fluid interactions
      splatForce: 300,              // Reduced splat intensity for smoother effects
      colorUpdateSpeed: 5,          // Faster and smoother color transitions
      backgroundColor: "#000000",   // Clean black background
      colorPalette: ["#FF8BA7", "#B285FC", "#FF8BA7", "#B285FC"], // More colors for better gradients
      transparent: true,            // Transparency enabled for fluid effects
      shading: true,                // Keep shading for depth
      bloom: false,                 // Disable bloom to prevent glowing artifacts
      brightness: 0.2,             // Reduced brightness for a subtler effect
      sunrays: false,               // Disable sunrays to avoid extra effects
      shadowOffsetX: 10,            // Simulate light direction for shadow positioning
      shadowOffsetY: 10,            // Slight Y offset for realistic shadow angle
      shadowBlur: 15,               // Soft blur for smooth shadow transition
      shadowOpacity: 0.8,           // Light shadow opacity for subtle depth
      autoMove: true,               // Enable auto movement if the mouse is not moved
      autoMoveForce: 0.5,           // Light force to move fluid automatically
      autoMoveFrequency: 1000,      // Frequency of auto movement in milliseconds
  });


    simulation.start();

    // Add random splat on hover to simulate fluid interaction
    const handleMouseMove = (event) => {
      const rect = containerRef.current?.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = 1 - (event.clientY - rect.top) / rect.height;
      // simulation?.addSplat(x, y, [1.0, 0.6, 0.8]); // Soft pink fluid for smooth interaction
    };

    containerRef.current?.addEventListener("mousemove", handleMouseMove);

    return () => {
      simulation.stop();
      containerRef.current?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const handleLoad = () => setIsLoaded(true);
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <>
      <section className={`relative ${styles.HomeBannerSection}`} 
       ref={containerRef}
      >
        <div className="container">
          <div className={`mx-auto text-center flex flex-col items-center justify-center ${styles.BannerWrapper}`}>
            <div className="w-full">
              <div className={styles.BannerMarquee}>
                <div className={`${styles.MarqueeList} marquee-list flex items-center flex-nowrap`}>
                {isLoaded ? 
                  (<Marquee pauseOnHover loop={0} className={`${styles.MarqueeItems} flex items-center flex-nowrap mb-0`}>
                    {content?.MarqueeContent?.map((items, i) => (
                      <React.Fragment key={i}>
                        <div className={`${styles.MarqueeText}`}>{items}</div>
                      </React.Fragment>
                    ))}
                  </Marquee>)
                  :
                  (<div className={`${styles.MarqueeItems} flex items-center flex-nowrap mb-0`}>
                    {content?.MarqueeContent?.map((items, i) => (
                      <React.Fragment key={i}>
                        <div className={`${styles.MarqueeText}`}>{items}</div>
                      </React.Fragment>
                    ))}
                  </div>)
                }
                </div>
              </div>
              <h1 className="relative z-[1] mb-4 md:mb-6 xl:mb-8 xxl:mb-10">{content?.Title}</h1>
              <p className="relative z-[1] mb-4 md:mb-6 xl:mb-8 xxl:mb-10">{content?.Description}</p>
              {/* <NavButton href="/contact-us">{content?.BtnText}</NavButton> */}
            </div>
          </div>
        </div>
        {/* <ClientsLogoMarquee /> */}
      </section>
    </>
  );
};

export default HomeBanner;