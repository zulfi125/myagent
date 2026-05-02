export default function handler(req, res) {
  res.status(200).json({
    name: "My Agent MCP",
    version: "2025-06-18",
    tools: ["chat", "crypto_analysis"],
    message: "MCP working"
  });
}
