import { useQuery, gql } from "@apollo/client";

const ALLCUSTOMERS = gql`
query{
    Customers {
      id
      number
      operator
    }
  }  
`;

const useCustomers = () => {
    const { loading, error, data } = useQuery(ALLCUSTOMERS);

    return {
        error,
        data,
        loading
    }
}

export default useCustomers;