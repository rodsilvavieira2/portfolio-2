import { defineStore } from "pinia";
import { v4 as uuidV4 } from "uuid";

export const useAbilitiesStore = defineStore({
  id: "abilities",
  state: () => ({
    abilities: [
      {
        id: uuidV4(),
        label: "React",
        urlSite: "https://reactjs.org/",
      },
      {
        id: uuidV4(),
        label: "Redux",
        urlSite: "https://redux.js.org/",
      },
      {
        id: uuidV4(),
        label: "Styled Components",
        urlSite: "https://styled-components.com/",
      },
      {
        id: uuidV4(),
        label: "Next.js",
        urlSite: "https://nextjs.org/",
      },
      {
        id: uuidV4(),
        label: "Docker",
        urlSite: "https://www.docker.com/",
      },
      {
        id: uuidV4(),
        label: "Html",
        urlSite: "https://www.w3schools.com/html/",
      },
      {
        id: uuidV4(),
        label: "Css",
        urlSite: "https://www.w3schools.com/css/",
      },
      {
        id: uuidV4(),
        label: "Javascript",
        urlSite: "https://www.w3schools.com/js/",
      },
      {
        id: uuidV4(),
        label: "TypeScript",
        urlSite: "https://www.typescriptlang.org/",
      },
      {
        id: uuidV4(),
        label: "Node",
        urlSite: "https://nodejs.org/en/",
      },
      {
        id: uuidV4(),
        label: "Express",
        urlSite: "https://expressjs.com/",
      },
      {
        id: uuidV4(),
        label: "MongoDB",
        urlSite: "https://www.mongodb.com/",
      },
      {
        id: uuidV4(),
        label: "PostgreSQL",
        urlSite: "https://www.postgresql.org/",
      },
      {
        id: uuidV4(),
        label: "Prisma orm",
        urlSite: "https://www.prisma.io/",
      },
      {
        id: uuidV4(),
        label: "Typeorm",
        urlSite: "https://typeorm.io/",
      },
      {
        id: uuidV4(),
        label: "Sequelize",
        urlSite: "https://sequelize.org/",
      },
      {
        id: uuidV4(),
        label: "React query",
        urlSite: "https://react-query.tanstack.com/",
      },
      {
        id: uuidV4(),
        label: "Fire Base",
        urlSite: "https://firebase.google.com/",
      },
      {
        id: uuidV4(),
        label: "FaunaDB",
        urlSite: "https://www.fauna.com/",
      },
    ],
  }),
});
