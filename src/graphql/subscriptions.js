/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateContainer = /* GraphQL */ `
  subscription OnCreateContainer {
    onCreateContainer {
      id
      name
      currentTemperature
      currentHumidity
      createdAt
      updatedAt
      sensorReadings {
        items {
          id
          sensorID
          containerName
          temperature
          humidity
          createdAt
          updatedAt
          containerSensorReadingsId
          sensorReadingContainerId
        }
        nextToken
      }
      currentLat
      currentLng
      gpsReading {
        items {
          id
          lat
          lng
          containerGpsReadingId
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onUpdateContainer = /* GraphQL */ `
  subscription OnUpdateContainer {
    onUpdateContainer {
      id
      name
      currentTemperature
      currentHumidity
      createdAt
      updatedAt
      sensorReadings {
        items {
          id
          sensorID
          containerName
          temperature
          humidity
          createdAt
          updatedAt
          containerSensorReadingsId
          sensorReadingContainerId
        }
        nextToken
      }
      currentLat
      currentLng
      gpsReading {
        items {
          id
          lat
          lng
          containerGpsReadingId
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onDeleteContainer = /* GraphQL */ `
  subscription OnDeleteContainer {
    onDeleteContainer {
      id
      name
      currentTemperature
      currentHumidity
      createdAt
      updatedAt
      sensorReadings {
        items {
          id
          sensorID
          containerName
          temperature
          humidity
          createdAt
          updatedAt
          containerSensorReadingsId
          sensorReadingContainerId
        }
        nextToken
      }
      currentLat
      currentLng
      gpsReading {
        items {
          id
          lat
          lng
          containerGpsReadingId
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onCreateSensorReading = /* GraphQL */ `
  subscription OnCreateSensorReading {
    onCreateSensorReading {
      id
      container {
        id
        name
        currentTemperature
        currentHumidity
        createdAt
        updatedAt
        sensorReadings {
          nextToken
        }
        currentLat
        currentLng
        gpsReading {
          nextToken
        }
      }
      sensorID
      containerName
      temperature
      humidity
      createdAt
      updatedAt
      containerSensorReadingsId
      sensor {
        id
        container {
          id
          name
          currentTemperature
          currentHumidity
          createdAt
          updatedAt
          currentLat
          currentLng
        }
        sensorReadings {
          nextToken
        }
        createdAt
        updatedAt
        sensorContainerId
      }
      sensorReadingContainerId
    }
  }
`;
export const onUpdateSensorReading = /* GraphQL */ `
  subscription OnUpdateSensorReading {
    onUpdateSensorReading {
      id
      container {
        id
        name
        currentTemperature
        currentHumidity
        createdAt
        updatedAt
        sensorReadings {
          nextToken
        }
        currentLat
        currentLng
        gpsReading {
          nextToken
        }
      }
      sensorID
      containerName
      temperature
      humidity
      createdAt
      updatedAt
      containerSensorReadingsId
      sensor {
        id
        container {
          id
          name
          currentTemperature
          currentHumidity
          createdAt
          updatedAt
          currentLat
          currentLng
        }
        sensorReadings {
          nextToken
        }
        createdAt
        updatedAt
        sensorContainerId
      }
      sensorReadingContainerId
    }
  }
`;
export const onDeleteSensorReading = /* GraphQL */ `
  subscription OnDeleteSensorReading {
    onDeleteSensorReading {
      id
      container {
        id
        name
        currentTemperature
        currentHumidity
        createdAt
        updatedAt
        sensorReadings {
          nextToken
        }
        currentLat
        currentLng
        gpsReading {
          nextToken
        }
      }
      sensorID
      containerName
      temperature
      humidity
      createdAt
      updatedAt
      containerSensorReadingsId
      sensor {
        id
        container {
          id
          name
          currentTemperature
          currentHumidity
          createdAt
          updatedAt
          currentLat
          currentLng
        }
        sensorReadings {
          nextToken
        }
        createdAt
        updatedAt
        sensorContainerId
      }
      sensorReadingContainerId
    }
  }
`;
export const onCreateSensor = /* GraphQL */ `
  subscription OnCreateSensor {
    onCreateSensor {
      id
      container {
        id
        name
        currentTemperature
        currentHumidity
        createdAt
        updatedAt
        sensorReadings {
          nextToken
        }
        currentLat
        currentLng
        gpsReading {
          nextToken
        }
      }
      sensorReadings {
        items {
          id
          sensorID
          containerName
          temperature
          humidity
          createdAt
          updatedAt
          containerSensorReadingsId
          sensorReadingContainerId
        }
        nextToken
      }
      createdAt
      updatedAt
      sensorContainerId
    }
  }
`;
export const onUpdateSensor = /* GraphQL */ `
  subscription OnUpdateSensor {
    onUpdateSensor {
      id
      container {
        id
        name
        currentTemperature
        currentHumidity
        createdAt
        updatedAt
        sensorReadings {
          nextToken
        }
        currentLat
        currentLng
        gpsReading {
          nextToken
        }
      }
      sensorReadings {
        items {
          id
          sensorID
          containerName
          temperature
          humidity
          createdAt
          updatedAt
          containerSensorReadingsId
          sensorReadingContainerId
        }
        nextToken
      }
      createdAt
      updatedAt
      sensorContainerId
    }
  }
`;
export const onDeleteSensor = /* GraphQL */ `
  subscription OnDeleteSensor {
    onDeleteSensor {
      id
      container {
        id
        name
        currentTemperature
        currentHumidity
        createdAt
        updatedAt
        sensorReadings {
          nextToken
        }
        currentLat
        currentLng
        gpsReading {
          nextToken
        }
      }
      sensorReadings {
        items {
          id
          sensorID
          containerName
          temperature
          humidity
          createdAt
          updatedAt
          containerSensorReadingsId
          sensorReadingContainerId
        }
        nextToken
      }
      createdAt
      updatedAt
      sensorContainerId
    }
  }
`;
export const onCreateGPSReading = /* GraphQL */ `
  subscription OnCreateGPSReading {
    onCreateGPSReading {
      id
      container {
        id
        name
        currentTemperature
        currentHumidity
        createdAt
        updatedAt
        sensorReadings {
          nextToken
        }
        currentLat
        currentLng
        gpsReading {
          nextToken
        }
      }
      lat
      lng
      containerGpsReadingId
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGPSReading = /* GraphQL */ `
  subscription OnUpdateGPSReading {
    onUpdateGPSReading {
      id
      container {
        id
        name
        currentTemperature
        currentHumidity
        createdAt
        updatedAt
        sensorReadings {
          nextToken
        }
        currentLat
        currentLng
        gpsReading {
          nextToken
        }
      }
      lat
      lng
      containerGpsReadingId
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGPSReading = /* GraphQL */ `
  subscription OnDeleteGPSReading {
    onDeleteGPSReading {
      id
      container {
        id
        name
        currentTemperature
        currentHumidity
        createdAt
        updatedAt
        sensorReadings {
          nextToken
        }
        currentLat
        currentLng
        gpsReading {
          nextToken
        }
      }
      lat
      lng
      containerGpsReadingId
      createdAt
      updatedAt
    }
  }
`;
export const onCreateLinkUser = /* GraphQL */ `
  subscription OnCreateLinkUser {
    onCreateLinkUser {
      id
      cognitoUserId
      qldbPersonId
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLinkUser = /* GraphQL */ `
  subscription OnUpdateLinkUser {
    onUpdateLinkUser {
      id
      cognitoUserId
      qldbPersonId
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLinkUser = /* GraphQL */ `
  subscription OnDeleteLinkUser {
    onDeleteLinkUser {
      id
      cognitoUserId
      qldbPersonId
      createdAt
      updatedAt
    }
  }
`;
