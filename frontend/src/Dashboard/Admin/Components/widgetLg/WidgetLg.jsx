import "./widgetLg.css";
import img3 from "../../../../images/image3.jpg";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle"> Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Donors</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={img3} className="widgetLgImg" />
            <span className="widgetLgName"> Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021 </td>
          <td className="widgetLgAmount">$1222 </td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={img3} className="widgetLgImg" />
            <span className="widgetLgName"> Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021 </td>
          <td className="widgetLgAmount">$1222 </td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={img3} className="widgetLgImg" />
            <span className="widgetLgName"> Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021 </td>
          <td className="widgetLgAmount">$1222 </td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={img3} className="widgetLgImg" />
            <span className="widgetLgName"> Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021 </td>
          <td className="widgetLgAmount">$1222 </td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
