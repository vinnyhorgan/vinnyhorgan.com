import type { ImageMetadata } from 'astro';
import tedx from '../assets/tedx.jpg';
import wisp from '../assets/wisp.png';

export interface Entry {
  id: string;
  title: string;
  when: string;
  body: string;
  links?: { href: string; label: string }[];
  image?: { src: ImageMetadata; alt: string };
}

/* One layer of the stack on the home page, from the top down. */
export interface Layer {
  name: string;
  items: { label: string; href: string; note: string }[];
}

export interface Group {
  name: string;
  intro?: string;
  entries: Entry[];
}

export const talk: Entry = {
  id: 'talk',
  title: 'Can machines think?',
  when: '2024',
  body:
    'My TEDx talk, “Le macchine sono in grado di pensare?”, in Italian: how AI models actually work, and how to use them well. ' +
    'I gave it at TEDxHensemberger Youth, at my old high school in Monza, an event my class and our teacher organised.',
  links: [{ href: 'https://www.youtube.com/watch?v=s2Yfy8a_EcA', label: 'Watch the talk on YouTube' }],
  image: { src: tedx, alt: 'Vinny on the TEDxHensemberger Youth stage, mid-sentence, in a checked jacket' },
};

export const lawFirm: Entry = {
  id: 'law-firm',
  title: 'An AI assistant for a law firm',
  when: '2026',
  body:
    'Built for a lawyer in Milan. It reads the emails and documents of a case, drafts the formal notice in the firm’s own format, ' +
    'then checks the draft against the sources. In use since September 2026; a second, broader version is on the way.',
};

export const pokegb: Entry = {
  id: 'rs-pokegb',
  title: 'rs-pokegb',
  when: '2026',
  body:
    'A Pokémon Blue emulator in a single Rust file: about 5,200 lines, no unsafe code. ' +
    'It replays the world-record tool-assisted speedrun, all 317,695 frames, with no game-state mismatch against SameBoy, the reference emulator.',
};

export const groups: Group[] = [
  {
    name: 'Talks',
    entries: [talk],
  },
  {
    name: 'For people',
    entries: [
      {
        id: 'comune',
        title: 'AI engineer, Comune di Cinisello Balsamo',
        when: '2026',
        body:
          'I work in the CED, the town hall’s IT department, bringing AI into how a public administration works day to day. ' +
          'My first agent reads a draft administrative act and checks it against the rules before it is filed, so fewer come back for corrections. ' +
          'Its first version went up in October 2026.',
      },
      lawFirm,
      {
        id: 'lauzhack',
        title: 'LauzHack 2025',
        when: '2025',
        body: 'A hackathon in Lausanne, which I won with a friend.',
      },
    ],
  },
  {
    name: 'For the love of it',
    entries: [
      pokegb,
      {
        id: 'otto',
        title: 'otto',
        when: '2026',
        body:
          'An 8-bit fantasy console for the browser: the PC Engine configuration NEC never shipped. ' +
          'Cycle-accurate emulator, assembler and debugger, all in one HTML file.',
        links: [{ href: 'https://vinnyhorgan.github.io/otto/', label: 'Open otto' }],
      },
      {
        id: 'xvi',
        title: 'xvi',
        when: '2026',
        body:
          'A portable retro console, specified on paper before any part does anything: a 16-bit MSP430 runs the game, an RP2354B plays the video and sound chips. ' +
          'Its reference emulator is 4,300 lines of C that need nothing, not even libc.',
      },
      {
        id: 'wisp',
        title: 'wisp',
        when: '2026',
        body:
          'rxi’s lite editor with its core rewritten in about 5,000 lines of safe Rust. The Lua on top is lite’s, byte for byte where possible.',
        links: [{ href: 'https://github.com/vinnyhorgan/wisp', label: 'wisp on GitHub' }],
        image: { src: wisp, alt: 'The wisp editor: a file tree on the left, Lua source on the right, dark theme' },
      },
      {
        id: 'div',
        title: 'div',
        when: '2026',
        body: 'A clean-room reimplementation of the Divine Divinity engine, to run the 2002 game on modern systems. In progress.',
      },
      {
        id: 'miniglfw',
        title: 'miniglfw',
        when: '2026',
        body: 'GLFW for Linux in a single C file, with its public headers unchanged.',
        links: [{ href: 'https://github.com/vinnyhorgan/miniglfw', label: 'miniglfw on GitHub' }],
      },
      {
        id: 'iris',
        title: 'Iris',
        when: '2026',
        body: 'My own always-on server and agent setup. My work, my backups and the memory of what I am doing all live there.',
      },
      {
        id: 'upstream',
        title: 'Upstream',
        when: '2025–26',
        body:
          'Small contributions merged into libraries I learned from: a NanoVG backend for sokol, and fixes in raylib and Luau.',
      },
    ],
  },
];

export const layers: Layer[] = [
  {
    name: 'Agents',
    items: [
      { label: 'A drafting assistant', href: '/work#law-firm', note: 'for a law firm in Milan' },
      { label: 'An act checker', href: '/work#comune', note: 'for the Comune di Cinisello Balsamo' },
    ],
  },
  {
    name: 'Editors',
    items: [{ label: 'wisp', href: '/work#wisp', note: 'rxi’s lite, its core rewritten in Rust' }],
  },
  {
    name: 'Libraries',
    items: [
      { label: 'miniglfw', href: '/work#miniglfw', note: 'GLFW for Linux in one C file' },
      { label: 'Patches', href: '/work#upstream', note: 'merged into sokol, raylib and Luau' },
    ],
  },
  {
    name: 'Emulators',
    items: [
      { label: 'rs-pokegb', href: '/work#rs-pokegb', note: 'Pokémon Blue in one Rust file' },
      { label: 'otto', href: '/work#otto', note: 'an 8-bit fantasy console' },
    ],
  },
  {
    name: 'Hardware',
    items: [{ label: 'xvi', href: '/work#xvi', note: 'a portable console, specified chip by chip' }],
  },
];
