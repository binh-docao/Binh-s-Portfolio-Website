import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Seo from '../components/Seo';
import { useTheme } from 'next-themes';

const Preview = () => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    handleDemoItemClick(theme);
  }, []);

  var settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
    ],
  };

  const demoItems = [
    {
      id: 1,
      img: '/img/intro/light.png',
      title: 'Light Demo',
    },
    {
      id: 2,
      img: '/img/intro/dark.png',
      title: 'Dark Demo',
    },
  ];

  const handleDemoItemClick = (mode) => {
    setTheme(mode);
    router.push('/home');
  };

  return (
    <>
      <Seo pageTitle="Preview" />
      {/* End page title for seo */}
      <div className="tokyo_tm_all_wrap">
        <div className="tokyo_tm_intro">
          {/* ... Existing code ... */}

          <div className="container">
            <Slider {...settings}>
              {demoItems.map((item) => {
                const mode = item.id % 2 === 0 ? 'dark' : 'light';
                return (
                  <div
                    className="left"
                    key={item.id}
                    onClick={() => handleDemoItemClick(mode)}
                  >
                    {/* ... Existing code ... */}
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preview;
