import { Table, Container, Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';

function LeadCountTable(props) {
  const [data, setData] = useState([]);
  const [startDate, setStartDate] = useState(props.startDate);
  const [endDate, setEndDate] = useState(props.endDate);

  useEffect(() => {
      fetchData()
      .catch(console.error);
    }, []);

    async function fetchData() {
      let response = await axios(`http://localhost:5000/getLeadCount?startTime=${startDate}&endTime=${endDate}`)
      console.log(response.data)
      setData(response.data);
    }
  
  return (
  <Container className="pt-5">
    <h1>{props.name}</h1>
    <Table striped bordered hover>
      <thead className="leadTable">
        <tr>
          <th>#</th>
          <th>Lead Source</th>
          <th>Amount of Leads</th>
          <th>date</th>
        </tr>
      </thead>
      <tbody>
      {
        Object.keys(data).map((key, i) => (
        <tr>
        <td>{i}</td>
        <td>{key}</td>
        <td>{data[key]}</td>
        <td>{startDate} - {endDate}</td>
        </tr>
        ))
      }
      </tbody>
    </Table>
  </Container>
  );
}

export default LeadCountTable;
