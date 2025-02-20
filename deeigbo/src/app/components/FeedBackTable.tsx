"use client"; // Ensure this runs on the client side

import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { Timestamp } from "firebase/firestore"; // Import separately

import { db } from "../firebase/config";

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, CircularProgress } from "@mui/material";

// Define the feedback type
interface Feedback {
    id: string;
    name: string;
    email: string;
    message: string;
    createdAt: Timestamp;
}


const FeedbackTable = () => {
    const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
    const [loading, setLoading] = useState(true);
    // const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchFeedbacks = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "feedback"));
                const feedbackList: Feedback[] = querySnapshot.docs.map((doc) => {
                    const data = doc.data() as Feedback; // Cast to `Feedback`
                    return {
                        id: doc.id,
                        name: data.name || "Unknown",
                        email: data.email || "No Email",
                        message: data.message || "No Message",
                        createdAt: data.createdAt || Timestamp.fromDate(new Date()), // Handle missing createdAt
                    };
                });
                setFeedbacks(feedbackList);
            } catch (error) {
                console.error("Error fetching feedback:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchFeedbacks();
    }, []);

    return (
        <TableContainer component={Paper} sx={{ maxWidth: 800, margin: "auto", mt: 5, p: 2, borderRadius: 2, boxShadow: 3 }}>
            <Typography variant="h5" textAlign="center" sx={{ my: 2, fontWeight: "bold", color: "primary.main" }}>
                Feedback Responses
            </Typography>

            {loading ? (
                <CircularProgress sx={{ display: "block", margin: "auto", my: 5 }} />
            ) : (
                <Table>
                    <TableHead>
                            <TableRow sx={{ backgroundColor: "primary.light" }}>
                                <TableCell sx={{ fontWeight: "bold", color: "white" }}><strong>Name</strong></TableCell>
                                <TableCell sx={{ fontWeight: "bold", color: "white" }}  ><strong>Email</strong></TableCell>
                                <TableCell sx={{ fontWeight: "bold", color: "white" }}><strong>Message</strong></TableCell>
                                <TableCell sx={{ fontWeight: "bold", color: "white" }}><strong>Submitted On</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {feedbacks.length > 0 ? (
                            feedbacks.map((feedback) => (
                                <TableRow key={feedback.id}>
                                    <TableCell>{feedback.name}</TableCell>
                                    <TableCell>{feedback.email}</TableCell>
                                    <TableCell>{feedback.message}</TableCell>
                                    <TableCell>{new Date(feedback.createdAt.seconds * 1000).toLocaleString()}</TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={4} align="center">
                                    No feedback available.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            )}
        </TableContainer>
    );
};

export default FeedbackTable;
