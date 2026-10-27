import type { ImageMetadata } from 'astro';
import ferris from '../assets/stickers/ferris.svg';
import tux from '../assets/stickers/tux.svg';
import lauzhack from '../assets/stickers/lauzhack.svg';
import lua from '../assets/stickers/lua.svg';
import ted from '../assets/stickers/ted.svg';
import c from '../assets/stickers/c.svg';
import feynman from '../assets/stickers/feynman.jpg';
import italy from '../assets/stickers/italy.svg';
import ireland from '../assets/stickers/ireland.svg';

// Stickers down the sides of the home page, like on a laptop lid: logos of
// what I use and pixel art of what I've made, each linking to the work it
// stands for, if anything. `top` is measured from the top of the page's column; `x` is how
// far out into the side margin the sticker's centre sits (0 at the column, 1
// at the window's edge), so they stay on screen at any width; `width` is in
// pixels on wide screens. Pixel art is one path per colour, so it stays clean
// when tilted.
//
// Where the logos come from (each used to refer to its project): Ferris,
// rustacean.net (public domain); Tux, Larry Ewing with The GIMP, via Wikimedia
// Commons; LauzHack, github.com/LauzHack/LauzHack.github.io; Lua (without its
// dotted orbit), C (public domain) and TED (the letters of its wordmark),
// Wikimedia Commons; Feynman, his Los Alamos ID badge photo (public domain),
// Wikimedia Commons, cropped to the badge.
export interface PixelArt {
  w: number;
  h: number;
  paths: { fill: string; d: string }[];
}

export interface Sticker {
  label: string;
  href?: string;
  side: 'left' | 'right';
  top: string;
  x: number;
  tilt: string;
  width: number;
  image?: ImageMetadata;
  art?: PixelArt;
  /* A sticker cut as a shape of its own, for logos that need a background. */
  backing?: { color: string; round?: boolean };
}

export const stickers: Sticker[] = [
  {
    label: 'Ferris, the Rust crab',
    href: '/work#rs-pokegb',
    side: 'left',
    top: '0.5rem',
    x: 0.5,
    tilt: '-10deg',
    width: 100,
    image: ferris,
  },
  {
    label: 'Tux, the Linux penguin',
    href: '/work#miniglfw',
    side: 'left',
    top: '8.5rem',
    x: 0.28,
    tilt: '8deg',
    width: 64,
    image: tux,
  },
  {
    label: 'rs-pokegb',
    href: '/work#rs-pokegb',
    side: 'left',
    top: '13rem',
    x: 0.62,
    tilt: '-14deg',
    width: 48,
    art: {
      w: 12,
      h: 16,
      paths: [
        { fill: '#c9c5bc', d: 'M1 0h10v1h-10zM0 1h12v1h-12zM0 2h1v1h-1zM11 2h1v1h-1zM0 3h1v1h-1zM11 3h1v1h-1zM0 4h1v1h-1zM11 4h1v1h-1zM0 5h1v1h-1zM11 5h1v1h-1zM0 6h1v1h-1zM11 6h1v1h-1zM0 7h1v1h-1zM11 7h1v1h-1zM0 8h1v1h-1zM11 8h1v1h-1zM0 9h12v1h-12zM0 10h2v1h-2zM3 10h7v1h-7zM11 10h1v1h-1zM0 11h1v1h-1zM4 11h4v1h-4zM9 11h3v1h-3zM0 12h2v1h-2zM3 12h9v1h-9zM0 13h12v1h-12zM0 14h8v1h-8zM9 14h1v1h-1zM11 14h1v1h-1zM1 15h10v1h-10z' },
        { fill: '#4a4e5c', d: 'M1 2h10v1h-10zM1 3h1v1h-1zM10 3h1v1h-1zM1 4h1v1h-1zM10 4h1v1h-1zM1 5h1v1h-1zM10 5h1v1h-1zM1 6h1v1h-1zM10 6h1v1h-1zM1 7h1v1h-1zM10 7h1v1h-1zM1 8h10v1h-10z' },
        { fill: '#9bbc0f', d: 'M2 3h8v1h-8zM2 4h1v1h-1zM4 4h6v1h-6zM2 5h1v1h-1zM5 5h3v1h-3zM9 5h1v1h-1zM2 6h5v1h-5zM2 7h8v1h-8z' },
        { fill: '#306230', d: 'M3 4h1v1h-1zM3 5h2v1h-2zM8 5h1v1h-1zM7 6h3v1h-3z' },
        { fill: '#2a2a35', d: 'M2 10h1v1h-1zM1 11h3v1h-3zM2 12h1v1h-1zM8 14h1v1h-1zM10 14h1v1h-1z' },
        { fill: '#a6286e', d: 'M10 10h1v1h-1zM8 11h1v1h-1z' },
      ],
    },
  },
  {
    label: 'C',
    href: '/work#xvi',
    side: 'left',
    top: '23rem',
    x: 0.42,
    tilt: '6deg',
    width: 58,
    image: c,
  },
  {
    label: 'LauzHack',
    href: '/work#lauzhack',
    side: 'right',
    top: '7rem',
    x: 0.48,
    tilt: '-4deg',
    width: 140,
    image: lauzhack,
    backing: { color: '#232634' },
  },
  {
    label: 'Lua',
    href: '/work#wisp',
    side: 'right',
    top: '12.5rem',
    x: 0.72,
    tilt: '12deg',
    width: 60,
    image: lua,
  },
  {
    label: 'My TED talk',
    href: '/work#tedx-talk',
    side: 'right',
    top: '19rem',
    x: 0.3,
    tilt: '-6deg',
    width: 96,
    image: ted,
  },
  {
    label: 'Richard Feynman: what I cannot create, I do not understand',
    href: 'https://en.wikipedia.org/wiki/Richard_Feynman',
    side: 'right',
    top: '26.5rem',
    x: 0.5,
    tilt: '-7deg',
    width: 100,
    image: feynman,
  },
  {
    label: 'Italy, where I was born and grew up',
    side: 'left',
    top: '38.5rem',
    x: 0.5,
    tilt: '-6deg',
    width: 66,
    image: italy,
  },
  {
    label: 'Ireland, where my father is from',
    side: 'right',
    top: '43.5rem',
    x: 0.42,
    tilt: '9deg',
    width: 74,
    image: ireland,
  },
];
