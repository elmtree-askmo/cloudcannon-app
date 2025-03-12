import { homeContent } from "../staticProps/home.content";
import { questionsList } from "../staticProps/faq.content";
import { aboutUsContent } from "../staticProps/aboutUs.content";
import { educationContent } from "../staticProps/education.content";
import { pricingContent } from "../staticProps/pricing.content";
import { blogContent } from "../staticProps/blog.content";
import { institutionsContent } from "../staticProps/institutions.content";

import Banner from "../components/home/banner";
import Landscape from "../components/home/landscape";
import Schools from "../components/home/schools";
import List from "../components/faq/list";
import AboutEdkey from "../components/about-us/aboutEdkey";
import FoundingTeam from "../components/about-us/foundingTeam";
import Experience from "../components/about-us/experience";
import HowItWorks from "../components/home/howItWorks";
import Slideshow from "../components/home/slideshow";
import Benefit from "../components/about-us/benefit";
import Partnerships from "../components/about-us/partnerships";
import Introduction from "../components/education/introduction";
import BookMentions from "../components/education/bookMentions";
import Media from "../components/education/media";
import Intro from "../components/plans/intro";
import Pricing from "../components/plans/pricing";
import Contact from "../components/plans/contact";
import BlogHeader from "../components/blog/blogHeader";
import BlogList from "../components/blog/blogList";
import InstitutionsBanner from "../components/institutions/institutionsBanner";
import Briefing from "../components/institutions/briefing";
import EmpowerToSucceed from "../components/institutions/empowerToSucceed";
import LicensingAndSubscriptions from "../components/institutions/licensingAndSubscriptions";
import QuicktakesFeatures from "../components/institutions/quicktakesFeatures";
import QuicktakesTestimonials from "../components/institutions/quicktakesTestimonials";
import LearnHeader from "../components/learn/header";
import LearnList from "../components/learn/list";
import LearnSubjectsList from "@/components/learn/subjects";

const componentMap = {
  'home/banner': (props) => <Banner {...props} content={homeContent} />,
  'home/landscape': (props) => <Landscape {...props} content={homeContent} />,
  'home/schools': (props) => <Schools {...props} content={homeContent} />,
  'home/howItWorks': (props) => <HowItWorks {...props} content={homeContent} />,
  'home/slideshow': (props) => <Slideshow {...props} content={homeContent} />,
  'faq/questionSection': (props) => <List {...props} content={questionsList} />,
  'about-us/aboutEdkey': (props) => <AboutEdkey {...props} content={aboutUsContent} />,
  'about-us/foundingTeam': (props) => <FoundingTeam {...props} content={aboutUsContent} />,
  'about-us/experience': (props) => <Experience {...props} content={aboutUsContent} />,
  'about-us/benefit': (props) => <Benefit {...props} content={aboutUsContent} />,
  'about-us/partnerships': (props) => <Partnerships {...props} content={aboutUsContent} />,
  'education/introduction': (props) => <Introduction {...props} content={educationContent} />,
  'education/bookmentions': (props) => <BookMentions {...props} content={educationContent} />,
  'education/media': (props) => <Media {...props} content={educationContent} />,
  'plans/intro': (props) => <Intro {...props} content={pricingContent} />,
  'plans/pricing': (props) => <Pricing {...props} content={pricingContent} />,
  'plans/contact': (props) => <Contact {...props} content={pricingContent} />,
  'blog/blogHeader': (props) => <BlogHeader {...props} content={blogContent} />,
  'blog/blogList': (props) => <BlogList {...props} content={blogContent} />,
  'institutions/institutionsBanner': (props) => <InstitutionsBanner {...props} content={institutionsContent} />,
  'institutions/briefing': (props) => <Briefing {...props} content={institutionsContent} />,
  'institutions/empowerToSucceed': (props) => <EmpowerToSucceed {...props} content={institutionsContent} />,
  'institutions/licensingAndSubscriptions': (props) => <LicensingAndSubscriptions {...props} content={institutionsContent} />,
  'institutions/quicktakesFeatures': (props) => <QuicktakesFeatures {...props} content={institutionsContent} />,
  'institutions/quicktakesTestimonials': (props) => <QuicktakesTestimonials {...props} content={institutionsContent} />,
  'learn/subjects': (props) => <LearnSubjectsList {...props} content={blogContent} />,
  'learn/header': (props) => <LearnHeader {...props} content={blogContent} />,
  'learn/list': (props) => <LearnList {...props} content={blogContent} />
};

export default function renderComponent(key, index, block, posts, language, mergedPosts, utmParams) {
  const props = {
    key: index,
    block,
    language,
    posts,
    mergedPosts,
    utmParams
  };

  const Component = componentMap[key];
  return Component ? Component(props) : null;
}
