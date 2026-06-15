ThingsBoard Overview
ThingsBoard is an open-source IoT platform for data collection, processing, visualization, and device management. It provides a flexible and powerful framework for managing IoT devices and visualizing data.

Key Features
* Device Management: Easily onboard and manage devices using MQTT, CoAP, or HTTP protocols.
* Data Visualization: Create customizable dashboards to visualize real-time data through various widgets like graphs, charts, and maps.
* Rule Engine: Set up rules for processing data and triggering actions based on device data or events.
* Data Storage: Store data in various formats and query it using a built-in SQL-like language.
* Integration: Connect with other systems using REST API, WebSocket, and other integration methods.

Getting Started
### Prerequisites
* Java 8 or later
* PostgreSQL or Cassandra database
* MQTT broker (e.g., Mosquitto)
### Installation
Clone the Repository:
```bash
git clone https://github.com/thingsboard/thingsboard.git
cd thingsboard
```
Set Up Database:
Follow the ThingsBoard documentation to set up your database (PostgreSQL or Cassandra).
Configure Application:
Update the thingsboard.conf file with your database connection details.
Run ThingsBoard:
```bash
./bin/thingsboard start
```
Accessing the Dashboard
Open your browser and go to http://localhost:8080.
Use default credentials:
* Email: tenant@thingsboard.org
* Password: tenant

Creating Custom Widgets
To create custom widgets for visualizing your data:
1. Navigate to Dashboards: Create a new dashboard or edit an existing one.
2. Add Widget: Click on the "+" button and select "Add Widget".
3. Customize: Choose the desired widget type and configure it to display data from your devices.
4. Save: Save your dashboard and start visualizing your IoT data.

Conclusion
ThingsBoard provides a robust framework for managing IoT devices and visualizing their data in real-time. Its flexibility and extensibility make it a powerful choice for IoT applications.

For more details, visit the official ThingsBoard documentation: https://thingsboard.io/docs/

### Custom Widgets in this Repository
This repository features custom Angular widgets for ThingsBoard, created during my EPTeck internship. Explore real-time IoT data visualization!

### Usage Examples
To use the custom widgets in this repository, follow these steps:
1. Clone this repository.
2. Import the widgets into your ThingsBoard instance.
3. Configure the widgets to display data from your devices.

### Contributing
If you'd like to contribute to this repository, please submit a pull request with your changes and include a brief description of the changes you made.

### License
This repository is licensed under the MIT License. See LICENSE for details.