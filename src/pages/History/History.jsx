import { useEffect, useState } from "react";
import PageContainer from "../../components/Common/PageContainer";
import SectionHeader from "../../components/Common/SectionHeader";
import LoadingState from "../../components/Common/LoadingState";
import ErrorState from "../../components/Common/ErrorState";
import EmptyState from "../../components/Common/EmptyState";
import PredictionTable from "../../components/History/PredictionTable";
import PredictionDetailsDialog from "../../components/History/PredictionDetailsDialog";
import { getPredictionHistory } from "../../services/api";

const History = () => {
  const [records, setRecords] = useState([]);
  const [status, setStatus] = useState("loading");
  const [selectedRecord, setSelectedRecord] = useState(null);

  const fetchHistory = async () => {
    try {
      const result = await getPredictionHistory();
      setRecords(result);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const retryLoadHistory = () => {
    setStatus("loading");
    fetchHistory();
  };

  useEffect(() => {
    (async () => {
      await fetchHistory();
    })();
  }, []);

  return (
    <PageContainer>
      <SectionHeader
        eyebrow="History"
        title="Prediction History"
        subtitle="Review past loan applications and their estimated risk outcomes."
      />

      {status === "loading" && <LoadingState message="Loading prediction history..." minHeight={360} />}

      {status === "error" && (
        <ErrorState
          message="Unable to load prediction history. Please try again."
          onAction={retryLoadHistory}
        />
      )}

      {status === "success" && records.length === 0 && (
        <EmptyState
          title="No prediction history available"
          message="Run an assessment to start building a history of predictions."
        />
      )}

      {status === "success" && records.length > 0 && (
        <PredictionTable records={records} onViewRecord={setSelectedRecord} />
      )}

      <PredictionDetailsDialog
        record={selectedRecord}
        open={Boolean(selectedRecord)}
        onClose={() => setSelectedRecord(null)}
      />
    </PageContainer>
  );
};

export default History;
