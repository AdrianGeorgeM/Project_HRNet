import { Link } from "react-router-dom";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const H1 = styled.h1`
  color: rgb(51, 66, 87);
  margin-bottom: 0;
  margin-top: 30px;
`;

const H2 = styled.h2`
  color: rgb(51, 66, 87);
`;

const Line = styled.hr`
  color: blue;
  width: 100%;
  margin-top: 40px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FormContainer = styled(Container)`
  margin-top: 10px;
`;

const Form = styled.form`
  background: rgb(238, 238, 238);
  border-radius: 10px;
  margin-top: 20px;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 20px;
  padding-top: 5px;
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  width: 400px;
`;
const Label = styled.label`
  display: block;
  margin-top: 1rem;
  margin-bottom: 10px;
`;

const Fieldset = styled.fieldset`
  margin-top: 15px;
  border-radius: 5px;
  padding-left: 15px;
  padding-right: 15px;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid grey;
  height: 25px;
  background-color: rgb(238, 238, 238);
  font-size: 16px;
  &:focus {
    background-color: rgba(255, 255, 255, 0.7);
    outline: none;
  }
`;

const Select = styled.select`
  border: none;
  border-radius: 5px;
  height: 40px;
  padding: 0 5px;
`;

const Button = styled.button`
  background-color: rgb(84, 140, 168);
  color: white;
  font-size: 15px;
  border: none;
  border-radius: 15px;
  padding: 10px 15px;
  cursor: pointer;
  margin-top: 30px;
`;

function Home(props) {
  const history = useHistory();

  const viewEmployees = () => {
    history.push("/employee-list");
  };

  // manage State to save input values
  // const saveEmployee = () => {
  //   const firstName = document.getElementById("first-name");
  //   const lastName = document.getElementById("last-name");
  //   const dateOfBirth = document.getElementById("date-of-birth");
  //   const startDate = document.getElementById("start-date");
  //   const department = document.getElementById("department");
  //   const street = document.getElementById("street");
  //   const city = document.getElementById("city");
  //   const state = document.getElementById("state");
  //   const zipCode = document.getElementById("zip-code");

  //   const employees = JSON.parse(localStorage.getItem("employees")) || [];
  //   const employee = {
  //     firstName: firstName.value,
  //     lastName: lastName.value,
  //     dateOfBirth: dateOfBirth.value,
  //     startDate: startDate.value,
  //     department: department.value,
  //     street: street.value,
  //     city: city.value,
  //     state: state.value,
  //     zipCode: zipCode.value,
  //   };
  //   employees.push(employee);
  //   localStorage.setItem("employees", JSON.stringify(employees));
  //   $("#confirmation").modal();
  // };

  return (
    <>
      <Container>
        <H1>HRnet</H1>
        <Button onClick={viewEmployees}>View Current Employees</Button>
        {/* <Link to="/employee-list">View Current Employees</Link> */}
      </Container>
      <Line />
      <FormContainer>
        <H2>CREATE EMPLOYEE</H2>
        <Form>
          <Label htmlFor='first-name'>First Name</Label>
          <Input type='text' id='first-name' />

          <Label htmlFor='last-name'>Last Name</Label>
          <Input type='text' id='last-name' />

          <Label htmlFor='date-of-birth'>Date of Birth</Label>
          <Input id='date-of-birth' type='text' />

          <Label htmlFor='start-date'>Start Date</Label>
          <Input id='start-date' type='text' />

          <Fieldset>
            <legend>Address</legend>

            <Label htmlFor='street'>Street</Label>
            <Input id='street' type='text' />

            <Label htmlFor='city'>City</Label>
            <Input id='city' type='text' />

            <Label htmlFor='state'>State</Label>
            <select name='state' id='state'></select>

            <Label htmlFor='zip-code'>Zip Code</Label>
            <Input id='zip-code' type='number' />
          </Fieldset>

          <Label htmlFor='department'>Department</Label>
          <Select name='department' id='department'>
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </Select>
          <Button onClick={() => console.log("hello")}>Save</Button>
        </Form>
      </FormContainer>
    </>
  );
}

export default Home;
