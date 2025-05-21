import{g as i}from"./iMGPiNt9.js";const s=i`
  query GetInvestigations {
    id
    title
    investigations {
      id
      investigation_type_id
      title
    }
  }
`,o=i`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;export{s as I,o as L};
