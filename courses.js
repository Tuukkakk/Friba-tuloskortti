const courses = [
  {
    name: "Utran frisbeegolfrata",
    par: "60",
    holes: [],
  },
  {
    name: "Lykynlammen frisbeegolfrata-Blue",
    par: "69",
    holes: [],
  },
  {
    name: "Lykynlammen frisbeegolfrata-Gold",
    par: "69",
    holes: [],
  },
  {
    name: "Kontiorannan frisbeegolfrata",
    par: "69",
    holes: [],
  },
  {
    name: "Paiholan frisbeegolfrata",
    par: "69",
    holes: [],
  },
];

courses.forEach((course) => {
  switch (course.name) {
    //Add holes for utra
    case "Utran frisbeegolfrata":
      course.holes.push({
        number: 1,
        meters: 153,
        par: 4,
        imgLink:
          "https://frisbeegolfradat.fi/files/2015/08/utra-1-opaste-2015.jpg",
      });
      course.holes.push({
        number: 2,
        meters: 167,
        par: 4,
        imgLink:
          "https://frisbeegolfradat.fi/files/2015/08/utra-2-opaste-2015.jpg",
      });
      course.holes.push({
        number: 3,
        meters: 153,
        par: 4,
        imgLink:
          "https://frisbeegolfradat.fi/files/2015/08/utra-3-opaste-2015.jpg",
      });
      course.holes.push({
        number: 4,
        meters: 111,
        par: 3,
        imgLink:
          "https://frisbeegolfradat.fi/files/2015/08/utra-4-opaste-2015.jpg",
      });
      course.holes.push({
        number: 5,
        meters: 87,
        par: 3,
        imgLink:
          "https://frisbeegolfradat.fi/files/2015/08/utra-5-opaste-2015.jpg",
      });
      course.holes.push({
        number: 6,
        meters: 96,
        par: 3,
        imgLink:
          "https://frisbeegolfradat.fi/files/2015/08/utra-6-opaste-2015.jpg",
      });
      course.holes.push({
        number: 7,
        meters: 148,
        par: 4,
        imgLink:
          "https://frisbeegolfradat.fi/files/2015/08/utra-7-opaste-2015.jpg",
      });
      course.holes.push({
        number: 8,
        meters: 82,
        par: 3,
        imgLink:
          "https://frisbeegolfradat.fi/files/2015/08/utra-8-opaste-2015.jpg",
      });
      course.holes.push({
        number: 9,
        meters: 91,
        par: 3,
        imgLink:
          "https://frisbeegolfradat.fi/files/2015/08/utra-9-opaste-2015.jpg",
      });
      course.holes.push({
        number: 10,
        meters: 88,
        par: 3,
        imgLink:
          "https://frisbeegolfradat.fi/files/2015/08/utra-10-opaste-2015.jpg",
      });
      course.holes.push({
        number: 11,
        meters: 66,
        par: 3,
        imgLink:
          "https://frisbeegolfradat.fi/files/2015/08/utra-11-opaste-2015.jpg",
      });
      course.holes.push({
        number: 12,
        meters: 79,
        par: 3,
        imgLink:
          "https://frisbeegolfradat.fi/files/2015/08/utra-12-opaste-2015.jpg",
      });
      course.holes.push({
        number: 13,
        meters: 72,
        par: 3,
        imgLink:
          "https://frisbeegolfradat.fi/files/2015/08/utra-13-opaste-2015.jpg",
      });
      course.holes.push({
        number: 14,
        meters: 121,
        par: 4,
        imgLink:
          "https://frisbeegolfradat.fi/files/2015/08/utra-14-opaste-2015.jpg",
      });
      course.holes.push({
        number: 15,
        meters: 77,
        par: 3,
        imgLink:
          "https://frisbeegolfradat.fi/files/2015/08/utra-15-opaste-2015.jpg",
      });
      course.holes.push({
        number: 16,
        meters: 85,
        par: 3,
        imgLink:
          "https://frisbeegolfradat.fi/files/2015/08/utra-16-opaste-2015.jpg",
      });
      course.holes.push({
        number: 17,
        meters: 80,
        par: 3,
        imgLink:
          "https://frisbeegolfradat.fi/files/2015/08/utra-17-opaste-2015.jpg",
      });
      course.holes.push({
        number: 18,
        meters: 146,
        par: 4,
        imgLink:
          "https://frisbeegolfradat.fi/files/2015/08/utra-18-opaste-2015.jpg",
      });
      break;
    //Add holes for lyky-blue
    case "Lykynlammen frisbeegolfrata-Blue":
      course.holes.push({ number: 1, meters: 101, par: 3 });
      course.holes.push({ number: 2, meters: 95, par: 3 });
      course.holes.push({ number: 3, meters: 132, par: 4 });
      course.holes.push({ number: 4, meters: 104, par: 3 });
      course.holes.push({ number: 5, meters: 132, par: 3 });
      course.holes.push({ number: 6, meters: 120, par: 4 });
      course.holes.push({ number: 7, meters: 50, par: 3 });
      course.holes.push({ number: 8, meters: 79, par: 3 });
      course.holes.push({ number: 9, meters: 205, par: 4 });
      course.holes.push({ number: 10, meters: 93, par: 3 });
      course.holes.push({ number: 11, meters: 187, par: 4 });
      course.holes.push({ number: 12, meters: 156, par: 4 });
      course.holes.push({ number: 13, meters: 128, par: 3 });
      course.holes.push({ number: 14, meters: 82, par: 3 });
      course.holes.push({ number: 15, meters: 83, par: 3 });
      course.holes.push({ number: 16, meters: 323, par: 5 });
      course.holes.push({ number: 17, meters: 77, par: 3 });
      course.holes.push({ number: 18, meters: 217, par: 4 });
      course.holes.push({ number: 19, meters: 178, par: 4 });
      course.holes.push({ number: 20, meters: 92, par: 3 });
      break;
    //Add holes for lyky-gold
    case "Lykynlammen frisbeegolfrata-Gold":
      course.holes.push({ number: 1, meters: 101, par: 3 });
      course.holes.push({ number: 2, meters: 95, par: 4 });
      course.holes.push({ number: 3, meters: 132, par: 4 });
      course.holes.push({ number: 4, meters: 104, par: 3 });
      course.holes.push({ number: 5, meters: 132, par: 3 });
      course.holes.push({ number: 6, meters: 120, par: 4 });
      course.holes.push({ number: 7, meters: 50, par: 4 });
      course.holes.push({ number: 8, meters: 79, par: 3 });
      course.holes.push({ number: 9, meters: 205, par: 4 });
      course.holes.push({ number: 10, meters: 93, par: 4 });
      course.holes.push({ number: 11, meters: 187, par: 3 });
      course.holes.push({ number: 12, meters: 156, par: 3 });
      course.holes.push({ number: 13, meters: 128, par: 3 });
      course.holes.push({ number: 14, meters: 82, par: 5 });
      course.holes.push({ number: 15, meters: 83, par: 3 });
      course.holes.push({ number: 16, meters: 323, par: 4 });
      course.holes.push({ number: 17, meters: 77, par: 4 });
      course.holes.push({ number: 18, meters: 217, par: 3 });
      break;
    //Add holes for kontioranta
    case "Kontiorannan frisbeegolfrata":
      course.holes.push({ number: 1, meters: 160, par: 3 });
      course.holes.push({ number: 2, meters: 217, par: 4 });
      course.holes.push({ number: 3, meters: 107, par: 3 });
      course.holes.push({ number: 4, meters: 99, par: 3 });
      course.holes.push({ number: 5, meters: 210, par: 4 });
      course.holes.push({ number: 6, meters: 171, par: 4 });
      course.holes.push({ number: 7, meters: 92, par: 3 });
      course.holes.push({ number: 8, meters: 76, par: 3 });
      course.holes.push({ number: 9, meters: 88, par: 3 });
      course.holes.push({ number: 10, meters: 60, par: 3 });
      course.holes.push({ number: 11, meters: 155, par: 4 });
      course.holes.push({ number: 12, meters: 114, par: 3 });
      course.holes.push({ number: 13, meters: 104, par: 3 });
      course.holes.push({ number: 14, meters: 221, par: 5 });
      course.holes.push({ number: 15, meters: 107, par: 3 });
      course.holes.push({ number: 16, meters: 112, par: 3 });
      course.holes.push({ number: 17, meters: 170, par: 4 });
      course.holes.push({ number: 18, meters: 88, par: 3 });
      course.holes.push({ number: 19, meters: 160, par: 4 });
      course.holes.push({ number: 20, meters: 108, par: 3 });
      break;
    //Add holes for paihola
    case "Paiholan frisbeegolfrata":
      course.holes.push({ number: 1, meters: 83, par: 3 });
      course.holes.push({ number: 2, meters: 67, par: 3 });
      course.holes.push({ number: 3, meters: 70, par: 3 });
      course.holes.push({ number: 4, meters: 60, par: 3 });
      course.holes.push({ number: 5, meters: 67, par: 3 });
      course.holes.push({ number: 6, meters: 59, par: 3 });
      course.holes.push({ number: 7, meters: 75, par: 3 });
      course.holes.push({ number: 8, meters: 61, par: 3 });
      course.holes.push({ number: 9, meters: 140, par: 4 });
      course.holes.push({ number: 10, meters: 155, par: 4 });
      course.holes.push({ number: 11, meters: 75, par: 3 });
      course.holes.push({ number: 12, meters: 110, par: 3 });
      course.holes.push({ number: 13, meters: 110, par: 4 });
      course.holes.push({ number: 14, meters: 60, par: 3 });
      course.holes.push({ number: 15, meters: 106, par: 3 });
      course.holes.push({ number: 16, meters: 86, par: 3 });
      course.holes.push({ number: 17, meters: 85, par: 3 });
      course.holes.push({ number: 18, meters: 80, par: 3 });
      break;
    // Add cases for other courses and their holes
    default:
      break;
  }
});

console.log(courses);
