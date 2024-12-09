
# Energy Consumption Chart

This project provides a frontend application to display half-hourly energy consumption data in a chart. It connects to the [backend GraphQL](https://github.com/Akinmyde/carbon-graphql) API to fetch and visualize data over a specified date range.

## Features

- **Data Fetching**: Query energy consumption data via a GraphQL API.
- **Interactive UI:** Select a date range to filter data.
- **Visualization:** Line chart displays energy consumption trends over time.


## Tech Stack

- React: Frontend library for building user interfaces.

- Apollo Client: GraphQL client for data management.

- Chart.js (or another charting library): For visualizing data in a chart.




## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`VITE_APOLLO_CLIENT_URL`



## Run Locally

Clone the project

```bash
  git clone https://github.com/Akinmyde/carbon-graphql-client.git
```

Go to the project directory

```bash
  cd carbon-graphql-client
```

Install dependencies

```bash
  yarn install
```

Start the server

```bash
  yarn dev
```


## Screenshots

![App Screenshot](https://res.cloudinary.com/codeace/image/upload/v1733777814/Screenshot_2024-12-09_at_21.56.44.jpg)


## Authors

- [@akinmyde](https://www.github.com/akinmyde)
