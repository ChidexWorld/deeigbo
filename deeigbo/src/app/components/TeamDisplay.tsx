"use client";

import React from "react";
import { Box, Grid, Card, CardMedia, CardContent, Typography, IconButton } from "@mui/material";
import { LinkedinLogo, GithubLogo, TwitterLogo } from "@phosphor-icons/react";

// Team Data
const teamMembers = [
    {
        id: 1,
        name: "John Doe",
        role: "Frontend Developer",
        image: "/team/john.jpg", // Replace with actual image paths
        linkedin: "https://linkedin.com/in/johndoe",
        github: "https://github.com/johndoe",
        twitter: "https://twitter.com/johndoe",
    },
    {
        id: 2,
        name: "Jane Smith",
        role: "Backend Developer",
        image: "/team/jane.jpg",
        linkedin: "https://linkedin.com/in/janesmith",
        github: "https://github.com/janesmith",
        twitter: "https://twitter.com/janesmith",
    },
    {
        id: 3,
        name: "Michael Brown",
        role: "UI/UX Designer",
        image: "/team/michael.jpg",
        linkedin: "https://linkedin.com/in/michaelbrown",
        github: "https://github.com/michaelbrown",
        twitter: "https://twitter.com/michaelbrown",
    },
];

const TeamDisplay = () => {
    return (
        <Box sx={{ flexGrow: 1, p: 4, textAlign: "center" }}>
            <Typography variant="h4" fontWeight="bold" mb={3}>
                Meet Our Team
            </Typography>

            <Grid container spacing={3} justifyContent="center">
                {teamMembers.map((member) => (
                    <Grid item xs={12} sm={6} md={4} key={member.id}>
                        <Card
                            sx={{
                                maxWidth: 300,
                                margin: "auto",
                                borderRadius: 3,
                                boxShadow: 4,
                                transition: "transform 0.3s ease-in-out",
                                "&:hover": { transform: "scale(1.05)" },
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="250"
                                image={member.image}
                                alt={member.name}
                                sx={{ borderRadius: "8px 8px 0 0" }}
                            />
                            <CardContent>
                                <Typography variant="h6" fontWeight="bold">
                                    {member.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {member.role}
                                </Typography>
                                <Box mt={1} display="flex" justifyContent="center" gap={1}>
                                    <IconButton component="a" href={member.linkedin} target="_blank" color="primary">
                                        <LinkedinLogo />
                                    </IconButton>
                                    <IconButton component="a" href={member.github} target="_blank" color="secondary">
                                        <GithubLogo />
                                    </IconButton>
                                    <IconButton component="a" href={member.twitter} target="_blank" color="info">
                                        <TwitterLogo />
                                    </IconButton>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default TeamDisplay;
