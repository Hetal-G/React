import "./App.css";
import ExpenseItem from "./components/ExpenseItem.js";

function App() {
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
    {
      id: "e5",
      title: "Groceries",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e6",
      title: "Groceries",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e7",
      title: "Groceries",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e8",
      title: "Groceries",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
  ];

  let rows = [];
  for (let index = 0; index < expenses.length; index++) {
    rows.push(
      <ExpenseItem
        title={expenses[index].title}
        amount={expenses[index].amount}
        date={expenses[index].date}
      />
    );
  }

  return (
    <div>
      <img
        className="App-logo"
        src="ihub-logo.png"
        alt="IHub Logo"
        width="15%"
        height="15%"
      />
      <div>{rows}</div>
    </div>
  );
}

export default App;
