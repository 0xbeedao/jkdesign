export type Review = {
  page: string;
  quote: string;
  attribution: string;
  attributionLink: string;
};

export const REVIEWS: Review[] = [
  {
    page: "/productions/shrew-sunvalley",
    quote: `Costume designer Jessica Bobillot Kroeze is decking actors out in a 
Tudor-Elizabethan wardrob She was inspired by the local nature to create 
the costumes.`,
    attribution: "Eye on Sun Valley",
    attributionLink:
      "https://eyeonsunvalley.com/Story_Reader/9753/'A-Midsummer-Night's-Dream'-to-Turn-Ketchum-Park- to-Fairyland/",
  },
  {
    page: "/productions/sherlock-christmas-carol",
    quote: `[other production crew] and 
    costume designer Jessica Bobillot don't let us down. They provide the 
    ingenious [...] and 
    imaginative costumes that we've come to expect in such holiday entertainments.`,
    attribution: "The Oregonian",
    attributionLink:
      "https://www.oregonlive.com/performance/2012/12/artists_repertory_theatre_revi_1.html",
  },
  {
    page: "/productions/play-about-my-father",
    quote: `Her transformations are supported by a dress by costume designer 
Jessica Kroeze that rivals Cinderella’s for magical properties. It
may look like a plain gray frock at first, but it slowly reveals
itself to be an impressive feat of sewing engineering.`,
    attribution: "Broadway World",
    attributionLink:
      "https://www.broadwayworld.com/portland/article/Review-THE-PLAY-ABOUT-MY-FATHER-at-Fuse-Theatre-Ensemble-20240422",
  },
];
