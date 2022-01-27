import styled from "styled-components";

export const H1 = styled.h1`
  color: rgb(51, 66, 87);
  margin-bottom: 0;
  margin-top: 30px;
`;

export const H2 = styled.h2`
  color: rgb(51, 66, 87);
`;

export const Line = styled.hr`
  color: blue;
  width: 100%;
  margin-top: 40px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled(Container)`
  margin-top: 10px;
  margin-bottom: 45px;
`;

export const Form = styled.form`
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
export const Label = styled.label`
  display: block;
  margin-top: 1rem;
  margin-bottom: 10px;
`;

export const Fieldset = styled.fieldset`
  margin-top: 15px;
  border-radius: 5px;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid grey;
  height: 25px;
  background-color: rgb(238, 238, 238);
  font-size: 16px;
  &:focus {
    background-color: rgba(255, 255, 255, 0.7);
    outline: none;
    border-bottom: 2px solid rgb(84, 140, 168);
  }
`;

export const Select = styled.select`
  border: none;
  border-radius: 5px;
  height: 40px;
  padding: 0 5px;
`;

export const Button = styled.button`
  background-color: rgb(84, 140, 168);
  color: white;
  font-size: 15px;
  border: none;
  border-radius: 15px;
  padding: 10px 15px;
  cursor: pointer;
  margin-top: 30px;
`;

// export const styledComponents = {
//   H1: H1,
//   H2: H2,
//   Line: Line,
//   Container: Container,
//   FormContainer: FormContainer,
//   Form: Form,
//   Label: Label,
//   Fieldset: Fieldset,
//   Input: Input,
//   Select: Select,
//   Button: Button,
// };
