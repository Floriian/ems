import { Box, Paper, Typography } from "@mui/material";

interface Props {
  title: string;
  value: string;
}

export function StatisticsCard({ title, value }: Props) {
  return <Box>
    <Paper sx={{
      padding: 2,
      display: "flex",
      justifyContent: "space-between",
      maxWidth: 400
    }}>
      <Typography variant="h5">{title}</Typography>
      <Typography variant="h5">{value}</Typography>
    </Paper>
  </Box>
}
