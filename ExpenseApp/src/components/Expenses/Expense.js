import "./Expense.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expense = (props) => {
  let rows = [];
  for (let index = 0; index < props.expenses.length; index++) {
    rows.push(
      <ExpenseItem
        title={props.expenses[index].title}
        amount={props.expenses[index].amount}
        date={props.expenses[index].date}
      />
    );
  }
  const [filteredYear, setFilteredYear] = useState("");
  const onFilterByYear = (selectedYear) => {
    console.log("Year Selected : ", selectedYear);
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <ExpensesFilter onFilterByYear={onFilterByYear} />
      <Card className="expense">{rows}</Card>;
    </div>
  );
};

export default Expense;
