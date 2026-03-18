// // import { useState, useEffect, useCallback } from "react";
// // import DataTable from "react-data-table-component";

// // const API = "https://eduhawk-server-urpn.onrender.com/api/query/all";

// // const EVENT_COLORS = {
// //   CorporateEvent: { bg: "#e0f2fe", text: "#0369a1", border: "#7dd3fc" },
// //   Wedding:        { bg: "#fce7f3", text: "#be185d", border: "#f9a8d4" },
// //   Exhibition:     { bg: "#fef9c3", text: "#92400e", border: "#fde68a" },
// //   Conference:     { bg: "#ede9fe", text: "#6d28d9", border: "#c4b5fd" },
// //   "Political/Govt": { bg: "#dcfce7", text: "#166534", border: "#86efac" },
// //   Other:          { bg: "#f3f4f6", text: "#374151", border: "#d1d5db" },
// // };

// // const Badge = ({ label }) => {
// //   const c = EVENT_COLORS[label] || EVENT_COLORS.Other;
// //   return (
// //     <span
// //       style={{
// //         background: c.bg,
// //         color: c.text,
// //         border: `1px solid ${c.border}`,
// //         padding: "2px 10px",
// //         borderRadius: 999,
// //         fontSize: 12,
// //         fontWeight: 600,
// //         whiteSpace: "nowrap",
// //         fontFamily: "'DM Sans', sans-serif",
// //       }}
// //     >
// //       {label}
// //     </span>
// //   );
// // };

// // const customStyles = {
// //   table: {
// //     style: {
// //       backgroundColor: "#fff",
// //       borderRadius: 16,
// //       overflow: "hidden",
// //       boxShadow: "0 4px 32px rgba(15,23,42,0.08)",
// //     },
// //   },
// //   headRow: {
// //     style: {
// //       background: "linear-gradient(90deg, #0f172a 0%, #1e3a5f 100%)",
// //       borderRadius: "16px 16px 0 0",
// //       minHeight: 52,
// //     },
// //   },
// //   headCells: {
// //     style: {
// //       color: "#cbd5e1",
// //       fontFamily: "'DM Sans', sans-serif",
// //       fontWeight: 700,
// //       fontSize: 12,
// //       textTransform: "uppercase",
// //       letterSpacing: "0.08em",
// //       paddingLeft: 20,
// //       paddingRight: 20,
// //     },
// //   },
// //   rows: {
// //     style: {
// //       fontFamily: "'DM Sans', sans-serif",
// //       fontSize: 14,
// //       color: "#1e293b",
// //       borderBottomColor: "#f1f5f9",
// //       minHeight: 58,
// //       transition: "background 0.15s",
// //     },
// //     highlightOnHoverStyle: {
// //       backgroundColor: "#f8fafc",
// //       borderBottomColor: "#e2e8f0",
// //       outline: "none",
// //     },
// //   },
// //   cells: {
// //     style: {
// //       paddingLeft: 20,
// //       paddingRight: 20,
// //     },
// //   },
// //   pagination: {
// //     style: {
// //       fontFamily: "'DM Sans', sans-serif",
// //       fontSize: 13,
// //       color: "#475569",
// //       borderTop: "1px solid #f1f5f9",
// //     },
// //     pageButtonsStyle: {
// //       borderRadius: 8,
// //       color: "#0f172a",
// //       fill: "#0f172a",
// //       "&:hover:not(:disabled)": { backgroundColor: "#f1f5f9" },
// //       "&:focus": { outline: "none", backgroundColor: "#e2e8f0" },
// //     },
// //   },
// // };

// // // ── Modal ────────────────────────────────────────────────────────────────────
// // const MessageModal = ({ row, onClose }) => {
// //   if (!row) return null;
// //   return (
// //     <div
// //       onClick={onClose}
// //       style={{
// //         position: "fixed", inset: 0, zIndex: 1000,
// //         background: "rgba(15,23,42,0.6)",
// //         display: "flex", alignItems: "center", justifyContent: "center",
// //         padding: 20,
// //         backdropFilter: "blur(4px)",
// //       }}
// //     >
// //       <div
// //         onClick={(e) => e.stopPropagation()}
// //         style={{
// //           background: "#fff",
// //           borderRadius: 20,
// //           padding: "36px 40px",
// //           maxWidth: 520,
// //           width: "100%",
// //           boxShadow: "0 24px 80px rgba(15,23,42,0.18)",
// //           fontFamily: "'DM Sans', sans-serif",
// //           position: "relative",
// //         }}
// //       >
// //         <button
// //           onClick={onClose}
// //           style={{
// //             position: "absolute", top: 18, right: 20,
// //             background: "#f1f5f9", border: "none", borderRadius: "50%",
// //             width: 32, height: 32, cursor: "pointer",
// //             fontSize: 18, color: "#64748b", display: "flex",
// //             alignItems: "center", justifyContent: "center",
// //           }}
// //         >✕</button>

// //         <div style={{ marginBottom: 20 }}>
// //           <Badge label={row.subject} />
// //         </div>

// //         <h2 style={{ margin: "0 0 4px", fontSize: 22, fontWeight: 700, color: "#0f172a" }}>
// //           {row.username}
// //         </h2>
// //         <p style={{ margin: "0 0 16px", color: "#64748b", fontSize: 14 }}>
// //           {row.email} {row.phone && `• ${row.phone}`}
// //         </p>

// //         <div style={{
// //           background: "#f8fafc", borderRadius: 12, padding: "16px 20px",
// //           color: "#334155", lineHeight: 1.7, fontSize: 15,
// //           border: "1px solid #e2e8f0",
// //         }}>
// //           {row.message}
// //         </div>

// //         <p style={{ marginTop: 16, color: "#94a3b8", fontSize: 12 }}>
// //           Received: {new Date(row.createdAt).toLocaleString("en-IN", {
// //             day: "numeric", month: "short", year: "numeric",
// //             hour: "2-digit", minute: "2-digit"
// //           })}
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // // ── Main Component ───────────────────────────────────────────────────────────
// // export default function Query() {
// //   const [data, setData]           = useState([]);
// //   const [loading, setLoading]     = useState(true);
// //   const [error, setError]         = useState(null);
// //   const [filterText, setFilterText] = useState("");
// //   const [filterEvent, setFilterEvent] = useState("All");
// //   const [selectedRow, setSelectedRow] = useState(null);
// //   const [deletingId, setDeletingId]   = useState(null);

// //   const fetchData = useCallback(async () => {
// //     setLoading(true);
// //     setError(null);
// //     try {
// //       const res = await fetch(API);
// //       if (!res.ok) throw new Error(`Server error: ${res.status}`);
// //       const json = await res.json();
// //       // support both { data: [...] } and plain array
// //       setData(Array.isArray(json) ? json : json.data ?? []);
// //     } catch (err) {
// //       setError(err.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   }, []);

// //   useEffect(() => { fetchData(); }, [fetchData]);

// //   const handleDelete = async (id) => {
// //     if (!window.confirm("Delete this message permanently?")) return;
// //     setDeletingId(id);
// //     try {
// //       const res = await fetch(`${API}/${id}`, { method: "DELETE" });
// //       if (!res.ok) throw new Error("Delete failed");
// //       setData((prev) => prev.filter((r) => r._id !== id));
// //     } catch (err) {
// //       alert("Failed to delete: " + err.message);
// //     } finally {
// //       setDeletingId(null);
// //     }
// //   };

