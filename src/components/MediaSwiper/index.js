import PropTypes from 'prop-types';

// material-ui

// third-party
import { FreeMode, Navigation, Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// project imports
import useMediaQueries from 'hooks/useMediaQueries';
import MediaCard from './MediaCard';
import helpers from './helpers';

const MediaSwiper = ({ slideWidth, items = [], ...props }) => {
  const mediaQueries = useMediaQueries();

  const transformValue = (value) => helpers.transformValue(value, mediaQueries);
  const customProps = Object.entries(props).reduce((accum, [key, value]) => ({ ...accum, [key]: transformValue(value) }), {});

  return (
    <Swiper freeMode virtual={false} spaceBetween={20} {...customProps} modules={[FreeMode, Navigation, Virtual]}>
      {items.map((item) => (
        <SwiperSlide key={item.id} virtualIndex={item.id} style={{ width: transformValue(slideWidth) }}>
          <MediaCard width={transformValue(slideWidth)} {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MediaSwiper;

MediaSwiper.propTypes = {
  items: PropTypes.array,
  slideWidth: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.shape({
      xs: PropTypes.number,
      sm: PropTypes.number,
      md: PropTypes.number,
      lg: PropTypes.number,
      xl: PropTypes.number,
    }),
  ]),
};
