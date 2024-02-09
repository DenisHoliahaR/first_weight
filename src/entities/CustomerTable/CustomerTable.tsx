import React from "react";
import CustomLabel from "../../shared/CustomLabel/CustomLabel";
import CustomerButton from "../../shared/CustomerButton/CustomerButton";

import "./customer-table.scss";

const CustomerTable = () => {
    return (
        <table className="table">
            <TableHeader />
            <tbody className="table__body">
                <TableLine />
                <TableLine />
                <TableLine />
                <TableLine />
            </tbody>
        </table>
    )
}

const TableHeader = () => {
    return (
        <thead className="table__header">
            <tr>
                <th><CustomLabel text="Customer Name" style="gray" /></th>
                <th><CustomLabel text="Company" style="gray" /></th>
                <th><CustomLabel text="Phone Number" style="gray" /></th>
                <th><CustomLabel text="Email" style="gray" /></th>
                <th><CustomLabel text="Country" style="gray" /></th>
                <th><CustomLabel text="Status" style="gray" /></th>
            </tr>
        </thead>
    )
}

const TableLine = () => {
    return (
        <tr className="table-line">
            <td><CustomLabel text="Jane Cooper" style="weight__medium" /></td>
            <td><CustomLabel text="Microsoft" style="weight__medium" /></td>
            <td><CustomLabel text="(225) 555-0118" style="weight__medium" /></td>
            <td><CustomLabel text="jane@microsoft.com" style="weight__medium" /></td>
            <td><CustomLabel text="United States" style="weight__medium" /></td>
            <td><CustomerButton/></td>
        </tr>
    )
}

export default CustomerTable;