// //   // ── Filtered data ──────────────────────────────────────────────────────────
// //   const filtered = data.filter((row) => {
// //     const q = filterText.toLowerCase();
// //     const matchText =
// //       !q ||
// //       row.username?.toLowerCase().includes(q) ||
// //       row.email?.toLowerCase().includes(q) ||
// //       row.phone?.toLowerCase().includes(q) ||
// //       row.message?.toLowerCase().includes(q);
// //     const matchEvent = filterEvent === "All" || row.subject === filterEvent;
// //     return matchText && matchEvent;
// //   });

// //   // ── Columns ────────────────────────────────────────────────────────────────
// //   const columns = [
// //     {
// //       name: "#",
// //       selector: (_, i) => i + 1,
// //       width: "58px",
// //       cell: (_, i) => (
// //         <span style={{ color: "#94a3b8", fontWeight: 600, fontSize: 13 }}>{i + 1}</span>
// //       ),
// //     },
// //     {
// //       name: "Name",
// //       selector: (r) => r.name,
// //       sortable: true,
// //       cell: (r) => (
// //         <span style={{ fontWeight: 600, color: "#0f172a" }}>{r.username}</span>
// //       ),
// //     },
// //     {
// //       name: "Email",
// //       selector: (r) => r.email,
// //       sortable: true,
// //       cell: (r) => (
// //         <a href={`mailto:${r.email}`} style={{ color: "#2563eb", textDecoration: "none" }}>
// //           {r.email}
// //         </a>
// //       ),
// //     },
// //     {
// //       name: "Phone",
// //       selector: (r) => r.phone || "—",
// //       width: "140px",
// //     },
// //     {
// //       name: "City",
// //       selector: (r) => r.city,
// //       sortable: true,
// //       width: "170px",
// //       cell: (r) => <Badge label={r.subject} />,
// //     },

// //         {
// //       name: "Country",
// //       selector: (r) => r.country,
// //       sortable: true,
// //       width: "270px",
// //       cell: (r) => <Badge label={r.subject} />,
// //     },
// //     {
// //       name: "Message",
// //       selector: (r) => r.message,
// //       cell: (r) => (
// //         <span
// //           title={r.message}
// //           style={{
// //             maxWidth: 220, overflow: "hidden", textOverflow: "ellipsis",
// //             whiteSpace: "nowrap", color: "#475569", cursor: "pointer",
// //           }}
// //           onClick={() => setSelectedRow(r)}
// //         >
// //           {r.message}
// //         </span>
// //       ),
// //       grow: 2,
// //     },
// //     {
// //       name: "Date",
// //       selector: (r) => r.createdAt,
// //       sortable: true,
// //       width: "130px",
// //       cell: (r) => (
// //         <span style={{ color: "#64748b", fontSize: 13 }}>
// //           {new Date(r.createdAt).toLocaleDateString("en-IN", {
// //             day: "2-digit", month: "short", year: "numeric",
// //           })}
// //         </span>
// //       ),
// //     },
// //     {
// //       name: "Actions",
// //       width: "120px",
// //       cell: (r) => (
// //         <div style={{ display: "flex", gap: 8 }}>
// //           <button
// //             onClick={() => setSelectedRow(r)}
// //             title="View"
// //             style={{
// //               background: "#eff6ff", border: "1px solid #bfdbfe",
// //               borderRadius: 8, padding: "5px 10px",
// //               cursor: "pointer", color: "#1d4ed8", fontSize: 13, fontWeight: 600,
// //               fontFamily: "'DM Sans', sans-serif",
// //             }}
// //           >
// //             View
// //           </button>
// //           <button
// //             onClick={() => handleDelete(r._id)}
// //             disabled={deletingId === r._id}
// //             title="Delete"
// //             style={{
// //               background: deletingId === r._id ? "#f1f5f9" : "#fff1f2",
// //               border: "1px solid #fecdd3",
// //               borderRadius: 8, padding: "5px 10px",
// //               cursor: deletingId === r._id ? "not-allowed" : "pointer",
// //               color: "#e11d48", fontSize: 13, fontWeight: 600,
// //               fontFamily: "'DM Sans', sans-serif",
// //             }}
// //           >
// //             {deletingId === r._id ? "…" : "Del"}
// //           </button>
// //         </div>
// //       ),
// //     },
// //   ];

// //   // ── Stats ──────────────────────────────────────────────────────────────────
// //   const eventCounts = Object.keys(EVENT_COLORS).map((k) => ({
// //     label: k,
// //     count: data.filter((d) => d.subject === k).length,
// //   }));

// //   return (
// //     <>
// //       <link
// //         href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Syne:wght@700;800&display=swap"
// //         rel="stylesheet"
// //       />
// //       <div style={{
// //         minHeight: "100vh",
// //         background: "linear-gradient(135deg, #f0f4ff 0%, #fafafa 60%, #fff7ed 100%)",
// //         padding: "36px 24px",
// //         fontFamily: "'DM Sans', sans-serif",
// //       }}>

// //         {/* ── Header ── */}
// //         <div style={{ maxWidth: 1400, margin: "0 auto" }}>
// //           <div style={{ marginBottom: 32 }}>
// //             <h1 style={{
// //               fontFamily: "'Syne', sans-serif",
// //               fontSize: 32, fontWeight: 800,
// //               color: "#0f172a", margin: "0 0 6px",
// //               letterSpacing: "-0.5px",
// //             }}>
// //               Contact Messages
// //             </h1>
// //             <p style={{ color: "#64748b", fontSize: 15, margin: 0 }}>
// //               {data.length} total enquiries received
// //             </p>
// //           </div>

// //           {/* ── Stat Chips ── */}
// //           <div style={{
// //             display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 28,
// //           }}>
// //             {eventCounts.map(({ label, count }) => {
// //               const c = EVENT_COLORS[label];
// //               return (
// //                 <button
// //                   key={label}
// //                   onClick={() => setFilterEvent(filterEvent === label ? "All" : label)}
// //                   style={{
// //                     background: filterEvent === label ? c.bg : "#fff",
// //                     border: `1px solid ${filterEvent === label ? c.border : "#e2e8f0"}`,
// //                     color: filterEvent === label ? c.text : "#475569",
// //                     borderRadius: 999, padding: "6px 16px",
// //                     fontSize: 13, fontWeight: 600,
// //                     cursor: "pointer", fontFamily: "'DM Sans', sans-serif",
// //                     transition: "all 0.15s",
// //                     boxShadow: filterEvent === label ? "0 2px 8px rgba(0,0,0,0.08)" : "none",
// //                   }}
// //                 >
// //                   {label} <span style={{ opacity: 0.7, marginLeft: 4 }}>{count}</span>
// //                 </button>
// //               );
// //             })}
// //             {filterEvent !== "All" && (
// //               <button
// //                 onClick={() => setFilterEvent("All")}
// //                 style={{
// //                   background: "#fef2f2", border: "1px solid #fecaca",
// //                   color: "#dc2626", borderRadius: 999, padding: "6px 14px",
// //                   fontSize: 13, fontWeight: 600, cursor: "pointer",
// //                   fontFamily: "'DM Sans', sans-serif",
// //                 }}
// //               >
// //                 ✕ Clear
// //               </button>
// //             )}
// //           </div>

