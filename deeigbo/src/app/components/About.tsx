"use client";

import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { Translate, BookOpenText, Globe, ChatText, UsersThree, Code, ShieldCheck } from "@phosphor-icons/react";

// Define type for features
interface Feature {
    id: number;
    icon: React.ReactNode;
    title: string;
    description: string;
}

// About App Features
const features: Feature[] = [
    {
        id: 1,
        icon: <Translate size={48} weight="fill" color="#3f51b5" />,
        title: "Real-time Translation",
        description: "Instantly translate English to Igbo and Igbo to English with high accuracy.",
    },
    {
        id: 2,
        icon: <BookOpenText size={48} weight="fill" color="#4caf50" />,
        title: "Igbo Grammar & Phrases",
        description: "Get explanations of Igbo grammar, common phrases, and language structure.",
    },
    {
        id: 3,
        icon: <Globe size={48} weight="fill" color="#f44336" />,
        title: "Language Preservation",
        description: "Helping preserve and promote the Igbo language globally through AI technology.",
    },
    {
        id: 4,
        icon: <ChatText size={48} weight="fill" color="#ff9800" />,
        title: "Conversational AI",
        description: "Engage in natural conversations with an AI-powered Igbo language assistant.",
    },
    {
        id: 5,
        icon: <UsersThree size={48} weight="fill" color="#3f51b5" />,
        title: "Our Team",
        description: "A dedicated team of professionals bringing innovative ideas to life.",
    },
    {
        id: 6,
        icon: <Globe size={48} weight="fill" color="#4caf50" />,
        title: "Our Vision",
        description: "Empowering businesses globally through digital transformation.",
    },
    {
        id: 7,
        icon: <Code size={48} weight="fill" color="#f44336" />,
        title: "Our Expertise",
        description: "We specialize in web development, AI, and cutting-edge technology.",
    },
    {
        id: 8,
        icon: <ShieldCheck size={48} weight="fill" color="#ff9800" />,
        title: "Security",
        description: "Ensuring data privacy and secure digital solutions for our clients.",
    },
];

const About: React.FC = () => {
    return (
        <Box sx={{ textAlign: "center", py: 5, px: 3 }}>
            {/* Title Section */}
            <Typography variant="h4" fontWeight="bold" mb={2}>
                About Dée Ìgbò
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={4} maxWidth="600px" margin="auto">
                <strong>Dée Ìgbò</strong> is an AI-powered tool that helps users translate between English and Igbo,
                making language learning and communication seamless.
            </Typography>

            {/* Features Section */}
            <Grid container spacing={3} justifyContent="center">
                {features.map((feature) => (
                    <Grid item xs={12} sm={6} md={3} key={feature.id}>
                        <Card
                            sx={{
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                textAlign: "center",
                                p: 3,
                                boxShadow: 3,
                                borderRadius: 2,
                                transition: "transform 0.3s ease-in-out",
                                "&:hover": { transform: "scale(1.05)" },
                            }}
                        >
                            {feature.icon}
                            <CardContent>
                                <Typography variant="h6" fontWeight="bold">
                                    {feature.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {feature.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default About;
