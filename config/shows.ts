export interface Show {
  show: string;
  venue: string;
  location: string;
  date: string;
  notes?: string;
}

export const SHOWS: Show[] = [
  {
    "show": "This is the message Pride show",
    "venue": "Portland Waterfront",
    "location": "Portland OR",
    "date": "2022-06",
  },
  {
    "show": "Social Season Supply Fashion Show",
    "venue": "Viscount Studio",
    "location": "Portland OR",
    "date": "2009-04",
  },
  {
    "show": "Little Black Dress",
    "venue": "Portland Fashion Week",
    "location": "Portland OR",
    "date": "2008-10",
  },
  {
    "show": "Studio SKB Designer",
    "venue": "Portland Fashion Week",
    "location": "Portland OR",
    "date": "2007-10",
  },
  {
    "show": "The Fine Art of Fashion '07",
    "venue": "Portland Art Museum",
    "location": "Portland OR",
    "date": "2007-06",
  },
  {
    "show": "Red Dress",
    "venue": "Velvet Rope",
    "location": "Portland OR",
    "date": "2007-04",
    "notes": "competition winner",
  },
  {
    "show": "Rhythm and Form Dance Event",
    "venue": "Crystal Ballroom",
    "location": "Portland OR",
    "date": "2006-06",
    "notes": "fashion show",
  },
  {
    "show": "Red Dress",
    "venue": "Red Planet",
    "location": "Portland OR",
    "date": "2006-04",
    "notes": "competition winner",
  },
  {
    "show": "Fashion Show",
    "venue": "KPSU Radio Event Benefit",
    "location": "Portland OR",
    "date": "1999-04",
  },
];