// //           {/* ── Search + Refresh bar ── */}
// //           <div style={{
// //             display: "flex", gap: 12, marginBottom: 20,
// //             alignItems: "center", flexWrap: "wrap",
// //           }}>
// //             <div style={{ position: "relative", flex: 1, minWidth: 220, maxWidth: 380 }}>
// //               <span style={{
// //                 position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)",
// //                 color: "#94a3b8", fontSize: 16, pointerEvents: "none",
// //               }}>🔍</span>
// //               <input
// //                 placeholder="Search name, email, phone, message..."
// //                 value={filterText}
// //                 onChange={(e) => setFilterText(e.target.value)}
// //                 style={{
// //                   width: "100%", padding: "10px 14px 10px 40px",
// //                   border: "1px solid #e2e8f0", borderRadius: 12,
// //                   fontSize: 14, outline: "none", fontFamily: "'DM Sans', sans-serif",
// //                   background: "#fff",
// //                   boxSizing: "border-box",
// //                   boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
// //                   color: "#0f172a",
// //                 }}
// //               />
// //             </div>
// //             <button
// //               onClick={fetchData}
// //               style={{
// //                 background: "#0f172a", color: "#fff",
// //                 border: "none", borderRadius: 12,
// //                 padding: "10px 22px", fontSize: 14, fontWeight: 600,
// //                 cursor: "pointer", fontFamily: "'DM Sans', sans-serif",
// //                 display: "flex", alignItems: "center", gap: 8,
// //               }}
// //             >
// //               ↺ Refresh
// //             </button>

// //             <span style={{
// //               marginLeft: "auto", color: "#94a3b8", fontSize: 13,
// //             }}>
// //               Showing {filtered.length} of {data.length}
// //             </span>
// //           </div>

// //           {/* ── Error banner ── */}
// //           {error && (
// //             <div style={{
// //               background: "#fff1f2", border: "1px solid #fecdd3",
// //               borderRadius: 12, padding: "14px 20px",
// //               color: "#be123c", fontSize: 14, marginBottom: 20,
// //               display: "flex", justifyContent: "space-between", alignItems: "center",
// //             }}>
// //               <span>⚠️ {error}</span>
// //               <button
// //                 onClick={fetchData}
// //                 style={{
// //                   background: "#be123c", color: "#fff", border: "none",
// //                   borderRadius: 8, padding: "4px 14px",
// //                   cursor: "pointer", fontSize: 13, fontFamily: "'DM Sans', sans-serif",
// //                 }}
// //               >
// //                 Retry
// //               </button>
// //             </div>
// //           )}

// //           {/* ── DataTable ── */}
// //           <div style={{
// //             borderRadius: 16, overflow: "hidden",
// //             boxShadow: "0 4px 32px rgba(15,23,42,0.08)",
// //           }}>
// //             <DataTable
// //               columns={columns}
// //               data={filtered}
// //               progressPending={loading}
// //               progressComponent={
// //                 <div style={{
// //                   padding: 60, textAlign: "center",
// //                   color: "#64748b", fontFamily: "'DM Sans', sans-serif",
// //                   fontSize: 15,
// //                 }}>
// //                   <div style={{ fontSize: 32, marginBottom: 12 }}>⏳</div>
// //                   Loading messages...
// //                 </div>
// //               }
// //               noDataComponent={
// //                 <div style={{
// //                   padding: 60, textAlign: "center",
// //                   color: "#94a3b8", fontFamily: "'DM Sans', sans-serif",
// //                 }}>
// //                   <div style={{ fontSize: 40, marginBottom: 12 }}>📭</div>
// //                   <p style={{ fontSize: 16, fontWeight: 600, margin: "0 0 4px" }}>No messages found</p>
// //                   <p style={{ fontSize: 13, margin: 0 }}>
// //                     {filterText || filterEvent !== "All" ? "Try clearing your filters" : "Messages will appear here once received"}
// //                   </p>
// //                 </div>
// //               }
// //               pagination
// //               paginationPerPage={10}
// //               paginationRowsPerPageOptions={[5, 10, 20, 50]}
// //               highlightOnHover
// //               pointerOnHover
// //               onRowClicked={(row) => setSelectedRow(row)}
// //               customStyles={customStyles}
// //               defaultSortFieldId={7}
// //               defaultSortAsc={false}
// //             />
// //           </div>
// //         </div>

// //         {/* ── Message Detail Modal ── */}
// //         <MessageModal row={selectedRow} onClose={() => setSelectedRow(null)} />
// //       </div>
// //     </>
// //   );
// // }

// import { useState, useEffect, useCallback } from "react";
// import DataTable from "react-data-table-component";

// const API = "https://eduhawk-server-urpn.onrender.com/api/query/all";

// const EVENT_COLORS = {
//   CorporateEvent: { bg: "#e0f2fe", text: "#0369a1", border: "#7dd3fc" },
//   Wedding:        { bg: "#fce7f3", text: "#be185d", border: "#f9a8d4" },
//   Exhibition:     { bg: "#fef9c3", text: "#92400e", border: "#fde68a" },
//   Conference:     { bg: "#ede9fe", text: "#6d28d9", border: "#c4b5fd" },
//   "Political/Govt": { bg: "#dcfce7", text: "#166534", border: "#86efac" },
//   Other:          { bg: "#f3f4f6", text: "#374151", border: "#d1d5db" },
// };

// const Badge = ({ label }) => {
//   const c = EVENT_COLORS[label] || EVENT_COLORS.Other;
//   return (
//     <span
//       style={{
//         background: c.bg,
//         color: c.text,
//         border: `1px solid ${c.border}`,
//         padding: "4px 12px",
//         borderRadius: 999,
//         fontSize: 12.5,
//         fontWeight: 600,
//         whiteSpace: "nowrap",
//         fontFamily: "'DM Sans', sans-serif",
//         boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
//       }}
//     >
//       {label}
//     </span>
//   );
// };

// const customStyles = {
//   table: {
//     style: {
//       backgroundColor: "#fff",
//       borderRadius: 20,
//       overflow: "hidden",
//       boxShadow: "0 10px 40px rgba(15,23,42,0.09)",
//     },
//   },
//   headRow: {
//     style: {
//       background: "rgba(15, 23, 42, 0.96)",
//       backdropFilter: "blur(12px)",
//       borderRadius: "20px 20px 0 0",
//       minHeight: 56,
//     },
//   },
//   headCells: {
//     style: {
//       color: "#e2e8f0",
//       fontFamily: "'DM Sans', sans-serif",
//       fontWeight: 700,
//       fontSize: 12.5,
//       textTransform: "uppercase",
//       letterSpacing: "0.06em",
//       paddingLeft: 24,
//       paddingRight: 24,
//     },
//   },
//   rows: {
//     style: {
//       fontFamily: "'DM Sans', sans-serif",
//       fontSize: 14.2,
//       color: "#1e293b",
//       borderBottomColor: "#f8fafc",
//       minHeight: 62,
//       transition: "all 0.2s ease",
//     },
//     highlightOnHoverStyle: {
//       backgroundColor: "#f8fafc",
//       transform: "scale(1.01)",
//       boxShadow: "0 4px 15px rgba(0,0,0,0.06)",
//       zIndex: 1,
//     },
//   },
//   cells: {
//     style: {
//       paddingLeft: 24,
//       paddingRight: 24,
//     },
//   },
//   pagination: {
//     style: {
//       fontFamily: "'DM Sans', sans-serif",
//       fontSize: 13.5,
//       color: "#475569",
//       borderTop: "1px solid #f1f5f9",
//       padding: "16px 24px",
//     },
//     pageButtonsStyle: {
//       borderRadius: 10,
//       color: "#0f172a",
//       "&:hover:not(:disabled)": { backgroundColor: "#f1f5f9" },
//       "&:focus": { outline: "none", backgroundColor: "#e2e8f0" },
//     },
//   },
// };

