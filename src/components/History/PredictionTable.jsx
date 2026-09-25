import { useMemo, useState } from "react";
import {
  Box,
  Chip,
  IconButton,
  InputAdornment,
  MenuItem,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import RiskChip from "../Common/RiskChip";
import EmptyState from "../Common/EmptyState";
import { formatCurrency, formatPercent } from "../../utils/formatters";

const columns = [
  { id: "id", label: "Application ID", sortable: true },
  { id: "loanAmount", label: "Loan Amount", sortable: true },
  { id: "creditScore", label: "Credit Score", sortable: true },
  { id: "defaultProbability", label: "Risk Probability", sortable: true },
  { id: "prediction", label: "Prediction", sortable: false },
  { id: "riskLevel", label: "Risk Level", sortable: false },
  { id: "action", label: "Action", sortable: false },
];

const riskFilterOptions = ["All", "Low", "Moderate", "High"];

const PredictionTable = ({ records, onViewRecord }) => {
  const [search, setSearch] = useState("");
  const [riskFilter, setRiskFilter] = useState("All");
  const [orderBy, setOrderBy] = useState("loanAmount");
  const [order, setOrder] = useState("desc");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleSort = (columnId) => {
    const isAsc = orderBy === columnId && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(columnId);
  };

  const filteredRecords = useMemo(() => {
    let result = records;

    if (riskFilter !== "All") {
      result = result.filter((record) => record.riskLevel === riskFilter);
    }

    if (search.trim()) {
      const query = search.trim().toLowerCase();
      result = result.filter((record) => record.id.toLowerCase().includes(query));
    }

    const sorted = [...result].sort((a, b) => {
      const aVal = a[orderBy];
      const bVal = b[orderBy];
      if (aVal < bVal) return order === "asc" ? -1 : 1;
      if (aVal > bVal) return order === "asc" ? 1 : -1;
      return 0;
    });

    return sorted;
  }, [records, search, riskFilter, orderBy, order]);

  const paginatedRecords = filteredRecords.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Paper>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        alignItems={{ xs: "stretch", sm: "center" }}
        justifyContent="space-between"
        sx={{ p: 2.5 }}
      >
        <TextField
          size="small"
          placeholder="Search by application ID"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
            setPage(0);
          }}
          sx={{ minWidth: { sm: 280 } }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchRoundedIcon fontSize="small" />
                </InputAdornment>
              ),
            },
          }}
          aria-label="Search prediction history"
        />

        <TextField
          select
          size="small"
          label="Risk Level"
          value={riskFilter}
          onChange={(event) => {
            setRiskFilter(event.target.value);
            setPage(0);
          }}
          sx={{ minWidth: 160 }}
        >
          {riskFilterOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </Stack>

      {filteredRecords.length === 0 ? (
        <EmptyState
          title="No matching records"
          message="Try adjusting your search or risk level filter."
        />
      ) : (
        <>
          <TableContainer>
            <Table sx={{ minWidth: 720 }} aria-label="Prediction history table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell key={column.id}>
                      {column.sortable ? (
                        <TableSortLabel
                          active={orderBy === column.id}
                          direction={orderBy === column.id ? order : "asc"}
                          onClick={() => handleSort(column.id)}
                        >
                          {column.label}
                        </TableSortLabel>
                      ) : (
                        column.label
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedRecords.map((record) => (
                  <TableRow key={record.id} hover>
                    <TableCell>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {record.id}
                      </Typography>
                    </TableCell>
                    <TableCell>{formatCurrency(record.loanAmount)}</TableCell>
                    <TableCell>{record.creditScore}</TableCell>
                    <TableCell>{formatPercent(record.defaultProbability)}</TableCell>
                    <TableCell>
                      <Chip
                        size="small"
                        label={record.prediction === 1 ? "Default" : "No Default"}
                        color={record.prediction === 1 ? "error" : "success"}
                        variant="outlined"
                      />
                    </TableCell>
                    <TableCell>
                      <RiskChip level={record.riskLevel} size="small" />
                    </TableCell>
                    <TableCell>
                      <Tooltip title="View details">
                        <IconButton size="small" onClick={() => onViewRecord(record)} aria-label={`View details for ${record.id}`}>
                          <VisibilityRoundedIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Box sx={{ borderTop: "1px solid", borderColor: "divider" }}>
            <TablePagination
              component="div"
              count={filteredRecords.length}
              page={page}
              onPageChange={(event, newPage) => setPage(newPage)}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={(event) => {
                setRowsPerPage(parseInt(event.target.value, 10));
                setPage(0);
              }}
              rowsPerPageOptions={[5, 10, 25]}
            />
          </Box>
        </>
      )}
    </Paper>
  );
};

export default PredictionTable;
