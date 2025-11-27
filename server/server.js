const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000; // Use Render's port
const DATA_FILE = path.join(__dirname, 'data', 'requests.json');

// Middleware
app.use(cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true
}));
app.use(bodyParser.json());

// Ensure data directory exists
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
}

// Helper functions (keep your existing readData/writeData functions)
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

// Your existing API routes (keep all your existing routes)
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

// Add this health check route
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