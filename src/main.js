import "./styles.css";

import "./js/hero";
import "./js/projects";
import "./js/about";

import "locomotive-scroll/dist/locomotive-scroll.css";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin"
import LocomotiveScroll from 'locomotive-scroll';

gsap.registerPlugin(TextPlugin);

const scroll = new LocomotiveScroll();