import { defineStore } from "pinia";
import { v4 as uuidV4 } from "uuid";

export const useProjectsStore = defineStore({
  id: "projects",
  state: () => ({
    projects: [
      {
        id: uuidV4(),
        projectName: "Youtube Clone",
        thumbnail: "/portfolio/youtube.png",
        description:
          "Um clone do Youtube feito com a tecnologia ReactJS. Totalmente responsivo, com implementação de scroll infinito e carregamento de mais itens.",
        role: "Frontend",
        technologies: [
          "Chakra-ui",
          "React",
          "Redux",
          "Typescript",
          "react router v6",
          "Framer motion",
        ],
        onlineUrl: "https://vocal-otter-5853b9.netlify.app",
        githubUrl: "https://github.com/rodsilvavieira2/youtube-clone",
      },
      {
        id: uuidV4(),
        projectName: "Whatsapp Clone",
        thumbnail: "/portfolio/whatsApp.png",
        description: "Um clone do WhatsApp feito com a tecnologia ReactJS",
        role: "Frontend",
        technologies: [
          "Styled components",
          "React",
          "Material-ui",
          "Typescript",
        ],
        onlineUrl: "https://teal-shortbread-2028b9.netlify.app",
        githubUrl: "https://github.com/rodsilvavieira2/whatsapp-clone-ui",
      },
      {
        id: uuidV4(),
        projectName: "Instagram clone",
        thumbnail: "/portfolio/instagram.png",
        description: "Um clone do Instagram feito com a tecnologia ReactJS",
        role: "Frontend",
        technologies: [
          "Styled components",
          "React",
          "Redux",
          "Framer motion",
          "react router v6",
          "Typescript",
        ],
        onlineUrl: "https://lighthearted-horse-65bbcb.netlify.app",
        githubUrl: "https://github.com/rodsilvavieira2/instagram-clone-2",
      },
      {
        id: uuidV4(),
        projectName: "Dashboard-chakra",
        thumbnail: "/portfolio/dashboard-chakra.png",
        description:
          "Um dashboard feito com a tecnologia Chakra-ui e Next.js, e a utilização do react-query para gerencia o estado dos componentes.",
        role: "Frontend",
        technologies: [
          "Chakra-ui",
          "Next.js",
          "React query",
          "React hook form",
          "Typescript",
        ],
        onlineUrl: "https://roaring-wisp-9aa377.netlify.app",
        githubUrl: "https://github.com/rodsilvavieira2/dashboard-chakra",
      },
      {
        id: uuidV4(),
        projectName: "School vue portal",
        thumbnail: "/portfolio/dev-school.png",
        description:
          "Esse é um portal feito com a tecnologia VueJS, com rotas dinâmicas atraves do vue-router. E gerenciamento de estados com vuex.",
        role: "Frontend",
        technologies: ["vue", "vue-router", "vuex", "Typescript"],
        onlineUrl: "https://storied-marzipan-627d48.netlify.app/dashboard",
        githubUrl: "https://github.com/rodsilvavieira2/school-portal-vue",
      },
      {
        id: uuidV4(),
        projectName: "Simple agenda",
        thumbnail: "/portfolio/agenda-app.png",
        description:
          "Um agenda simples com a tecnologia ReactJS e firebase para armazenamento de dados ,upload de arquivos, autenticação por contas google e hosting. ",
        role: "Frontend",
        technologies: [
          "Styled components",
          "React",
          "Firebase",
          "React hook form",
          "React csv",
          "React Modal",
          "React drop zone",
          "React router dom",
          "Framer Motion",
          "Typescript",
        ],
        onlineUrl: "https://agenda-119d4.web.app/authentication",
        githubUrl: "https://github.com/rodsilvavieira2/simple-agenda",
      },
      {
        id: uuidV4(),
        projectName: "Upload de arquivos utilizando node streams",
        thumbnail: "/portfolio/node-upload.gif",
        description:
          "Uma implementação de upload de arquivos no nó usando os novos recursos do nó 16v, como a função de pipeline. A biblioteca socket.io também é usada para monitorar o progresso do upload de cada arquivo. Este projeto nem usa um framework aproveitando apenas bibliotecas e recursos nativos do node.",
        role: "FullStack",
        technologies: ["Node.js", "Socket.io"],
        onlineUrl: undefined,
        githubUrl:
          "https://github.com/rodsilvavieira2/node-upload-implementation",
      },
      {
        id: uuidV4(),
        projectName: "Autenticação completa com JWT",
        thumbnail: "/portfolio/solid.png",
        description:
          "Esta é uma API REST de autenticação , usando JWT (JSON Web Token) para controlar as sessões do usuário. Respeitando os principios SOLID, TDD  e DDD.",
        role: "Backend",
        technologies: [
          "Node.js",
          "Express",
          "JWT",
          "typescript",
          "dasy.js",
          "brcrypt",
          "typeorm",
          "tsyringe",
          "postgresSql",
        ],
        onlineUrl: "https://auth-express-tdd-solid.herokuapp.com/",
        githubUrl:
          "https://github.com/rodsilvavieira2/auth-with-express-solid-tdd",
      },
      {
        id: uuidV4(),
        projectName: "Ignews",
        thumbnail: "/portfolio/ignews.png",
        description:
          "Um blog feito com a tecnologia Next.js, para a autenticação é feito um login através do GitHub OAuth, os posts são apenas liberados para assiantes mensais, para não assiantes são monstrados previews, para efetuar uma assinatur o pagamento é feito via stripe. Dados de logins e assinaturas são armazenados no banco de dados do FaunaDB.",
        role: "Frontend",
        technologies: [
          "Next.js",
          "Stripe",
          "Next-auth",
          "FaunaDB",
          "Typescript",
        ],
        onlineUrl: undefined,
        githubUrl: "https://github.com/rodsilvavieira2/ignews",
      },
    ],
  }),
});