// // ── Modal (Glassmorphism + Improved) ─────────────────────────────────────
// const MessageModal = ({ row, onClose }) => {
//   if (!row) return null;

//   return (
//     <div
//       onClick={onClose}
//       style={{
//         position: "fixed",
//         inset: 0,
//         zIndex: 1000,
//         background: "rgba(15,23,42,0.65)",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         padding: 20,
//         backdropFilter: "blur(8px)",
//       }}
//     >
//       <div
//         onClick={(e) => e.stopPropagation()}
//         style={{
//           background: "rgba(255,255,255,0.92)",
//           backdropFilter: "blur(20px)",
//           borderRadius: 24,
//           border: "1px solid rgba(255,255,255,0.6)",
//           padding: "40px 44px",
//           maxWidth: 540,
//           width: "100%",
//           boxShadow: "0 30px 90px rgba(15,23,42,0.22)",
//           fontFamily: "'DM Sans', sans-serif",
//           position: "relative",
//         }}
//       >
//         <button
//           onClick={onClose}
//           style={{
//             position: "absolute",
//             top: 20,
//             right: 24,
//             background: "rgba(241,245,249,0.9)",
//             border: "none",
//             borderRadius: "50%",
//             width: 36,
//             height: 36,
//             cursor: "pointer",
//             fontSize: 20,
//             color: "#64748b",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             transition: "all 0.2s",
//           }}
//         >
//           ✕
//         </button>

//         <div style={{ marginBottom: 24 }}>
//           <Badge label={row.subject || "Other"} />
//         </div>

//         <h2 style={{ margin: "0 0 6px", fontSize: 26, fontWeight: 700, color: "#0f172a" }}>
//           {row.name}
//         </h2>
//         <p style={{ margin: "0 0 20px", color: "#64748b", fontSize: 15 }}>
//           {row.email} {row.phone && ` • ${row.phone}`}
//         </p>

//         <div
//           style={{
//             background: "rgba(248,250,252,0.7)",
//             borderRadius: 16,
//             padding: "20px 24px",
//             color: "#334155",
//             lineHeight: 1.75,
//             fontSize: 15.5,
//             border: "1px solid rgba(226,232,240,0.8)",
//             minHeight: 140,
//           }}
//         >
//           {row.message || row.query || "No message provided"}
//         </div>

//         <p style={{ marginTop: 20, color: "#94a3b8", fontSize: 13.5 }}>
//           Received: {new Date(row.createdAt).toLocaleString("en-IN", {
//             day: "numeric",
//             month: "short",
//             year: "numeric",
//             hour: "2-digit",
//             minute: "2-digit",
//           })}
//         </p>
//       </div>
//     </div>
//   );
// };

// // ── Main Component ───────────────────────────────────────────────────────
// export default function Query() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [filterText, setFilterText] = useState("");
//   const [filterEvent, setFilterEvent] = useState("All");
//   const [selectedRow, setSelectedRow] = useState(null);
//   const [deletingId, setDeletingId] = useState(null);

//   const fetchData = useCallback(async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const res = await fetch(API);
//       if (!res.ok) throw new Error(`Server error: ${res.status}`);
//       const json = await res.json();
//       setData(Array.isArray(json) ? json : json.data ?? []);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     fetchData();
//   }, [fetchData]);

//   const handleDelete = async (id) => {
//     if (!window.confirm("Delete this message permanently?")) return;
//     setDeletingId(id);
//     try {
//       const res = await fetch(`https://eduhawk-server-urpn.onrender.com/api/query/${id}`, { method: "DELETE" });
//       if (!res.ok) throw new Error("Delete failed");
//       setData((prev) => prev.filter((r) => r._id !== id));
//     } catch (err) {
//       alert("Failed to delete: " + err.message);
//     } finally {
//       setDeletingId(null);
//     }
//   };

//   const filtered = data.filter((row) => {
//     const q = filterText.toLowerCase();
//     const matchText =
//       !q ||
//       row.name?.toLowerCase().includes(q) ||
//       row.email?.toLowerCase().includes(q) ||
//       row.phone?.toLowerCase().includes(q) ||
//       (row.message || row.query)?.toLowerCase().includes(q);

//     const matchEvent = filterEvent === "All" || row.subject === filterEvent;
//     return matchText && matchEvent;
//   });

//   const columns = [
//     { name: "#", selector: (_, i) => i + 1, width: "60px", cell: (_, i) => <span style={{ color: "#94a3b8", fontWeight: 600, fontSize: 13.5 }}>{i + 1}</span> },
//     { name: "Name", selector: (r) => r.name, sortable: true, cell: (r) => <span style={{ fontWeight: 600, color: "#0f172a" }}>{r.name}</span> },
//     { name: "Email", selector: (r) => r.email, sortable: true, cell: (r) => <a href={`mailto:${r.email}`} style={{ color: "#2563eb", textDecoration: "none" }}>{r.email}</a> },
//     { name: "Phone", selector: (r) => r.phone || "—", width: "140px" },
//     { name: "Event Type", selector: (r) => r.subject, sortable: true, width: "175px", cell: (r) => <Badge label={r.subject || "Other"} /> },
//     { name: "City", selector: (r) => r.city || "—", sortable: true, width: "130px" },
//     { name: "Country", selector: (r) => r.country || "—", sortable: true, width: "130px" },
//     {
//       name: "Message",
//       selector: (r) => r.message || r.query,
//       cell: (r) => (
//         <span
//           title={r.message || r.query}
//           style={{ maxWidth: 260, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", color: "#475569", cursor: "pointer" }}
//           onClick={() => setSelectedRow(r)}
//         >
//           {r.message || r.query || "No message"}
//         </span>
//       ),
//       grow: 2,
//     },
//     {
//       name: "Date",
//       selector: (r) => r.createdAt,
//       sortable: true,
//       width: "145px",
//       cell: (r) => (
//         <span style={{ color: "#64748b", fontSize: 13.5 }}>
//           {new Date(r.createdAt).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}
//         </span>
//       ),
//     },
//     {
//       name: "Actions",
//       width: "130px",
//       cell: (r) => (
//         <div style={{ display: "flex", gap: 10 }}>
//           <button
//             onClick={() => setSelectedRow(r)}
//             style={{
//               background: "#eff6ff",
//               border: "1px solid #bfdbfe",
//               borderRadius: 10,
//               padding: "6px 14px",
//               cursor: "pointer",
//               color: "#1e40af",
//               fontSize: 13.5,
//               fontWeight: 600,
//               fontFamily: "'DM Sans', sans-serif",
//               transition: "all 0.2s",
//             }}
//             onMouseOver={(e) => (e.currentTarget.style.transform = "translateY(-1px)")}
//             onMouseOut={(e) => (e.currentTarget.style.transform = "none")}
//           >
//             View
//           </button>
//           <button
//             onClick={() => handleDelete(r._id)}
//             disabled={deletingId === r._id}
//             style={{
//               background: deletingId === r._id ? "#f1f5f9" : "#fff1f2",
//               border: "1px solid #fecdd3",
//               borderRadius: 10,
//               padding: "6px 14px",
//               cursor: deletingId === r._id ? "not-allowed" : "pointer",
//               color: "#e11d48",
//               fontSize: 13.5,
//               fontWeight: 600,
//               fontFamily: "'DM Sans', sans-serif",
//             }}
//           >
//             {deletingId === r._id ? "…" : "Delete"}
//           </button>
//         </div>
//       ),
//     },
//   ];

