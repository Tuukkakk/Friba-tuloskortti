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
          "https://www.joenliitokiekko.com/wp-content/uploads/2012/05/vayla-1_w.jpg",
      });
      course.holes.push({
        number: 2,
        meters: 167,
        par: 4,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2012/05/vayla-2_w.jpg",
      });
      course.holes.push({
        number: 3,
        meters: 153,
        par: 4,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2012/05/vayla-3_w.jpg",
      });
      course.holes.push({
        number: 4,
        meters: 111,
        par: 3,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2012/05/vayla-4_w.jpg",
      });
      course.holes.push({
        number: 5,
        meters: 87,
        par: 3,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2012/05/vayla-5_w.jpg",
      });
      course.holes.push({
        number: 6,
        meters: 96,
        par: 3,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2012/05/vayla-6_w.jpg",
      });
      course.holes.push({
        number: 7,
        meters: 148,
        par: 4,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2012/05/vayla-7_w.jpg",
      });
      course.holes.push({
        number: 8,
        meters: 82,
        par: 3,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2012/05/vayla-8_w.jpg",
      });
      course.holes.push({
        number: 9,
        meters: 91,
        par: 3,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2012/05/vayla-9_w.jpg",
      });
      course.holes.push({
        number: 10,
        meters: 88,
        par: 3,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2012/05/vayla-10_w.jpg",
      });
      course.holes.push({
        number: 11,
        meters: 66,
        par: 3,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2012/05/vayla-11_w.jpg",
      });
      course.holes.push({
        number: 12,
        meters: 79,
        par: 3,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2012/05/vayla-12_w.jpg",
      });
      course.holes.push({
        number: 13,
        meters: 72,
        par: 3,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2012/05/vayla-13_w.jpg",
      });
      course.holes.push({
        number: 14,
        meters: 121,
        par: 4,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2012/05/vayla-14_w.jpg",
      });
      course.holes.push({
        number: 15,
        meters: 77,
        par: 3,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2012/05/vayla-15_w.jpg",
      });
      course.holes.push({
        number: 16,
        meters: 85,
        par: 3,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2012/05/vayla-16_w.jpg",
      });
      course.holes.push({
        number: 17,
        meters: 80,
        par: 3,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2012/05/vayla-17_w.jpg",
      });
      course.holes.push({
        number: 18,
        meters: 146,
        par: 4,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2012/05/vayla-18_w.jpg",
      });
      break;
    //Add holes for lyky-blue
    case "Lykynlammen frisbeegolfrata-Blue":
      course.holes.push({
        number: 1,
        meters: 101,
        par: 3,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2023/05/Lykynlampi_vaylaopaste_2023_01_web-724x1024.jpg",
      });
      course.holes.push({
        number: 2,
        meters: 95,
        par: 3,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2023/05/Lykynlampi_vaylaopaste_2023_02_web-724x1024.jpg",
      });
      course.holes.push({
        number: 3,
        meters: 132,
        par: 4,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2023/05/Lykynlampi_vaylaopaste_2023_03_web-724x1024.jpg",
      });
      course.holes.push({
        number: 4,
        meters: 104,
        par: 3,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2023/05/Lykynlampi_vaylaopaste_2023_04_web-724x1024.jpg",
      });
      course.holes.push({
        number: 5,
        meters: 132,
        par: 3,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2023/05/Lykynlampi_vaylaopaste_2023_05_web-724x1024.jpg",
      });
      course.holes.push({
        number: 6,
        meters: 120,
        par: 4,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2023/05/Lykynlampi_vaylaopaste_2023_06S_web-724x1024.jpg",
      });
      course.holes.push({
        number: 7,
        meters: 50,
        par: 3,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2023/05/Lykynlampi_vaylaopaste_2023_07S_web-724x1024.jpg",
      });
      course.holes.push({
        number: 8,
        meters: 79,
        par: 3,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2023/05/Lykynlampi_vaylaopaste_2023_08_web-724x1024.jpg",
      });
      course.holes.push({
        number: 9,
        meters: 205,
        par: 4,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2023/05/Lykynlampi_vaylaopaste_2023_09_web-724x1024.jpg",
      });
      course.holes.push({
        number: 10,
        meters: 93,
        par: 3,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2023/05/Lykynlampi_vaylaopaste_2023_10_web-724x1024.jpg",
      });
      course.holes.push({
        number: 11,
        meters: 187,
        par: 4,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2023/05/Lykynlampi_vaylaopaste_2023_11S_web-724x1024.jpg",
      });
      course.holes.push({
        number: 12,
        meters: 156,
        par: 4,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2023/05/Lykynlampi_vaylaopaste_2023_12_web-724x1024.jpg",
      });
      course.holes.push({
        number: 13,
        meters: 128,
        par: 3,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2023/05/Lykynlampi_vaylaopaste_2023_13S_web-724x1024.jpg",
      });
      course.holes.push({
        number: 14,
        meters: 82,
        par: 3,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2023/05/Lykynlampi_vaylaopaste_2023_14_web-724x1024.jpg",
      });
      course.holes.push({
        number: 15,
        meters: 83,
        par: 3,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2023/05/Lykynlampi_vaylaopaste_2023_15S_web-724x1024.jpg",
      });
      course.holes.push({
        number: 16,
        meters: 323,
        par: 5,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2023/05/Lykynlampi_vaylaopaste_2023_16_web-724x1024.jpg",
      });
      course.holes.push({
        number: 17,
        meters: 77,
        par: 3,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2023/05/Lykynlampi_vaylaopaste_2023_17S_web-724x1024.jpg",
      });
      course.holes.push({
        number: 18,
        meters: 217,
        par: 4,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2023/05/Lykynlampi_vaylaopaste_2023_18_web-724x1024.jpg",
      });
      course.holes.push({
        number: 19,
        meters: 178,
        par: 4,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2023/05/Lykynlampi_vaylaopaste_2023_19S_web-724x1024.jpg",
      });
      course.holes.push({
        number: 20,
        meters: 92,
        par: 3,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2023/05/Lykynlampi_vaylaopaste_2023_20_web-724x1024.jpg",
      });
      break;
    //Add holes for lyky-gold
    case "Lykynlammen frisbeegolfrata-Gold":
      course.holes.push({
        number: 1,
        meters: 126,
        par: 3,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2023/05/Lykynlampi_vaylaopaste_2023_01_web-724x1024.jpg",
      });
      course.holes.push({
        number: 2,
        meters: 150,
        par: 4,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2023/05/Lykynlampi_vaylaopaste_2023_02_web-724x1024.jpg",
      });
      course.holes.push({
        number: 3,
        meters: 142,
        par: 4,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2023/05/Lykynlampi_vaylaopaste_2023_03_web-724x1024.jpg",
      });
      course.holes.push({
        number: 4,
        meters: 128,
        par: 3,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2023/05/Lykynlampi_vaylaopaste_2023_04_web-724x1024.jpg",
      });
      course.holes.push({
        number: 5,
        meters: 140,
        par: 3,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2023/05/Lykynlampi_vaylaopaste_2023_05_web-724x1024.jpg",
      });
      course.holes.push({
        number: 6,
        meters: 180,
        par: 4,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2023/05/Lykynlampi_vaylaopaste_2023_08_web-724x1024.jpg",
      });
      course.holes.push({
        number: 7,
        meters: 230,
        par: 4,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2023/05/Lykynlampi_vaylaopaste_2023_09_web-724x1024.jpg",
      });
      course.holes.push({
        number: 8,
        meters: 115,
        par: 3,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2023/05/Lykynlampi_vaylaopaste_2023_10_web-724x1024.jpg",
      });
      course.holes.push({
        number: 9,
        meters: 187,
        par: 4,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2023/05/Lykynlampi_vaylaopaste_2023_11S_web-724x1024.jpg",
      });
      course.holes.push({
        number: 10,
        meters: 185,
        par: 4,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2023/05/Lykynlampi_vaylaopaste_2023_12_web-724x1024.jpg",
      });
      course.holes.push({
        number: 11,
        meters: 128,
        par: 3,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2023/05/Lykynlampi_vaylaopaste_2023_13S_web-724x1024.jpg",
      });
      course.holes.push({
        number: 12,
        meters: 109,
        par: 3,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2023/05/Lykynlampi_vaylaopaste_2023_14_web-724x1024.jpg",
      });
      course.holes.push({
        number: 13,
        meters: 83,
        par: 3,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2023/05/Lykynlampi_vaylaopaste_2023_15S_web-724x1024.jpg",
      });
      course.holes.push({
        number: 14,
        meters: 376,
        par: 5,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2023/05/Lykynlampi_vaylaopaste_2023_16_web-724x1024.jpg",
      });
      course.holes.push({
        number: 15,
        meters: 77,
        par: 3,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2023/05/Lykynlampi_vaylaopaste_2023_17S_web-724x1024.jpg",
      });
      course.holes.push({
        number: 16,
        meters: 249,
        par: 4,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2023/05/Lykynlampi_vaylaopaste_2023_18_web-724x1024.jpg",
      });
      course.holes.push({
        number: 17,
        meters: 178,
        par: 4,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2023/05/Lykynlampi_vaylaopaste_2023_19S_web-724x1024.jpg",
      });
      course.holes.push({
        number: 18,
        meters: 121,
        par: 3,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2023/05/Lykynlampi_vaylaopaste_2023_20_web-724x1024.jpg",
      });
      break;
    //Add holes for kontioranta
    case "Kontiorannan frisbeegolfrata":
      course.holes.push({
        number: 1,
        meters: 160,
        par: 3,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2020/05/2020_kontioranta_01_w.jpg",
      });
      course.holes.push({
        number: 2,
        meters: 217,
        par: 4,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2020/05/2020_kontioranta_02_w.jpg",
      });
      course.holes.push({
        number: 3,
        meters: 107,
        par: 3,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2016/10/kontioranta-frisbeegolfrata-03.jpg",
      });
      course.holes.push({
        number: 4,
        meters: 99,
        par: 3,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2020/05/2020_kontioranta_04_w.jpg",
      });
      course.holes.push({
        number: 5,
        meters: 210,
        par: 4,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2020/05/2020_kontioranta_05_w.jpg",
      });
      course.holes.push({
        number: 6,
        meters: 171,
        par: 4,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2020/05/2020_kontioranta_06_w.jpg",
      });
      course.holes.push({
        number: 7,
        meters: 92,
        par: 3,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2016/10/kontioranta-frisbeegolfrata-07.jpg",
      });
      course.holes.push({
        number: 8,
        meters: 76,
        par: 3,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2016/10/kontioranta-frisbeegolfrata-08.jpg",
      });
      course.holes.push({
        number: 9,
        meters: 88,
        par: 3,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2016/10/kontioranta-frisbeegolfrata-09.jpg",
      });
      course.holes.push({
        number: 10,
        meters: 60,
        par: 3,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2016/10/kontioranta-frisbeegolfrata-10.jpg",
      });
      course.holes.push({
        number: 11,
        meters: 155,
        par: 4,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2020/05/2020_kontioranta_11_w.jpg",
      });
      course.holes.push({
        number: 12,
        meters: 114,
        par: 3,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2020/05/2020_kontioranta_12_w.jpg",
      });
      course.holes.push({
        number: 13,
        meters: 104,
        par: 3,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2020/05/2020_kontioranta_13_w.jpg",
      });
      course.holes.push({
        number: 14,
        meters: 221,
        par: 5,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2016/10/kontioranta-frisbeegolfrata-14.jpg",
      });
      course.holes.push({
        number: 15,
        meters: 107,
        par: 3,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2020/05/2020_kontioranta_15_w.jpg",
      });
      course.holes.push({
        number: 16,
        meters: 112,
        par: 3,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2020/05/2020_kontioranta_16_w.jpg",
      });
      course.holes.push({
        number: 17,
        meters: 170,
        par: 4,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2016/10/kontioranta-frisbeegolfrata-17.jpg",
      });
      course.holes.push({
        number: 18,
        meters: 88,
        par: 3,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2020/05/2020_kontioranta_18_w.jpg",
      });
      course.holes.push({
        number: 19,
        meters: 160,
        par: 4,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2020/05/2020_kontioranta_19_w.jpg",
      });
      course.holes.push({
        number: 20,
        meters: 108,
        par: 3,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2020/05/2020_kontioranta_20_w.jpg",
      });
      break;
    //Add holes for paihola
    case "Paiholan frisbeegolfrata":
      course.holes.push({
        number: 1,
        meters: 83,
        par: 3,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2022/04/paihola-01-min-725x1024.jpg",
      });
      course.holes.push({
        number: 2,
        meters: 67,
        par: 3,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2022/04/paihola-02-min-725x1024.jpg",
      });
      course.holes.push({
        number: 3,
        meters: 70,
        par: 3,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2022/04/paihola-03-min-725x1024.jpg",
      });
      course.holes.push({
        number: 4,
        meters: 60,
        par: 3,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2022/04/paihola-04-min-725x1024.jpg",
      });
      course.holes.push({
        number: 5,
        meters: 67,
        par: 3,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2022/04/paihola-05-min-725x1024.jpg",
      });
      course.holes.push({
        number: 6,
        meters: 59,
        par: 3,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2022/04/paihola-06-min-725x1024.jpg",
      });
      course.holes.push({
        number: 7,
        meters: 75,
        par: 3,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2022/04/paihola-07-min-725x1024.jpg",
      });
      course.holes.push({
        number: 8,
        meters: 61,
        par: 3,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2022/04/paihola-08-min-725x1024.jpg",
      });
      course.holes.push({
        number: 9,
        meters: 140,
        par: 4,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2022/04/paihola-09-min-725x1024.jpg",
      });
      course.holes.push({
        number: 10,
        meters: 155,
        par: 4,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2022/04/paihola-10-min-725x1024.jpg",
      });
      course.holes.push({
        number: 11,
        meters: 75,
        par: 3,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2022/04/paihola-11-min-725x1024.jpg",
      });
      course.holes.push({
        number: 12,
        meters: 110,
        par: 3,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2022/04/paihola-12-min-725x1024.jpg",
      });
      course.holes.push({
        number: 13,
        meters: 110,
        par: 4,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2022/04/paihola-13-min-725x1024.jpg",
      });
      course.holes.push({
        number: 14,
        meters: 60,
        par: 3,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2022/04/paihola-14-min-725x1024.jpg",
      });
      course.holes.push({
        number: 15,
        meters: 106,
        par: 3,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2022/04/paihola-15-min-725x1024.jpg",
      });
      course.holes.push({
        number: 16,
        meters: 86,
        par: 3,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2022/04/paihola-16-min-725x1024.jpg",
      });
      course.holes.push({
        number: 17,
        meters: 85,
        par: 3,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2022/04/paihola-17-min-725x1024.jpg",
      });
      course.holes.push({
        number: 18,
        meters: 80,
        par: 3,
        imgLink:
          "https://www.joenliitokiekko.com/wp-content/uploads/2022/04/paihola-18-min-725x1024.jpg",
      });
      break;
    // Add cases for other courses and their holes
    default:
      break;
  }
});
//Utra, Lykynlampi, Kontioranta and Paihola tee signs are from Joen Liitokiekko: https://www.joenliitokiekko.com/

console.log(courses);
