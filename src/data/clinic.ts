// Facts only from veon/client.json and the client's own site texts (typos corrected, meaning kept).
export const clinic = {
  name: "SID DENT",
  phoneDisplay: "050 541 20 57",
  phoneHref: "tel:+380505412057",
  email: "sid.dentclinic@gmail.com",
  street: "вул. Швабська, 75",
  city: "Ужгород",
  district: "Радванка",
  facebook: "https://www.facebook.com/siddentclinic",
  instagram: "https://www.instagram.com/sid.dentfedak/",
  // B-F033: Google card, checked 2026-11-20
  rating: { score: "4,9 з 5", text: "182 відгуки в Google (дані на 20.11.2026)" },
  mapHref:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Ужгород, вул. Швабська, 75"),
  slogan: "ваша посмішка для нас нагорода",
  doctor: {
    name: "Степан Федак",
    role: "Засновник та головний лікар",
  },
} as const;

export const nav = [
  { href: "#services", label: "Послуги" },
  { href: "#doctor", label: "Лікар" },
  { href: "#clinic", label: "Клініка" },
  { href: "#contacts", label: "Контакти" },
] as const;

export const services = [
  { title: "Ортопедія", text: "Лікування та профілактика набутих деформацій ротової порожнини за допомогою протезування." },
  { title: "Хірургія", text: "Оперативне втручання в м’які та тверді тканини ротової порожнини, щоб запобігти ускладненням." },
  { title: "Імплантологія", text: "Надійне лікування відсутності зубів за допомогою імплантів." },
  { title: "Терапевтична стоматологія", text: "Лікування захворювань зубів, щелеп і ротової порожнини, а також їх діагностика та профілактика." },
  { title: "Ортодонтія", text: "Виправлення й попередження аномалій розташування зубів і порушень прикусу." },
  { title: "Гігієна", text: "Зняття зубного каменю, пігментованого та м’якого нальоту, полірування зубної емалі." },
] as const;

export const extraServices = ["рентгенографія", "панорамні знімки", "відбілювання", "вініри"] as const;

export const clinicPoints = [
  { title: "Досвідчені лікарі", text: "Вами опікуються професіонали." },
  { title: "Уважний персонал", text: "Щирий і ввічливий персонал на кожному етапі." },
  { title: "Гнучкий графік запису", text: "Візит підберемо на зручний для вас час." },
  { title: "Комфортні умови", text: "Ми подбали, щоб вам було зручно та спокійно." },
] as const;

export const futurePages = ["Послуги", "Про клініку", "Ціни", "Відгуки", "Корисне"] as const;

export const FUTURE_NOTE = "Розділ у розробці";
