import Filer from "@cloudcannon/filer";
import { TOP_QUESTIONS_SUBJECTS, TOP_QUESTIONS_SUBJECTS_HIDDEN_FUNC, ALL_TOP_QUESTIONS_FUNC } from "../../../../../../../../constant/topQuestions.contant";
import { MAPPING_PREVIOUS_QUESTIONS } from "../../../../../../../../constant/mappingQuestions.contant";
import { UNDEFINED_INVALID_QUESTIONS } from "../../../../../../../../constant/undefinedInvalidQuestions.contant";
import TopQuestion from "../../../../[question]";
import {  SITEMAP_DOMAIN } from '../../../../../../../../constant/app.constant.js';

const filer = new Filer({ path: "content" });
export default TopQuestion; // reuse the component for rendering questions

export async function getStaticPaths() {
  // get all subjects with hidden
  const subjects = await TOP_QUESTIONS_SUBJECTS_HIDDEN_FUNC(filer);

  const paths = [];
  for (let subject of subjects) {
    const folderPath = `learn/${subject.key}`;
    const files = await filer.listItemSlugs(folderPath);
    if (!files) {
      return {
        notFound: true,
      };
    }
    const filteredFiles = files.filter((file) => !file.includes(".DS_Store"));

    filteredFiles.forEach((file) => {
      const question = file.replace(".md", "");
      const canonical = UNDEFINED_INVALID_QUESTIONS.includes(question); // only select questions from first and second batches

      if(canonical){
        paths.push({
          params: { subject: subject.key, subsubject: subject.key, subquestion: question },
        });
      }
    });
  }

  // patch the previous questions
  for (let obj of MAPPING_PREVIOUS_QUESTIONS) {
    const { previous, question } = obj;
    paths.push({
      params: { subject: previous, subsubject: previous, subquestion: question },
    });
  }

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { subject, subquestion: question } = params;
  const subjects = await TOP_QUESTIONS_SUBJECTS_HIDDEN_FUNC(filer);
  const currentSubject = subjects.find((item) => item.key === subject);
  const filePath = `learn/${currentSubject?.key}/${question}.md`;
  const noIndex = TOP_QUESTIONS_SUBJECTS.find((item) => item.key === currentSubject.key) ? 0 : 1;
  const canonical = `${SITEMAP_DOMAIN}/learn/${subject}/questions/${question}`;

  // Parallel data loading
  const [pageData, studentMd] = await Promise.all([
    (async function (filePath) {
      return new Promise((resolve, reject) => {
        filer
          .getItem(filePath)
          .then((file) => {
            resolve(file);
          })
          .catch(async (error) => {
            // read all questions from file system
            const questions = await ALL_TOP_QUESTIONS_FUNC(filer);
            const newSubject = questions ? questions[question] : null;
            const newFilePath = newSubject ? `learn/${newSubject}/${question}.md` : null;
            const md = newFilePath ? await filer.getItem(newFilePath) : null;
            if(md){
              const obj = MAPPING_PREVIOUS_QUESTIONS.find((item) => item.question === question);
              const currSub = obj ? obj.current : newSubject;
              md.noIndex = 1;
              md.canonical = `${SITEMAP_DOMAIN}/learn/${currSub}/questions/${question}`;
            }
            resolve(md);
          });
      });
    })(filePath),
    filer.getItem("index.md"),
  ]);

  // remove from SEO
  if (pageData && pageData.data && noIndex) pageData.data.noIndex = 1;
  if (pageData && pageData.data) pageData.data.canonical = canonical;

  if (!pageData) {
    return {
      notFound: true,
    };
  }

  const student = studentMd.data.content_blocks.find((block) => block._bookshop_name === "home/slideshow");
  const howItWorksData = studentMd.data.content_blocks.find((block) => block._bookshop_name === "home/howItWorks");

  return {
    props: {
      subjectKey: currentSubject?.key,
      subjectTitle: currentSubject?.title,
      questionKey: question,
      page: {
        en: JSON.parse(JSON.stringify(pageData)),
      },
      student: JSON.parse(JSON.stringify(student)),
      howItWorksData: JSON.parse(JSON.stringify(howItWorksData)),
    },
  };
}
