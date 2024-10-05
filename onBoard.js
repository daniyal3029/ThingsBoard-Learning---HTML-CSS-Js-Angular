let $injector = widgetContext.$scope.$injector;
let customDialog = $injector.get(widgetContext.servicesMap.get("customDialog"));
let entityService = $injector.get(
  widgetContext.servicesMap.get("entityService")
);
let assetService = $injector.get(widgetContext.servicesMap.get("assetService"));
let deviceService = $injector.get(
  widgetContext.servicesMap.get("deviceService")
);
let attributeService = $injector.get(
  widgetContext.servicesMap.get("attributeService")
);

let entityGroupService = $injector.get(
  widgetContext.servicesMap.get("entityGroupService")
);

const pageLink = widgetContext.pageLink(1, 0, "Tanks");
const pageLink2 = widgetContext.pageLink(20, 0);

const sensors = [
  {
    type: "Temperature",
    sensorUnit: {
      celsius: "C",
      fahrenheit: "F",
      kelvin: "K",
    },
    sensorName: {
      DwyerTTE: "Dwyer TTE",
      WIKATSeries: "WIKA T Series",
      YokogawaYTASeries: "Yokogawa YTA Series",
      EmersonRosemount644Series: "Emerson Rosemount 644 Series",
      other: "Other",
    },
  },
  {
    type: "Pressure",
    sensorUnit: {
      pascal: "Pa",
      atmosphere: "atm",
      psi: "psi",
      bar: "bar",
    },
    sensorName: {
      WIKAS10: "WIKA S10",
      WIKAS20: "WIKA S20",
      OMEGApx409: "OMEGA px409",
      HONEYWELLpx2: "HONEYWELL px2",
      HONEYWELLpx3: "HONEYWELL px3",
      other: "Other",
    },
  },
  {
    type: "Differential Pressure",
    sensorUnit: {
      pascal: "Pa",
      psi: "psi",
      inH2O: "inH₂O",
      mmH2O: "mmH₂O",
      bar: "bar",
    },
    sensorName: {
      AzbilAT9000: "Azbil AT9000",
      OmegaPX300Series: "Omega PX300 Series",
      HoneywellSmartLineSTD700: "Honeywell SmartLine STD700",
      WIKADTP20: "WIKA DTP20",
      YokogawaDPHarp: "Yokogawa DPHarp",
      other: "Other",
    },
  },
  {
    type: "Current",
    sensorUnit: {
      ampere: "A",
      milliampere: "mA",
      microampere: "μA",
      kiloampere: "kA",
    },
    sensorName: {
      CRMagneticsCR4120Series: "CR Magnetics CR4120 Series",
      NKTechnologiesATATRSeries: "NK Technologies AT/ATR Series",
      PheonexContactMCR: "Pheonex Contact MCR",
      other: "Other",
    },
  },
  {
    type: "Voltage",
    sensorUnit: {
      volt: "V",
      millivolt: "mV",
      kilovolt: "kV",
      microvolt: "μV",
    },
    sensorName: {
      VACT15042L: "VACT150-42L",
      NKTechnologiesVTSeries: "NK Technologies VT Series",
      HuadianVoltageSensor: "Huadian Voltage Sensor",
      TCVHYHDC: "TCVH YHDC",
      AnhuiQidian: "Anhui Qidian",
      other: "Other",
    },
  },
  {
    type: "Fluid Flow",
    sensorUnit: {
      cubicMeterPerSecond: "m³/s",
      literPerSecond: "L/s",
      cubicFeetPerSecond: "ft³/s",
      gallonPerMinute: "GPM",
      literPerHour: "L/h",
    },
    sensorName: {
      HoneywellVersaFlowVortex100SeriesL:
        "Honeywell VersaFlow Vortex 100 SeriesL",
      EndressHauserPromass300500: "Endress+Hauser Promass 300/500",
      SiemensSITRANSFST020: "Siemens SITRANS FST020",
      YokogawaADMAGAXFSeries: "Yokogawa ADMAG AXF Series",
      other: "Other",
    },
  },
  {
    type: "Vibration",
    sensorUnit: {
      meterPerSecondSquared: "m/s²",
      millimeterPerSecondSquared: "mm/s²",
      inchPerSecondSquared: "in/s²",
      gForce: "g",
    },
    sensorName: {
      PCBPiezotronicsIMISensors686B12: "PCB Piezotronics IMI Sensors 686B12",
      WilcoxonPCC420Series: "Wilcoxon PCC420 Series",
      MonitranMTN2285STC: "Monitran MTN/2285STC",
      Endevco65HT10: "Endevco 65HT-10",
      other: "Other",
    },
  },
  {
    type: "pH",
    sensorUnit: {
      pH: "pH",
    },
    sensorName: {
      OmegaphORP: "Omega pH/ORP",
      AtlasScientific: "Atlas Scientific",
      EHLiquilineCM44PpHORPTransmitter:
        "E+H Liquiline CM44P - pH/ORP Transmitter",
      other: "Other",
    },
  },
  {
    type: "Gas",
    sensorUnit: {
      standardCubicMeter: "SCM",
      cubicMeter: "m³",
      standardCubicFeet: "SCF",
      cubicFeet: "ft³",
      liter: "L",
      gallon: "gal",
    },
    sensorName: {
      CTX300: "CTX300",
      GasTransmittersListwithprice: "Gas Transmitters List with price",
      other: "Other",
    },
  },
  {
    type: "Other",
    sensorUnit: {
      celsius: "C",
      fahrenheit: "F",
      kelvin: "K",
      pascal: "Pa",
      atmosphere: "atm",
      psi: "psi",
      bar: "bar",
      ampere: "A",
      milliampere: "mA",
      microampere: "μA",
      kiloampere: "kA",
      volt: "V",
      millivolt: "mV",
      kilovolt: "kV",
      microvolt: "μV",
      cubicMeterPerSecond: "m³/s",
      literPerSecond: "L/s",
      cubicFeetPerSecond: "ft³/s",
      gallonPerMinute: "GPM",
      literPerHour: "L/h",
      meterPerSecondSquared: "m/s²",
      millimeterPerSecondSquared: "mm/s²",
      inchPerSecondSquared: "in/s²",
      gForce: "g",
      pH: "pH",
      standardCubicMeter: "SCM",
      cubicMeter: "m³",
      standardCubicFeet: "SCF",
      cubicFeet: "ft³",
      liter: "L",
      gallon: "gal",
    },
    sensorName: {
      other: "Other",
    },
  },
];

