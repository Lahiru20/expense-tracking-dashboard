
const element_income_left_percentage = document.getElementById("income_left_percentage");
const element_income_left = document.getElementById("income_left");
const element_income_left_massage = document.getElementById("income_left_massage");
const income_prg_bar = document.getElementById("income_prg_bar");

const element_total_savings = document.getElementById("total_savings");
const element_savings_percentage = document.getElementById("savings_percentage");
const element_savings_reach_masssage = document.getElementById("savings_reach_masssage");
const savings_prg_bar = document.getElementById("savings_prg_bar");

const element_total_invest = document.getElementById("total_invest");
const element_invest_prg_bar = document.getElementById("invest_prg_bar");
const element_invest_massage = document.getElementById("invest_massage");
const element_invest_percentage = document.getElementById("invest_percentage");

const element_expenses_date = document.getElementById("expenseDate");
const element_expenses_category = document.getElementById("expenseCategory");
const element_expenses_amount = document.getElementById("expenseAmount");
const element_expenses_addbutton = document.getElementById("btn-expense-add");

const element_income_date = document.getElementById("incomeDate");
const element_income_amount = document.getElementById("incomeAmount");
const element_income_addbutton = document.getElementById("btn-income-add");

const element_savings_goal = document.getElementById("savingsGoal");
const element_savings_setbutton = document.getElementById("btn-savings-set");
const element_savings_amount = document.getElementById("savingsAmount");
const element_savings_addbutton = document.getElementById("btn-savings-add");

const element_invest_goal = document.getElementById("investmentGoal");
const element_invest_setbutton = document.getElementById("btn-invest-set");
const element_invest_amount = document.getElementById("investmentAmount");
const element_invest_addButton = document.getElementById("btn-invest-add");

const nav_bar_manage = document.getElementById("navbar-manage");
const manage_section = document.getElementById("manage-section");


/* FOR TESTING PURPOSE */
let line_chart_days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
let expenses_data = [
  1200, 1500, 1100, 1300, 1700, 1400, 1600, 1250, 1800, 1450, 1350, 1500, 
  1750, 1550, 1600, 1400, 1500, 1450, 1350, 1200, 1700, 1650, 1300, 1550, 
  1400, 1800, 1750, 1500, 1450, 1600, 1350
];

let income_data = [
  2000, 2500, 2200, 2700, 2400, 2600, 2800, 2300, 2900, 2700, 
  2500, 2600, 2400, 2800, 3000, 3100, 2700, 3200, 2900, 2500, 
  2600, 2800, 3000, 2700, 2300, 2600, 2800, 3100, 2900, 3000, 2800, 2700
];

let expenses_name = ["Bills", "Food", "Health", "Shopping", "Transport", "Other"];
let expenses_amount = [12000, 9000, 8000, 10000, 9100, 8000];

let total_income = 84100; 
let total_expense = 47100;
let income_left = total_income - total_expense; 


let total_savings = 20000; 
let savings_goal = 50000;  
let savings_objective = savings_goal - total_savings; 


let total_investment = 15000;
let invest_goal = 40000;
let invest_objective = invest_goal - total_investment;

/*
DEFAULT VALUES


let line_chart_days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
let expenses_data = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let income_data = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

let expenses_name = ["Bills", "Food", "Health", "Shopping", "Transport","Other"];
let expenses_amount = [0,0,0,0,0,0];

let total_income = 0;
let total_expense = 0;
let income_left = 0;

let total_savings = 0;
let savings_goal = 0; 
let savings_objective = savings_goal - total_savings;

let total_investment = 0;
let invest_goal = 0;
let invest_objective = invest_goal - total_investment;
*/




function CalculateIncome(){
  total_income = income_data.reduce((sum, current) => sum + current);
}


function CalculateExpenses(){
  total_expense = expenses_data.reduce((sum, current) => sum + current);
}


