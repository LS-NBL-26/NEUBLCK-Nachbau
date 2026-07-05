import { registerAstroComponent } from '@cloudcannon/editable-regions/astro';
import IntroText from '../components/IntroText.astro';
import HeroVideo from '../components/HeroVideo.astro';

registerAstroComponent('introtext', IntroText);
registerAstroComponent('herovideo', HeroVideo);