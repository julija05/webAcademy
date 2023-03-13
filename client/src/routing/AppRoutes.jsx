import {lazy} from 'react';

export const AsyncHome = lazy(()=> import("../ui/pages/HomePage"));
export const AsyncAbout = lazy(()=> import("../ui/pages/About"));