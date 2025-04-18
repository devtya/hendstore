import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
} from "recharts";

const stats = [
  { label: "Transaksi Hari Ini", value: 120 },
  { label: "Omzet Hari Ini", value: "Rp 1.800.000" },
  { label: "Keuntungan Hari Ini", value: "Rp 270.000" },
];

const chartData = [
  { tanggal: "4 Apr", transaksi: 50 },
  { tanggal: "5 Apr", transaksi: 65 },
  { tanggal: "6 Apr", transaksi: 80 },
  { tanggal: "7 Apr", transaksi: 40 },
  { tanggal: "8 Apr", transaksi: 100 },
  { tanggal: "9 Apr", transaksi: 75 },
  { tanggal: "10 Apr", transaksi: 120 },
];

export default function DashboardPage() {
  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((item, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground">{item.label}</p>
              <p className="text-xl font-bold mt-2">{item.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardContent className="p-4">
          <p className="font-semibold mb-4">Grafik Transaksi 7 Hari Terakhir</p>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={chartData}>
              <XAxis dataKey="tanggal" stroke="#cbd5e1" />
              <YAxis stroke="#cbd5e1" />
              <Tooltip
                contentStyle={{ backgroundColor: "#1f2937", color: "#fff", border: "none" }}
              />
              <Bar dataKey="transaksi" fill="#4f46e5" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
