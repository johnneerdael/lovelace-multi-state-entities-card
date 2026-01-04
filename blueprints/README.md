# Status Banner Card: Use-Case Blueprints

This directory contains Home Assistant Blueprints designed to work perfectly with the Status Banner Card.

## Summary Table

| Use-Case                | Category    | Template Blueprint                                              | Automation Blueprint                                     | Notes                                 |
| :---------------------- | :---------- | :-------------------------------------------------------------- | :------------------------------------------------------- | :------------------------------------ |
| **Washer/Dryer Status** | Chores      | [Appliance Status](./template/appliance_status_sensor.yaml)     | [Notification](./automation/appliance_notification.yaml) | Generic for any power-monitoring plug |
| **Dishwasher Status**   | Chores      | [Appliance Status](./template/appliance_status_sensor.yaml)     | [Notification](./automation/appliance_notification.yaml) | Use same appliance logic              |
| **HVAC Filter**         | Chores      | [Filter Monitor](./template/hvac_filter_monitor.yaml)           | -                                                        | Uses runtime helper                   |
| **Robotic Vacuum**      | Chores      | [Vacuum Monitor](./template/vacuum_monitor.yaml)                | -                                                        | Direct entity mapping                 |
| **Window Monitor**      | Security    | [Security Monitor](./template/security_monitor.yaml)            | -                                                        | Aggregates binary sensors             |
| **Garage Door**         | Security    | [Security Monitor](./template/security_monitor.yaml)            | -                                                        | Logic for left open alerts            |
| **Smart Lock**          | Security    | [Security Monitor](./template/security_monitor.yaml)            | -                                                        | Includes jam detection                |
| **Leak Detection**      | Security    | [Security Monitor](./template/security_monitor.yaml)            | -                                                        | High urgency banner                   |
| **Air Quality**         | Environment | [Env Monitor](./template/environment_monitor.yaml)              | -                                                        | CO2/PM2.5 thresholds                  |
| **Plant Care**          | Environment | [Env Monitor](./template/environment_monitor.yaml)              | -                                                        | Moisture levels                       |
| **Pollen Forecast**     | Environment | [Env Monitor](./template/environment_monitor.yaml)              | -                                                        | External API mapping                  |
| **Grid Power**          | Energy      | [EV Charging Status](./template/ev_charging_status.yaml)        | [Charging Logic](./automation/ev_charging_logic.yaml)    | Solar & Rate aware                    |
| **Home Battery**        | Energy      | [Battery Status](./template/battery_status.yaml)                | -                                                        | Outage tracking                       |
| **Network Health**      | Energy      | [Security Monitor](./template/security_monitor.yaml)            | -                                                        | Ping/Device tracker status            |
| **3D Printer**          | Energy      | [Appliance Status](./template/appliance_status_sensor.yaml)     | -                                                        | MQTT/Octoprint integration            |
| **Commute Traffic**     | Lifestyle   | [Commute Monitor](./template/commute_monitor.yaml)              | -                                                        | Waze/Google Maps travel time          |
| **Mail Delivery**       | Lifestyle   | [Mail Monitor](./template/mail_delivery_monitor.yaml)           | [Mail Notify](./automation/mail_notification.yaml)       | Physical mailbox sensors              |
| **Family Presence**     | Lifestyle   | [House Mode](./template/house_mode_monitor.yaml)                | -                                                        | Guest mode logic                      |
| **Medication**          | Lifestyle   | [Medication Tracker](./template/medication_tracker_sensor.yaml) | [Med Reminder](./automation/medication_reminder.yaml)    | Actionable notifications              |
| **Shopping List**       | Lifestyle   | [Shopping List](./template/shopping_list_monitor.yaml)          | -                                                        | Todoist/HA Shopping list              |

## Direct Import Links

### Template Sensors (Create the Banner Data)

