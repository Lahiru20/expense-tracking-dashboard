let element_income_left_percentage = document.getElementById("income_left_percentage");
let element_income_left = document.getElementById("income_left");
let element_income_left_massage = document.getElementById("income_left_massage");
let income_prg_bar = document.getElementById("income_prg_bar");

let element_total_savings = document.getElementById("total_savings");
let element_savings_percentage = document.getElementById("savings_percentage");
let element_savings_reach_masssage = document.getElementById("savings_reach_masssage");
let savings_prg_bar = document.getElementById("savings_prg_bar");

let element_total_invest = document.getElementById("total_invest");
let element_invest_prg_bar = document.getElementById("invest_prg_bar");
let element_invest_massage = document.getElementById("invest_massage");
let element_invest_percentage = document.getElementById("invest_percentage");


let line_chart_days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let expenses_data = [,1110,1330,2210,2830,2478,300,700,2000,3250,1400,2900,2000,1000,200,100];
let income_data = [800,1600,2060,1360,1570,1210,1430,3210,2430,2778,900,800,2000,3350,1500,2500,2600,1800,2000,1000];

let expenses_name = ["Bills", "Food", "Health", "Shopping", "Transport"];
let expenses_amount = [6000,14000,10600,10600,10700];

let total_income = 0;
let total_expense = 0;
let income_left = 0;

let total_savings = 50000;
let savings_goal = 200000; 
let savings_objective = savings_goal - total_savings;

let total_investment = 40000;
let invest_goal = 200000;
let invest_objective = invest_goal - total_investment



income_data.forEach(element => {
    total_income += element
}); 


expenses_amount.forEach(element => {
    total_expense += element;
});




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




new Chart("ivs_Chart", {
  type: "line",
  data: {
    labels: line_chart_days,
    datasets: [{
      data: expenses_data,
      borderColor: "red",
      fill: false
    },
    {
      data: income_data,
      borderColor: "blue",
      fill: false
    }],
    
  },
  options: {
    legend: {
        display: false
    },

    title: {
        display: true,
        text: "Expenses vs. Income (Last 20 days)"
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
      text: "Expenses (Last 20 days)"
    }
  }
});

