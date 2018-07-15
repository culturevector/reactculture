import React, { Component } from 'react';

class Head extends Component {

    render() {
        return (
            <head>
                <meta charset="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="theme-color" content="#4DA5F4" />
                <meta name="csrf-token" />
                <title> - Hackathon Starter</title>
                <link rel="shortcut icon" href="/favicon.png" />
                <link rel="stylesheet" href="/css/main.css" />
            </head>
        )

    }
}

export default Head;