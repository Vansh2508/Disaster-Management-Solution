// GLOF Early Warning System - Enhanced Lake Overlay Application
class GLOFLakeOverlaySystem {
    constructor() {
        // Lake data from the provided JSON structure
        this.glacialLakes = {
            "palcacocha": {
                "id": "palcacocha",
                "name": "Lake Palcacocha", 
                "location": "Cordillera Blanca, Peru",
                "country": "Peru",
                "coordinates": [-9.4067, -77.4285],
                "elevation": "4562m",
                "riskLevel": "normal",
                "populationAtRisk": 50000,
                "lakeData": {
                    "surfaceArea": "0.6 km²",
                    "maxDepth": "74m",
                    "volume": "17.8 million m³",
                    "damType": "Moraine dam",
                    "lastOutburst": "1941"
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [[
                        [-77.4295, -9.4057],
                        [-77.4275, -9.4057], 
                        [-77.4270, -9.4067],
                        [-77.4275, -9.4077],
                        [-77.4295, -9.4077],
                        [-77.4300, -9.4067],
                        [-77.4295, -9.4057]
                    ]]
                },
                "riskZone": {
                    "type": "Polygon", 
                    "coordinates": [[
                        [-77.4400, -9.3900],
                        [-77.4100, -9.3900],
                        [-77.4000, -9.4400],
                        [-77.4400, -9.4400],
                        [-77.4400, -9.3900]
                    ]]
                },
                "sensors": {
                    "waterLevel": {"current": 42.5, "threshold": 80, "unit": "cm", "trend": "stable"},
                    "temperature": {"current": 8.2, "unit": "°C", "trend": "increasing"},
                    "seismicActivity": {"current": 0.3, "threshold": 2.0, "unit": "magnitude", "trend": "stable"},
                    "weather": {"temperature": 12, "humidity": 65, "windSpeed": 15, "rainfall": 2.3}
                }
            },
            "tsho_rolpa": {
                "id": "tsho_rolpa",
                "name": "Tsho Rolpa Lake",
                "location": "Dolakha District, Nepal", 
                "country": "Nepal",
                "coordinates": [27.8717, 86.4753],
                "elevation": "4580m",
                "riskLevel": "warning",
                "populationAtRisk": 40000,
                "lakeData": {
                    "surfaceArea": "1.65 km²",
                    "maxDepth": "107m", 
                    "volume": "85.9 million m³",
                    "damType": "Moraine dam",
                    "lastOutburst": "Never recorded"
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [[
                        [86.4720, 27.8700],
                        [86.4780, 27.8700],
                        [86.4790, 27.8720],
                        [86.4785, 27.8740],
                        [86.4720, 27.8740],
                        [86.4710, 27.8720],
                        [86.4720, 27.8700]
                    ]]
                },
                "riskZone": {
                    "type": "Polygon",
                    "coordinates": [[
                        [86.4600, 27.8600],
                        [86.4900, 27.8600], 
                        [86.4950, 27.8850],
                        [86.4600, 27.8850],
                        [86.4600, 27.8600]
                    ]]
                },
                "sensors": {
                    "waterLevel": {"current": 67.8, "threshold": 75, "unit": "cm", "trend": "rising"},
                    "temperature": {"current": 3.1, "unit": "°C", "trend": "stable"},
                    "seismicActivity": {"current": 1.2, "threshold": 2.0, "unit": "magnitude", "trend": "increasing"}, 
                    "weather": {"temperature": 5, "humidity": 82, "windSpeed": 22, "rainfall": 8.7}
                }
            },
            "dig_tsho": {
                "id": "dig_tsho",
                "name": "Dig Tsho Lake",
                "location": "Punakha District, Bhutan",
                "country": "Bhutan",
                "coordinates": [28.0559, 89.7378],
                "elevation": "4364m", 
                "riskLevel": "normal",
                "populationAtRisk": 15000,
                "lakeData": {
                    "surfaceArea": "0.36 km²",
                    "maxDepth": "45m",
                    "volume": "9.2 million m³", 
                    "damType": "Moraine dam",
                    "lastOutburst": "1994"
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [[
                        [89.7360, 28.0540],
                        [89.7390, 28.0540],
                        [89.7395, 28.0565], 
                        [89.7385, 28.0580],
                        [89.7355, 28.0575],
                        [89.7350, 28.0555],
                        [89.7360, 28.0540]
                    ]]
                },
                "riskZone": {
                    "type": "Polygon",
                    "coordinates": [[
                        [89.7250, 28.0450],
                        [89.7500, 28.0450],
                        [89.7550, 28.0650], 
                        [89.7250, 28.0650],
                        [89.7250, 28.0450]
                    ]]
                },
                "sensors": {
                    "waterLevel": {"current": 38.2, "threshold": 70, "unit": "cm", "trend": "stable"},
                    "temperature": {"current": 6.7, "unit": "°C", "trend": "stable"},
                    "seismicActivity": {"current": 0.1, "threshold": 2.0, "unit": "magnitude", "trend": "stable"},
                    "weather": {"temperature": 9, "humidity": 58, "windSpeed": 12, "rainfall": 0.5}
                }
            },
            "imja_tsho": {
                "id": "imja_tsho", 
                "name": "Imja Tsho Lake",
                "location": "Solukhumbu District, Nepal",
                "country": "Nepal",
                "coordinates": [27.9000, 86.9250],
                "elevation": "5010m",
                "riskLevel": "critical",
                "populationAtRisk": 25000,
                "lakeData": {
                    "surfaceArea": "1.28 km²",
                    "maxDepth": "116m",
                    "volume": "61.7 million m³",
                    "damType": "Moraine dam", 
                    "lastOutburst": "Never recorded"
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [[
                        [86.9220, 27.8980],
                        [86.9280, 27.8980],
                        [86.9290, 27.9010],
                        [86.9285, 27.9025],
                        [86.9220, 27.9020],
                        [86.9210, 27.9000], 
                        [86.9220, 27.8980]
                    ]]
                },
                "riskZone": {
                    "type": "Polygon",
                    "coordinates": [[
                        [86.9100, 27.8800],
                        [86.9400, 27.8800],
                        [86.9450, 27.9100],
                        [86.9100, 27.9100],
                        [86.9100, 27.8800]
                    ]]
                },
                "sensors": {
                    "waterLevel": {"current": 89.5, "threshold": 85, "unit": "cm", "trend": "rising_rapidly"},
                    "temperature": {"current": 11.8, "unit": "°C", "trend": "increasing"},
                    "seismicActivity": {"current": 2.4, "threshold": 2.0, "unit": "magnitude", "trend": "critical"},
                    "weather": {"temperature": 15, "humidity": 89, "windSpeed": 28, "rainfall": 15.2}
                }
            }
        };

        this.mapConfig = {
            "defaultCenter": [28.3949, 82.7937],
            "defaultZoom": 6,
            "minZoom": 3, 
            "maxZoom": 18
        };

        this.alertThresholds = {
            "waterLevel": {"warning": 70, "critical": 85},
            "seismicActivity": {"warning": 1.5, "critical": 2.0},
            "rainfall": {"warning": 10, "critical": 20}
        };

        this.recentAlerts = [
            {
                "timestamp": "2025-09-03T08:30:00Z",
                "station": "Imja Tsho Lake",
                "type": "critical",
                "message": "CRITICAL: Water level exceeded threshold - Immediate evacuation recommended",
                "sensorType": "waterLevel"
            },
            {
                "timestamp": "2025-09-03T08:15:00Z", 
                "station": "Tsho Rolpa Lake",
                "type": "warning",
                "message": "WARNING: Rising water levels detected - Increased monitoring active",
                "sensorType": "waterLevel"
            },
            {
                "timestamp": "2025-09-03T07:45:00Z",
                "station": "Imja Tsho Lake", 
                "type": "warning",
                "message": "WARNING: Seismic activity above normal levels",
                "sensorType": "seismicActivity"
            }
        ];

        this.selectedLake = null;
        this.demoMode = false;
        this.chartData = {};
        this.chart = null;
        this.updateInterval = null;
        
        // Map-related properties
        this.map = null;
        this.lakeLayers = {};
        this.riskZoneLayers = {};
        this.labelLayers = {};
        this.mapLayers = {};
        this.layerControl = null;
        
        // Layer visibility flags
        this.showLakes = true;
        this.showRiskZones = true;
        this.showLabels = true;

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initializeMap();
        this.updateTime();
        this.renderAlerts();
        this.initializeChart();
        this.startRealTimeUpdates();
        this.updateLakeButtons();
        this.updateMetrics();
        
        setInterval(() => this.updateTime(), 1000);
    }

