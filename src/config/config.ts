import { IConfig } from "../interfaces/IConfig";

const githubProfile = 'https://github.com/ben-shepherd/';
const githubRepository = `${githubProfile}larascript-framework/`;
const siteDescription = 'A Node.js framework inspired by Laravel, built with TypeScript.';
const env = import.meta.env.VITE_REACT_APP_ENV ?? 'production';
const isDevelopment = env === 'dev' || env === 'development';

const config: IConfig = {
  isDevelopment,
  author: 'Benjamin S',
  githubProfile,
  githubRepository,
  websiteUrl: isDevelopment ? 'http://localhost:5173' : 'https://www.larascriptnode.com',
  siteName: 'Larascript Framework',
  siteDescription,
  meta: {
    title: 'Larascript Framework | Homepage',
    description: siteDescription,
    charset: 'utf8',
    lang: 'en'
  },
  headers: {
    homepage: {
      title: 'Larascript Framework',
      subTitle: siteDescription,
      visibleParts: {
        showTitle: true,
        showSubTitle: true,
        showBetaWarning: true,
        showArrowDown: true
      },
      buttons: [
        {
          text: 'View on GitHub',
          to: githubRepository,
          target: '_blank',
          showGitHubModal: true
        },
        {
          text: 'View Documentation',
          to: '#documentation',
          target: '_self',
          asAnchorElement: true,
        },
        {
          text: 'Developer Blog',
          to: '/blog',
          target: '_self',
        }
      ]
    },
    blog: {
    
      title: 'Developer Blog',
      subTitle: 'Insights, updates, and tips for Larascript Framework developers',
      addtionalClassNames: 'header_developer_blog',
      visibleParts: {
        showTitle: true,
        showSubTitle: true,
        showBetaWarning: false,
        showArrowDown: false,
        showAbstractLines: false,
      },
      buttons: []
    }
  }
}

export default config