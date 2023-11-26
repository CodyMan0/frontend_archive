// import SaasUIGlyph from '@/components/saas-ui-glyph'
// import Logo from '../components/saas-ui'
// import NbaseGlyph from '@/components/nbase-glyph'
// import NbaseLogo from '@/components/nbaseLogo'

const baseUrl = 'https://github.com/saas-js/saas-ui'

const siteConfig = {
  logo: undefined,
  logoIcon: undefined,
  copyright: `Copyright © ${new Date().getFullYear()} Appulse Software B.V. All Rights Reserved.`,
  author: {
    name: 'leejuyoung',
    github: 'https://github.com/CodyMan0',
    twitter: undefined,
    linkedin: 'https://www.linkedin.com/in/brian0/',
    email: 'githubcodyman0@gmail.com',
  },
  repo: {
    url: baseUrl,
    editUrl: `${baseUrl}/edit/main/website/pages`,
    blobUrl: `${baseUrl}/blob/main`,
  },
  discord: {
    url: 'https://discord.gg/saas-ui',
  },
  youtube: 'https://www.youtube.com/channel/UCdCi9VPceeFKYkKpS0K0Pjg',
  seo: {
    title: 'Living Stone',
    titleTemplate: '%s - Living Stone',
    description: 'Advanced UI components ',
    siteUrl: 'https://saas-ui.dev',
    twitter: {
      handle: '@Pagebakers',
      site: '@saas_js',
      cardType: 'summary_large_image',
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://saas-ui.dev',
      title: 'Saas UI',
      description: 'An advanced component library for SaaS companies.',
      site_name: 'Saas UI: An advanced component library for SaaS companies.',
      images: [
        {
          url: 'https://saas-ui.dev/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Saas UI: An advanced component library for SaaS companies.',
        },
      ],
    },
  },
}

export default siteConfig
