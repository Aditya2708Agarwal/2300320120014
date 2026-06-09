import {
  Card,
  CardContent,
  Typography,
  Chip,
} from "@mui/material";

const NotificationCard = ({ item }) => {
  return (
    <Card sx={{ mb: 0 }}>
      <CardContent>
        <Chip
          label={item.Type}
          sx={{ mb: 0.5 }}
        />

        <Typography variant="h4">
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