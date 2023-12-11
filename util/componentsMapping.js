import Record from '../components/home/record';
import Video from '..//components/home/video';
import Banner from '../components/home/banner';
import Testimonials from '../components/home/testimonials';
import Landscape from '../components/home/landscape';
import Portrait from '../components/home/portrait';
import List from '../components/faq/list/list';

export default function renderComponent(key, index, content, block){
    let targetComponent ;
    switch (key) {
        case "home/banner":
            targetComponent = (<Banner key={index} content={content} block={block} />)
            break;
        case "home/video":
            targetComponent = (<Video key={index} content={content} block={block} />)
            break;
        case "home/record":
            targetComponent = (<Record key={index} content={content} block={block} />)
            break;
        case "home/landscape":
            targetComponent = (<Landscape key={index} content={content} block={block} />)
            break;
        case "home/portrait":
            targetComponent = (<Portrait key={index} content={content} block={block} />)
            break;
        case "home/testimonials":
            targetComponent = (<Testimonials key={index} content={content} block={block} />)
            break;
        case "faq/list":
            targetComponent = (<List key={index} content={content} block={block} />)
            break;
        default:
            targetComponent = null;
            break;
    }
    return targetComponent;
}