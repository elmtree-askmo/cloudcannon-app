import Video from '..//components/home/video';
import Banner from '../components/home/banner';

export default function renderComponent(key, index, content, block){
    let targetComponent ;
    switch (key) {
        case "home/banner":
            targetComponent = (<Banner key={index} content={content} block={block} />)
            break;
        case "home/video":
            targetComponent = (<Video key={index} content={content} block={block} />)
            break;
        default:
            targetComponent = null;
            break;
    }
    return targetComponent;
}