//   const eventCounts = Object.keys(EVENT_COLORS).map((k) => ({
//     label: k,
//     count: data.filter((d) => d.subject === k).length,
//   }));

//   return (
//     <>
//       <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Syne:wght@700;800&display=swap" rel="stylesheet" />

//       <div style={{
//         minHeight: "100vh",
//         background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
//         padding: "40px 24px",
//         fontFamily: "'DM Sans', sans-serif",
//       }}>
//         <div style={{ maxWidth: 1480, margin: "0 auto" }}>
//           {/* Header */}

//           {/* Event Filter Chips */}
//           <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 32 }}>
//             {eventCounts.map(({ label, count }) => {
//               const c = EVENT_COLORS[label];
//               const isActive = filterEvent === label;
//               return (
//                 <button
//                   key={label}
//                   onClick={() => setFilterEvent(isActive ? "All" : label)}
//                   style={{
//                     background: isActive ? c.bg : "#fff",
//                     border: `1px solid ${isActive ? c.border : "#e2e8f0"}`,
//                     color: isActive ? c.text : "#475569",
//                     borderRadius: 999,
//                     padding: "8px 18px",
//                     fontSize: 13.5,
//                     fontWeight: 600,
//                     cursor: "pointer",
//                     transition: "all 0.2s ease",
//                     boxShadow: isActive ? "0 3px 10px rgba(0,0,0,0.08)" : "none",
//                   }}
//                 >
//                   {label} <span style={{ opacity: 0.75, marginLeft: 5 }}>{count}</span>
//                 </button>
//               );
//             })}

//             {filterEvent !== "All" && (
//               <button
//                 onClick={() => setFilterEvent("All")}
//                 style={{
//                   background: "#fef2f2",
//                   border: "1px solid #fecaca",
//                   color: "#e11d48",
//                   borderRadius: 999,
//                   padding: "8px 18px",
//                   fontSize: 13.5,
//                   fontWeight: 600,
//                   cursor: "pointer",
//                 }}
//               >
//                 ✕ Clear Filter
//               </button>
//             )}
//           </div>

//           {/* Search + Controls */}
//           <div style={{ display: "flex", gap: 16, marginBottom: 24, alignItems: "center", flexWrap: "wrap" }}>
//             <div style={{ position: "relative", flex: 1, minWidth: 280, maxWidth: 420 }}>
//               <span style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", color: "#94a3b8", fontSize: 18 }}>🔍</span>
//               <input
//                 placeholder="Search by name, email, phone or message..."
//                 value={filterText}
//                 onChange={(e) => setFilterText(e.target.value)}
//                 style={{
//                   width: "100%",
//                   padding: "13px 16px 13px 52px",
//                   border: "1px solid #e2e8f0",
//                   borderRadius: 14,
//                   fontSize: 15,
//                   outline: "none",
//                   background: "#fff",
//                   boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
//                 }}
//               />
//             </div>

//             <button
//               onClick={fetchData}
//               style={{
//                 background: "#0f172a",
//                 color: "#fff",
//                 border: "none",
//                 borderRadius: 14,
//                 padding: "13px 26px",
//                 fontSize: 15,
//                 fontWeight: 600,
//                 cursor: "pointer",
//                 display: "flex",
//                 alignItems: "center",
//                 gap: 8,
//               }}
//             >
//               ↺ Refresh Data
//             </button>

//             <span style={{ marginLeft: "auto", color: "#64748b", fontSize: 14.5 }}>
//               Showing <strong>{filtered.length}</strong> of {data.length}
//             </span>
//           </div>

//           {error && (
//             <div style={{ background: "#fff1f2", border: "1px solid #fecdd3", borderRadius: 14, padding: "16px 22px", color: "#be123c", marginBottom: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//               <span>⚠️ {error}</span>
//               <button onClick={fetchData} style={{ background: "#be123c", color: "#fff", border: "none", borderRadius: 8, padding: "6px 18px", cursor: "pointer" }}>
//                 Retry
//               </button>
//             </div>
//           )}

//           {/* Table Container */}
//           <div style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 10px 40px rgba(15,23,42,0.09)" }}>
//             <DataTable
//               columns={columns}
//               data={filtered}
//               progressPending={loading}
//               pagination
//               paginationPerPage={12}
//               paginationRowsPerPageOptions={[8, 12, 20, 50]}
//               highlightOnHover
//               pointerOnHover
//               onRowClicked={(row) => setSelectedRow(row)}
//               customStyles={customStyles}
//               defaultSortFieldId={8}
//               defaultSortAsc={false}
//               noDataComponent={
//                 <div style={{ padding: 80, textAlign: "center", color: "#94a3b8" }}>
//                   <div style={{ fontSize: 48, marginBottom: 16 }}>📭</div>
//                   <p style={{ fontSize: 18, fontWeight: 600, margin: "0 0 8px" }}>No messages found</p>
//                   <p>Try clearing filters or check back later</p>
//                 </div>
//               }
//             />
//           </div>
//         </div>

//         <MessageModal row={selectedRow} onClose={() => setSelectedRow(null)} />
//       </div>
//     </>
//   );
// }

// import { useState, useEffect, useCallback } from "react";
// import DataTable from "react-data-table-component";

// const API = "https://eduhawk-server-urpn.onrender.com/api/query/all";

// const EVENT_COLORS = {
//   CorporateEvent: { bg: "#e0f2fe", text: "#0369a1", border: "#7dd3fc" },
//   Wedding:        { bg: "#fce7f3", text: "#be185d", border: "#f9a8d4" },
//   Exhibition:     { bg: "#fef9c3", text: "#92400e", border: "#fde68a" },
//   Conference:     { bg: "#ede9fe", text: "#6d28d9", border: "#c4b5fd" },
//   "Political/Govt": { bg: "#dcfce7", text: "#166534", border: "#86efac" },
//   Other:          { bg: "#f3f4f6", text: "#374151", border: "#d1d5db" },
// };

// const Badge = ({ label }) => {
//   const c = EVENT_COLORS[label] || EVENT_COLORS.Other;
//   return (
//     <span
//       style={{
//         background: c.bg,
//         color: c.text,
//         border: `1px solid ${c.border}`,
//         padding: "4px 12px",
//         borderRadius: 999,
//         fontSize: 12.5,
//         fontWeight: 600,
//         whiteSpace: "nowrap",
//         fontFamily: "'DM Sans', sans-serif",
//         boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
//       }}
//     >
//       {label}
//     </span>
//   );
// };

