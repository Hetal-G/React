import "./App.css";
import { useState } from "react";
import Expense from "./components/Expenses/Expense.js";
import NewExpense from "./components/NewExpense/NewExpense.js";

const INITIAL_EXPENSES = [
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

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const onSaveExpense = (expense) => {
    expense.id = Math.random().toString();
    setExpenses((prevExpenses) => {
      console.log(expense);
      console.log(prevExpenses);
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      {/* <img
        className="App-logo"
        src="ihub-logo.png"
        alt="IHub Logo"
        width="15%"
        height="15%"
      /> */}
      <NewExpense onSaveExpense={onSaveExpense} />
      <Expense expenses={expenses} />
    </div>
  );
};

export default App;
