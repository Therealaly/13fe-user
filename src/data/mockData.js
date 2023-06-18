import { tokens } from "../theme";

export const mockDataTeam = [
  {
    id: 1,
    name: "Jon Snow",
    email: "jonsnow@gmail.com",
    access: "admin",
  },
  {
    id: 2,
    name: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    access: "manager",
  },
  {
    id: 3,
    name: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    access: "admin",
  },
  {
    id: 4,
    name: "Anya Stark",
    email: "anyastark@gmail.com",
    access: "admin",
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    access: "admin",
  },
];

export const MockReserveData = [
  {
    id: 1,
    date: "10 June 2023",
    time: "Session B: 13:00 - 18:00",
    room: "Room A",
    email: "jonsnow@gmail.com",
    event: "Design Lecture",
    status: "pending",
  },
  {
    id: 2,
    date: "12 June 2023",
    time: "Session A: 07:00 - 12:00",
    room: "Room B",
    email: "jonsnow@gmail.com",
    event: "Commitee Meeting",
    status: "pending",
  },
  {
    id: 3,
    date: "12 June 2023",
    time: "Session A: 07:00 - 12:00",
    room: "Room C",
    email: "jonsnow@gmail.com",
    event: "Design Lecture",
    status: "pending",
  },
  {
    id: 4,
    date: "14 June 2023",
    time: "Session A: 07:00 - 12:00",
    room: "Room A",
    email: "jonsnow@gmail.com",
    event: "Competition Rehearsal",
    status: "pending",
  },
];

export const MockReserveHistory = [
  {
    id: 1,
    date: "10 Mar 2023",
    time: "Session B: 13:00 - 18:00",
    room: "Room A",
    email: "jonsnow@gmail.com",
    event: "Design Lecture",
    status: "accepted",
  },
  {
    id: 2,
    date: "5 June 2023",
    time: "Session A: 07:00 - 12:00",
    room: "Room B",
    email: "jonsnow@gmail.com",
    event: "Design Lecture",
    status: "accepted",
  },
  {
    id: 3,
    date: "6 June 2023",
    time: "Session A: 07:00 - 12:00",
    room: "Room C",
    email: "jonsnow@gmail.com",
    event: "Design Lecture",
    status: "rejected",
  },
  {
    id: 4,
    date: "6 June 2023",
    time: "Session A: 07:00 - 12:00",
    room: "Room A",
    email: "jonsnow@gmail.com",
    event: "Commitee Meeting",
    status: "accepted",
  },
];

export const MockRoomData = [
  {
    id: 1,
    name: "Ruangan Cempaka",
    desc: "Ruangan dengan kapasitas 25 orang. Terletak di samping perpustakaan. Pengunjung dilarang merokok maupun makan atau minum di dalam ruangan",
    photo: "https://photo.com/ruanganA",
    status: "available",
  },
  {
    id: 2,
    name: "Ruangan Melati",
    desc: "Ruangan dengan kapasitas 15 orang. Terletak di samping Ruang akademik. Makan diperbolehkan di dalam ruangan",
    photo: "https://photo.com/ruanganB",
    status: "available",
  },
  {
    id: 3,
    name: "Ruangan Kamboja",
    desc: "Ruangan dengan kapasitas 20 orang. dengan konfigurasi meja melingkar. Disediakan sistem audio dan video",
    photo: "https://photo.com/ruanganC",
    status: "reserved",
  },
];