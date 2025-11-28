const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;
const DATA_FILE = path.join(__dirname, 'data', 'requests.json');

// Middleware
app.use(cors({
    origin: [
        'http://localhost:3000',
        'https://sportsservice-frontend.onrender.com',
        'http://localhost:5173',
        'https://sportsservice-frontend.onrender.com' 
    ].filter(Boolean),
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(bodyParser.json());

// Ensure data directory exists
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
}

// Helper functions
const readData = () => {
    try {
        if (!fs.existsSync(DATA_FILE)) {
            return [];
        }
        const data = fs.readFileSync(DATA_FILE, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error("Error reading data:", err);
        return [];
    }
};

const writeData = (data) => {
    try {
        fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
        return true;
    } catch (err) {
        console.error("Error writing data:", err);
        return false;
    }
};

// API routes
app.get('/api/requests', (req, res) => {
    const requests = readData();
    res.json(requests);
});

app.post('/api/requests', (req, res) => {
    const { name, phone, service, time, notes } = req.body;
    if (!name || !phone) {
        return res.status(400).json({ error: "Name and Phone are required" });
    }

    const requests = readData();
    const newRequest = {
        id: Date.now(),
        name,
        phone,
        service,
        time,
        notes,
        status: 'pending',
        createdAt: new Date().toISOString()
    };

    requests.push(newRequest);
    writeData(requests);

    res.status(201).json(newRequest);
});

// ADD THESE MISSING ROUTES FOR ADMIN DASHBOARD
app.put('/api/requests/:id', (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    
    const requests = readData();
    const requestIndex = requests.findIndex(req => req.id === parseInt(id));
    
    if (requestIndex === -1) {
        return res.status(404).json({ error: "Request not found" });
    }
    
    requests[requestIndex].status = status;
    writeData(requests);
    
    res.json(requests[requestIndex]);
});

app.delete('/api/requests/:id', (req, res) => {
    const { id } = req.params;
    
    const requests = readData();
    const filteredRequests = requests.filter(req => req.id !== parseInt(id));
    
    if (requests.length === filteredRequests.length) {
        return res.status(404).json({ error: "Request not found" });
    }
    
    writeData(filteredRequests);
    res.json({ message: "Request deleted successfully" });
});

app.get('/api/statistics', (req, res) => {
    const requests = readData();
    
    const statistics = {
        total: requests.length,
        byStatus: {
            pending: requests.filter(req => req.status === 'pending').length,
            confirmed: requests.filter(req => req.status === 'confirmed').length,
            completed: requests.filter(req => req.status === 'completed').length,
            cancelled: requests.filter(req => req.status === 'cancelled').length
        }
    };
    
    res.json(statistics);
});

// Health check route
app.get('/health', (req, res) => {
    res.status(200).json({ 
        status: 'OK', 
        message: 'Server is running',
        timestamp: new Date().toISOString()
    });
});

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));
    
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
}

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📊 Environment: ${process.env.NODE_ENV || 'development'}`);
});