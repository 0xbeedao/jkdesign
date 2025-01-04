export type Testimonial = {
  name: string;
  markdownText: string;
  link?: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Patrick Walsh",
    link: "https://www.patrickwalsh.org/",
    markdownText: `Jessica Kroeze is an indispensable collaborator. 
As a designer and seamstress her attention to detail and knowledge of period
styles and conventions are immensely helpful. Jessica also has a keen emotional
temperature and is very perceptive when thinking about characters in a play and
how they move through their respective worlds. She understands the emotional
journey of a character and how to explore that through an actor's performance
as well as through clothing.`,
  },
];
