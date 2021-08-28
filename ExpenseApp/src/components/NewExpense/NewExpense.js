import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const onSaveExpense = (expense) => {
    props.onSaveExpense(expense);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={onSaveExpense} />
    </div>
  );
};

export default NewExpense;
