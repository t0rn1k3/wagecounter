const calc = document.getElementById("calc");

const fullWage = document.getElementById("fullWage");
const leftWage = document.getElementById("leftWage");

calc.addEventListener("click", () => {
  const monthHours = Number(document.getElementById("monthHours").value);
  const wagePerHour = Number(document.getElementById("wagePerHour").value);

  const rs = Number((wagePerHour * 0.2).toFixed(1));
  const pension = Number((wagePerHour * 0.02).toFixed(1));

  const purewage = Number(wagePerHour - (rs + pension));

  const wageInMonth = Number((monthHours * wagePerHour).toFixed(1));
  const pureWageInMonth = Number((monthHours * purewage).toFixed(1));

  fullWage.textContent = wageInMonth;
  leftWage.textContent = pureWageInMonth;

  // წამოვიღით ინფორმაცია მიმდინარე წლისა და თვის შესახებ
  //   const date = new Date();
  //   const year = date.getFullYear();
  //   const month = date.getMonth();
  //   let weekendCount = 0;
  //   // გამოვთვალოთ რამდენი დღეა მიმდინარე თვეში
  //   const daysInMonth = new Date(year, month + 1, 0).getDate();
  //   //გამოვთვალოთ რამდენი უქმე დღეა მიმდინარე თვეში
  //   for (let day = 1; day <= daysInMonth; day++) {
  //     const currentDay = new Date(year, month, day).getDay();
  //     if (currentDay === 0 || currentDay === 6) {
  //       weekendCount++;
  //     }
  //   }
  //
  //   // ხელზე ასაღები თანხა
  //
  //   // გამოვთვალოთ სამუშაო დღეები
  //   const workingDays = Number(daysInMonth - weekendCount);
  //   const weeklyHours = Number(document.getElementById("weekly").value);
  //   const wageInMonth = Number(weeklyHours * workingDays * wagePerHour);
  //   const pureWageInMonth = Number(weeklyHours * workingDays * purewage);
  //   console.log(wageInMonth, pureWageInMonth);
});
