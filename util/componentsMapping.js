import { homeContent } from '../staticProps/home.content';
import { questionsList } from '../staticProps/faq.content';
import { aboutUsContent } from '../staticProps/aboutUs.content';
import { educationContent } from '../staticProps/education.content';
import { pricingContent } from '../staticProps/pricing.content';
import { blogContent } from '../staticProps/blog.content';
import { institutionsContent } from '../staticProps/institutions.content';

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
import Intro from '../components/plans/intro';
import Pricing from '../components/plans/pricing';
import Contact from '../components/plans/contact';
import BlogHeader from '../components/blog/blogHeader';
import BlogList from '../components/blog/blogList';
import InstitutionsBanner from '../components/institutions/institutionsBanner';
import Briefing from '../components/institutions/briefing';
import EmpowerToSucceed from '../components/institutions/empowerToSucceed';
import LicensingAndSubscriptions from '../components/institutions/licensingAndSubscriptions';
import QuicktakesFeatures from '../components/institutions/quicktakesFeatures';
import QuicktakesTestimonials from '../components/institutions/quicktakesTestimonials';


export default function renderComponent(key, index, block, posts, language){
    let targetComponent ;
    switch (key) {
        case "home/banner":
            targetComponent = (<Banner key={index} content={homeContent} block={block} language={language} />)
            break;
        case "home/landscape":
            targetComponent = (<Landscape key={index} content={homeContent} block={block} language={language} />)
            break;
        case "home/schools":
            targetComponent = (<Schools key={index} content={homeContent} block={block} language={language} />)
            break;
        case "home/howItWorks":
            targetComponent = (<HowItWorks key={index} content={homeContent} block={block} language={language} />)
            break;
        case "home/slideshow":
            targetComponent = (<Slideshow key={index} content={homeContent} block={block} language={language} />)
            break;
        case "faq/questionSection":
            targetComponent = (<List key={index} content={questionsList} block={block} language={language} />)
            break;
        case "about-us/aboutEdkey":
            targetComponent = (<AboutEdkey key={index} content={aboutUsContent} block={block} language={language} />)
            break;
        case "about-us/foundingTeam":
            targetComponent = (<FoundingTeam key={index} content={aboutUsContent} block={block} language={language} />)
            break;
        case "about-us/experience":
            targetComponent = (<Experience key={index} content={aboutUsContent} block={block} language={language} />)
            break;
        case "about-us/benefit":
            targetComponent = (<Benefit key={index} content={aboutUsContent} block={block} language={language} />)
            break;
        case "about-us/partnerships":
            targetComponent = (<Partnerships key={index} content={aboutUsContent} block={block} language={language} />)
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
        case "plans/intro":
            targetComponent = (<Intro key={index} content={pricingContent} block={block} language={language} />)
            break;
        case "plans/pricing":
            targetComponent = (<Pricing key={index} content={pricingContent} block={block} language={language} />)
            break;
        case "plans/contact":
            targetComponent = (<Contact key={index} content={pricingContent} block={block} language={language} />)
            break;
        case "blog/blogHeader":
            targetComponent = (<BlogHeader key={index} content={blogContent} block={block} />)
            break;
        case "blog/blogList":
            targetComponent = (<BlogList key={index} content={blogContent} block={block} posts={posts} />)
            break;
        case "institutions/institutionsBanner":
            targetComponent = (<InstitutionsBanner key={index} content={institutionsContent} block={block} />)
            break;
        case "institutions/briefing":
            targetComponent = (<Briefing key={index} content={institutionsContent} block={block} />)
            break;
        case "institutions/empowerToSucceed":
            targetComponent = (<EmpowerToSucceed key={index} content={institutionsContent} block={block} />)
            break;
        case "institutions/licensingAndSubscriptions":
            targetComponent = (<LicensingAndSubscriptions key={index} content={institutionsContent} block={block} />)
            break;
        case "institutions/quicktakesFeatures":
            targetComponent = (<QuicktakesFeatures key={index} content={institutionsContent} block={block} />)
            break;
        case "institutions/quicktakesTestimonials":
            targetComponent = (<QuicktakesTestimonials key={index} content={institutionsContent} block={block} />)
            break;
        default:
            targetComponent = null;
            break;
    }
    return targetComponent;
}