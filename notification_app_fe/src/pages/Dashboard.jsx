import {
  Container,
  Typography,
  CircularProgress,
} from "@mui/material";

import { useEffect, useState } from "react";

import api from "../services/api";

import NotificationCard from "../components/NotificationCard";

import { sortNotifications } from "../utils/priority";

import { Log } from "../services/logger";

const Dashboard = () => {
  const [notifications, setNotifications] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const response =
        await api.get("/notifications");

      const sorted = sortNotifications(
        response.data.notifications
      );

      setNotifications(sorted);

      await Log(
        "frontend",
        "info",
        "api",
        "Notifications fetched successfully"
      );
    } catch (error) {
      await Log(
        "frontend",
        "error",
        "api",
        "Failed to fetch notifications"
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Typography
        variant="h4"
        gutterBottom
      >
        Campus Notifications
      </Typography>

      {notifications.map((item) => (
        <NotificationCard
          key={item.ID}
          item={item}
        />
      ))}
    </Container>
  );
};

export default Dashboard;