import { useHistory } from "react-router-dom";
import Modal from "../Pages/Modal";
import {
  Container,
  H1,
  Button,
  FormContainer,
  H2,
  Form,
  Label,
  Input,
  Fieldset,
  Line,
} from "../Styles/home";
import React, { Suspense, useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import { states } from "../Data/states";
import { departments } from "../Data/departments";

const DatePickerInput = React.lazy(() =>
  import("../Components/DatePickerInput")
);
const SelectInputField = React.lazy(() =>
  import("../Components/InputFieldSelect")
);

function Home(props) {
  const history = useHistory();
  const [state, dispatch] = useContext(AppContext);

  const [showModal, setShowModal] = useState(false);

  /** Updates the document.title to "HRnet" */
  useEffect(() => {
    document.title = "HRnet";
  });

  /**
   * Redirect user to page /employee-list
   */
  const viewEmployees = () => {
    history.push("/employee-list");
  };

  /**
   * Updates state.createEmployee with every input change
   * @param {Object} e - The event object
   */
  const handleChange = (e) => {
    dispatch({ type: e.target.id, value: e.target.value });
  };

  /**
   * Creates new updated employee list.
   * Updates state.employeeList with new employee list.
   * Resets form input values to empty strings.
   * Changes showModal state to "true", to display modal.
   * Updates local storage with new list of employees
   * @param {Object} e - The event object
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.values(state.createEmployee);
    const newEmployeeList = [...state.employeeList, data];
    dispatch({ type: "employeeList", value: newEmployeeList });
    setShowModal(!showModal);
  };

  return (
    <>
      <Container>
        <H1>HRnet</H1>
        <Button onClick={viewEmployees}>View Current Employees</Button>
      </Container>
      <Line />
      <FormContainer>
        <H2>CREATE EMPLOYEE</H2>
        <Form>
          <Label htmlFor='first-name'>First Name</Label>
          <Input
            type='text'
            id='first-name'
            onChange={handleChange}
            value={state.createEmployee.firstName}
          />

          <Label htmlFor='date-of-birth'>Last Name</Label>
          <Input
            type='text'
            id='last-name'
            onChange={handleChange}
            value={state.createEmployee.lastName}
          />

          <Label htmlFor='date-of-birth'>Date of Birth</Label>
          <Suspense fallback={<div>Loading...</div>}>
            <DatePickerInput
              id='date-of-birth'
              onChange={handleChange}
              value={state.createEmployee.dateOfBirth}
            ></DatePickerInput>
          </Suspense>

          <Label htmlFor='start-date'>Start Date</Label>
          <Suspense fallback={<div>Loading...</div>}>
            <DatePickerInput
              id='start-date'
              onChange={handleChange}
              value={state.createEmployee.startDate}
            ></DatePickerInput>
          </Suspense>

          <Fieldset>
            <legend>Address</legend>

            <Label htmlFor='street'>Street</Label>
            <Input
              id='street'
              type='text'
              onChange={handleChange}
              value={state.createEmployee.street}
            />

            <Label htmlFor='city'>City</Label>
            <Input
              id='city'
              type='text'
              onChange={handleChange}
              value={state.createEmployee.city}
            />

            <Label htmlFor='state'>State</Label>
            <Suspense fallback={<div>Loading...</div>}>
              <SelectInputField
                onChange={handleChange}
                value={state.createEmployee.state}
                id='state'
                data={states}
              />
            </Suspense>

            <Label htmlFor='zip-code'>Zip Code</Label>
            <Input
              id='zip-code'
              type='number'
              onChange={handleChange}
              value={state.createEmployee.zipCode}
            />
          </Fieldset>

          <Label htmlFor='department'>Department</Label>
          <Suspense fallback={<div>Loading...</div>}>
            <SelectInputField
              onChange={handleChange}
              value={state.createEmployee.department}
              id='department'
              data={departments}
            />
          </Suspense>
          <Button type='submit' onClick={handleSubmit}>
            Save
          </Button>
          <Modal
            animation={true}
            show={showModal}
            toggle={setShowModal}
            closeText={{
              text: "View Current Employees",
              eventHandling: viewEmployees,
            }}
            blockScrolling={false}
          >
            <p>Employee Created!</p>
          </Modal>
        </Form>
      </FormContainer>
    </>
  );
}

export default Home;