// const customStyles = {
//   table: {
//     style: {
//       backgroundColor: "#fff",
//       borderRadius: 20,
//       overflow: "hidden",
//       boxShadow: "0 10px 40px rgba(15,23,42,0.09)",
//     },
//   },
//   headRow: {
//     style: {
//       background: "rgba(15, 23, 42, 0.96)",
//       backdropFilter: "blur(12px)",
//       borderRadius: "20px 20px 0 0",
//       minHeight: 56,
//     },
//   },
//   headCells: {
//     style: {
//       color: "#e2e8f0",
//       fontFamily: "'DM Sans', sans-serif",
//       fontWeight: 700,
//       fontSize: 12.5,
//       textTransform: "uppercase",
//       letterSpacing: "0.06em",
//       paddingLeft: 24,
//       paddingRight: 24,
//     },
//   },
//   rows: {
//     style: {
//       fontFamily: "'DM Sans', sans-serif",
//       fontSize: 14.2,
//       color: "#1e293b",
//       borderBottomColor: "#f8fafc",
//       minHeight: 62,
//       transition: "all 0.2s ease",
//     },
//     highlightOnHoverStyle: {
//       backgroundColor: "#f8fafc",
//       transform: "scale(1.01)",
//       boxShadow: "0 4px 15px rgba(0,0,0,0.06)",
//       zIndex: 1,
//     },
//   },
//   cells: {
//     style: { paddingLeft: 24, paddingRight: 24 },
//   },
//   pagination: {
//     style: {
//       fontFamily: "'DM Sans', sans-serif",
//       fontSize: 13.5,
//       color: "#475569",
//       borderTop: "1px solid #f1f5f9",
//       padding: "16px 24px",
//     },
//   },
// };

// // ── Modal ────────────────────────────────────────────────────────────────────
// const MessageModal = ({ row, onClose }) => {
//   if (!row) return null;

//   return (
//     <div
//       onClick={onClose}
//       style={{
//         position: "fixed",
//         inset: 0,
//         zIndex: 1000,
//         background: "rgba(15,23,42,0.65)",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         padding: 20,
//         backdropFilter: "blur(8px)",
//       }}
//     >
//       <div
//         onClick={(e) => e.stopPropagation()}
//         style={{
//           background: "rgba(255,255,255,0.92)",
//           backdropFilter: "blur(20px)",
//           borderRadius: 24,
//           border: "1px solid rgba(255,255,255,0.6)",
//           padding: "40px 44px",
//           maxWidth: 540,
//           width: "100%",
//           boxShadow: "0 30px 90px rgba(15,23,42,0.22)",
//           fontFamily: "'DM Sans', sans-serif",
//           position: "relative",
//         }}
//       >
//         <button
//           onClick={onClose}
//           style={{
//             position: "absolute",
//             top: 20,
//             right: 24,
//             background: "rgba(241,245,249,0.9)",
//             border: "none",
//             borderRadius: "50%",
//             width: 36,
//             height: 36,
//             cursor: "pointer",
//             fontSize: 20,
//             color: "#64748b",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           ✕
//         </button>

//         <div style={{ marginBottom: 24 }}>
//           <Badge label={row.subject || "Other"} />
//         </div>

//         <h2 style={{ margin: "0 0 6px", fontSize: 26, fontWeight: 700, color: "#0f172a" }}>
//           {row.name || row.username}
//         </h2>
//         <p style={{ margin: "0 0 20px", color: "#64748b", fontSize: 15 }}>
//           {row.email} {row.phone && ` • ${row.phone}`}
//         </p>

//         <div
//           style={{
//             background: "rgba(248,250,252,0.7)",
//             borderRadius: 16,
//             padding: "20px 24px",
//             color: "#334155",
//             lineHeight: 1.75,
//             fontSize: 15.5,
//             border: "1px solid rgba(226,232,240,0.8)",
//             minHeight: 140,
//           }}
//         >
//           {row.message || row.query || "No message provided"}
//         </div>

//         <p style={{ marginTop: 20, color: "#94a3b8", fontSize: 13.5 }}>
//           Received: {new Date(row.createdAt).toLocaleString("en-IN", {
//             day: "numeric", month: "short", year: "numeric",
//             hour: "2-digit", minute: "2-digit"
//           })}
//         </p>
//       </div>
//     </div>
//   );
// };

// // ── Main Component ───────────────────────────────────────────────────────
// export default function Query() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [filterText, setFilterText] = useState("");
//   const [filterEvent, setFilterEvent] = useState("All");
//   const [selectedRow, setSelectedRow] = useState(null);
//   const [deletingId, setDeletingId] = useState(null);

//   const fetchData = useCallback(async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const res = await fetch(API);
//       if (!res.ok) throw new Error(`Server error: ${res.status}`);
//       const json = await res.json();
//       setData(Array.isArray(json) ? json : json.data ?? []);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     fetchData();
//   }, [fetchData]);

//   const handleDelete = async (id) => {
//     if (!window.confirm("Delete this message permanently?")) return;
//     setDeletingId(id);
//     try {
//       const res = await fetch(`https://eduhawk-server-urpn.onrender.com/api/query/${id}`, { method: "DELETE" });
//       if (!res.ok) throw new Error("Delete failed");
//       setData((prev) => prev.filter((r) => r._id !== id));
//     } catch (err) {
//       alert("Failed to delete: " + err.message);
//     } finally {
//       setDeletingId(null);
//     }
//   };

//   const filtered = data.filter((row) => {
//     const q = filterText.toLowerCase();
//     const matchText =
//       !q ||
//       row.name?.toLowerCase().includes(q) ||
//       row.username?.toLowerCase().includes(q) ||
//       row.email?.toLowerCase().includes(q) ||
//       row.phone?.toLowerCase().includes(q) ||
//       (row.message || row.query)?.toLowerCase().includes(q);

//     const matchEvent = filterEvent === "All" || row.subject === filterEvent;
//     return matchText && matchEvent;
//   });

//   const columns = [
//     { name: "#", selector: (_, i) => i + 1, width: "60px", cell: (_, i) => <span style={{ color: "#94a3b8", fontWeight: 600, fontSize: 13.5 }}>{i + 1}</span> },
//     {
//       name: "Name",
//       selector: (r) => r.name || r.username,
//       sortable: true,
//       cell: (r) => <span style={{ fontWeight: 600, color: "#0f172a" }}>{r.name || r.username}</span>
//     },
//     {
//       name: "Email",
//       selector: (r) => r.email,
//       sortable: true,
//       cell: (r) => <a href={`mailto:${r.email}`} style={{ color: "#2563eb", textDecoration: "none" }}>{r.email}</a>
//     },
//     { name: "Phone", selector: (r) => r.phone || "—", width: "140px" },
//     {
//       name: "Event Type",
//       selector: (r) => r.subject,
//       sortable: true,
//       width: "175px",
//       cell: (r) => <Badge label={r.subject || "Other"} />
//     },
//     { name: "City", selector: (r) => r.city || "—", sortable: true, width: "130px" },
//     { name: "Country", selector: (r) => r.country || "—", sortable: true, width: "130px" },
//     {
//       name: "Message",
//       selector: (r) => r.message || r.query,
//       cell: (r) => (
//         <span
//           title={r.message || r.query}
//           style={{ maxWidth: 260, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", color: "#475569", cursor: "pointer" }}
//           onClick={() => setSelectedRow(r)}
//         >
//           {r.message || r.query || "No message"}
//         </span>
//       ),
//       grow: 2,
//     },
//     {
//       name: "Date",
//       selector: (r) => r.createdAt,
//       sortable: true,
//       width: "145px",
//       cell: (r) => (
//         <span style={{ color: "#64748b", fontSize: 13.5 }}>
//           {new Date(r.createdAt).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}
//         </span>
//       ),
//     },
//     {
//       name: "Actions",
//       width: "130px",
//       cell: (r) => (
//         <div style={{ display: "flex", gap: 10 }}>
//           <button
//             onClick={() => setSelectedRow(r)}
//             style={{
//               background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: 10,
//               padding: "6px 14px", cursor: "pointer", color: "#1e40af", fontSize: 13.5,
//               fontWeight: 600, fontFamily: "'DM Sans', sans-serif", transition: "all 0.2s",
//             }}
//             onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-1px)"}
//             onMouseOut={(e) => e.currentTarget.style.transform = "none"}
//           >
//             View
//           </button>
//           <button
//             onClick={() => handleDelete(r._id)}
//             disabled={deletingId === r._id}
//             style={{
//               background: deletingId === r._id ? "#f1f5f9" : "#fff1f2",
//               border: "1px solid #fecdd3",
//               borderRadius: 10,
//               padding: "6px 14px",
//               cursor: deletingId === r._id ? "not-allowed" : "pointer",
//               color: "#e11d48",
//               fontSize: 13.5,
//               fontWeight: 600,
//               fontFamily: "'DM Sans', sans-serif",
//             }}
//           >
//             {deletingId === r._id ? "…" : "Delete"}
//           </button>
//         </div>
//       ),
//     },
//   ];

