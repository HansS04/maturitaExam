//Importovani 'tokens' nam umoznuje pouzivat tokeny na pouzite themes.

import { tokens } from "../theme";

//Toto jsou mock data, ktera pouzivam pro vypsani studentu. Nemam jeste hotovy backend od Honzy, tak tu mam natvrdo data.

export const mockDataTeam = [
  {
    id: 1,
    name: "Jon Snow",
    email: "jonsnow@gmail.com",
    age: 35,
    github: "github.com/tomasmensik",
    student: "Networker",
  },
  {
    id: 2,
    name: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    age: 42,
    github: "github.com/tomasmensik",
    student: "Programmer",
  },
  {
    id: 3,
    name: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    age: 45,
    github: "github.com/tomasmensik",
    student: "Programmer",
  },
  {
    id: 4,
    name: "Anya Stark",
    email: "anyastark@gmail.com",
    age: 16,
    github: "github.com/tomasmensik",
    student: "Networker",
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    age: 31,
    github: "github.com/tomasmensik",
    student: "Programmer",
  },
  {
    id: 6,
    name: "Ever Melisandre",
    email: "evermelisandre@gmail.com",
    age: 150,
    github: "github.com/tomasmensik",
    student: "Programmer",
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    email: "github.com/tomasmensik",
    age: 44,
    github: "github.com/tomasmensik",
    student: "Programmer",
  },
  {
    id: 8,
    name: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    age: 36,
    github: "github.com/tomasmensik",
    student: "Programmer",
  },
  {
    id: 9,
    name: "Harvey Roxie",
    email: "harveyroxie@gmail.com",
    age: 65,
    github: "github.com/tomasmensik",
    student: "Networker",
  },
];

export const mockDataContacts = [
  {
    id: 1,
    name: "Jon Snow",
    email: "jonsnow@gmail.com",
    age: 35,
    phone: "(665)121-5454",
    address: "0912 Won Street, Alabama, SY 10001",
    city: "New York",
    zipCode: "10001",
    registrarId: 123512,
  },
  {
    id: 2,
    name: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    age: 42,
    phone: "(421)314-2288",
    address: "1234 Main Street, New York, NY 10001",
    city: "New York",
    zipCode: "13151",
    registrarId: 123512,
  },
  {
    id: 3,
    name: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    age: 45,
    phone: "(422)982-6739",
    address: "3333 Want Blvd, Estanza, NAY 42125",
    city: "New York",
    zipCode: "87281",
    registrarId: 4132513,
  },
  {
    id: 4,
    name: "Anya Stark",
    email: "anyastark@gmail.com",
    age: 16,
    phone: "(921)425-6742",
    address: "1514 Main Street, New York, NY 22298",
    city: "New York",
    zipCode: "15551",
    registrarId: 123512,
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    age: 31,
    phone: "(421)445-1189",
    address: "11122 Welping Ave, Tenting, CD 21321",
    city: "Tenting",
    zipCode: "14215",
    registrarId: 123512,
  },
  {
    id: 6,
    name: "Ever Melisandre",
    email: "evermelisandre@gmail.com",
    age: 150,
    phone: "(232)545-6483",
    address: "1234 Canvile Street, Esvazark, NY 10001",
    city: "Esvazark",
    zipCode: "10001",
    registrarId: 123512,
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    email: "ferraraclifford@gmail.com",
    age: 44,
    phone: "(543)124-0123",
    address: "22215 Super Street, Everting, ZO 515234",
    city: "Evertin",
    zipCode: "51523",
    registrarId: 123512,
  },
  {
    id: 8,
    name: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    age: 36,
    phone: "(222)444-5555",
    address: "4123 Ever Blvd, Wentington, AD 142213",
    city: "Esteras",
    zipCode: "44215",
    registrarId: 512315,
  },
  {
    id: 9,
    name: "Harvey Roxie",
    email: "harveyroxie@gmail.com",
    age: 65,
    phone: "(444)555-6239",
    address: "51234 Avery Street, Cantory, ND 212412",
    city: "Colunza",
    zipCode: "111234",
    registrarId: 928397,
  },
  {
    id: 10,
    name: "Enteri Redack",
    email: "enteriredack@gmail.com",
    age: 42,
    phone: "(222)444-5555",
    address: "4123 Easer Blvd, Wentington, AD 142213",
    city: "Esteras",
    zipCode: "44215",
    registrarId: 533215,
  },
  {
    id: 11,
    name: "Steve Goodman",
    email: "stevegoodmane@gmail.com",
    age: 11,
    phone: "(444)555-6239",
    address: "51234 Fiveton Street, CunFory, ND 212412",
    city: "Colunza",
    zipCode: "1234",
    registrarId: 92197,
  },
];

