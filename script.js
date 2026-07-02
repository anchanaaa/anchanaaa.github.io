// Filter the build log by track (all / game / ml)
const filters = document.querySelectorAll(".filter");
const entries = document.querySelectorAll(".entry");

filters.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.filter;

    filters.forEach((b) => {
      b.classList.remove("is-active");
      b.setAttribute("aria-selected", "false");
    });
    btn.classList.add("is-active");
    btn.setAttribute("aria-selected", "true");

    entries.forEach((entry) => {
      const show = target === "all" || entry.dataset.track === target;
      entry.classList.toggle("is-hidden", !show);
    });
  });
});
