// routes.js

import express from 'express';
import PsoModel from '../models/co_po_pso.js';
import PercentageModel from '../models/percentage.js';

const route = express.Router();

// Update the /calculatePercentage endpoint
route.all('/calculatePercentage', async (req, res) => {
    try {
        let { co } = req.body;

        if (req.method === 'GET') {
            // If it's a GET request, use query parameters
            const { co: queryCo } = req.query;
            if (queryCo) {
                // If a specific CO is provided in the query parameters, calculate percentages for that CO only
                co = queryCo;
            }
        }

        let query = {};

        if (co) {
            // If a specific CO is provided, calculate percentages for that CO only
            query = { co };
        }

        const percentageData = await Promise.all(
            (await PsoModel.find(query)).map(async (item) => {
                // Custom percentage calculation for each PO column
                const customPercentages = item.po.map((value, index) => {
                    switch (index) {
                        case 0: // For PO1
                            return (value / 14) * 100;
                        case 1: // For PO2
                            return (value / 6) * 100;
                        // Add more cases for other PO columns if needed
                        default:
                            return (value / 10) * 100; // Default formula for other PO columns
                    }
                });

                const customPercentagesPso = item.pso.map((value, index) => {
                    switch (index) {
                        case 0: // For PO1
                            return (value / 14) * 100;
                        case 1: // For PO2
                            return (value / 6) * 100;
                        // Add more cases for other PO columns if needed
                        default:
                            return (value / 10) * 100; // Default formula for other PO columns
                    }
                });

                // Save the custom percentage data to PercentageModel
                const customPercentageModel = new PercentageModel({
                    co: item.co,
                    percentage_po: customPercentages, // Update the field name
                    percentage_pso: customPercentagesPso
                });

                await customPercentageModel.save();

                return {
                    co: item.co,
                    poPercentage: customPercentages,
                    psoPercentage: customPercentagesPso,
                };
            })
        );

        res.json(percentageData);
    } catch (error) {
        console.error('Error calculating and saving percentages:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

export default route;
