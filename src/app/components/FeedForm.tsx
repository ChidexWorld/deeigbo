"use client"; // Ensure this runs on the client side

import React, { useState } from "react";
import { Box, Button, TextField, Typography, Snackbar, Alert, Container } from "@mui/material";
import { db, collection, addDoc } from "../firebase/config"; // Correct import

const FeedbackForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [open, setOpen] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);



    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (loading) return; // Prevent multiple clicks

        setError("");
        setLoading(true); // Disable submit button

        try {
            //save to firebase
            await addDoc(collection(db, "feedback"), {
                name: name,
                email: email,
                message: message,
                createdAt: new Date()
            });

            // Send email notification
            await fetch("/api/sendFeedbackEmail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, message }),
            });

            setOpen(true);
            setName("");
            setEmail("");
            setMessage("");
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message); // Use the error message
            } else {
                setError("Error submitting feedback. Please try again.");
            }
        } finally {
            setLoading(false); // Re-enable submit button
        }
    };

    return (
        <Container
            maxWidth="sm"
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
            }}
        >
            <Box
                component="form"
                onSubmit={handleSubmit}
                autoComplete="off"
                sx={{
                    width: "100%",
                    maxWidth: 400,
                    p: 3,
                    boxShadow: 3,
                    borderRadius: 2,
                    backgroundColor: "white",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                }}
            >
                <Typography variant="h5" fontWeight="bold" textAlign="center">
                    Feedback Form
                </Typography>

                <Typography variant="body1" textAlign="center">
                    We appreciate your feedback! Let us know how we can improve.
                </Typography>

                <TextField name="name" label="Name" variant="outlined" fullWidth required value={name} onChange={(e) => setName(e.target.value)} />

                <TextField name="email" label="Email" type="email" variant="outlined" fullWidth required value={email} onChange={(e) => setEmail(e.target.value)} />


                <TextField
                    label="Message"
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />

                <Button type="submit" variant="contained" color="primary" size="large">
                    {loading ? "Submitting..." : "Submit"}
                </Button>

                {error && <Alert severity="error">{error}</Alert>}

                {/* Snackbar for feedback submission */}
                <Snackbar open={open} autoHideDuration={3000} onClose={() => setOpen(false)}>
                    <Alert onClose={() => setOpen(false)} severity="success" sx={{ width: "100%" }}>
                        Feedback submitted successfully!
                    </Alert>
                </Snackbar>
            </Box>
        </Container>
    );
};

export default FeedbackForm;
