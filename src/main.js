import "./styles.css";

/* Icons */
import tetraIcon from './assets/img/icon-tetra.svg?raw';
document.querySelector('.c-icon__container.--tetra').innerHTML = tetraIcon;

import cubeIcon from './assets/img/icon-cube.svg?raw';
document.querySelector('.c-icon__container.--cube').innerHTML = cubeIcon;

import octaIcon from './assets/img/icon-octa.svg?raw';
document.querySelector('.c-icon__container.--octa').innerHTML = octaIcon;

import dodecaIcon from './assets/img/icon-dodeca.svg?raw';
document.querySelector('.c-icon__container.--doceca').innerHTML = dodecaIcon;

import icosaIcon from './assets/img/icon-icosa.svg?raw';
document.querySelector('.c-icon__container.--icosa').innerHTML = icosaIcon;

import "locomotive-scroll/dist/locomotive-scroll.css";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from 'locomotive-scroll';

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

const scroll = new LocomotiveScroll();

/* Sections */
import "./js/hero";
import "./js/projects";
import "./js/about";