import "./App.css";
import Expense from "./components/Expenses/Expense.js";
import NewExpense from "./components/NewExpense/NewExpense.js";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Groceries",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Clothes",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const onSaveExpense = (expenseData) => {
    console.log("Adding New Expense List :");
    expenseData.id = Math.random().toString();
    console.log("ID : ", ...expenseData.id);
    console.log("Title : ", ...expenseData.title);
    console.log("Amount : ", ...expenseData.amount);
    console.log("Date : ", ...expenseData.date);
    expenses.push(expenseData);
    console.log("New Expense List :");
    for (let i = 0; i < expenses.length; i++) {
      console.log("ID : ", expenses[i].id);
      console.log("Title : ", expenses[i].title);
      console.log("Amount : ", expenses[i].amount);
      console.log("Date : ", expenses[i].date);
    }
  };
  return (
    <div>
      <img
        className="App-logo"
        src="ihub-logo.png"
        alt="IHub Logo"
        width="15%"
        height="15%"
      />
      <NewExpense onSaveExpense={onSaveExpense} />
      <Expense expenses={expenses} />
    </div>
  );
};

export default App;
