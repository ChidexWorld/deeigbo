"use client";

import React from "react";
import { Box, Grid, Card, CardMedia, CardContent, Typography, IconButton } from "@mui/material";
import { LinkedinLogo, GithubLogo, TwitterLogo } from "@phosphor-icons/react";

// Team Data
const teamMembers = [
    {
        id: 1,
        name: "Igboanugo Chidera Goodness",
        role: "Software Engineer",
        image: "/team/chidex.jpg",
        linkedin: "https://www.linkedin.com/in/chidexstanley",
        github: "https://github.com/ChidexWorld",
        twitter: "https://x.com/ChidexWorld_?t=EOk_owyQV686hFsGH7Ui0A&s=09",
    },
    
];

const TeamDisplay = () => {
    return (
        <Box sx={{ flexGrow: 1, p: 4, textAlign: "center" }}>
            <Typography variant="h4" fontWeight="bold" mb={3}>
                Meet Our Developer
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