| Blueprint                 | Import Link                                                                                                                                                                                                                                                                            |
| :------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Appliance Status**      | [![Import Blueprint](https://my.home-assistant.io/badges/blueprint_import.svg)](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/template/appliance_status_sensor.yaml)   |
| **Battery Status**        | [![Import Blueprint](https://my.home-assistant.io/badges/blueprint_import.svg)](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/template/battery_status.yaml)            |
| **Commute Monitor**       | [![Import Blueprint](https://my.home-assistant.io/badges/blueprint_import.svg)](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/template/commute_monitor.yaml)           |
| **Environment Monitor**   | [![Import Blueprint](https://my.home-assistant.io/badges/blueprint_import.svg)](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/template/environment_monitor.yaml)       |
| **EV Charging Status**    | [![Import Blueprint](https://my.home-assistant.io/badges/blueprint_import.svg)](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/template/ev_charging_status.yaml)        |
| **Garbage Dashboard**     | [![Import Blueprint](https://my.home-assistant.io/badges/blueprint_import.svg)](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/template/garbage_dashboard_sensor.yaml)  |
| **House Mode Monitor**    | [![Import Blueprint](https://my.home-assistant.io/badges/blueprint_import.svg)](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/template/house_mode_monitor.yaml)        |
| **HVAC Filter Monitor**   | [![Import Blueprint](https://my.home-assistant.io/badges/blueprint_import.svg)](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/template/hvac_filter_monitor.yaml)       |
| **Mail Delivery Monitor** | [![Import Blueprint](https://my.home-assistant.io/badges/blueprint_import.svg)](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/template/mail_delivery_monitor.yaml)     |
| **Medication Tracker**    | [![Import Blueprint](https://my.home-assistant.io/badges/blueprint_import.svg)](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/template/medication_tracker_sensor.yaml) |
| **Security Monitor**      | [![Import Blueprint](https://my.home-assistant.io/badges/blueprint_import.svg)](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/template/security_monitor.yaml)          |
| **Shopping List Monitor** | [![Import Blueprint](https://my.home-assistant.io/badges/blueprint_import.svg)](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/template/shopping_list_monitor.yaml)     |
| **Vacuum Monitor**        | [![Import Blueprint](https://my.home-assistant.io/badges/blueprint_import.svg)](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/template/vacuum_monitor.yaml)            |

### Automation Logic (Actionable Features)

| Blueprint                  | Import Link                                                                                                                                                                                                                                                                                |
| :------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Appliance Notification** | [![Import Blueprint](https://my.home-assistant.io/badges/blueprint_import.svg)](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/automation/appliance_notification.yaml)      |
| **EV Charging Logic**      | [![Import Blueprint](https://my.home-assistant.io/badges/blueprint_import.svg)](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/automation/ev_charging_logic.yaml)           |
| **Garbage Vision**         | [![Import Blueprint](https://my.home-assistant.io/badges/blueprint_import.svg)](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/automation/garbage_vision_verification.yaml) |
| **Mail Notification**      | [![Import Blueprint](https://my.home-assistant.io/badges/blueprint_import.svg)](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/automation/mail_notification.yaml)           |
| **Medication Reminder**    | [![Import Blueprint](https://my.home-assistant.io/badges/blueprint_import.svg)](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/johnneerdael/lovelace-multi-state-entities-card/blob/main/blueprints/automation/medication_reminder.yaml)         |

## Why some have no Automation Blueprint?

Many use-cases (like **HVAC Filter** or **Network Health**) are "Passive Monitors". They are designed to show a persistent banner on your dashboard when action is needed, but they don't necessarily trigger complex logic beyond the state change itself.

For these, you simply use the **Template Blueprint** to create the sensor, and point your Status Banner Card at it.

## How to use

1. **Import the Template:** Click one of the "Import Blueprint" buttons above.
2. **Configure Inputs:** Map your real sensors (binary sensors, power meters, etc.) to the blueprint.
3. **Add the Card:** Use the generated `sensor.xyz_dashboard_status` in your Status Banner Card configuration.
