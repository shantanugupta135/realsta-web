import React,{useState} from "react";
import { CardItem } from "./types";
import FormModal from "./FormModal";
import { Col, Row, Table } from "react-bootstrap";
import "./propertiesAvailableTable.css"

function PropertiesAvailableTable({ data }: { data: CardItem }) {
    const [show, setShow] = useState(false);
    // Handle null or undefined available_space
    
    
    const availableSpace: any[] = data.available_space ? JSON.parse(data.available_space) : [];

    // Get all keys present in any row of available_space
    const columns = availableSpace
        ? Object.keys(availableSpace[0])
        : [];

    // Remove columns that are missing in any row
    const filteredColumns = columns
    // .filter(col =>
    //     availableSpace.every(row => row[col] !== undefined && row[col] !== null && row[col] !== "")
    // );

    // Define column labels
    const columnLabels: { [key: string]: string } = {
        id: "S.NO.",
        area: "Area (sq ft / seats)",
        cam_charges: "CAM Charges (In Rs)",
        lock_in: "Lock-in",
        escalation: "Escalation",
        status: "Status"
    };

    return availableSpace.length ? (
        <section className="customContainer">
            <Row>
                <Col md={12}>
                <div className="d-flex justify-content-between">
                    <h2 className='ip_amenities_heading'>Available Spaces</h2>
                    <button className="btn-secondary-alternative-custom pat-button-margin" onClick={() => setShow(true)}>CONTACT FOR PRICING<i className="fa-solid fa-arrow-right ms-2 au-learn-more-button"></i></button>
                </div>
                    <hr className='ip_hr' />
                    <FormModal show={show} onClose={() => setShow(false)} />
                </Col>
            </Row>
            <div className="table-responsive">
                <Table striped bordered hover className="mt-5 pat-table">
                    <thead>
                        <tr>
                            {filteredColumns.map(colKey =>
                                columnLabels[colKey] ? (
                                    <th key={colKey} className="pat-column pt-3 pb-3">{columnLabels[colKey]}</th>
                                ) : null
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {availableSpace.map((row, idx) => (
                            <tr key={idx}>
                                {filteredColumns.map((colKey, colIdx) => (
                                    <td className={`pat-col-${colIdx % 2} pt-3 pb-3`} key={colKey}>
                                        {row[colKey] ?? ""}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </section>
    ) : null;
}

export default PropertiesAvailableTable;