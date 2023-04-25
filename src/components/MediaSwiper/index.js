import PropTypes from 'prop-types';

// material-ui
import Box from '@mui/material/Box';

// third-party
import { FreeMode, Navigation, Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// project imports
import useMediaQueries from 'hooks/useMediaQueries';
import helpers from './helpers';

const MediaSwiper = ({ slideWidth, ...props }) => {
  const mediaQueries = useMediaQueries();

  const transformValue = (value) => helpers.transformValue(value, mediaQueries);
  const customProps = Object.entries(props).reduce((accum, [key, value]) => ({ ...accum, [key]: transformValue(value) }), {});

  return (
    <Swiper freeMode virtual={false} spaceBetween={20} {...customProps} modules={[FreeMode, Navigation, Virtual]}>
      {Array.from({ length: 22 }).map((_, slideContent) => (
        <SwiperSlide key={slideContent} virtualIndex={slideContent} style={{ width: transformValue(slideWidth) }}>
          <Box sx={{ p: 2, minHeight: 130, bgcolor: 'background.default' }}>Slide {slideContent}</Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MediaSwiper;

MediaSwiper.propTypes = {
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
