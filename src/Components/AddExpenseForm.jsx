import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './addexpenseform.css';

function AddExpenseForm({ expenses, onCancel }) {
  const [fetchedExpenses, setFetchedExpenses] = useState(expenses);
  const [expense, setExpense] = useState({
          description: '',
          amount: '',
          category: '',
          date: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await fetch('http://localhost:7070/expenses');
        if (response.ok) {
          const fetchedExpenses = await response.json();
          setFetchedExpenses(fetchedExpenses);
        } else {
          throw new Error('Failed to fetch expenses');
        }
      } catch (error) {
        console.error('Error fetching expenses:', error);
      }
    };

    fetchExpenses();
  }, []);

  const handleSave = async () => {
    try {
      const formattedExpense = {
        ...expense,
        date: formatDate(expense.date), // Format the date before sending
        expense_id: fetchedExpenses.length + 1
      };

      const response = await fetch('http://localhost:7070/expenses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formattedExpense)
      });

      if (response.ok) {
        alert('Expense successfully added!');
        setExpense({
          description: '',
          amount: '',
          category: '',
          date: '',
        });

        // Assuming the server responds with the updated expenses including the new one
        const updatedExpenses = await response.json();
        setFetchedExpenses(updatedExpenses);

        navigate('/expenses');
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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="add-expense-form-container">
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
              value={expense.description}
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
              value={expense.amount}
              onChange={handleChange}
            />
          </div>
          <div className="expense-input-group">
            <label htmlFor="category" className="category">Category:</label>
            <select
              className="category-input"
              id="category"
              name="category"
              value={expense.category}
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
          <div className="expense-input-group">
            <label htmlFor="date" className="date">Date:</label>
            <input
              className="date-input"
              type="date"
              id="date"
              name="date"
              placeholder="Date"
              value={expense.date}
              onChange={handleChange}
            />
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
