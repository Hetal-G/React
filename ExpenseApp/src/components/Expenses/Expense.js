import "./Expense.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2019");
  const onFilterByYear = (selectedYear) => {
    console.log("Year Selected : ", selectedYear);
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expense">
        <ExpensesFilter
          selected={filteredYear}
          onFilterByYear={onFilterByYear}
        />
        {props.expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expense;
