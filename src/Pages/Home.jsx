import { useHistory } from "react-router-dom";
import DatePickerInput from "../modules/DatePickerInput";
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
  Select,
  Line,
} from "../Styles/home";

function Home(props) {
  const history = useHistory();

    history.push("/employee-list");
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
          <Button onClick={() => console.log("sAVE")}>Save</Button>
        </Form>
      </FormContainer>
    </>
  );
}


export default Home;
