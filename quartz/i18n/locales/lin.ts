import { Translation } from "./definition"

export default {
  propertyDefaults: {
    title: "sine titŭlu",
    description: "sine descriptio",
  },
  components: {
    callout: {
      note: "nota",
      abstract: "compendium",
      info: "informatio",
      todo: "pro facĕre",
      tip: "consilium",
      success: "exĭtu",
      question: "quaestio",
      warning: "signum",
      failure: "falla",
      danger: "pericŭlum",
      bug: "error",
      example: "exemplum",
      quote: "citatio",
    },
    backlinks: {
      title: "retrovincŭlum",
      noBacklinksFound: "non habe discooperatu retrovincŭlum esse",
    },
    themeToggle: {
      lightMode: "modu claru",
      darkMode: "modu obscūru",
    },
    explorer: {
      title: "explorātor",
    },
    footer: {
      createdWith: "creātu cum",
    },
    graph: {
      title: "vista graphĭca",
    },
    recentNotes: {
      title: "notas recentas",
      seeRemainingMore: ({ remaining }) => `videa ${remaining} plus →`,
    },
    transcludes: {
      transcludeOf: ({ targetSlug }) => `transcluitu ${targetSlug}-g`,
      linkToOriginal: "vincŭlum ad l'origināli",
    },
    search: {
      title: "explorāre",
      searchBarPlaceholder: "explora alĭre",
    },
    tableOfContents: {
      title: "tabŭla continitus-ga",
    },
    contentMeta: {
      readingTime: ({ minutes }) => `lege in ${minutes} min`,
    },
  },
  pages: {
    rss: {
      recentNotes: "notas recentas",
      lastFewNotes: ({ count }) => `ultĭmas ${count} notas`,
    },
    error: {
      title: "non habe discooperatu esse.",
      notFound: "hac pagĭna aut esse privāta aut non esse.",
      home: "retrocede ad la pagĭna principāla",
    },
    folderContent: {
      folder: "carpet",
      itemsUnderFolder: ({ count }) =>
        count === 1 ? "1 articŭlu in hec carpet." : `${cunt} articŭlus in hec carpet.`,
    },
    tagContent: {
      tag: "tag",
      tagIndex: "index tags-ge",
      itemsUnderTag: ({ count }) =>
        count === 1 ? "1 artículu cum hac tag." : `${count} artículu cum hac tag.`,
      showingFirst: ({ count }) => `monstrāntu las primarias ${count} tags.`,
      totalTags: ({ count }) => `habe discooperatu ${count} tags in totali esse.`,
    },
  },
} as const satisfies Translation
