import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './addexpenseform.css';

function AddExpenseForm({ expenses, onCancel }) {
  const [expense, setExpense] = useState({
    description: '',
    amount: '',
    date: '',
    category: ''
  });

  const navigate = useNavigate();

  const handleSave = async () => {
    try {
      const newExpense = {
        ...expense,
        expense_id: expenses.length + 1
      };
  
      const response = await fetch('http://localhost:7070/expenses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newExpense)
      });
  
      if (response.ok) {
        alert('Expense successfully added!');
        setExpense({
          description: '',
          amount: '',
          date: '',
          category: ''
        });
        navigate('/budgets');
      } else {
        throw new Error('Failed to add expense');
      }
    } catch (error) {
      console.error('Error adding expense:', error);
    }
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense(prevExpense => ({
      ...prevExpense,
      [name]: value
    }));
  };

  const handleCancel = () => {
    navigate('/budgets');
  };

  const backgroundColor = expense && expense.expense_id % 2 === 0 ? 'rgba(246, 12, 230, 0.8)' : 'rgba(252, 121, 34, 0.8)';


  return (
    <div className="add-expense-form-container" style={{ backgroundColor }}>
      <div className="add-expense-form" >
        <h2 className='expense-header'>Add An Expense</h2>
        <form onSubmit={handleSave}>
          <div className="expense-input-group">
            <label htmlFor="description" className="description">Description:</label>
            <input
              className="description-input"
              type="text"
              id="description"
              name="description"
              placeholder="Description"
              value={expense.description || ''}
              onChange={handleChange}
            />
          </div>
          <div className="expense-input-group">
            <label htmlFor="date" className="date">Date:</label>
            <input
              className="date-input"
              type="date"
              id="date"
              name="date"
              placeholder="Date"
              value={expense.date || ''}
              onChange={handleChange}
            />
          </div>
          <div className="expense-input-group">
            <label htmlFor="amount" className="amount">Amount:</label>
            <input
              className="amount-input"
              type="number"
              id="amount"
              name="amount"
              placeholder="Amount"
              value={expense.amount || ''}
              onChange={handleChange}
            />
          </div>
          <div className="expense-input-group">
            <label htmlFor="category" className="category">Category:</label>
            <select
              className="category-input"
              id="category"
              name="category"
              value={expense.category || ''}
              onChange={handleChange}
            >
              <option value="" disabled>Select a category</option>
              <option value="Apparel">Apparel</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Childcare & Education">Childcare & Education</option>
              <option value="Food">Food</option>
              <option value="Housing">Housing</option>
              <option value="Travel">Travel</option>
            </select>
          </div>
          <div className="buttons">
            <button type="submit" className="add">Save</button>
            <button type="button" className="cancel" onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddExpenseForm;
