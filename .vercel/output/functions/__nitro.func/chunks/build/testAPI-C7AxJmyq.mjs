import { gql } from 'graphql-tag';

const INVESTIGATIONS_REQUEST = gql`
  query GetInvestigations {
    id
    title
    investigations {
      id
      investigation_type_id
      title
    }
  }
`;
const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

export { INVESTIGATIONS_REQUEST as I, LOGIN_MUTATION as L };
//# sourceMappingURL=testAPI-C7AxJmyq.mjs.map
