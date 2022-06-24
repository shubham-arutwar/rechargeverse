import { useQuery, gql } from "@apollo/client";

const ALLCUSTOMERS = gql`
query{
    Customers {
      id
      number
      operator
      current_plan
      service_type
      status
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