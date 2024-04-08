import { homeContent } from '../staticProps/home.content';
import { questionsList } from '../staticProps/faq.content';
import { aboutUsContent } from '../staticProps/aboutUs.content';
import { educationContent } from '../staticProps/education.content';
import { pricingContent } from '../staticProps/pricing.content';

import Banner from '../components/home/banner';
import Landscape from '../components/home/landscape';
import Schools from '../components/home/schools';
import List from '../components/faq/list';
import AboutEdkey from '../components/about-us/aboutEdkey';
import FoundingTeam from '../components/about-us/foundingTeam';
import Experience from '../components/about-us/experience';
import HowItWorks from '../components/home/howItWorks';
import Slideshow from '../components/home/slideshow';
import Benefit from '../components/about-us/benefit';
import Partnerships from '../components/about-us/partnerships';
import Introduction from '../components/education/introduction';
import BookMentions from '../components/education/bookMentions';
import Media from '../components/education/media';
import Intro from '../components/pricing/intro';
import Pricing from '../components/pricing/pricing';
import Contact from '../components/pricing/contact';

export default function renderComponent(key, index, block){
    let targetComponent ;
    switch (key) {
        case "home/banner":
            targetComponent = (<Banner key={index} content={homeContent} block={block} />)
            break;
        case "home/landscape":
            targetComponent = (<Landscape key={index} content={homeContent} block={block} />)
            break;
        case "home/schools":
            targetComponent = (<Schools key={index} content={homeContent} block={block} />)
            break;
        case "home/howItWorks":
            targetComponent = (<HowItWorks key={index} content={homeContent} block={block} />)
            break;
        case "home/slideshow":
            targetComponent = (<Slideshow key={index} content={homeContent} block={block} />)
            break;
        case "faq/questionSection":
            targetComponent = (<List key={index} content={questionsList} block={block} />)
            break;
        case "about-us/aboutEdkey":
            targetComponent = (<AboutEdkey key={index} content={aboutUsContent} block={block} />)
            break;
        case "about-us/foundingTeam":
            targetComponent = (<FoundingTeam key={index} content={aboutUsContent} block={block} />)
            break;
        case "about-us/experience":
            targetComponent = (<Experience key={index} content={aboutUsContent} block={block} />)
            break;
        case "about-us/benefit":
            targetComponent = (<Benefit key={index} content={aboutUsContent} block={block} />)
            break;
        case "about-us/partnerships":
            targetComponent = (<Partnerships key={index} content={aboutUsContent} block={block} />)
            break;
        case "education/introduction":
            targetComponent = (<Introduction key={index} content={educationContent} block={block} />)
            break;
        case "education/bookmentions":
            targetComponent = (<BookMentions key={index} content={educationContent} block={block} />)
            break;
        case "education/media":
            targetComponent = (<Media key={index} content={educationContent} block={block} />)
            break;
        case "pricing/intro":
            targetComponent = (<Intro key={index} content={pricingContent} block={block} />)
            break;
        case "pricing/pricing":
            targetComponent = (<Pricing key={index} content={pricingContent} block={block} />)
            break;
        case "pricing/contact":
            targetComponent = (<Contact key={index} content={pricingContent} block={block} />)
            break;
        default:
            targetComponent = null;
            break;
    }
    return targetComponent;
}