const mockData = {
  user: {
    name: "Perseo",
    avatar:
      "https://play-lh.googleusercontent.com/NvVT-ZaCH8mLm3GsIezO9xEnxo57YtvkHWnrkmBPJaicFqbu2K9Nk8eDyf7UinOtuPM",
    favs: [
      "8c87ed437f00e3d5407f3668b86cee3f", "7a9310be428aa03c1d06e15b4352c530", "477ff422f9956ef635f0d9210f63dc22",
      "e4f60074567a763efb607cb5ed408e96", "f2d3d8d891d657eeb0fac5f2bbffa640", "8ee972dc888a54661b92cc5092839966",
    ],
    lastShowed: [
      "7ea69610c4222e3e496977bc07dbfe62", "5c4f7ff3a1b75fd776575df6b62efeb8"
    ],
  },
  contents: [
    {
      "cover": "https://i.pinimg.com/236x/ca/bc/b2/cabcb2444022fd5364d6a0447de76c0b--sea-of-monsters-logan-lerman.jpg", 
      "duration": 9065,
      "id": "8c87ed437f00e3d5407f3668b86cee3f",
      "section": "Fantasia",
      "title": "Los dos papas",
      "url": "http://demo.unified-streaming.com/video/tears-of-steel/tears-of-steel.ism/.m3u8",
    },
    {
      "cover": "https://aws.revistavanityfair.es/prod/designs/v1/assets/377x580/87015.jpg",
      "duration": 5606,
      "id": "7a9310be428aa03c1d06e15b4352c530",
      "section": "Infantil",
      "title": "Hasta siempre, hijo mío",
      "url": "https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8",
    },
    {
      "cover": "https://i.pinimg.com/236x/ca/bc/b2/cabcb2444022fd5364d6a0447de76c0b--sea-of-monsters-logan-lerman.jpg",
      "duration": 8163,
      "id": "c18fc6ce52aeb134355f75330acf6d2e",
      "section": "Religión",
      "title": "Tres idénticos desconocidos",
      "url": "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",
    },
    {
      "cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9ItIXyHHlzEdHTU2vJELa_qVb0SAc0KQ8Tg&usqp=CAU",
      "duration": 9826,
      "id": "4fcdafceaa54584084f654f8873b9b56",
      "section": "Drama",
      "title": "El vicio del poder",
      "url": "https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8",
    },
    {
      "cover": "https://www.estrenosdecine.eu/media/k2/items/cache/25e7e3a7eccab06db002a4d0c71836ef_M.jpg",
      "duration": 9138,
      "id": "477ff422f9956ef635f0d9210f63dc22",
      "section": "Acción",
      "title": "Ad Astra",
      "url": "http://devimages.apple.com/iphone/samples/bipbop/bipbopall.m3u8",
    },
    {
      "cover": "https://gmlariojainformatica.files.wordpress.com/2017/05/portada.png?w=640",
      "duration": 6682,
      "id": "2cb618737855378cadb7c091c177c8b6",
      "section": "Fantasia",
      "title": "Border",
      "url": "http://demo.unified-streaming.com/video/tears-of-steel/tears-of-steel.ism/.m3u8",
    },
    {
      "cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGFDQwA1PImgUTQCBru3MOv8sauT1e5hSJMQ&usqp=CAU",
      "duration": 6744,
      "id": "7ea69610c4222e3e496977bc07dbfe62",
      "section": "Infantil",
      "title": "Érase una vez en... Hollywood",
      "url": "http://demo.unified-streaming.com/video/tears-of-steel/tears-of-steel.ism/.m3u8",
    },
    {
      "cover": "https://ep00.epimg.net/elpais/imagenes/2020/02/06/album/1580999639_454991_1581005545_album_normal.jpg",
      "duration": 4619,
      "id": "e4f60074567a763efb607cb5ed408e96",
      "section": "Parodia",
      "title": "Infierno bajo el agua",
      "url": "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",
    },
    {
      "cover": "https://www.pequeocio.com/wp-content/uploads/2012/11/el-rey-leon.jpg",
      "duration": 6677,
      "id": "e1b78b7b0d65fa017518b3039b320cb3",
      "section": "Infantil",
      "title": "Hasta siempre, hijo mío",
      "url": "https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8",
    },
    {
      "cover": "https://4.bp.blogspot.com/-5ZdzsgvxLOM/UJGDqwcux7I/AAAAAAAAQAE/F1neDy786fQ/s1600/2012+movie+poster.jpg",
      "duration": 7303,
      "id": "6f04155a56c13f6c39e331912ce9f950",
      "section": "Infantil",
      "title": "Quien a hierro mata",
      "url": "https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8",
    },
    {
      "cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQs8o90ZXT1ySx1Ug5ANR6lLcUh_JysREHTHQ&usqp=CAU",
      "duration": 7033,
      "id": "5c4f7ff3a1b75fd776575df6b62efeb8",
      "section": "Religión",
      "title": "Hasta siempre, hijo mío",
      "url": "https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8",
    },
    {
      "cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQs8o90ZXT1ySx1Ug5ANR6lLcUh_JysREHTHQ&usqp=CAU",
      "duration": 9538,
      "id": "f2d3d8d891d657eeb0fac5f2bbffa640",
      "section": "Documental",
      "title": "El vicio del poder",
      "url": "https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8",
    },
    {
      "cover": "https://www.estrenosdecine.eu/media/k2/items/cache/25e7e3a7eccab06db002a4d0c71836ef_M.jpg",
      "duration": 5747,
      "id": "8ee972dc888a54661b92cc5092839966",
      "section": "Acción",
      "title": "Quien a hierro mata",
      "url": "https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8",
    },
    {
      "cover": "https://www.laguiadelvaron.com/wp-content/uploads/2019/07/portadas-pel%C3%ADculas-iguales-www.laguiadelvaron-15.jpg",
      "duration": 5176,
      "id": "674927484f22735dfaabb846329074f0",
      "section": "Drama",
      "title": "El vicio del poder",
      "url": "https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8",
    },
    {
      "cover": "https://m.guiadelocio.com/var/guiadelocio.com/storage/images/cine/archivo-peliculas/geminis/37423557-6-esl-ES/geminis.jpg",
      "duration": 10422,
      "id": "9fcf9eee1654b520b1366ee397a61b0a",
      "section": "Documental",
      "title": "Joker",
      "url": "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",
    },
    {
      "cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRFBzUufOq67CGRRpW_sjzvrJlabAv85gy04w&usqp=CAU",
      "duration": 8548,
      "id": "a7b9d22419d5628e7f20801409ef6691",
      "section": "Acción",
      "title": "La casa de Jack",
      "url": "http://devimages.apple.com/iphone/samples/bipbop/bipbopall.m3u8",
    },
    {
      "cover": "https://aws.revistavanityfair.es/prod/designs/v1/assets/377x580/87015.jpg",
      "duration": 7366,
      "id": "e4a35c800dc95735cacbc8d1509ed7c2",
      "section": "Parodia",
      "title": "La hija de un ladrón",
      "url": "http://devimages.apple.com/iphone/samples/bipbop/bipbopall.m3u8",
    },
    {
      "cover": "https://m.guiadelocio.com/var/guiadelocio.com/storage/images/cine/archivo-peliculas/geminis/37423557-6-esl-ES/geminis.jpg",
      "duration": 5289,
      "id": "7910bc247f14eb38c4c547c026949e16",
      "section": "Drama",
      "title": "El vicio del poder",
      "url": "https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8",
    },
    {
      "cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGFDQwA1PImgUTQCBru3MOv8sauT1e5hSJMQ&usqp=CAU",
      "duration": 3836,
      "id": "bc3c62e788d2c766d657ec5030a44564",
      "section": "Parodia",
      "title": "Mirai, mi hermana pequeña",
      "url": "https://multiplatform-f.akamaihd.net/i/multi/april11/sintel/sintel-hd_,512x288_450_b,640x360_700_b,768x432_1000_b,1024x576_1400_m,.mp4.csmil/master.m3u8",
    },
    {
      "cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ69oKCbdVb46L2Diigcl7n-Mgf-K6O6YIWHg&usqp=CAU",
      "duration": 7292,
      "id": "cec7203d6adeb3f7c4b05e95f3d99afb",
      "section": "Fantasia",
      "title": "El irlandés",
      "url": "https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8",
    },
    {
      "cover": "https://ep00.epimg.net/elpais/imagenes/2020/02/06/album/1580999639_454991_1581005545_album_normal.jpg",
      "duration": 7459,
      "id": "b4ce83d203c7e8404a399f5baf146edf",
      "section": "Acción",
      "title": "Retrato de una mujer en llamas",
      "url": "https://multiplatform-f.akamaihd.net/i/multi/april11/sintel/sintel-hd_,512x288_450_b,640x360_700_b,768x432_1000_b,1024x576_1400_m,.mp4.csmil/master.m3u8",
    },
    {
      "cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGFDQwA1PImgUTQCBru3MOv8sauT1e5hSJMQ&usqp=CAU",
      "duration": 7144,
      "id": "dbb94e3e3fef3db20d015d769f84ffc1",
      "section": "Parodia",
      "title": "Border",
      "url": "http://demo.unified-streaming.com/video/tears-of-steel/tears-of-steel.ism/.m3u8",
    },
    {
      "cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQs8o90ZXT1ySx1Ug5ANR6lLcUh_JysREHTHQ&usqp=CAU",
      "duration": 6089,
      "id": "8bb48d1b3ce54a6c6273b79bb8d977b0",
      "section": "Terror",
      "title": "Joker",
      "url": "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",
    },
    {
      "cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRFBzUufOq67CGRRpW_sjzvrJlabAv85gy04w&usqp=CAU",
      "duration": 3743,
      "id": "e4bd8041250f2d2ea34e2b18fdc30fc5",
      "section": "Fantasia",
      "title": "La hija de un ladrón",
      "url": "http://devimages.apple.com/iphone/samples/bipbop/bipbopall.m3u8",
    },
  ],
};

export default mockData;