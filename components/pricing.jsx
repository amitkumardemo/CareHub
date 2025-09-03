"use client";

import React from "react";
import { Card, CardContent } from "./ui/card";
import { PricingTable } from "@clerk/nextjs";

const Pricing = () => {
  // Temporary flag until you enable billing in Clerk Dashboard
  const billingEnabled = process.env.NEXT_PUBLIC_CLERK_BILLING_ENABLED === "true";

  return (
    <Card className="border-emerald-900/30 shadow-lg bg-gradient-to-b from-emerald-950/30 to-transparent">
      <CardContent className="p-6 md:p-8">
        {billingEnabled ? (
          <PricingTable
            checkoutProps={{
              appearance: {
                elements: {
                  drawerRoot: { zIndex: 2000 },
                },
              },
            }}
          />
        ) : (
          <div className="text-center text-gray-400">
            <p>⚡ Billing is disabled.</p>
            <p>Enable it in Clerk Dashboard to show the pricing table.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default Pricing;
