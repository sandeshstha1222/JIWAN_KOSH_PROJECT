import "./agencywidgetLg.css";
import img3 from "../../../../images/image3.jpg";

export default function AgencyWidgetLg() {
  const Button = ({ type }) => {
    return <button className={"agencywidgetLgButton " + type}>{type}</button>;
  };

  return (
    <div className="agencywidgetLg">
      <h3 className="agencywidgetLgTitle"> Transactions</h3>
      <table className="agencywidgetLgTable">
        <tr className="agencywidgetLgTr">
          <th className="agencywidgetLgTh">Donors</th>
          <th className="agencywidgetLgTh">Date</th>
          <th className="agencywidgetLgTh">Amount</th>
          <th className="agencywidgetLgTh">Status</th>
        </tr>
        <tr className="agencywidgetLgTr">
          <td className="agencywidgetLgUser">
            <img src={img3} className="agencywidgetLgImg" />
            <span className="agencywidgetLgName"> Susan Carol</span>
          </td>
          <td className="agencywidgetLgDate">2 Jun 2021 </td>
          <td className="agencywidgetLgAmount">$1222 </td>
          <td className="agencywidgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="agencywidgetLgTr">
          <td className="agencywidgetLgUser">
            <img src={img3} className="agencywidgetLgImg" />
            <span className="agencywidgetLgName"> Susan Carol</span>
          </td>
          <td className="agencywidgetLgDate">2 Jun 2021 </td>
          <td className="agencywidgetLgAmount">$1222 </td>
          <td className="agencywidgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="agencywidgetLgTr">
          <td className="agencywidgetLgUser">
            <img src={img3} className="agencywidgetLgImg" />
            <span className="agencywidgetLgName"> Susan Carol</span>
          </td>
          <td className="agencywidgetLgDate">2 Jun 2021 </td>
          <td className="agencywidgetLgAmount">$1222 </td>
          <td className="agencywidgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="agencywidgetLgTr">
          <td className="agencywidgetLgUser">
            <img src={img3} className="agencywidgetLgImg" />
            <span className="agencywidgetLgName"> Susan Carol</span>
          </td>
          <td className="agencywidgetLgDate">2 Jun 2021 </td>
          <td className="agencywidgetLgAmount">$1222 </td>
          <td className="agencywidgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
