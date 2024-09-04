import React from "react";
import { Button } from "@/components/ui/button";
import { manageBilling } from "@/lib/actions/stripe";

interface DashboardContentProps {
  user: any; // Replace 'any' with your actual user type
}

export default function DashboardContent({ user }: DashboardContentProps) {
  const handleBilling = async () => {
    if (user?.subscription?.customer_id) {
      try {
        const response = await manageBilling(user.subscription.customer_id);
        const data = JSON.parse(response);
        if (data.error) {
          console.error(data.error);
          // Handle the error appropriately (e.g., show an error message to the user)
        } else {
          window.location.href = data.url;
        }
      } catch (error) {
        console.error("Error handling billing:", error);
        // Handle the error appropriately (e.g., show an error message to the user)
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center pb-4 border-b border-gray-200">
        <span className="text-lg font-medium">Status</span>
        <span className="text-green-600 font-semibold">Active</span>
      </div>
      <div className="flex justify-between items-center pb-4 border-b border-gray-200">
        <span className="text-lg font-medium">Plan</span>
        <span>{user.subscription.plan || "Standard"}</span>
      </div>
      <div className="flex justify-between items-center pb-4 border-b border-gray-200">
        <span className="text-lg font-medium">Next Billing Date</span>
        <span>{new Date(user.subscription.end_at).toLocaleDateString()}</span>
      </div>
      <Button onClick={handleBilling} className="w-full mt-6">
        Manage Billing
      </Button>
    </div>
  );
}