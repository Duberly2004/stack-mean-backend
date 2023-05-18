import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import IndexRoutes from './routes/index.routes.js';
import producRoutes from './routes/product.routes.js';
import employeesRoutes from './routes/employee.routes.js' ;
import authRoutes from './routes/auth.routes.js';
import './database.js'
const app = express();

// Settings
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// Middlewares
app.use(morgan('dev'))
app.use(cors())

// Routes
app.use(IndexRoutes)
app.use('/api/auth/',authRoutes)
app.use('/api/products',producRoutes)
app.use('/api/employees',employeesRoutes)

export default app;