//   const eventCounts = Object.keys(EVENT_COLORS).map((k) => ({
//     label: k,
//     count: data.filter((d) => d.subject === k).length,
//   }));

//   return (
//     <>
//       <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Syne:wght@700;800&display=swap" rel="stylesheet" />

//       <div style={{
//         minHeight: "100vh",
//         background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
//         padding: "40px 24px",
//         fontFamily: "'DM Sans', sans-serif",
//       }}>
//         <div style={{ maxWidth: 1480, margin: "0 auto" }}>

//           {/* Header */}

//           {/* Event Filter Chips */}
//           <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 32 }}>
//             {eventCounts.map(({ label, count }) => {
//               const c = EVENT_COLORS[label];
//               const isActive = filterEvent === label;
//               return (
//                 <button
//                   key={label}
//                   onClick={() => setFilterEvent(isActive ? "All" : label)}
//                   style={{
//                     background: isActive ? c.bg : "#fff",
//                     border: `1px solid ${isActive ? c.border : "#e2e8f0"}`,
//                     color: isActive ? c.text : "#475569",
//                     borderRadius: 999,
//                     padding: "8px 18px",
//                     fontSize: 13.5,
//                     fontWeight: 600,
//                     cursor: "pointer",
//                     transition: "all 0.2s ease",
//                     boxShadow: isActive ? "0 3px 10px rgba(0,0,0,0.08)" : "none",
//                   }}
//                 >
//                   {label} <span style={{ opacity: 0.75, marginLeft: 5 }}>{count}</span>
//                 </button>
//               );
//             })}

//             {filterEvent !== "All" && (
//               <button
//                 onClick={() => setFilterEvent("All")}
//                 style={{
//                   background: "#fef2f2",
//                   border: "1px solid #fecaca",
//                   color: "#e11d48",
//                   borderRadius: 999,
//                   padding: "8px 18px",
//                   fontSize: 13.5,
//                   fontWeight: 600,
//                   cursor: "pointer",
//                 }}
//               >
//                 ✕ Clear Filter
//               </button>
//             )}
//           </div>

//           {/* Search + Controls */}
//           <div style={{ display: "flex", gap: 16, marginBottom: 24, alignItems: "center", flexWrap: "wrap" }}>
//             <div style={{ position: "relative", flex: 1, minWidth: 280, maxWidth: 420 }}>
//               <span style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", color: "#94a3b8", fontSize: 18 }}>🔍</span>
//               <input
//                 placeholder="Search by name, email, phone or message..."
//                 value={filterText}
//                 onChange={(e) => setFilterText(e.target.value)}
//                 style={{
//                   width: "100%",
//                   padding: "13px 16px 13px 52px",
//                   border: "1px solid #e2e8f0",
//                   borderRadius: 14,
//                   fontSize: 15,
//                   outline: "none",
//                   background: "#fff",
//                   boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
//                 }}
//               />
//             </div>

//             <button
//               onClick={fetchData}
//               style={{
//                 background: "#0f172a",
//                 color: "#fff",
//                 border: "none",
//                 borderRadius: 14,
//                 padding: "13px 26px",
//                 fontSize: 15,
//                 fontWeight: 600,
//                 cursor: "pointer",
//                 display: "flex",
//                 alignItems: "center",
//                 gap: 8,
//               }}
//             >
//               ↺ Refresh Data
//             </button>

//             <span style={{ marginLeft: "auto", color: "#64748b", fontSize: 14.5 }}>
//               Showing <strong>{filtered.length}</strong> of {data.length}
//             </span>
//           </div>

//           {error && (
//             <div style={{ background: "#fff1f2", border: "1px solid #fecdd3", borderRadius: 14, padding: "16px 22px", color: "#be123c", marginBottom: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//               <span>⚠️ {error}</span>
//               <button onClick={fetchData} style={{ background: "#be123c", color: "#fff", border: "none", borderRadius: 8, padding: "6px 18px", cursor: "pointer" }}>
//                 Retry
//               </button>
//             </div>
//           )}

//           {/* DataTable */}
//           <div style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 10px 40px rgba(15,23,42,0.09)" }}>
//             <DataTable
//               columns={columns}
//               data={filtered}
//               progressPending={loading}
//               pagination
//               paginationPerPage={12}
//               paginationRowsPerPageOptions={[8, 12, 20, 50]}
//               highlightOnHover
//               pointerOnHover
//               onRowClicked={(row) => setSelectedRow(row)}
//               customStyles={customStyles}
//               defaultSortFieldId={8}
//               defaultSortAsc={false}
//               noDataComponent={
//                 <div style={{ padding: 80, textAlign: "center", color: "#94a3b8" }}>
//                   <div style={{ fontSize: 48, marginBottom: 16 }}>📭</div>
//                   <p style={{ fontSize: 18, fontWeight: 600, margin: "0 0 8px" }}>No messages found</p>
//                   <p>Try clearing filters or check back later</p>
//                 </div>
//               }
//             />
//           </div>
//         </div>

//         <MessageModal row={selectedRow} onClose={() => setSelectedRow(null)} />
//       </div>
//     </>
//   );
// }

import React, { useState, useEffect, useCallback } from "react";
import DataTable from "react-data-table-component";
import {
  FaEye,
  FaTrashAlt,
  FaSearch,
  FaSyncAlt,
  FaInbox,
} from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const API = "https://eduhawk-server-urpn.onrender.com/api/query/all";

const EVENT_COLORS = {
  CorporateEvent: "bg-sky-100 text-sky-700 border-sky-200",
  Wedding: "bg-pink-100 text-pink-700 border-pink-200",
  Exhibition: "bg-yellow-100 text-amber-700 border-yellow-200",
  Conference: "bg-violet-100 text-violet-700 border-violet-200",
  "Political/Govt": "bg-emerald-100 text-emerald-700 border-emerald-200",
  Other: "bg-gray-100 text-gray-700 border-gray-200",
};

const Badge = ({ label }) => {
  const colorClass = EVENT_COLORS[label] || EVENT_COLORS.Other;
  return (
    <span
      className={`inline-flex items-center px-4 py-1 text-xs font-semibold rounded-full border ${colorClass}`}
    >
      {label || "Other"}
    </span>
  );
};