export const mockStatusData = [
  {
    task: "Coding",
    "Tomáš Menšík": 62,
    "Jan Slivka": 48,
  },
  {
    task: "Documentation",
    "Tomáš Menšík": 14,
    "Jan Slivka": 50,
  },
  {
    task: "README.md",
    "Tomáš Menšík": 78,
    "Jan Slivka": 60,
  },
];

export const mockComments = [
  {
    txId: "01e4dsa",
    user: "johndoe",
    date: "2021-09-01",
    cost: "1254",
  },
  {
    txId: "0315dsaa",
    user: "jackdower",
    date: "2022-04-01",
    cost: "145",
  },
  {
    txId: "01e4dsa",
    user: "aberdohnny",
    date: "2021-09-01",
    cost: "435",
  },
  {
    txId: "51034szv",
    user: "goodmanave",
    date: "2022-11-05",
    cost: "295",
  },
  {
    txId: "0a123sb",
    user: "stevebower",
    date: "2022-11-02",
    cost: "135",
  },
  {
    txId: "01e4dsa",
    user: "aberdohnny",
    date: "2021-09-01",
    cost: "45",
  },
  {
    txId: "120s51a",
    user: "wootzifer",
    date: "2019-04-15",
    cost: "220",
  },
  {
    txId: "0315dsaa",
    user: "jackdower",
    date: "2022-04-01",
    cost: "1345",
  },
];

export const mockBarData = [
  {
    language: ".js",
    "Tomáš Menšík": 137,
    "Tomáš MenšíkColor": "hsl(229, 70%, 50%)",
    "Honza Slivka": 96,
    "Honza SlivkaColor": "hsl(296, 70%, 50%)",
    "Martin Kavala": 72,
    "Maritn KavalaColor": "hsl(97, 70%, 50%)",
    "Lukáš Kůžel": 140,
    "Lukáš KůželColor": "hsl(340, 70%, 50%)",
  },
  {
    language: ".py",
    "Tomáš Menšík": 15,
    "Tomáš MenšíkColor": "hsl(307, 70%, 50%)",
    "Honza Slivka": 28,
    "Honza SlivkaColor": "hsl(111, 70%, 50%)",
    "Martin Kavala": 58,
    "Maritn KavalaColor": "hsl(273, 70%, 50%)",
    "Lukáš Kůžel": 29,
    "Lukáš KůželColor": "hsl(275, 70%, 50%)",
  },
  {
    language: ".cpp",
    "Tomáš Menšík": 109,
    "Tomáš MenšíkColor": "hsl(72, 70%, 50%)",
    "Honza Slivka": 23,
    "Honza SlivkaColor": "hsl(96, 70%, 50%)",
    "Martin Kavala": 34,
    "Maritn KavalaColor": "hsl(106, 70%, 50%)",
    "Lukáš Kůžel": 152,
    "Lukáš KůželColor": "hsl(256, 70%, 50%)",
  },
  {
    language: ".swift",
    "Tomáš Menšík": 133,
    "Tomáš MenšíkColor": "hsl(257, 70%, 50%)",
    "Honza Slivka": 52,
    "Honza SlivkaColor": "hsl(326, 70%, 50%)",
    "Martin Kavala": 43,
    "Maritn KavalaColor": "hsl(110, 70%, 50%)",
    "Lukáš Kůžel": 83,
    "Lukáš KůželColor": "hsl(9, 70%, 50%)",
  },
  {
    language: ".php",
    "Tomáš Menšík": 81,
    "Tomáš MenšíkColor": "hsl(190, 70%, 50%)",
    "Honza Slivka": 80,
    "Honza SlivkaColor": "hsl(325, 70%, 50%)",
    "Martin Kavala": 112,
    "Maritn KavalaColor": "hsl(54, 70%, 50%)",
    "Lukáš Kůžel": 35,
    "Lukáš KůželColor": "hsl(285, 70%, 50%)",
  },
  {
    language: ".java",
    "Tomáš Menšík": 66,
    "Tomáš MenšíkColor": "hsl(208, 70%, 50%)",
    "Honza Slivka": 111,
    "Honza SlivkaColor": "hsl(334, 70%, 50%)",
    "Martin Kavala": 167,
    "Maritn KavalaColor": "hsl(182, 70%, 50%)",
    "Lukáš Kůžel": 18,
    "Lukáš KůželColor": "hsl(76, 70%, 50%)",
  },
  {
    language: "other",
    "Tomáš Menšík": 80,
    "Tomáš MenšíkColor": "hsl(87, 70%, 50%)",
    "Honza Slivka": 47,
    "Honza SlivkaColor": "hsl(141, 70%, 50%)",
    "Martin Kavala": 158,
    "Maritn KavalaColor": "hsl(224, 70%, 50%)",
    "Lukáš Kůžel": 49,
    "Lukáš KůželColor": "hsl(274, 70%, 50%)",
  },
];

