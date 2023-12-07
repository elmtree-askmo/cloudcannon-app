import Banner from '../components/home/banner';

export default function renderComponent(key, index, content, page){
    let targetComponent ;
    switch (key) {
        case "home/banner":
            targetComponent = (<Banner key={index} content={content} page={page} />)
            break;
        default:
            targetComponent = null;
            break;
    }
    return targetComponent;
}