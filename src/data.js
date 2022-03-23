const now = Date.now();
const day = 24 * 60 * 60 * 1000;
let today = new Date(now);
let tomorrow = new Date(now + day);
let oneDayAgo = new Date(now - day);
today = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;
tomorrow = `${tomorrow.getDate()}-${tomorrow.getMonth() + 1}-${tomorrow.getFullYear()}`;
oneDayAgo = `${oneDayAgo.getDate()}-${oneDayAgo.getMonth() + 1}-${oneDayAgo.getFullYear()}`;

const todos = [
  {
    id: 1,
    title: "makan",
    date: today,
    time: "08:00",
    complete: true
  },
  { 
    id: 2,
    title: "minum",
    date: today,
    time: "11:00",
    complete: false
  },
  {
    id: 3,
    title: "ngoding",
    date: tomorrow,
    time: "08:00",
    complete: false
  },
  {
    id: 4,
    title: "tidur",
    date: tomorrow,
    time: "23:00",
    complete: false
  },
  {
    id: 5,
    title: "bangun tidur",
    date: oneDayAgo,
    time: "07:00",
    complete: true
  },
  {
    id: 6,
    title: "tidur",
    date: oneDayAgo,
    time: "23:00",
    complete: true
  },
]

export function getDateNow() {
  return today
}
export function getTodos() {
  return todos
}