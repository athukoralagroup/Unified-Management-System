import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';

// Router Imports
import greenLeafRouter from './router/greenLeafRouter.js';
import productionRouter from './router/productionRouter.js';
import labourRouter from './router/labourRoutes.js';
import dehydratorRouter from './router/dehydratorRouter.js';
import costOfProductionRouter from './router/costOfProductionRoutes.js';
import authRouter from './router/authRoute.js';
import rawMaterialCostRoutes from './router/rawMaterialCostRoutes.js';
import userRouter from './router/userRouter.js';
import sellingDetailsRouter from './router/sellingDetailsRoutes.js';
import productionSummaryRouter from './router/productionSummaryRoute.js';
import loftLeafCountRoutes from './router/loftLeafCountRoutes.js';

// Packing Section Routes
import localSaleRouter from './Packing/Routes/localSaleRoutes.js';
import teaCenterIssueRouter from './Packing/Routes/teaCenterIssueRouter.js';
import packingTransferRouter from './Packing/Routes/packingTransferRouter.js';
import handmadeTransferRouter from './router/handmadeTransferRouter.js';
import teaReceivedRouter from './Packing/Routes/TeaReceivedRouter.js';
import packingStockRouter from './Packing/Routes/packingStockRoutes.js';
import teaTransactionOtherRouter from './Packing/Routes/teaTransactionOtherRouter.js';
import rawMaterialInRouter from './Packing/Routes/rawMaterialInRouter.js';
import restoreTeaStockRouter from './Packing/Routes/restoreTeaStockrouter.js';

dotenv.config();

const app = express();

// =====================================================
// 🔥 IMPORTANT FOR RAILWAY / COOKIE AUTH
// =====================================================
app.set('trust proxy', 1);

// =====================================================
// 🌍 Allowed Origins (Vercel + Localhost)
// =====================================================
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'https://unifiedmanagementsystemathukoralagroup.vercel.app'
];

// =====================================================
// 🚀 CORS CONFIG (FIXED)
// =====================================================
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:3000',
    'https://unifiedmanagementsystemathukoralagroup.vercel.app'
  ],
  credentials: true,
  methods: ["GET","POST","PUT","DELETE","OPTIONS"],
  allowedHeaders: ["Content-Type","Authorization"]
}));

// IMPORTANT: handle preflight properly
app.options("*", cors());

// =====================================================
// 🔐 SECURITY + PARSERS
// =====================================================
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// =====================================================
// 🛢️ DATABASE CONNECTION
// =====================================================
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// =====================================================
// 🚀 ROUTES
// =====================================================
app.use('/api/auth', authRouter);
app.use('/api/green-leaf', greenLeafRouter);
app.use('/api/production', productionRouter);
app.use('/api/labour', labourRouter);
app.use('/api/dehydrator', dehydratorRouter);
app.use('/api/cost-of-production', costOfProductionRouter);
app.use('/api/raw-material-cost', rawMaterialCostRoutes);
app.use('/api/users', userRouter);
app.use('/api/selling-details', sellingDetailsRouter);
app.use('/api/production-summary', productionSummaryRouter);
app.use('/api/handmade/transfers', handmadeTransferRouter);
app.use('/api/loft-leaf', loftLeafCountRoutes);

// Packing Section
app.use('/api/local-sales', localSaleRouter);
app.use('/api/tea-center-issues', teaCenterIssueRouter);
app.use('/api/packing/transfers', packingTransferRouter);
app.use('/api/tea-received', teaReceivedRouter);
app.use('/api/packing-stock', packingStockRouter);
app.use('/api/tea-receivedother', teaTransactionOtherRouter);
app.use('/api/raw-materials-in', rawMaterialInRouter);
app.use('/api/restore-tea-stock', restoreTeaStockRouter);

// =====================================================
// 🚀 SERVER START
// =====================================================
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