function setElementValues(){

  income_left = total_income-total_expense;
  if(income_left < 0){
      income_left = 0;
  }
  
  element_income_left.innerHTML = `<h3 class="heading" id="income_left">${"LKR " + income_left}<h3>`;
  
  let income_left_percentage = Math.round((income_left / total_income) * 100);
  
  element_income_left_percentage.innerHTML = `<h5 id="income_left_percentage">Income left (${income_left_percentage}%)<br></h5>`;
  element_income_left_massage.innerHTML = `<div class="mt-3" id="income_left_massage"> <span class="text1">LKR ${income_left} Left <span class="text2">of LKR ${total_income}</span></span> </div>`;
  income_prg_bar.innerHTML = `<div class="progress-bar" role="progressbar" style="width: ${income_left_percentage}%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" id="income_prg_bar"></div>`;
  
  let savings_percentage = Math.round((total_savings / savings_goal) * 100);
  
  element_total_savings.innerHTML =`<h3 class="heading" id="total_savings">LKR ${total_savings}</h3>`; 
  element_savings_percentage.innerHTML =`<h5 id="savings_percentage">${savings_percentage}% of  Goal is Completed<br></h5>`;
  element_savings_reach_masssage.innerHTML =`<div class="mt-3"> <span class="text1" id="savings_reach_masssage">LKR ${total_savings} of LKR ${savings_goal} </div>`;
  savings_prg_bar.innerHTML =`<div class="progress-bar" role="progressbar" style="width: ${savings_percentage}%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>`;
  
  
  
  let invest_reached_percentage = Math.round((total_investment / invest_goal) * 100);
  
  element_invest_percentage.innerHTML = `<h5 id="invest_percentage">${invest_reached_percentage}% of  Goal is Completed<br></h5>`;
  element_total_invest.innerHTML = `<h3 class="heading" id="total_invest">LKR ${total_investment}</h3>`;
  element_invest_prg_bar.innerHTML = `<div class="progress-bar" role="progressbar" style="width: ${invest_reached_percentage}%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>`;
  element_invest_massage.innerHTML = `<div class="mt-3"> <span class="text1" id="invest_massage">LKR ${total_investment} <span class="text2">of ${invest_goal}</span></span> </div>`;

}





function LoadCharts(){
  new Chart("ivs_Chart", {
    type: "line",
    data: {
      labels: line_chart_days,
      datasets: [{
        data: expenses_data,
        borderColor: "#A02334",
        fill: false,
        label:'Expenses'
      },
      {
        data: income_data,
        borderColor: "#0A5EB0",
        fill: false,
        label:'Income'
      }],
      
    },
    options: {
      legend: {
          display: true
      },
  
      scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
  
      title: {
          display: true,
          text: "Expenses vs. Income (Last 31 days)"
        }
    }
  
  
  });
  
  
  
  
  const barColors = [
    "#b91d47",
    "#00aba9",
    "#2b5797",
    "#e8c3b9",
    "#1e7145"
  ];
  
  new Chart("myChart", {
    type: "doughnut",
    data: {
      datasets: [{
        backgroundColor: barColors,
        data: expenses_amount
      }],
      labels: expenses_name
    },
    options: {
      title: {
        display: true,
        text: "Expenses (Last 31 days)"
      },
      
    }
  });
}

function LoadDatesSelectElement(){
  for (let last_date = 1; last_date <= 31; last_date++) {
    element_expenses_date.innerHTML += `<option value="${last_date}">${last_date}</option>`;
    element_income_date.innerHTML += `<option value="${last_date}">${last_date}</option>`;
  }
}


function AddExpenses(){

if (element_expenses_category.value == "Choose Category"){
  alert("Please choose category to add your EXPENSES!");
}else if(element_expenses_date.value == "Choose Date"){
  alert("Please choose date to add your EXPENSES!");
}else{

  let category_index = 0;
  expenses_name.forEach(element => {
    if (element_expenses_category.value == expenses_name[category_index]){
      expenses_amount[category_index] += Number(element_expenses_amount.value);
    }
    category_index++;
  });
  
  let amount_index = 0;
  line_chart_days.forEach(element => {
    if (element_expenses_date.value == line_chart_days[amount_index]){
      expenses_data[amount_index] += Number(element_expenses_amount.value);
    }
    amount_index++;
  });

  CalculateExpenses();
  LoadCharts();
  setElementValues();

}



}


function AddIncome(){

  if (element_income_date.value == "Choose Date"){
    alert("Please choose date to add your INCOME!");
  }else{

    let days_index = 0;
    line_chart_days.forEach(element => {
      if (element_income_date.value == line_chart_days[days_index]){
        income_data[days_index] += Number(element_income_amount.value);      
      }
      days_index++;
    });
  
    CalculateIncome();
    LoadCharts();
    setElementValues();

  }

  }



function SetSavingsGoalData(){
  savings_goal = Number(element_savings_goal.value);
  setElementValues();
}

function AddSavingsData(){
  total_income = total_income - Number(element_savings_amount.value);
  total_savings += Number(element_savings_amount.value);
  setElementValues();
}

function SetInvestmentGoalData(){
  invest_goal =  Number(element_invest_goal.value);
  setElementValues();
}

function AddInvestmentData(){
  total_income = Number(total_income - element_invest_amount.value);
  total_investment += Number(element_invest_amount.value);
  setElementValues(); 
}




LoadDatesSelectElement();
CalculateIncome();
CalculateExpenses();
LoadCharts();
setElementValues();

element_savings_setbutton.addEventListener("click",SetSavingsGoalData);
element_savings_addbutton.addEventListener("click",AddSavingsData);
element_invest_setbutton.addEventListener("click",SetInvestmentGoalData);
element_invest_addButton.addEventListener("click",AddInvestmentData);
element_expenses_addbutton.addEventListener("click",AddExpenses);
element_income_addbutton.addEventListener("click",AddIncome);


