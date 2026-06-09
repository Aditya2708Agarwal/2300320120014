import {
  Card,
  CardContent,
  Typography,
  Chip,
} from "@mui/material";

const NotificationCard = ({ item }) => {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Chip
          label={item.Type}
          sx={{ mb: 1 }}
        />

        <Typography variant="h6">
          {item.Message}
        </Typography>

        <Typography variant="body2">
          {item.Timestamp}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NotificationCard;