import { render, screen, fireEvent} from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import App from './App';
import { Button, TextField } from "@mui/material";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

render(() => {    
  <div>
      <TextField
        label="Add New Item"
        variant="outlined"
        //onChange={call handleChange here}
        //value={set the content state here}
        />
      <Button
        style={{ marginLeft: "10px" }}
        //onClick={call handleSubmit here}
        variant="contained"
        color="primary"
      >
      Add
      </Button>
  </div>
});

 test('test that App component doesn\'t render dupicate Task', () => {
  render(<App />);
 });

 test('test that App component doesn\'t add a task without task name', () => {
  render(<App />);
 });

 test('test that App component doesn\'t add a task without due date', () => {
  render(<App />);
 });



 test('test that App component can be deleted thru checkbox', () => {
  render(<App />);
 });


 test('test that App component renders different colors for past due events', () => {
  render(<App />);
 });