const MessageModal = ({ row, onClose }) => {
  if (!row) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-lg flex items-center justify-center z-[1000] p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-8 pt-8 pb-6 border-b flex justify-between items-start bg-gradient-to-r from-slate-50 to-zinc-50">
          <div>
            <Badge label={row.subject || "Other"} />
            <h2 className="text-2xl font-bold text-gray-900 mt-4">
              {row.name || row.username || "Anonymous"}
            </h2>
            <p className="text-gray-500 mt-1">
              {row.email} {row.phone && `• ${row.phone}`}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-3 hover:bg-gray-100 rounded-2xl text-gray-500 hover:text-gray-700 transition-all"
          >
            <IoMdClose size={28} />
          </button>
        </div>

        {/* Message Body */}
        <div className="p-8">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">
            Message
          </p>
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-gray-700 leading-relaxed min-h-[140px]">
            {row.message || row.query || "No message provided."}
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 py-5 bg-gray-50 border-t text-sm text-gray-500 flex justify-between">
          <span>
            Received:{" "}
            {new Date(row.createdAt).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "short",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
          <span className="font-mono text-xs">ID: {row._id?.slice(-8)}</span>
        </div>
      </div>
    </div>
  );
};

const Query = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterText, setFilterText] = useState("");
  const [filterEvent, setFilterEvent] = useState("All");
  const [selectedRow, setSelectedRow] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(API);
      if (!res.ok) throw new Error(`Server error: ${res.status}`);
      const json = await res.json();
      setData(Array.isArray(json) ? json : (json.data ?? []));
    } catch (err) {
      setError(err.message || "Failed to load queries");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this message permanently?")) return;

    setDeletingId(id);
    try {
      const res = await fetch(
        `https://eduhawk-server-urpn.onrender.com/api/query/${id}`,
        { method: "DELETE" },
      );
      if (!res.ok) throw new Error("Delete failed");
      setData((prev) => prev.filter((r) => r._id !== id));
    } catch (err) {
      alert("Failed to delete: " + err.message);
    } finally {
      setDeletingId(null);
    }
  };

  const filtered = data.filter((row) => {
    const q = filterText.toLowerCase();
    const matchText =
      !q ||
      (row.name || row.username || "").toLowerCase().includes(q) ||
      row.email?.toLowerCase().includes(q) ||
      row.phone?.toLowerCase().includes(q) ||
      (row.message || row.query || "").toLowerCase().includes(q);

    const matchEvent = filterEvent === "All" || row.subject === filterEvent;
    return matchText && matchEvent;
  });

  const columns = [
    {
      name: "#",
      width: "60px",
      cell: (_, i) => (
        <span className="text-slate-400 font-medium">{i + 1}</span>
      ),
    },
    {
      name: "Name",
      selector: (r) => r.name || r.username,
      sortable: true,
      cell: (r) => (
        <span className="font-semibold text-gray-800">
          {r.name || r.username}
        </span>
      ),
    },
    {
      name: "Email",
      selector: (r) => r.email,
      sortable: true,
      cell: (r) => (
        <a href={`mailto:${r.email}`} className="text-blue-600 hover:underline">
          {r.email}
        </a>
      ),
    },
    {
      name: "Phone",
      selector: (r) => r.phone || "—",
      width: "130px",
    },
    {
      name: "Event Type",
      selector: (r) => r.subject,
      sortable: true,
      width: "170px",
      cell: (r) => <Badge label={r.subject} />,
    },
    {
      name: "Message",
      selector: (r) => r.message || r.query,
      grow: 2,
      cell: (r) => (
        <span
          className="line-clamp-2 text-sm text-gray-600 cursor-pointer hover:text-gray-900"
          onClick={() => setSelectedRow(r)}
          title={r.message || r.query}
        >
          {r.message || r.query || "No message"}
        </span>
      ),
    },
    {
      name: "Date",
      selector: (r) => r.createdAt,
      sortable: true,
      width: "140px",
      cell: (r) => (
        <span className="text-sm text-gray-500">
          {new Date(r.createdAt).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </span>
      ),
    },
    {
      name: "Actions",
      width: "140px",
      cell: (r) => (
        <div className="flex gap-3">
          <button
            onClick={() => setSelectedRow(r)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-2xl text-sm font-medium transition-all"
          >
            <FaEye /> View
          </button>
          <button
            onClick={() => handleDelete(r._id)}
            disabled={deletingId === r._id}
            className="flex items-center gap-2 px-4 py-2 bg-red-50 hover:bg-red-100 text-red-700 rounded-2xl text-sm font-medium transition-all disabled:opacity-50"
          >
            <FaTrashAlt />
            {deletingId === r._id ? "..." : "Delete"}
          </button>
        </div>
      ),
    },
  ];

  const eventTypes = Object.keys(EVENT_COLORS);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-4">
            <FaInbox className="text-indigo-600" />
            Query Messages
          </h1>
          <p className="text-gray-500 mt-2 text-lg">
            Manage all event inquiries and queries
          </p>
        </div>

        {/* Event Type Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          {eventTypes.map((type) => {
            const isActive = filterEvent === type;
            const count = data.filter((d) => d.subject === type).length;
            return (
              <button
                key={type}
                onClick={() => setFilterEvent(isActive ? "All" : type)}
                className={`px-5 py-2 rounded-3xl text-sm font-medium border transition-all ${
                  isActive
                    ? "bg-white shadow-sm border-gray-300"
                    : "bg-white border-gray-200 hover:border-gray-300"
                }`}
              >
                {type} <span className="text-gray-400 ml-1">({count})</span>
              </button>
            );
          })}

          {filterEvent !== "All" && (
            <button
              onClick={() => setFilterEvent("All")}
              className="px-5 py-2 text-red-600 hover:text-red-700 font-medium text-sm transition-colors"
            >
              Clear Filter ✕
            </button>
          )}
        </div>

        {/* Search & Refresh */}
        <div className="flex flex-wrap gap-4 mb-6 items-center">
          <div className="relative flex-1 max-w-md">
            <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, email, phone or message..."
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              className="w-full pl-12 pr-6 py-3 bg-white border border-gray-200 rounded-2xl focus:border-indigo-500 outline-none text-sm"
            />
          </div>

          <button
            onClick={fetchData}
            className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 hover:bg-gray-50 rounded-2xl text-sm font-medium transition-all"
          >
            <FaSyncAlt className={loading ? "animate-spin" : ""} />
            Refresh
          </button>

          <div className="ml-auto text-sm text-gray-500">
            Showing{" "}
            <span className="font-semibold text-gray-700">
              {filtered.length}
            </span>{" "}
            of {data.length}
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          {error ? (
            <div className="p-10 text-center text-red-500">
              ⚠️ {error}
              <button
                onClick={fetchData}
                className="mt-4 block mx-auto px-6 py-2 bg-red-600 text-white rounded-2xl"
              >
                Retry
              </button>
            </div>
          ) : (
            <DataTable
              columns={columns}
              data={filtered}
              progressPending={loading}
              pagination
              paginationPerPage={12}
              highlightOnHover
              pointerOnHover
              onRowClicked={(row) => setSelectedRow(row)}
              customStyles={{
                headRow: {
                  style: { backgroundColor: "#f8fafc", minHeight: "64px" },
                },
                headCells: {
                  style: {
                    fontSize: "13px",
                    fontWeight: "700",
                    color: "#475569",
                    textTransform: "uppercase",
                  },
                },
                rows: { style: { minHeight: "72px" } },
              }}
              noDataComponent={
                <div className="py-20 text-center">
                  <FaInbox className="mx-auto text-6xl text-gray-300 mb-4" />
                  <p className="text-gray-500">No queries found</p>
                </div>
              }
            />
          )}
        </div>
      </div>

      <MessageModal row={selectedRow} onClose={() => setSelectedRow(null)} />
    </div>
  );
};

export default Query;
