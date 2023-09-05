import {
  IconBrandCodepen,
  IconBrandCodesandbox,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
} from '@tabler/icons-react';

// project imports
import * as routes from 'constants/routes';

const config = {
  basename: '',
  defaultPath: routes.HOME,
  fontFamily: `'Roboto', sans-serif`,
  borderRadius: 4,
  seo: {
    siteName: 'iamduc',
    description: '',
  },
  apiKey: '4fb6229be9422aa0c9ada530de02a45d',
  userProfile: {
    firstName: 'Duc',
    lastName: 'Tran',
    email: 'ductran.official@gmail.com',
    phoneNumber: '+84795825129',
    address: {
      value: '961 Hau Giang, 11 Ward, District 6, Ho Chi Minh City',
      country: 'Vietnam',
      city: 'Ho Chi Minh',
      district: 'District 6',
      ward: '11 Ward',
      street: '961 Hau Giang',
    },
    social: {
      facebook: 'https://www.facebook.com/khue.nguyen.986227',
      instagram: 'https://www.instagram.com/kathy_nguyen1707/',
      linkedin: 'https://www.instagram.com/kathy_nguyen1707/',
      skype: 'live:minhduc.tran.sgu',
    },
  },
  socialMedia: [
    {
      name: 'github',
      icon: IconBrandGithub,
      url: 'https://github.com/ductmOfficial',
    },
    {
      name: 'instagram',
      icon: IconBrandInstagram,
      url: 'https://www.instagram.com/ductmofficial',
    },
    {
      name: 'linkedin-in',
      icon: IconBrandLinkedin,
      url: 'https://www.linkedin.com/in/duc-tran-183a56220/',
    },
    {
      name: 'twitter',
      icon: IconBrandTwitter,
      url: 'https://twitter.com/ductmOfficial',
    },
    {
      name: 'codepen',
      icon: IconBrandCodepen,
      url: 'https://codepen.io/ductmofficial',
    },
    {
      name: 'dharmachakra',
      icon: IconBrandCodesandbox,
      url: 'https://www.codewars.com/users/ductm_official',
    },
  ],
  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};

export default config;
