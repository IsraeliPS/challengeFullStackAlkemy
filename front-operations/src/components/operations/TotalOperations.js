import { useSelector } from "react-redux";

export const TotalOperations = ({ transactions }) => {
  const state = useSelector((state) => state.operations.results);

  
  const count = state.count;
  const totalIngress = state.valueIngress;
  const totalEgress = state.valueEgress;

  const total = totalIngress - totalEgress;

  return (
    <>
      <tr className="ingress">
        <th colSpan="3">Ingresos</th>
        <td colSpan="2">
          <h5>$ {totalIngress >= 0 ? totalIngress : 0}</h5>
        </td>
      </tr>
      <tr className="egress">
        <th colSpan="3">Gastos</th>
        <td colSpan="2">
          <h5>$ {totalEgress >= 0 ? totalEgress : 0}</h5>
        </td>
      </tr>
      <tr className="general">
        <th colSpan="3">Balance Total</th>
        <td colSpan="2">
          <h5>$ {total}</h5>
        </td>
      </tr>
      {
        count > 10 ? (
          <tr className="total">
            <th colSpan="2">Total Registros</th>
            <td colSpan="1">
              <p>{count >= 0 ? count : 0}</p>
            </td>
            <th colSpan="1">Mostrados</th>
            <td colSpan="1">
              <p>{10}</p>
            </td>
          </tr>
        ) : (
          <tr className="total">
            <th colSpan="3">Total Registros</th>
            <td colSpan="2">
              <p>{count }</p>
            </td>
          </tr>
        )

      }
    </>
  );
};
