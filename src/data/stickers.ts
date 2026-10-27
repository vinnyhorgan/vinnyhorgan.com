// Pixel stickers down the sides of the home page, like on a laptop lid.
// Each is one of my things and links to it; one path per colour, so they stay
// clean when tilted. `top` is measured from the top of the page's column.
export interface Sticker {
  href: string;
  label: string;
  side: 'left' | 'right';
  top: string;
  tilt: string;
  offset: string;
  w: number;
  h: number;
  paths: { fill: string; d: string }[];
}

export const stickers: Sticker[] = [
  {
    // handheld
    href: '/work#rs-pokegb',
    label: 'rs-pokegb',
    side: 'left',
    top: '12rem',
    tilt: '-9deg',
    offset: '8.5rem',
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
  {
    // chip
    href: '/work#xvi',
    label: 'xvi',
    side: 'right',
    top: '20rem',
    tilt: '7deg',
    offset: '8rem',
    w: 11,
    h: 10,
    paths: [
      { fill: '#bac2de', d: 'M1 0h1v1h-1zM3 0h1v1h-1zM5 0h1v1h-1zM7 0h1v1h-1zM9 0h1v1h-1zM1 1h1v1h-1zM3 1h1v1h-1zM5 1h1v1h-1zM7 1h1v1h-1zM9 1h1v1h-1zM1 8h1v1h-1zM3 8h1v1h-1zM5 8h1v1h-1zM7 8h1v1h-1zM9 8h1v1h-1zM1 9h1v1h-1zM3 9h1v1h-1zM5 9h1v1h-1zM7 9h1v1h-1zM9 9h1v1h-1z' },
      { fill: '#585b70', d: 'M0 2h11v1h-11zM0 3h11v1h-11zM1 4h10v1h-10zM1 5h10v1h-10zM0 6h1v1h-1zM2 6h9v1h-9zM0 7h11v1h-11z' },
      { fill: '#cdd6f4', d: 'M1 6h1v1h-1z' },
    ],
  },
  {
    // floppy
    href: '/work#wisp',
    label: 'wisp',
    side: 'left',
    top: '29rem',
    tilt: '14deg',
    offset: '7.5rem',
    w: 12,
    h: 12,
    paths: [
      { fill: '#3d5a9e', d: 'M0 0h3v1h-3zM8 0h3v1h-3zM0 1h3v1h-3zM8 1h4v1h-4zM0 2h3v1h-3zM8 2h4v1h-4zM0 3h3v1h-3zM8 3h4v1h-4zM0 4h12v1h-12zM0 5h1v1h-1zM11 5h1v1h-1zM0 6h1v1h-1zM11 6h1v1h-1zM0 7h1v1h-1zM11 7h1v1h-1zM0 8h1v1h-1zM11 8h1v1h-1zM0 9h1v1h-1zM11 9h1v1h-1zM0 10h1v1h-1zM11 10h1v1h-1zM0 11h12v1h-12z' },
      { fill: '#c4c8d4', d: 'M3 0h5v1h-5zM3 1h2v1h-2zM6 1h2v1h-2zM3 2h2v1h-2zM6 2h2v1h-2zM3 3h5v1h-5z' },
      { fill: '#22325c', d: 'M5 1h1v1h-1zM5 2h1v1h-1z' },
      { fill: '#eef1f5', d: 'M1 5h10v1h-10zM1 6h1v1h-1zM9 6h2v1h-2zM1 7h10v1h-10zM1 8h1v1h-1zM7 8h4v1h-4zM1 9h10v1h-10zM1 10h10v1h-10z' },
      { fill: '#9399b2', d: 'M2 6h7v1h-7zM2 8h5v1h-5z' },
    ],
  },
  {
    // mic
    href: '/work#tedx-talk',
    label: 'My TEDx talk',
    side: 'right',
    top: '36rem',
    tilt: '-12deg',
    offset: '6.5rem',
    w: 8,
    h: 14,
    paths: [
      { fill: '#c4c8d4', d: 'M2 0h4v1h-4zM1 1h2v1h-2zM4 1h3v1h-3zM1 2h1v1h-1zM3 2h2v1h-2zM6 2h1v1h-1zM1 3h2v1h-2zM4 3h3v1h-3zM1 4h1v1h-1zM3 4h2v1h-2zM6 4h1v1h-1zM2 5h4v1h-4z' },
      { fill: '#6c7086', d: 'M3 1h1v1h-1zM2 2h1v1h-1zM5 2h1v1h-1zM3 3h1v1h-1zM2 4h1v1h-1zM5 4h1v1h-1z' },
      { fill: '#e62b1e', d: 'M2 6h4v1h-4z' },
      { fill: '#585b70', d: 'M3 7h2v1h-2zM3 8h2v1h-2zM3 9h2v1h-2zM3 10h2v1h-2zM3 11h2v1h-2zM3 12h2v1h-2zM3 13h2v1h-2z' },
    ],
  },
];
