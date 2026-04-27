import { heroType } from './hero'
import { statType } from "./stat";
import { serviceType } from "./service";
import { testimonialType } from './testimonial';
import { siteSettingsType } from './siteSettings';
import { contactType } from './contact';
import { navigationType } from './navigation';
import { galleryType } from './gallery';

export const schemaTypes = [
    siteSettingsType,
    navigationType,
    heroType,
    statType,
    serviceType,
    galleryType,
    testimonialType,
    contactType
];