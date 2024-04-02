import Record from '../components/home/record';
import Video from '..//components/home/video';
import Banner from '../components/home/banner';
import Testimonials from '../components/home/testimonials';
import Landscape from '../components/home/landscape';
import Portrait from '../components/home/portrait';
import Schools from '../components/home/schools';
import List from '../components/faq/list';
import AboutEdkey from '../components/about-us/aboutEdkey';
import FoundingTeam from '../components/about-us/foundingTeam';
import Experience from '../components/about-us/experience';
import HowItWorks from '../components/home/howItWorks';
import Slideshow from '../components/home/slideshow';

import { homeContent } from '../staticProps/home.content';
import { questionsList } from '../staticProps/faq.content';
import { aboutUsContent } from '../staticProps/aboutUs.content';

export default function renderComponent(key, index, block){
    let targetComponent ;
    switch (key) {
        case "home/banner":
            targetComponent = (<Banner key={index} content={homeContent} block={block} />)
            break;
        case "home/video":
            targetComponent = (<Video key={index} content={homeContent} block={block} />)
            break;
        case "home/record":
            targetComponent = (<Record key={index} content={homeContent} block={block} />)
            break;
        case "home/landscape":
            targetComponent = (<Landscape key={index} content={homeContent} block={block} />)
            break;
        case "home/portrait":
            targetComponent = (<Portrait key={index} content={homeContent} block={block} />)
            break;
        case "home/testimonials":
            targetComponent = (<Testimonials key={index} content={homeContent} block={block} />)
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
        case "home/schools":
            targetComponent = (<Schools key={index} content={homeContent} block={block} />)
            break;
        case "home/howItWorks":
            targetComponent = (<HowItWorks key={index} content={homeContent} block={block} />)
            break;
        case "home/slideshow":
            targetComponent = (<Slideshow key={index} content={homeContent} block={block} />)
            break;
        default:
            targetComponent = null;
            break;
    }
    return targetComponent;
}