    initializeMap() {
        // Initialize the Leaflet map
        this.map = L.map('worldMap', {
            center: this.mapConfig.defaultCenter,
            zoom: this.mapConfig.defaultZoom,
            minZoom: this.mapConfig.minZoom,
            maxZoom: this.mapConfig.maxZoom,
            zoomControl: true,
            dragging: true,
            touchZoom: true,
            doubleClickZoom: true,
            scrollWheelZoom: true
        });

        // Define map layers
        this.mapLayers = {
            'Street View': L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors',
                maxZoom: 18
            }),
            'Satellite View': L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
                attribution: '© Esri, Maxar, Earthstar Geographics',
                maxZoom: 18
            }),
            'Terrain View': L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenTopoMap contributors',
                maxZoom: 17
            })
        };

        // Set default layer
        this.mapLayers['Terrain View'].addTo(this.map);

        // Add layer control
        this.layerControl = L.control.layers(this.mapLayers, null, {
            position: 'topright',
            collapsed: false
        }).addTo(this.map);

        // Add scale control
        L.control.scale({
            position: 'bottomleft'
        }).addTo(this.map);

        // Add coordinates and zoom display
        this.map.on('mousemove', (e) => {
            const coords = e.latlng;
            const coordsElement = document.getElementById('mapCoordinates');
            if (coordsElement) {
                coordsElement.innerHTML = 
                    `Lat: ${coords.lat.toFixed(4)}, Lng: ${coords.lng.toFixed(4)}`;
            }
        });

        this.map.on('zoomend', () => {
            const zoomElement = document.getElementById('mapZoom');
            if (zoomElement) {
                zoomElement.innerHTML = `Zoom: ${this.map.getZoom()}`;
            }
        });

        // Create lake overlays and risk zones with a slight delay to ensure map is ready
        setTimeout(() => {
            this.createLakeOverlays();
            this.createRiskZones();
            this.createLakeLabels();
            
            // Fit map to show all lakes after overlays are created
            setTimeout(() => {
                this.fitMapToLakes();
            }, 200);
        }, 100);
    }

    createLakeOverlays() {
        console.log('Creating lake overlays...');
        
        Object.values(this.glacialLakes).forEach(lake => {
            console.log(`Creating overlay for ${lake.name}`);
            
            const lakeLayer = this.createLakePolygon(lake);
            this.lakeLayers[lake.id] = lakeLayer;
            
            // Always add to map initially, then control visibility
            lakeLayer.addTo(this.map);
            
            console.log(`Added ${lake.name} overlay to map`);
        });
        
        console.log('All lake overlays created');
    }

    createLakePolygon(lake) {
        // Convert GeoJSON coordinates [lng, lat] to Leaflet coordinates [lat, lng]
        const coordinates = lake.geometry.coordinates[0].map(coord => [coord[1], coord[0]]);
        
        console.log(`Creating polygon for ${lake.name} with coordinates:`, coordinates);
        
        const colors = this.getLakeColor(lake.riskLevel);
        
        const polygon = L.polygon(coordinates, {
            color: colors.stroke,
            weight: lake.riskLevel === 'critical' ? 4 : lake.riskLevel === 'warning' ? 3 : 2,
            opacity: 1,
            fillColor: colors.fill,
            fillOpacity: lake.riskLevel === 'critical' ? 0.8 : lake.riskLevel === 'warning' ? 0.7 : 0.6
        });

        // Add pulsing animation for critical lakes
        if (lake.riskLevel === 'critical') {
            polygon.on('add', () => {
                const element = polygon.getElement();
                if (element) {
                    element.style.animation = 'lake-pulse-critical 1.5s ease-in-out infinite';
                }
            });
        } else if (lake.riskLevel === 'warning') {
            polygon.on('add', () => {
                const element = polygon.getElement();
                if (element) {
                    element.style.animation = 'lake-pulse-warning 3s ease-in-out infinite';
                }
            });
        }

        // Create popup content
        const popupContent = this.createLakePopupContent(lake);
        polygon.bindPopup(popupContent, {
            maxWidth: 350,
            className: 'lake-popup',
            closeButton: true,
            autoClose: false,
            closeOnClick: false
        });

        // Add click event
        polygon.on('click', (e) => {
            console.log(`Clicked on ${lake.name}`);
            this.selectLake(lake.id);
            polygon.openPopup();
            L.DomEvent.stopPropagation(e);
        });

        // Add hover effects
        polygon.on('mouseover', () => {
            const originalWeight = lake.riskLevel === 'critical' ? 4 : lake.riskLevel === 'warning' ? 3 : 2;
            const originalOpacity = lake.riskLevel === 'critical' ? 0.8 : lake.riskLevel === 'warning' ? 0.7 : 0.6;
            
            polygon.setStyle({
                weight: originalWeight + 2,
                fillOpacity: Math.min(1, originalOpacity + 0.2)
            });
        });

        polygon.on('mouseout', () => {
            polygon.setStyle({
                weight: lake.riskLevel === 'critical' ? 4 : lake.riskLevel === 'warning' ? 3 : 2,
                fillOpacity: lake.riskLevel === 'critical' ? 0.8 : lake.riskLevel === 'warning' ? 0.7 : 0.6
            });
        });

        console.log(`Created polygon for ${lake.name}`);
        return polygon;
    }

    createRiskZones() {
        console.log('Creating risk zones...');
        
        Object.values(this.glacialLakes).forEach(lake => {
            const riskZoneLayer = this.createRiskZonePolygon(lake);
            this.riskZoneLayers[lake.id] = riskZoneLayer;
            
            // Always add to map initially
            riskZoneLayer.addTo(this.map);
        });
        
        console.log('All risk zones created');
    }

    createRiskZonePolygon(lake) {
        // Convert coordinates for risk zone
        const coordinates = lake.riskZone.coordinates[0].map(coord => [coord[1], coord[0]]);
        
        const polygon = L.polygon(coordinates, {
            color: '#FF6B6B',
            weight: 2,
            opacity: 0.6,
            fillColor: '#FF6B6B',
            fillOpacity: 0.2,
            dashArray: '5, 5'
        });

        polygon.bindTooltip(`Risk Zone - ${lake.name}`, {
            permanent: false,
            direction: 'center',
            className: 'risk-zone-tooltip'
        });

        return polygon;
    }

    createLakeLabels() {
        console.log('Creating lake labels...');
        
        Object.values(this.glacialLakes).forEach(lake => {
            const labelMarker = this.createLakeLabel(lake);
            this.labelLayers[lake.id] = labelMarker;
            
            // Always add to map initially
            labelMarker.addTo(this.map);
        });
        
        console.log('All lake labels created');
    }

    createLakeLabel(lake) {
        const icon = L.divIcon({
            html: `<div style="
                background: rgba(255, 255, 255, 0.9);
                padding: 4px 8px;
                border-radius: 4px;
                font-size: 11px;
                font-weight: 500;
                color: #1f2121;
                border: 1px solid rgba(0,0,0,0.2);
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                white-space: nowrap;
                pointer-events: none;
            ">${lake.name}</div>`,
            className: 'lake-label',
            iconSize: 'auto',
            iconAnchor: [0, 0]
        });

        return L.marker(lake.coordinates, { icon: icon });
    }

    getLakeColor(riskLevel) {
        const colors = {
            normal: { fill: '#1FB8CD', stroke: '#218054' },
            warning: { fill: '#FFC185', stroke: '#A84B2F' },
            critical: { fill: '#B4413C', stroke: '#C0152F' }
        };
        return colors[riskLevel] || colors.normal;
    }

    createLakePopupContent(lake) {
        const sensors = lake.sensors;
        const riskClass = `popup-risk--${lake.riskLevel}`;
        
        return `
            <div class="lake-popup">
                <div class="popup-header">
                    <h4 class="popup-title">${lake.name}</h4>
                    <span class="popup-risk ${riskClass}">${lake.riskLevel.toUpperCase()}</span>
                </div>
                
                <div class="popup-location">
                    📍 ${lake.location}<br>
                    🏔️ Elevation: ${lake.elevation}<br>
                    💧 Surface Area: ${lake.lakeData.surfaceArea}<br>
                    📏 Max Depth: ${lake.lakeData.maxDepth}<br>
                    👥 Population at Risk: ${lake.populationAtRisk.toLocaleString()}
                </div>
                
                <div class="popup-sensors">
                    <div class="popup-sensor">
                        <div>💧 Water Level</div>
                        <div class="popup-sensor-value">${sensors.waterLevel.current} ${sensors.waterLevel.unit}</div>
                    </div>
                    <div class="popup-sensor">
                        <div>🌡️ Temperature</div>
                        <div class="popup-sensor-value">${sensors.temperature.current} ${sensors.temperature.unit}</div>
                    </div>
                    <div class="popup-sensor">
                        <div>🌍 Seismic</div>
                        <div class="popup-sensor-value">${sensors.seismicActivity.current} ${sensors.seismicActivity.unit}</div>
                    </div>
                    <div class="popup-sensor">
                        <div>🌧️ Rainfall</div>
                        <div class="popup-sensor-value">${sensors.weather.rainfall} mm/hr</div>
                    </div>
                </div>
                
                <div class="popup-actions">
                    <button class="btn btn--sm btn--primary" onclick="window.glofSystem.selectLakeFromPopup('${lake.id}')">
                        View Details
                    </button>
                    <button class="btn btn--sm btn--outline" onclick="window.glofSystem.zoomToLake('${lake.id}')">
                        Zoom Here
                    </button>
                </div>
            </div>
        `;
    }

    setupEventListeners() {
        // Lake selector buttons
        document.querySelectorAll('.lake-button').forEach(button => {
            button.addEventListener('click', () => {
                const lakeId = button.dataset.lake;
                this.selectLake(lakeId);
                this.zoomToLake(lakeId);
            });
        });

        // Map control buttons
        document.getElementById('viewAllLakes').addEventListener('click', () => {
            this.fitMapToLakes();
            this.showNotification('Viewing all lakes', 'info');
        });

        document.getElementById('refreshMap').addEventListener('click', () => {
            this.showLoading();
            setTimeout(() => {
                this.hideLoading();
                this.updateLakeOverlays();
                this.showNotification('Map refreshed successfully', 'success');
            }, 1000);
        });

        // Layer control checkboxes
        document.getElementById('showLakes').addEventListener('change', (e) => {
            console.log('Toggle lakes:', e.target.checked);
            this.showLakes = e.target.checked;
            this.toggleLakeOverlays();
        });

        document.getElementById('showRiskZones').addEventListener('change', (e) => {
            console.log('Toggle risk zones:', e.target.checked);
            this.showRiskZones = e.target.checked;
            this.toggleRiskZones();
        });

        document.getElementById('showLabels').addEventListener('change', (e) => {
            console.log('Toggle labels:', e.target.checked);
            this.showLabels = e.target.checked;
            this.toggleLakeLabels();
        });

        // Configuration modal
        document.getElementById('configBtn').addEventListener('click', () => {
            this.openConfigModal();
        });

        document.getElementById('closeConfig').addEventListener('click', () => {
            this.closeConfigModal();
        });

        document.getElementById('configOverlay').addEventListener('click', () => {
            this.closeConfigModal();
        });

        // Demo mode
        document.getElementById('demoBtn').addEventListener('click', () => {
            this.toggleDemoMode();
        });

        // Configuration controls
        this.setupConfigControls();

        // Chart controls
        document.getElementById('chartStation').addEventListener('change', () => {
            this.updateChart();
        });

        document.getElementById('timeRange').addEventListener('change', () => {
            this.updateChart();
        });

        // Clear alerts
        document.getElementById('clearAlerts').addEventListener('click', () => {
            this.clearAlerts();
        });
    }

    toggleLakeOverlays() {
        console.log('Toggling lake overlays, showLakes:', this.showLakes);
        Object.values(this.lakeLayers).forEach(layer => {
            if (this.showLakes) {
                if (!this.map.hasLayer(layer)) {
                    layer.addTo(this.map);
                }
            } else {
                if (this.map.hasLayer(layer)) {
                    this.map.removeLayer(layer);
                }
            }
        });
    }

    toggleRiskZones() {
        console.log('Toggling risk zones, showRiskZones:', this.showRiskZones);
        Object.values(this.riskZoneLayers).forEach(layer => {
            if (this.showRiskZones) {
                if (!this.map.hasLayer(layer)) {
                    layer.addTo(this.map);
                }
            } else {
                if (this.map.hasLayer(layer)) {
                    this.map.removeLayer(layer);
                }
            }
        });
    }

    toggleLakeLabels() {
        console.log('Toggling lake labels, showLabels:', this.showLabels);
        Object.values(this.labelLayers).forEach(layer => {
            if (this.showLabels) {
                if (!this.map.hasLayer(layer)) {
                    layer.addTo(this.map);
                }
            } else {
                if (this.map.hasLayer(layer)) {
                    this.map.removeLayer(layer);
                }
            }
        });
    }

    selectLakeFromPopup(lakeId) {
        this.map.closePopup();
        this.selectLake(lakeId);
        this.showNotification(`Selected ${this.glacialLakes[lakeId].name}`, 'success');
    }

    selectLake(lakeId) {
        console.log('Selecting lake:', lakeId);
        this.selectedLake = lakeId;
        const lake = this.glacialLakes[lakeId];
        
        // Update active button
        document.querySelectorAll('.lake-button').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.lake === lakeId) {
                btn.classList.add('active');
            }
        });
        
        // Update lake details panel
        document.getElementById('lakeName').textContent = lake.name;
        
        const riskLevelElement = document.getElementById('lakeRiskLevel');
        riskLevelElement.textContent = lake.riskLevel.toUpperCase();
        riskLevelElement.className = `lake-risk-level risk-${lake.riskLevel}`;
        
        // Update lake information
        this.renderLakeInfo(lake);
        
        // Update sensor data display
        this.renderSensorData(lake);
        
        // Update chart for selected lake
        document.getElementById('chartStation').value = lakeId;
        this.updateChart();
    }

    renderLakeInfo(lake) {
        const lakeInfoContainer = document.getElementById('lakeInfo');
        
        lakeInfoContainer.innerHTML = `
            <div class="lake-location">
                <div>
                    <strong>📍 ${lake.location}</strong><br>
                    🏔️ Elevation: ${lake.elevation} | 
                    🌍 Country: ${lake.country}<br>
                    👥 Population at Risk: ${lake.populationAtRisk.toLocaleString()}<br>
                    <span class="lake-coordinates">
                        ${lake.coordinates[0].toFixed(4)}°${lake.coordinates[0] >= 0 ? 'N' : 'S'}, 
                        ${Math.abs(lake.coordinates[1]).toFixed(4)}°${lake.coordinates[1] >= 0 ? 'E' : 'W'}
                    </span>
                </div>
            </div>
            <div class="lake-data-grid">
                <div class="lake-data-item">
                    <div class="lake-data-label">Surface Area</div>
                    <div class="lake-data-value">${lake.lakeData.surfaceArea}</div>
                </div>
                <div class="lake-data-item">
                    <div class="lake-data-label">Maximum Depth</div>
                    <div class="lake-data-value">${lake.lakeData.maxDepth}</div>
                </div>
                <div class="lake-data-item">
                    <div class="lake-data-label">Water Volume</div>
                    <div class="lake-data-value">${lake.lakeData.volume}</div>
                </div>
                <div class="lake-data-item">
                    <div class="lake-data-label">Dam Type</div>
                    <div class="lake-data-value">${lake.lakeData.damType}</div>
                </div>
                <div class="lake-data-item">
                    <div class="lake-data-label">Last Outburst</div>
                    <div class="lake-data-value">${lake.lakeData.lastOutburst}</div>
                </div>
            </div>
        `;
    }

    renderSensorData(lake) {
        const sensorContainer = document.getElementById('sensorData');
        const sensors = lake.sensors;
        
        sensorContainer.innerHTML = `
            <div class="sensor-item">
                <div class="sensor-header">
                    <div class="sensor-name">💧 Water Level</div>
                    <div class="sensor-trend trend-${this.getTrendClass(sensors.waterLevel.trend)}">
                        ${this.getTrendIcon(sensors.waterLevel.trend)} ${sensors.waterLevel.trend.replace('_', ' ')}
                    </div>
                </div>
                <div class="sensor-value">${sensors.waterLevel.current} ${sensors.waterLevel.unit}</div>
                <div class="sensor-details">
                    <span>Threshold: ${sensors.waterLevel.threshold} cm</span>
                    <span>Updated: ${this.getTimeAgo()}</span>
                </div>
            </div>
            
            <div class="sensor-item">
                <div class="sensor-header">
                    <div class="sensor-name">🌡️ Temperature</div>
                    <div class="sensor-trend trend-${this.getTrendClass(sensors.temperature.trend)}">
                        ${this.getTrendIcon(sensors.temperature.trend)} ${sensors.temperature.trend}
                    </div>
                </div>
                <div class="sensor-value">${sensors.temperature.current} ${sensors.temperature.unit}</div>
                <div class="sensor-details">
                    <span>Ambient: ${sensors.weather.temperature}°C</span>
                    <span>Updated: ${this.getTimeAgo()}</span>
                </div>
            </div>
            
            <div class="sensor-item">
                <div class="sensor-header">
                    <div class="sensor-name">🌍 Seismic Activity</div>
                    <div class="sensor-trend trend-${this.getTrendClass(sensors.seismicActivity.trend)}">
                        ${this.getTrendIcon(sensors.seismicActivity.trend)} ${sensors.seismicActivity.trend}
                    </div>
                </div>
                <div class="sensor-value">${sensors.seismicActivity.current} ${sensors.seismicActivity.unit}</div>
                <div class="sensor-details">
                    <span>Threshold: ${sensors.seismicActivity.threshold}</span>
                    <span>Updated: ${this.getTimeAgo()}</span>
                </div>
            </div>
            
            <div class="sensor-item">
                <div class="sensor-header">
                    <div class="sensor-name">🌦️ Weather</div>
                    <div class="sensor-trend trend-stable">
                        ○ monitoring
                    </div>
                </div>
                <div class="sensor-value">${sensors.weather.rainfall} mm/hr</div>
                <div class="sensor-details">
                    <span>Humidity: ${sensors.weather.humidity}%</span>
                    <span>Wind: ${sensors.weather.windSpeed} km/h</span>
                </div>
            </div>
        `;
    }

    getTrendClass(trend) {
        if (trend.includes('critical') || trend.includes('rapidly')) return 'critical';
        if (trend.includes('rising') || trend.includes('increasing')) return 'rising';
        return 'stable';
    }

    getTrendIcon(trend) {
        if (trend.includes('critical') || trend.includes('rapidly')) return '🔴';
        if (trend.includes('rising') || trend.includes('increasing')) return '📈';
        return '○';
    }

    getTimeAgo() {
        const now = new Date();
        const seconds = Math.floor(Math.random() * 30) + 1;
        return `${seconds}s ago`;
    }

    zoomToLake(lakeId) {
        const lake = this.glacialLakes[lakeId];
        if (lake) {
            this.map.setView(lake.coordinates, 12, { animate: true, duration: 1 });
            setTimeout(() => {
                if (this.selectedLake !== lakeId) {
                    this.selectLake(lakeId);
                }
            }, 500);
        }
    }

    fitMapToLakes() {
        const coordinates = Object.values(this.glacialLakes).map(lake => lake.coordinates);
        if (coordinates.length > 0) {
            const bounds = L.latLngBounds(coordinates);
            this.map.fitBounds(bounds.pad(0.3));
        }
    }

    updateLakeOverlays() {
        console.log('Updating lake overlays...');
        
        // Remove existing overlays
        Object.values(this.lakeLayers).forEach(layer => {
            if (this.map.hasLayer(layer)) {
                this.map.removeLayer(layer);
            }
        });
        Object.values(this.riskZoneLayers).forEach(layer => {
            if (this.map.hasLayer(layer)) {
                this.map.removeLayer(layer);
            }
        });
        Object.values(this.labelLayers).forEach(layer => {
            if (this.map.hasLayer(layer)) {
                this.map.removeLayer(layer);
            }
        });
        
        // Clear layer objects
        this.lakeLayers = {};
        this.riskZoneLayers = {};
        this.labelLayers = {};
        
        // Recreate overlays with updated data
        this.createLakeOverlays();
        this.createRiskZones();
        this.createLakeLabels();
        
        // Apply current visibility settings
        if (!this.showLakes) this.toggleLakeOverlays();
        if (!this.showRiskZones) this.toggleRiskZones();
        if (!this.showLabels) this.toggleLakeLabels();
    }

    updateLakeButtons() {
        Object.values(this.glacialLakes).forEach(lake => {
            const button = document.querySelector(`[data-lake="${lake.id}"]`);
            if (button) {
                const statusElement = button.querySelector('.lake-status');
                const iconElement = button.querySelector('.lake-icon');
                
                statusElement.textContent = lake.riskLevel.charAt(0).toUpperCase() + lake.riskLevel.slice(1);
                statusElement.className = `lake-status status--${lake.riskLevel}`;
                
                const icons = {
                    normal: '🏔️',
                    warning: '⚠️',
                    critical: '🚨'
                };
                iconElement.textContent = icons[lake.riskLevel];
            }
        });
    }

    // Continue with chart, sensor updates, and other methods...
    initializeChart() {
        const ctx = document.getElementById('dataChart').getContext('2d');
        
        // Initialize chart data for all lakes
        Object.keys(this.glacialLakes).forEach(lakeId => {
            this.chartData[lakeId] = {
                labels: [],
                waterLevel: [],
                temperature: [],
                seismicActivity: [],
                rainfall: []
            };
            
            // Generate initial historical data
            for (let i = 23; i >= 0; i--) {
                const time = new Date(Date.now() - i * 60000);
                this.chartData[lakeId].labels.push(time.toLocaleTimeString());
                
                const lake = this.glacialLakes[lakeId];
                this.chartData[lakeId].waterLevel.push(
                    lake.sensors.waterLevel.current + (Math.random() - 0.5) * 10
                );
                this.chartData[lakeId].temperature.push(
                    lake.sensors.temperature.current + (Math.random() - 0.5) * 2
                );
                this.chartData[lakeId].seismicActivity.push(
                    Math.max(0, lake.sensors.seismicActivity.current + (Math.random() - 0.5) * 0.5)
                );
                this.chartData[lakeId].rainfall.push(
                    Math.max(0, lake.sensors.weather.rainfall + (Math.random() - 0.5) * 5)
                );
            }
        });

        this.chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [],
                datasets: []
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(94, 82, 64, 0.1)'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(94, 82, 64, 0.1)'
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: 'top',
                    }
                },
                interaction: {
                    mode: 'index',
                    intersect: false,
                }
            }
        });

        this.updateChart();
    }

    updateChart() {
        const selectedLakeId = document.getElementById('chartStation').value;
        const timeRange = document.getElementById('timeRange').value;
        
        if (!this.chartData[selectedLakeId]) return;
        
        const data = this.chartData[selectedLakeId];
        const dataLength = timeRange === '1' ? 60 : timeRange === '6' ? 360 : 1440;
        
        this.chart.data.labels = data.labels.slice(-dataLength);
        this.chart.data.datasets = [
            {
                label: 'Water Level (cm)',
                data: data.waterLevel.slice(-dataLength),
                borderColor: '#1FB8CD',
                backgroundColor: 'rgba(31, 184, 205, 0.1)',
                tension: 0.1
            },
            {
                label: 'Temperature (°C)',
                data: data.temperature.slice(-dataLength),
                borderColor: '#FFC185',
                backgroundColor: 'rgba(255, 193, 133, 0.1)',
                tension: 0.1
            },
            {
                label: 'Seismic Activity',
                data: data.seismicActivity.slice(-dataLength),
                borderColor: '#B4413C',
                backgroundColor: 'rgba(180, 65, 60, 0.1)',
                tension: 0.1
            },
            {
                label: 'Rainfall (mm/hr)',
                data: data.rainfall.slice(-dataLength),
                borderColor: '#5D878F',
                backgroundColor: 'rgba(93, 135, 143, 0.1)',
                tension: 0.1
            }
        ];
        
        this.chart.update('none');
    }

    startRealTimeUpdates() {
        this.updateInterval = setInterval(() => {
            this.updateSensorData();
            this.updateChartData();
            this.checkAlertConditions();
            this.updateMetrics();
            this.updateLakeButtons();
        }, 3000);
    }

    updateSensorData() {
        Object.keys(this.glacialLakes).forEach(lakeId => {
            const lake = this.glacialLakes[lakeId];
            
            if (this.demoMode && lakeId === 'imja_tsho') {
                // Simulate critical conditions in demo mode
                lake.sensors.waterLevel.current = Math.min(100, lake.sensors.waterLevel.current + Math.random() * 2);
                lake.sensors.seismicActivity.current = Math.min(4, lake.sensors.seismicActivity.current + Math.random() * 0.2);
                lake.sensors.weather.rainfall = Math.min(50, lake.sensors.weather.rainfall + Math.random() * 3);
            } else {
                // Normal fluctuations
                const waterChange = (Math.random() - 0.5) * 2;
                const tempChange = (Math.random() - 0.5) * 0.5;
                const seismicChange = (Math.random() - 0.5) * 0.1;
                const rainfallChange = (Math.random() - 0.5) * 1;
                
                lake.sensors.waterLevel.current = Math.max(30, Math.min(90, 
                    lake.sensors.waterLevel.current + waterChange));
                lake.sensors.temperature.current = Math.max(-5, Math.min(20, 
                    lake.sensors.temperature.current + tempChange));
                lake.sensors.seismicActivity.current = Math.max(0, Math.min(3, 
                    lake.sensors.seismicActivity.current + seismicChange));
                lake.sensors.weather.rainfall = Math.max(0, Math.min(30, 
                    lake.sensors.weather.rainfall + rainfallChange));
            }
            
            // Update risk level based on current conditions
            lake.riskLevel = this.calculateRiskLevel(lake);
        });
        
        // Update selected lake display
        if (this.selectedLake) {
            this.renderSensorData(this.glacialLakes[this.selectedLake]);
        }
    }

    updateChartData() {
        const currentTime = new Date().toLocaleTimeString();
        
        Object.keys(this.glacialLakes).forEach(lakeId => {
            const lake = this.glacialLakes[lakeId];
            const chartData = this.chartData[lakeId];
            
            chartData.labels.push(currentTime);
            chartData.waterLevel.push(lake.sensors.waterLevel.current);
            chartData.temperature.push(lake.sensors.temperature.current);
            chartData.seismicActivity.push(lake.sensors.seismicActivity.current);
            chartData.rainfall.push(lake.sensors.weather.rainfall);
            
            // Keep only last 1440 data points (24 hours)
            if (chartData.labels.length > 1440) {
                chartData.labels.shift();
                chartData.waterLevel.shift();
                chartData.temperature.shift();
                chartData.seismicActivity.shift();
                chartData.rainfall.shift();
            }
        });
        
        if (this.selectedLake) {
            this.updateChart();
        }
    }

    calculateRiskLevel(lake) {
        const waterLevel = lake.sensors.waterLevel.current;
        const seismic = lake.sensors.seismicActivity.current;
        const rainfall = lake.sensors.weather.rainfall;
        
        if (waterLevel >= this.alertThresholds.waterLevel.critical ||
            seismic >= this.alertThresholds.seismicActivity.critical ||
            rainfall >= this.alertThresholds.rainfall.critical) {
            return 'critical';
        }
        
        if (waterLevel >= this.alertThresholds.waterLevel.warning ||
            seismic >= this.alertThresholds.seismicActivity.warning ||
            rainfall >= this.alertThresholds.rainfall.warning) {
            return 'warning';
        }
        
        return 'normal';
    }

    checkAlertConditions() {
        Object.values(this.glacialLakes).forEach(lake => {
            const waterLevel = lake.sensors.waterLevel.current;
            const seismic = lake.sensors.seismicActivity.current;
            const rainfall = lake.sensors.weather.rainfall;
            
            // Check for critical conditions
            if (waterLevel >= this.alertThresholds.waterLevel.critical) {
                this.addAlert(lake.name, 'critical', 
                    `CRITICAL: Water level at ${waterLevel.toFixed(1)} cm - Immediate evacuation recommended`, 
                    'waterLevel');
            } else if (seismic >= this.alertThresholds.seismicActivity.critical) {
                this.addAlert(lake.name, 'critical', 
                    `CRITICAL: High seismic activity detected - ${seismic.toFixed(1)} magnitude`, 
                    'seismicActivity');
            } else if (rainfall >= this.alertThresholds.rainfall.critical) {
                this.addAlert(lake.name, 'critical', 
                    `CRITICAL: Heavy rainfall detected - ${rainfall.toFixed(1)} mm/hr`, 
                    'rainfall');
            }
            
            // Check for warning conditions
            else if (waterLevel >= this.alertThresholds.waterLevel.warning) {
                this.addAlert(lake.name, 'warning', 
                    `WARNING: Water level rising - ${waterLevel.toFixed(1)} cm`, 
                    'waterLevel');
            } else if (seismic >= this.alertThresholds.seismicActivity.warning) {
                this.addAlert(lake.name, 'warning', 
                    `WARNING: Elevated seismic activity - ${seismic.toFixed(1)} magnitude`, 
                    'seismicActivity');
            }
        });
    }

    addAlert(station, type, message, sensorType) {
        const alertId = `${station}-${type}-${sensorType}`;
        
        // Prevent duplicate alerts within 5 minutes
        const recentAlert = this.recentAlerts.find(alert => 
            alert.station === station && 
            alert.type === type && 
            alert.sensorType === sensorType &&
            Date.now() - new Date(alert.timestamp).getTime() < 300000
        );
        
        if (recentAlert) return;
        
        const newAlert = {
            timestamp: new Date().toISOString(),
            station: station,
            type: type,
            message: message,
            sensorType: sensorType
        };
        
        this.recentAlerts.unshift(newAlert);
        if (this.recentAlerts.length > 10) {
            this.recentAlerts.pop();
        }
        
        this.renderAlerts();
        this.showNotification(message, type, station);
    }

    renderAlerts() {
        const alertsList = document.getElementById('alertsList');
        
        if (this.recentAlerts.length === 0) {
            alertsList.innerHTML = '<div class="alert-empty">No recent alerts</div>';
            return;
        }
        
        alertsList.innerHTML = this.recentAlerts.map(alert => `
            <div class="alert-item alert-${alert.type}">
                <div class="alert-time">${new Date(alert.timestamp).toLocaleString()}</div>
                <div class="alert-station">${alert.station}</div>
                <div class="alert-message">${alert.message}</div>
            </div>
        `).join('');
    }

    updateMetrics() {
        const lakes = Object.values(this.glacialLakes);
        const criticalCount = lakes.filter(lake => lake.riskLevel === 'critical').length;
        const totalArea = lakes.reduce((sum, lake) => sum + parseFloat(lake.lakeData.surfaceArea), 0);
        
        document.getElementById('criticalAlerts').textContent = criticalCount;
        document.getElementById('totalArea').textContent = totalArea.toFixed(1) + ' km²';
        
        this.updateSystemStatus();
    }

    updateSystemStatus() {
        const criticalLakes = Object.values(this.glacialLakes)
            .filter(lake => lake.riskLevel === 'critical').length;
        const warningLakes = Object.values(this.glacialLakes)
            .filter(lake => lake.riskLevel === 'warning').length;
        
        const statusElement = document.getElementById('systemStatus');
        
        if (criticalLakes > 0) {
            statusElement.innerHTML = `
                <div class="status-dot status-dot--critical"></div>
                Critical Alert Active
            `;
        } else if (warningLakes > 0) {
            statusElement.innerHTML = `
                <div class="status-dot status-dot--warning"></div>
                Warning Conditions
            `;
        } else {
            statusElement.innerHTML = `
                <div class="status-dot status-dot--active"></div>
                System Active
            `;
        }
    }

    updateTime() {
        const now = new Date();
        document.getElementById('currentTime').textContent = now.toLocaleString();
    }

    toggleDemoMode() {
        this.demoMode = !this.demoMode;
        const demoBtn = document.getElementById('demoBtn');
        
        if (this.demoMode) {
            demoBtn.textContent = '🔄 Exit Demo';
            demoBtn.classList.add('btn--warning');
            this.showNotification('Demo mode activated - Simulating emergency conditions', 'warning');
        } else {
            demoBtn.textContent = '🚨 Demo Mode';
            demoBtn.classList.remove('btn--warning');
            this.showNotification('Demo mode deactivated', 'success');
        }
    }

    setupConfigControls() {
        const sliders = document.querySelectorAll('.threshold-slider');
        sliders.forEach(slider => {
            slider.addEventListener('input', (e) => {
                const value = e.target.value;
                const valueDisplay = e.target.nextElementSibling;
                
                if (e.target.id.includes('seismic')) {
                    valueDisplay.textContent = value;
                } else {
                    valueDisplay.textContent = value + ' cm';
                }
            });
        });

        document.getElementById('saveConfig').addEventListener('click', () => {
            this.saveConfiguration();
        });

        document.getElementById('resetDefaults').addEventListener('click', () => {
            this.resetDefaultConfiguration();
        });

        document.getElementById('testAlert').addEventListener('click', () => {
            this.testAlert();
        });
    }

    openConfigModal() {
        document.getElementById('configModal').classList.remove('hidden');
        this.loadCurrentThresholds();
    }

    closeConfigModal() {
        document.getElementById('configModal').classList.add('hidden');
    }

    loadCurrentThresholds() {
        document.getElementById('waterWarning').value = this.alertThresholds.waterLevel.warning;
        document.getElementById('waterCritical').value = this.alertThresholds.waterLevel.critical;
        document.getElementById('seismicWarning').value = this.alertThresholds.seismicActivity.warning;
        document.getElementById('seismicCritical').value = this.alertThresholds.seismicActivity.critical;
        
        // Update value displays
        document.querySelector('#waterWarning + .threshold-value').textContent = 
            this.alertThresholds.waterLevel.warning + ' cm';
        document.querySelector('#waterCritical + .threshold-value').textContent = 
            this.alertThresholds.waterLevel.critical + ' cm';
        document.querySelector('#seismicWarning + .threshold-value').textContent = 
            this.alertThresholds.seismicActivity.warning;
        document.querySelector('#seismicCritical + .threshold-value').textContent = 
            this.alertThresholds.seismicActivity.critical;
    }

    saveConfiguration() {
        this.alertThresholds.waterLevel.warning = parseInt(document.getElementById('waterWarning').value);
        this.alertThresholds.waterLevel.critical = parseInt(document.getElementById('waterCritical').value);
        this.alertThresholds.seismicActivity.warning = parseFloat(document.getElementById('seismicWarning').value);
        this.alertThresholds.seismicActivity.critical = parseFloat(document.getElementById('seismicCritical').value);
        
        this.showNotification('Configuration saved successfully', 'success');
        this.closeConfigModal();
    }

    resetDefaultConfiguration() {
        this.alertThresholds = {
            "waterLevel": {"warning": 70, "critical": 85},
            "seismicActivity": {"warning": 1.5, "critical": 2.0},
            "rainfall": {"warning": 10, "critical": 20}
        };
        
        this.loadCurrentThresholds();
        this.showNotification('Configuration reset to defaults', 'info');
    }

    testAlert() {
        this.addAlert('Test Lake', 'warning', 'This is a test alert - System functioning normally', 'test');
        this.showNotification('Test alert sent successfully', 'success');
    }

    clearAlerts() {
        this.recentAlerts = [];
        this.renderAlerts();
        this.showNotification('All alerts cleared', 'info');
    }

    showNotification(message, type, station = null) {
        const notification = document.createElement('div');
        notification.className = `alert-notification alert-notification--${type}`;
        
        const title = type === 'critical' ? '🚨 CRITICAL ALERT' : 
                     type === 'warning' ? '⚠️ WARNING' : 
                     type === 'success' ? '✅ SUCCESS' : 'ℹ️ INFO';
        
        notification.innerHTML = `
            <div class="notification-header">
                <div class="notification-title">${title}${station ? ` - ${station}` : ''}</div>
                <button class="notification-close">×</button>
            </div>
            <div class="notification-message">${message}</div>
        `;
        
        notification.querySelector('.notification-close').addEventListener('click', () => {
            notification.remove();
        });
        
        document.getElementById('alertNotifications').appendChild(notification);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 5000);
    }

    showLoading() {
        document.getElementById('loadingSpinner').classList.remove('hidden');
    }

    hideLoading() {
        document.getElementById('loadingSpinner').classList.add('hidden');
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.glofSystem = new GLOFLakeOverlaySystem();
});