export const mockPieData = [
  {
    id: "Software",
    label: "Software",
    value: 21,
    color: "hsl(104, 70%, 50%)",
  },
  {
    id: "Hardware",
    label: "Hardware",
    value: 11,
    color: "hsl(162, 70%, 50%)",
  },
];

export const mockLineData = [
  {
    id: "Ondra Repko",
    color: tokens("dark").greenAccent[500],
    data: [
      {
        x: "Jan.",
        y: 0,
      },
      {
        x: "Feb.",
        y: 55,
      },
      {
        x: "Mar.",
        y: 60,
      },
      {
        x: "Apr.",
        y: 156,
      },
      {
        x: "May",
        y: 105,
      },
      {
        x: "June",
        y: 26,
      },
      {
        x: "July",
        y: 88,
      },
      {
        x: "Aug.",
        y: 200,
      },
      {
        x: "Sept.",
        y: 51,
      },
      {
        x: "Oct.",
        y: 91,
      },
      {
        x: "Nov.",
        y: 45,
      },
      {
        x: "Dec.",
        y: 84,
      },
    ],
  },
  {
    id: "Honza Slivka",
    color: tokens("dark").blueAccent[300],
    data: [
      {
        x: "Jan.",
        y: 0,
      },
      {
        x: "Feb.",
        y: 205,
      },
      {
        x: "Mar.",
        y: 200,
      },
      {
        x: "Apr.",
        y: 216,
      },
      {
        x: "May",
        y: 235,
      },
      {
        x: "June",
        y: 180,
      },
      {
        x: "July",
        y: 98,
      },
      {
        x: "Aug.",
        y: 102,
      },
      {
        x: "Sept.",
        y: 51,
      },
      {
        x: "Oct.",
        y: 59,
      },
      {
        x: "Nov.",
        y: 105,
      },
      {
        x: "Dec.",
        y: 94,
      },
    ],
  },
  {
    id: "Jan Slivka",
    color: tokens("dark").redAccent[200],
    data: [
      {
        x: "Jan.",
        y: 0,
      },
      {
        x: "Feb.",
        y: 75,
      },
      {
        x: "Mar.",
        y: 225,
      },
      {
        x: "Apr.",
        y: 216,
      },
      {
        x: "May",
        y: 105,
      },
      {
        x: "June",
        y: 236,
      },
      {
        x: "July",
        y: 88,
      },
      {
        x: "Aug.",
        y: 232,
      },
      {
        x: "Sept.",
        y: 211,
      },
      {
        x: "Oct.",
        y: 101,
      },
      {
        x: "Nov.",
        y: 35,
      },
      {
        x: "Dec.",
        y: 14,
      },
    ],
  },
];
