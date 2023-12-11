import Record from '../components/home/record';
import Video from '..//components/home/video';
import Banner from '../components/home/banner';
import Testimonials from '../components/home/testimonials';
import Landscape from '../components/home/landscape';
import Portrait from '../components/home/portrait';
import List from '../components/faq/list';

import { homeContent } from '../staticProps/home.content';
import { questionsList } from '../staticProps/faq.content';

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
        case "faq/list":
            targetComponent = (<List key={index} content={questionsList} block={block} />)
            break;
        default:
            targetComponent = null;
            break;
    }
    return targetComponent;
}