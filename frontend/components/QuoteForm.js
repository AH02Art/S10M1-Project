import React, { useReducer } from "react";

const CHANGE_INPUT = 'CHANGE_INPUT'
const RESET_FORM = 'RESET_FORM'

const initialState = {
  authorName: "",
  quoteText: ""
};

function reducer(state, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    case RESET_FORM:
      return { authorName: "", quoteText: "" };
    default: {
      return state;
    };
  };
};

export default function TodoForm({ createQuote }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onChange = (event) => {
    const { name, value } = event.target;
    dispatch({ type: CHANGE_INPUT, payload: { name, value } })
  }
  const resetForm = () => {
    dispatch({ type: RESET_FORM });
  }
  const onNewQuote = (event) => {
    event.preventDefault();
    const { authorName, quoteText } = state;
    createQuote({ authorName, quoteText })
    resetForm()
  }

  return (
    <form id="quoteForm" onSubmit={onNewQuote}>
      <h3>New Quote Form</h3>
      <label><span>Author:</span>
        <input
          type='text'
          name='authorName'
          placeholder='type author name'
          value={state.authorName}
          onChange={onChange}
        />
      </label>
      <label><span>Quote text:</span>
        <textarea
          type='text'
          name='quoteText'
          placeholder='type quote'
          value={state.quoteText}
          onChange={onChange}
        />
      </label>
      <label><span>Create quote:</span>
        <button
          role='submit'
        >DO IT!</button>
      </label>
    </form>
  )
}
