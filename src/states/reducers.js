export const initialState = {
  createEmployee: {
    firstName: "",
    lastName: "",
    startDate: "",
    department: "Sales",
    dateOfBirth: "",
    street: "",
    city: "",
    state: "Alabama",
    zipCode: "",
  },
  employeeList: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "first-name":
      return {
        ...state,
        createEmployee: { ...state.createEmployee, firstName: action.value },
      };
    case "last-name":
      return {
        ...state,
        createEmployee: { ...state.createEmployee, lastName: action.value },
      };
    case "date-of-birth":
      return {
        ...state,
        createEmployee: { ...state.createEmployee, dateOfBirth: action.value },
      };
    case "start-date":
      return {
        ...state,
        createEmployee: { ...state.createEmployee, startDate: action.value },
      };
    case "street":
      return {
        ...state,
        createEmployee: { ...state.createEmployee, street: action.value },
      };
    case "city":
      return {
        ...state,
        createEmployee: { ...state.createEmployee, city: action.value },
      };
    case "state":
      return {
        ...state,
        createEmployee: { ...state.createEmployee, state: action.value },
      };
    case "zip-code":
      return {
        ...state,
        createEmployee: { ...state.createEmployee, zipCode: action.value },
      };
    case "department":
      return {
        ...state,
        createEmployee: { ...state.createEmployee, department: action.value },
      };
    case "employeeList":
      return {
        ...state,
        employeeList: action.value,
        createEmployee: {
          ...state.createEmployee,
          firstName: "",
          lastName: "",
          dateOfBirth: "",
          startDate: "",
          street: "",
          city: "",
          state: "Alabama",
          zipCode: "",
          department: "Sales",
        },
      };
    default:
      return state;
  }
};
