import { Grid } from "@mui/material";
import DatasetRoundedIcon from "@mui/icons-material/DatasetRounded";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import PageContainer from "../../components/Common/PageContainer";
import StatCard from "../../components/Common/StatCard";

const stats = [
  { icon: DatasetRoundedIcon, value: "255K+", label: "Loan Records" },
  { icon: TuneRoundedIcon, value: "24", label: "Model Features" },
  { icon: PsychologyRoundedIcon, value: "ML", label: "Prediction Engine" },
  { icon: BoltRoundedIcon, value: "Real-time", label: "Risk Assessment" },
];

const StatsSection = () => {
  return (
    <PageContainer sx={{ py: { xs: 5, md: 7 } }}>
      <Grid container spacing={3}>
        {stats.map((stat) => (
          <Grid key={stat.label} size={{ xs: 6, md: 3 }}>
            <StatCard {...stat} />
          </Grid>
        ))}
      </Grid>
    </PageContainer>
  );
};

export default StatsSection;