entityGroupService.getEntityGroups(pageLink, "DEVICE").subscribe((value) => {
  openEditEntityDialog();
});

function openEditEntityDialog() {
  customDialog
    .customDialog(htmlTemplate, EditEntityDialogController)
    .subscribe();
}

function EditEntityDialogController(instance) {
  let vm = instance;
  let latitude;
  let longitude;
  let initialCoords = {
    latitude: null,
    longitude: null,
  };
  let subscriptions = [];

  vm.onBoardDeviceNames = [];

  init();

  function init() {
    vm.unassignedDevicesGroup = null;
    vm.availableDevices = [];
    if (widgetContext.currentUser.authority === "TENANT_ADMIN") {
      vm.customerId = widgetContext.stateController.getStateParams().entityId;
      console.log(vm.customerId);
    } else {
      vm.customerId = {
        id: widgetContext.currentUser.customerId,
        entityType: "CUSTOMER",
      };
    }
    entityGroupService
      .getEntityGroupsByOwnerId(
        vm.customerId.entityType,
        vm.customerId.id,
        "DEVICE"
      )
      .subscribe((entityGroups) => {
        vm.customerDevicesGroups = entityGroups;
        vm.unassignedDevicesGroup = entityGroups.find(
          (group) => group.name === "Unassigned Devices"
        );
        if (vm.unassignedDevicesGroup) {
          var query = {
            entityFilter: {
              type: "entityGroup",
              groupType: "DEVICE",
              entityGroup: vm.unassignedDevicesGroup.id.id,
            },
            pageLink: {
              pageSize: 100,
              page: 0,
            },
            entityFields: [
              {
                key: "name",
                type: "ENTITY_FIELD",
              },
              {
                key: "type",
                type: "ENTITY_FIELD",
              },
              {
                key: "label",
                type: "ENTITY_FIELD",
              },
            ],
          };
          entityService.findEntityDataByQuery(query).subscribe((data) => {
            vm.onBoardDeviceNames = data.data.map((entityData) => {
              return {
                deviceId: entityData.entityId,
                name: entityData.latest["ENTITY_FIELD"].name.value,
                type: entityData.latest["ENTITY_FIELD"].type.value,
                label: entityData.latest["ENTITY_FIELD"].label.value,
              };
            });
          });
        }
      });
  }

  let selectedEntityId = null;
  vm.widgetContext = widgetContext;
  vm.currentStep = 0;
  vm.entityId = entityId;
  vm.entityName = entityName;
  vm.entityLabel = entityLabel;
  //   vm.entityType = entityId.entityType;

  vm.measurementSystems = {
    pressure: "Pressure",
    differentialPressure: "Differential Pressure",
    temperature: "Temperature",
    current: "Current",
    voltage: "Voltage",
    fluidFlow: "Fluid Flow",
    vibration: "Vibration",
    pH: "pH",
    gas: "Gas",
    other: "Other",
  };

  vm.attributes = {};
  vm.entity = {};
  vm.selectedSensorName1;
  vm.selectedSensorName2;
  vm.selectedSensorName3;
  vm.selectedSensorName4;
  vm.readingUnits1;
  vm.readingUnits2;
  vm.readingUnits3;
  vm.readingUnits4;

  vm.editEntityFormGroup = vm.fb.group({
    general: vm.fb.group({
      entityName: [null],
      entityLabel: [null],
    }),
    details: vm.fb.group({
      ch1SensorType: [""],
      ch2SensorType: [""],
      ch3SensorType: [""],
      ch4SensorType: [""],
      ch1SensorLabel: [""],
      ch2SensorLabel: [""],
      ch3SensorLabel: [""],
      ch4SensorLabel: [""],
      ch1Unit: [""],
      ch2Unit: [""],
      ch3Unit: [""],
      ch4Unit: [""],
      ch1SensorName: [""],
      ch2SensorName: [""],
      ch3SensorName: [""],
      ch4SensorName: [""],
      ch1MinValue: [],
      ch2MinValue: [],
      ch3MinValue: [],
      ch4MinValue: [],
      ch1MaxValue: [],
      ch2MaxValue: [],
      ch3MaxValue: [],
      ch4MaxValue: [],
    }),
    location: vm.fb.group({
      latitude: [null, []],
      longitude: [null, []],
    }),
  });

  // Subscribe to changes in both min and max values
  const minControls = [
    vm.editEntityFormGroup.get("details").get("ch1MinValue"),
    vm.editEntityFormGroup.get("details").get("ch2MinValue"),
    vm.editEntityFormGroup.get("details").get("ch3MinValue"),
    vm.editEntityFormGroup.get("details").get("ch4MinValue"),
  ];
  const maxControls = [
    vm.editEntityFormGroup.get("details").get("ch1MaxValue"),
    vm.editEntityFormGroup.get("details").get("ch2MaxValue"),
    vm.editEntityFormGroup.get("details").get("ch3MaxValue"),
    vm.editEntityFormGroup.get("details").get("ch4MaxValue"),
  ];

  for (let i = 0; i < minControls.length; i++) {
    const minControl = minControls[i];
    const maxControl = maxControls[i];

    minControl.valueChanges.subscribe(() => {
      if (minControl.value !== null && maxControl.value !== null) {
        validateMinMaxValues(minControl, maxControl);
      }
    });

    maxControl.valueChanges.subscribe(() => {
      if (minControl.value !== null && maxControl.value !== null) {
        validateMinMaxValues(minControl, maxControl);
      }
    });
  }

  function validateMinMaxValues(minControl, maxControl) {
    const minValue = minControl.value;
    const maxValue = maxControl.value;

    // Check if maxValue is less than minValue
    if (maxValue < minValue) {
      minControl.setErrors({ greaterThanMax: true });
    } else {
      minControl.setErrors(null);
    }
  }

  vm.editEntityFormGroup.get("location").get("latitude").disable();
  vm.editEntityFormGroup.get("location").get("longitude").disable();

  subscribeForControlsChanges();

  //   vm.cancel = function () {
  //     const coords = vm.editEntityFormGroup.get("location").value;
  //     let obs;
  //     if (
  //       Number(latitude) !== Number(vm.attributes.latitude) ||
  //       Number(longitude) !== Number(vm.attributes.longitude)
  //     ) {
  //       obs = resetCoordinatesAttributes();
  //     } else {
  //       obs = widgetContext.rxjs.of([]);
  //     }

  //     obs.subscribe(() => {
  //       subscriptions.forEach((sub) => sub.unsubscribe());
  //       vm.dialogRef.close(null);
  //     });
  //   };
  vm.cancel = function () {
    vm.dialogRef.close(null);
  };

  vm.save = function () {
    vm.editEntityFormGroup.markAsPristine();
    console.log("line 443", selectedEntityId);
    // var device = vm.editEntityFormGroup.value.general.entityName.deviceId;
    // console.log("device", device);
    // var deviceId = device.id;
    widgetContext.rxjs
      .forkJoin([
        entityGroupService.removeEntityFromEntityGroup(
          vm.unassignedDevicesGroup.id.id,
          selectedEntityId.id
        ),
        saveAttributes(selectedEntityId),
        saveEntity(),
        addDeviceToGroup(selectedEntityId),
      ])
      .subscribe(function () {
        subscriptions.forEach((sub) => sub.unsubscribe());
        widgetContext.updateAliases();
        vm.dialogRef.close(null);
      });
  };

  function addDeviceToGroup(deviceId) {
    let targetGroupId = "d0348e00-edb6-11ee-8dac-69a2ea1fd917";
    return entityGroupService.addEntitiesToEntityGroup(targetGroupId, [
      deviceId.id,
    ]);
  }

  function getEntityAttributes(attributes) {
    for (var i = 0; i < attributes.length; i++) {
      let value = attributes[i].value;
      if (value) {
        if (
          attributes[i].key === "latitude" ||
          attributes[i].key === "longitude"
        ) {
          if (attributes[i].key === "latitude") {
            initialCoords.latitude = value;
            latitude = value;
          } else {
            initialCoords.longitude = value;
            longitude = value;
          }
          value = value.toFixed(5);
        }
      }
      vm.attributes[attributes[i].key] = value;
    }
  }

  function getEntityInfo() {
    const onBoardDeviceNameChange = vm.editEntityFormGroup
      .get("general")
      .get("entityName")
      .valueChanges.subscribe((selectedDeviceName) => {
        if (selectedDeviceName) {
          console.log("selectedDeviceName", selectedDeviceName);
          const selectedDevice = vm.onBoardDeviceNames.find(
            (device) => device.name === selectedDeviceName.name
          );
          console.log("hello i am selected", selectedDevice);
          if (selectedDevice) {
            // vm.entityId = selectedDevice.id;
            selectedEntityId = selectedDevice.deviceId;
            vm.entityId = selectedEntityId;
            console.log("vm.entityId", vm.entityId);
            vm.entityName = selectedDevice.name;
            vm.entityLabel = selectedDevice.label;
            // console.log("selected id", vm.entityLabel, vm.entityId);

            fetchEntityData(vm.entityId);
          } else {
            // console.log("Device not found for name:", selectedDeviceName);
          }
        }
      });

    subscriptions.push(onBoardDeviceNameChange);
  }

  getEntityInfo();

  function fetchEntityData(entityId) {
    widgetContext.rxjs
      .forkJoin([
        attributeService.getEntityAttributes(entityId, "SERVER_SCOPE"),
        entityService.getEntity(entityId.entityType, entityId.id),
      ])
      .subscribe(function (data) {
        getEntityAttributes(data[0]);

        vm.entity = data[1];

        vm.editEntityFormGroup.patchValue(
          {
            general: {
              // entityName: vm.entity.name,
              entityName: vm.entity.name,
              entityLabel: vm.entity.label,
            },
            details: vm.attributes,
            location: vm.attributes,
          },

          { emitEvent: false }
        );

        function setSensorProperties(sensorType, sensorNameProp, unitProp) {
          console.log(sensorType);
          const sensor = sensors.find((s) => s.type === sensorType);
          console.log(sensor);
          if (sensor) {
            vm[sensorNameProp] = sensor.sensorName;
            vm[unitProp] = sensor.sensorUnit;
          } else {
            vm[sensorNameProp] = {};
            vm[unitProp] = {};
          }
        }

        setSensorProperties(
          vm.attributes.ch1SensorType,
          "selectedSensorName1",
          "readingUnits1"
        );
        setSensorProperties(
          vm.attributes.ch2SensorType,
          "selectedSensorName2",
          "readingUnits2"
        );
        setSensorProperties(
          vm.attributes.ch3SensorType,
          "selectedSensorName3",
          "readingUnits3"
        );
        setSensorProperties(
          vm.attributes.ch4SensorType,
          "selectedSensorName4",
          "readingUnits4"
        );

        // Subscribe to location changes
        subscribeForLocation();
      });
  }

  function subscribeForLocation() {
    const updatedDataCheckup = widgetContext.rxjs.interval(1000);
    subscriptions.push(
      updatedDataCheckup.subscribe(() => updateLocationData())
    );
  }

  function subscribeForControlsChanges() {
    const sensorCount = 4;

    for (let i = 1; i <= sensorCount; i++) {
      const sensorTypeControl = vm.editEntityFormGroup.get(
        `details.ch${i}SensorType`
      );
      const sensorNameControl = vm.editEntityFormGroup.get(
        `details.ch${i}SensorName`
      );
      const sensorUnitControl = vm.editEntityFormGroup.get(
        `details.ch${i}Unit`
      );

      const sensorChange = sensorTypeControl.valueChanges.subscribe((value) => {
        const sensor = sensors.find((s) => s.type === value);
        vm[`selectedSensorName${i}`] = sensor ? sensor.sensorName : {};
        vm[`readingUnits${i}`] = sensor ? sensor.sensorUnit : {};
        sensorNameControl.setValue(null);
        sensorUnitControl.setValue(null);
        sensorNameControl.markAsTouched({ onlySelf: true });
        sensorUnitControl.markAsTouched({ onlySelf: true });
      });

      subscriptions.push(sensorChange);
    }
  }

  function updateLocationData() {
    const location = vm.editEntityFormGroup.get("location");
    widgetContext.data.forEach((itr) => {
      if (entityName === itr.datasource.entityName) {
        if (itr.dataKey.name === "latitude") {
          if (latitude !== itr.data[0][1]) {
            latitude = itr.data[0][1]
              ? itr.data[0][1].toFixed(5)
              : itr.data[0][1];

            location.get("latitude").setValue(latitude);
            vm.editEntityFormGroup.markAsDirty();
          }
        } else if (itr.dataKey.name === "longitude") {
          if (longitude !== itr.data[0][1]) {
            longitude = itr.data[0][1]
              ? itr.data[0][1].toFixed(5)
              : itr.data[0][1];

            location.get("longitude").setValue(longitude);
            vm.editEntityFormGroup.markAsDirty();
          }
        }
      }
    });
  }

  // channels checkboxes
  vm.checkboxOneChecked = true;
  vm.checkboxTwoChecked = true;
  vm.checkboxThreeChecked = true;
  vm.checkboxFourChecked = true;

  vm.handleCheckboxChange = function (checkboxId) {
    if (checkboxId === "one") {
      vm.checkboxOneChecked = !vm.checkboxOneChecked;
    } else if (checkboxId === "two") {
      vm.checkboxTwoChecked = !vm.checkboxTwoChecked;
    } else if (checkboxId === "three") {
      vm.checkboxThreeChecked = !vm.checkboxThreeChecked;
    } else if (checkboxId === "four") {
      vm.checkboxFourChecked = !vm.checkboxFourChecked;
    }
  };

  function saveEntity() {
    const formValues = vm.editEntityFormGroup.value;

    if (
      vm.entity.label !== formValues.general.entityLabel ||
      vm.entity.name !== formValues.general.entityName
    ) {
      vm.entity.label = formValues.general.entityLabel;
      vm.entity.name = formValues.general.entityName;
      return deviceService.saveDevice(vm.entity);
    }

    return widgetContext.rxjs.of([]);
  }

  function saveAttributes(entityId) {
    const details = vm.editEntityFormGroup.get("details").value;

    let attributesArray = [];

    for (let key in details) {
      if (details[key] !== vm.attributes[key]) {
        attributesArray.push({ key: key, value: details[key] });
      }
    }

    if (attributesArray.length > 0) {
      return attributeService.saveEntityAttributes(
        entityId,
        "SERVER_SCOPE",
        attributesArray
      );
    }
    return widgetContext.rxjs.of([]);
  }

  function resetCoordinatesAttributes() {
    const coordinatesArray = [
      { key: "latitude", value: initialCoords.latitude },
      { key: "longitude", value: initialCoords.longitude },
    ];

    return attributeService.saveEntityAttributes(
      entityId,
      "SERVER_SCOPE",
      coordinatesArray
    );
  }
}
