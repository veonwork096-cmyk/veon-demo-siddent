// Header state, burger menu, active anchor and the mobile call bar. No libraries; the page works without it.

const header = document.querySelector<HTMLElement>("[data-header]");
const burger = document.querySelector<HTMLButtonElement>("[data-burger]");
const navEl = document.querySelector<HTMLElement>("[data-nav]");
const desktop = window.matchMedia("(min-width: 64rem)");

// 1. Header: stone at the top, paper after scrolling.
if (header) {
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

// 2. Burger menu (< 64rem): aria-expanded, Esc, focus back to the button, closes on anchor click.
if (burger && navEl) {
  const setOpen = (open: boolean, returnFocus = false) => {
    burger.setAttribute("aria-expanded", String(open));
    burger.querySelector(".visually-hidden")!.textContent = open ? "Закрити меню" : "Меню";
    navEl.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open);
    if (open) navEl.querySelector<HTMLElement>("a")?.focus();
    else if (returnFocus) burger.focus();
  };
  burger.addEventListener("click", () => setOpen(burger.getAttribute("aria-expanded") !== "true"));
  navEl.addEventListener("click", (e) => {
    if ((e.target as HTMLElement).closest("a") && !desktop.matches) setOpen(false);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && burger.getAttribute("aria-expanded") === "true") setOpen(false, true);
  });
  desktop.addEventListener("change", () => setOpen(false));
}

// 3. Active anchor marker (red line under the nav item of the section on screen).
const links = Array.from(document.querySelectorAll<HTMLAnchorElement>(".site-nav__link"));
if (links.length && "IntersectionObserver" in window) {
  const byId = new Map(links.map((a) => [a.hash.slice(1), a]));
  const spy = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        links.forEach((a) => a.removeAttribute("aria-current"));
        byId.get(e.target.id)?.setAttribute("aria-current", "true");
      }
    },
    { rootMargin: "-45% 0px -50% 0px" },
  );
  byId.forEach((_a, id) => {
    const s = document.getElementById(id);
    if (s) spy.observe(s);
  });
}

// 4. Mobile call bar (motion 3): appears once the hero band is off screen, hides while #contacts is visible.
const bar = document.querySelector<HTMLElement>("[data-callbar]");
const band = document.querySelector<HTMLElement>("[data-band]");
const contacts = document.getElementById("contacts");
if (bar && band && "IntersectionObserver" in window) {
  let bandVisible = true;
  let contactsVisible = false;
  const update = () => {
    const hidden = bandVisible || contactsVisible;
    bar.classList.toggle("is-hidden", hidden);
    if (hidden) bar.setAttribute("inert", "");
    else bar.removeAttribute("inert");
  };
  update();
  new IntersectionObserver(([e]) => { bandVisible = e.isIntersecting || e.boundingClientRect.top > 0; update(); }).observe(band);
  if (contacts) new IntersectionObserver(([e]) => { contactsVisible = e.isIntersecting; update(); }, { rootMargin: "0px 0px -20% 0px" }).observe(contacts);
}
