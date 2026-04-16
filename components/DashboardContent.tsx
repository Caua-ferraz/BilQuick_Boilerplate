import React from "react";
import { Button } from "@/components/ui/button";
import { manageBilling } from "@/lib/actions/stripe";
import { FaDiscord } from "react-icons/fa";

interface DashboardContentProps {
  user: {
    subscription?: {
      plan?: string;
      end_at?: string | null;
    } | null;
  };
}

export default function DashboardContent({ user }: DashboardContentProps) {
  const handleBilling = async () => {
    const result = await manageBilling();
    if (!result.ok) {
      console.error(result.error);
      return;
    }
    window.location.href = result.url;
  };

  return (
    <div className="space-y-6">
      <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-4 rounded">
        <p className="font-medium">Thanks for buying! Our boilerplate will continuously update.</p>
      </div>
      <div className="flex justify-between items-center pb-4 border-b border-gray-200">
        <span className="text-lg font-medium">Status</span>
        <span className="text-green-600 font-semibold">Active</span>
      </div>
      <div className="flex justify-between items-center pb-4 border-b border-gray-200">
        <span className="text-lg font-medium">Plan</span>
        <span>{user.subscription?.plan || "Standard"}</span>
      </div>
      <div className="flex justify-between items-center pb-4 border-b border-gray-200">
        <span className="text-lg font-medium">Next Billing Date</span>
        <span>
          {user.subscription?.end_at
            ? new Date(user.subscription.end_at).toLocaleDateString()
            : "—"}
        </span>
      </div>
      <Button onClick={handleBilling} className="w-full mt-6">
        Manage Billing
      </Button>
      {/* TODO: replace with your own Discord invite URL */}
      <Button
        onClick={() => window.open("https://discord.gg/your-invite", "_blank", "noopener,noreferrer")}
        variant="outline"
        className="w-full mt-4 flex items-center justify-center"
      >
        <FaDiscord className="w-5 h-5 mr-2" />
        Join our community
      </Button>
    </div>
  );
}