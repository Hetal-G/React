import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const onSaveExpense = (expenseData) => {
    props.onSaveExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={onSaveExpense} />
    </div>
  );
};

export default NewExpense;
