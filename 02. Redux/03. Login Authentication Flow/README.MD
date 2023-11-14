# React Redux Login Authentication

## Introduction

This repository contains the codebase for [React Redux Login Authentication]. The client-side code is based on the concepts and implementations discussed in [this video](https://www.youtube.com/watch?v=-JJFQ9bkUbo&t=2526s). Before testing the application, please follow the steps outlined below.

## Getting Started

### Prerequisites

1. Make sure you have [MongoDB Compass](https://www.mongodb.com/try/download/compass) installed on your system.

### Setup

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/VladimirovMario/Sandbox.git
   ```

2. Install the project dependencies:

   ```bash
   npm install
   ```

### Database Import

1. Open MongoDB Compass.
2. Use the provided CSV file in the `data` folder to import data into Compass.

## Testing Instructions

To test the application, follow the steps below:

1. Register a new user using Postman. Use the following screenshot as a reference for the expected input:

![postman_register](https://github.com/VladimirovMario/Basics-with-JavaScript/assets/103949296/a5a57215-bab0-437e-aa10-cf27442b42b8)

**Note:** This server does not support refresh tokens, so please make the Authentication request instead.
