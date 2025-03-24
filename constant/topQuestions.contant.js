export const TOP_QUESTIONS_SUBJECTS = [
  {
    title: "Accounting and Finance",
    key: "accounting-and-finance",
  },
  {
    title: "Architecture",
    key: "architecture",
  },
  {
    title: "Art History and Literature",
    key: "art-history-and-literature",
  },
  {
    title: "Biology",
    key: "biology",
  },
  {
    title: "Biotechnology",
    key: "biotechnology",
  },
  {
    title: "Business and Management",
    key: "business-and-management",
  },
  {
    title: "Chemistry",
    key: "chemistry",
  },
  {
    title: "College Basketball",
    key: "college-basketball",
  },
  {
    title: "Computer Science",
    key: "computer-science",
  },
  {
    title: "Criminal or Civil Law",
    key: "criminal-or-civil-law",
  },
  {
    title: "Digital Media",
    key: "digital-media",
  },
  {
    title: "Economics",
    key: "economics",
  },
  {
    title: "Education Studies",
    key: "education-studies",
  },
  {
    title: "Engineering",
    key: "engineering",
  },
  {
    title: "Environmental Science",
    key: "environmental-science",
  },
  {
    title: "Health Studies",
    key: "health-studies",
  },
  {
    title: "History of the World",
    key: "history-of-the-world",
  },
  {
    title: "Mathematics",
    key: "mathematics",
  },
  {
    title: "Medicine",
    key: "medicine",
  },
  {
    title: "Movies and Cinematography",
    key: "movies-and-cinematography",
  },
  {
    title: "Nursing",
    key: "nursing",
  },
  {
    title: "Philosophy and Greek Myths",
    key: "philosophy-and-greek-myths",
  },
  {
    title: "Physics",
    key: "physics",
  },
  {
    title: "Politics",
    key: "politics",
  },
  {
    title: "Psychology",
    key: "psychology",
  },
  {
    title: "Sociology",
    key: "sociology",
  },
];

export const TOP_QUESTIONS_SUBJECTS_HIDDEN_FUNC = async (filer) => {
  let subjectFolders = await filer.listItemSlugs(`learn/`);
  subjectFolders = subjectFolders.filter(file => !file.includes('.DS_Store'));
  const subjectKeys = TOP_QUESTIONS_SUBJECTS.map((item) => item.key);
  const diffSubjectKeys = subjectFolders.filter((item) => !subjectKeys.includes(item));
  const titleCaseExclude = (sentence, exceptions = new Set(["and", "or", "of", "the"])) => {
    return sentence
      .replaceAll("-", " ")
      .split(" ")
      .map((word) => (exceptions.has(word.toLowerCase()) ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1)))
      .join(" ");
  };
  const hiddenSubjects = diffSubjectKeys.map((item) => {
    return { title: titleCaseExclude(item), key: item };
  });
  return TOP_QUESTIONS_SUBJECTS.concat(hiddenSubjects).sort((a, b) => a.title.localeCompare(b.title));
};

let cachedQuestions = [];
export const ALL_TOP_QUESTIONS_FUNC = async (filer) => {
  if (cachedQuestions.length > 0) return cachedQuestions;
  const subjects = await TOP_QUESTIONS_SUBJECTS_HIDDEN_FUNC(filer);
  for (const subject of subjects) {
    const questions = await filer.listItemSlugs(`learn/${subject.key}`);
    for (const question of questions) {
      cachedQuestions[question] = subject.key;
    }
  }
  return cachedQuestions;
};
