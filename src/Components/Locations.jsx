import React from "react";

const mockLocations = [
  { city: "Karachi", province: "Sindh", icon: "🏖️" },
  { city: "Lahore", province: "Punjab", icon: "🏰" },
  { city: "Islamabad", province: "Islamabad Capital Territory", icon: "🏙️" },
  { city: "Quetta", province: "Balochistan", icon: "⛰️" },
  { city: "Peshawar", province: "KPK", icon: "🏯" },
  { city: "Sukkur", province: "Sindh", icon: "🌉" },
  { city: "Faisalabad", province: "Punjab", icon: "🏭" },
  { city: "Multan", province: "Punjab", icon: "🕌" },
  { city: "Sialkot", province: "Punjab", icon: "⚽" },
];

export default function Locations() {
  return (
    <section style={{ maxWidth: "900px", margin: "0 auto", padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h2 style={{ fontSize: "32px", color: "#2849b8", margin: 0 }}>Locations</h2>
        <p style={{ margin: "8px 0 0", color: "#555", fontSize: "16px" }}>
          Explore cities with their provinces
        </p>
      </div>

      {/* Grid cards */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "20px"
      }}>
        {mockLocations.map((item, index) => (
          <div key={index} style={{
            background: "linear-gradient(135deg, #e0f0ff, #ffffff)",
            borderRadius: "15px",
            padding: "20px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            textAlign: "center",
            transition: "transform 0.3s, box-shadow 0.3s",
            cursor: "default"
          }}>
            <div style={{
              fontSize: "36px",
              marginBottom: "15px",
              width: "70px",
              height: "70px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              backgroundColor: "#2849b8",
              color: "#fff",
              marginLeft: "auto",
              marginRight: "auto",
            }}>
              {item.icon}
            </div>
            <strong style={{ display: "block", fontSize: "20px", color: "#333", marginBottom: "5px" }}>
              {item.city}
            </strong>
            <span style={{ fontSize: "14px", color: "#555" }}>{item.province}</span>
          </div>
        ))}
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 480px) {
          h2 { font-size: 26px !important; }
          p { font-size: 14px !important; }
          div[style*="padding: 20px"] { padding: 15px !important; }
          strong { font-size: 18px !important; }
          div[style*="font-size: 36px"] { font-size: 28px !important; width: 60px; height: 60px; }
        }

        div[style*="transition: transform"]:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }
      `}</style>
    </section>
  );
}
