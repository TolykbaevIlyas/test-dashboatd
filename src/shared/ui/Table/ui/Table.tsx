import "./Table.css";

const Table = ({ columns = [], data = [] }) => {
  return (
    <div className="tableWrapper">
      <table className="table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key} className="tableHead">
                <div className="tableHeadContent">
                  {col.icon && <span className="tableIcon">{col.icon}</span>}
                  <span>{col.label}</span>
                  {col.sortIcon && <span className="tableSortIcon">{col.sortIcon}</span>}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="tableRow">
              {columns.map((col) => (
                <td key={col.key} className="tableCell">
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
