import { useQuery, gql } from "@apollo/client";

const CUSTOMER = gql`
query GetCustomer($id: Int!){
    Customers_by_pk(id:$id){
        id
        number
        operator
        current_plan
        service_type
        status
    }
  }
`;

const useCustomer = (id) => {
    const {data, error, loading} = useQuery(CUSTOMER, {
        variables: {
            id
        }
    });

    return {
        data,
        error,
        loading
    }
}

export default useCustomer;