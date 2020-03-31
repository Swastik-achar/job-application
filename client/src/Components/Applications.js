import React from "react";
import {
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination
} from "@material-ui/core";
import Moment from "react-moment";
import Swal from "sweetalert2";
import { startUpdateApplication } from "../Actions/applicationsAction";

function Applications(props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  console.log(props, "applications");
  console.log(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleShortList = id => {
    const obj = {
      status: "shortlisted"
    };
    props.store.dispatch(startUpdateApplication(obj, id));
  };

  const handleReject = id => {
    const obj = {
      status: "rejected"
    };
    props.store.dispatch(startUpdateApplication(obj, id));
  };

  const handleDetail = id => {
    const obj = props.applications.find(ele => ele._id === id);
    Swal.fire({
      title: `Details
                  
                  Name:${obj.name}
                  Email:${obj.email}
                  Phone:${obj.phone}
                  Skills:${obj.skills}
                  Experience:${obj.experience}
                  
                  `
    });
  };
  return (
    <div align="center">
      {props.applications !== undefined && (
        <>
          <br />
          <br />
          <Table style={{ width: 1200 }} border="3">
            <TableHead>
              <TableRow>
                <TableCell>
                  <b>Name</b>
                </TableCell>
                <TableCell align="left">
                  <b>Technical Skills</b>
                </TableCell>
                <TableCell align="left">
                  <b>Experience</b>
                </TableCell>
                <TableCell align="left">
                  <b>Applied Date</b>
                </TableCell>
                <TableCell align="left">
                  <b>View Details</b>
                </TableCell>
                <TableCell align="left">
                  <b>Update application status</b>
                </TableCell>
              </TableRow>
            </TableHead>
            {
              <TableBody>
                {props.applications
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((application, i) => (
                    <TableRow key={application._id}>
                      <TableCell align="left">{application.name}</TableCell>
                      <TableCell align="left">{application.skills}</TableCell>
                      <TableCell align="left">
                        {application.experience}
                      </TableCell>
                      <TableCell align="left">
                        {
                          <Moment format="DD/MM/YYYY">
                            {application.createdAt}
                          </Moment>
                        }
                      </TableCell>
                      <TableCell align="left">
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => handleDetail(application._id)}
                        >
                          view Details
                        </Button>
                      </TableCell>
                      <TableCell align="left">
                        {application.status === "rejected" && (
                          <Button
                            variant="contained"
                            color="primary"
                            style={{ background: "#b30000" }}
                          >
                            Rejected
                          </Button>
                        )}
                        {application.status === "shortlisted" && (
                          <Button
                            variant="contained"
                            color="primary"
                            style={{ background: "green" }}
                          >
                            ShortListed
                          </Button>
                        )}
                        {application.status === "applied" && (
                          <>
                            <Button
                              variant="contained"
                              color="primary"
                              style={{ background: "green" }}
                              onClick={() => handleShortList(application._id)}
                            >
                              Short List
                            </Button>{" "}
                            <Button
                              variant="contained"
                              color="primary"
                              style={{ background: "#b30000" }}
                              onClick={() => handleReject(application._id)}
                            >
                              Reject
                            </Button>
                          </>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            }
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={props.applications.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </>
      )}
    </div>
  );
}

export default Applications;
