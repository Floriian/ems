import { Box, Grid, Paper, Typography } from "@mui/material";
import { StatisticsCard } from "./StatisticsCard";
export function DashboardPage() {
  return <Grid container spacing={2}>
    {[1, 2, 3, 4].map((row, i) => {
      return (
        <Grid item key={i} xs={12} md={4}>
          <StatisticsCard title="a" value="2" />
        </Grid>
      )
    })}
  </Grid>
}
