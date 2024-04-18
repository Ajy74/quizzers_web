import React, { useState, useEffect } from "react";
import { styled, tableCellClasses, Button, Table, TableHead, TableBody, TableRow, TableCell, TablePagination } from "@mui/material/";
import { Add, Edit, Delete } from "@mui/icons-material";

import AddQuizDialog from "../components/addQuizDialog";

import "../../../css/admin/menu/quizMenu.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#f2709c', 
        color: '#ffffff', 
        fontSize: 15,
        fontWeight: 'bold',
        letterSpacing: ".09ch"
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(even)': {
        backgroundColor: '#f2709b1a',
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const QuizMenu = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [quizData, setQuizData] = useState([]);
    const [filter, setFilter] = useState(null); 
    const [openDialog, setOpenDialog] = useState(false); 

    useEffect(() => {
        fetchQuizData();
    }, []);

    const fetchQuizData = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/all-quiz");
            const data = await response.json();
            setQuizData(data);
        } catch (error) {
            console.error("Error fetching quiz data:", error);
        }
    };

    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    };

    const handleRowsPerPageChange = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleButtonClick = (status) => {
        setFilter(status); // Set the filter based on the button clicked
    };

    const handleAddQuizClick = () => {
        handleButtonClick(100);
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };


    // Filter the quizData based on the current filter
    const filteredQuizData = filter!=null && filter!==100 ? quizData.filter(quiz => quiz.status === filter) : quizData;

    return (
        <div className="main-container">
            <div className="quiz-menu-container">
                <div className="button-row">
                    <Button variant="outlined" startIcon={<Add />} className={filter === 100 ? "activeBtn" : "deactiveBtn"} onClick={() => handleAddQuizClick()}>
                        Add Quiz
                    </Button>

                    <Button variant="outlined" className={filter === 0 ? "activeBtn" : "deactiveBtn"} onClick={() => handleButtonClick(0)}>
                        Live Quiz
                    </Button>

                    <Button variant="outlined" className={filter === -1 ? "activeBtn" : "deactiveBtn"} onClick={() => handleButtonClick(-1)}>
                        Upcoming Quiz
                    </Button>

                    <Button variant="outlined" className={filter === 1 ? "activeBtn" : "deactiveBtn"} onClick={() => handleButtonClick(1)}>
                        Completed Quiz
                    </Button>
                </div>
                <div className="gap"></div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Subject Name</StyledTableCell>
                            <StyledTableCell className="table-head-cell">Date</StyledTableCell>
                            <StyledTableCell className="table-head-cell">Status</StyledTableCell>
                            <StyledTableCell className="table-head-cell">Level</StyledTableCell>
                            <StyledTableCell className="table-head-cell">Participants</StyledTableCell>
                            <StyledTableCell className="table-head-cell">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(rowsPerPage > 0
                            ? filteredQuizData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : filteredQuizData
                        ).map((quiz, index) => (
                            <StyledTableRow key={index}>
                                <StyledTableCell>{quiz.subject}</StyledTableCell>
                                <StyledTableCell>{quiz.startDateTime}</StyledTableCell>
                                <StyledTableCell>
                                {
                                    quiz.status === -1 ? "Upcoming" : quiz.status === 0 ?"Live" : "Completed" 
                                }
                                </StyledTableCell>
                                <StyledTableCell>{quiz.level}</StyledTableCell>
                                <StyledTableCell>{quiz.joinedUserDetail.length}</StyledTableCell>
                                <StyledTableCell>
                                    <Edit className="action-icon editBtn" />
                                    <Delete className="action-icon delBtn" />
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
                <TablePagination
                    rowsPerPageOptions={[10, 20, 30]}
                    component="div"
                    count={filteredQuizData.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handlePageChange}
                    onRowsPerPageChange={handleRowsPerPageChange}
                />
            </div>

            <AddQuizDialog open={openDialog} handleClose={handleCloseDialog} />
        </div>
    );
}

export default QuizMenu;
