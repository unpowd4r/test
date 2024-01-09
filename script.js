let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let expenses_one = prompt("Введите обязатeльную статью расходов в этом месяце");
let expenses_two = prompt("Во сколько обойдется?");

let expenses = {
  expenses: expenses_one,
  expenses1: expenses_two,
};

console.log(expenses);

appData = {
  бюджет: money,
  дата: time,
  обяз_расходы: expenses,
  optionalExpenses: undefined,
  income: [],
  savings: false,
};

alert(time + " числа бюджет на месяц = " + money / 30 + "р");

console.log(appData);
