document.addEventListener("DOMContentLoaded", () => {

  const holidays = {
    hakodate: [5, 12, 19, 26],
    sapporo:  [6, 13, 20, 27],
    niki:     [7, 14, 21, 28]
  };

  let branch = "hakodate";

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();

  document.getElementById("cal-year").textContent = year;
  document.getElementById("cal-month").textContent = month + 1;

  const grid = document.querySelector(".calendar-grid");

  function renderCalendar() {
    grid
      .querySelectorAll(".calendar-day, .calendar-empty")
      .forEach(el => el.remove());

    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    let day = 1;

    for (let i = 0; i < 42; i++) {
      const cell = document.createElement("div");

      if (i >= firstDay && day <= lastDate) {
        cell.className = "calendar-day";
        cell.textContent = day;

        if (holidays[branch]?.includes(day)) {
          cell.classList.add("holiday");
          cell.textContent = `${day} 休`;
        }
        day++;
      } else {
        cell.className = "calendar-empty";
      }

      grid.appendChild(cell);
    }
  }

  document.querySelectorAll(".calendar-tabs button").forEach(btn => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".calendar-tabs button")
        .forEach(b => b.classList.remove("active"));

      btn.classList.add("active");
      branch = btn.dataset.branch;
      renderCalendar();
    });
  });

  renderCalendar();
});
