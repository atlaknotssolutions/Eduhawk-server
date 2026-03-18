import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import {
  FaEye,
  FaTrashAlt,
  FaSearch,
  FaSyncAlt,
  FaInbox
} from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

// Simple Badge
const Badge = ({ label }) => (
  <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full border border-blue-200">
    {label || "Inquiry"}
  </span>
);

// Simple Action Buttons
const ActionButtons = ({ row, onView, onDelete, isDeleting }) => (
  <div className="flex gap-3">
    <button
      onClick={() => onView(row)}
      className="flex items-center gap-2 px-5 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-xl text-sm font-medium transition-colors"
    >
      <FaEye /> View
    </button>

    <button
      onClick={() => onDelete(row._id)}
      disabled={isDeleting}
      className="flex items-center gap-2 px-5 py-2 bg-red-50 hover:bg-red-100 text-red-700 rounded-xl text-sm font-medium transition-colors disabled:opacity-50"
    >
      <FaTrashAlt />
      {isDeleting ? "Deleting..." : "Delete"}
    </button>
  </div>
);

// Simple Modal
const ViewModal = ({ isOpen, onClose, contact }) => {
  if (!isOpen || !contact) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-xl max-w-lg w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-5 border-b flex justify-between items-center bg-gray-50">
          <div className="flex items-center gap-3">
            <Badge label="Contact Message" />
            <h2 className="text-xl font-semibold text-gray-800">
              {contact.usernamee || "Anonymous"}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 p-2"
          >
            <IoMdClose size={24} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <p className="text-xs text-gray-500 mb-1">EMAIL</p>
              <a href={`mailto:${contact.email}`} className="text-blue-600 hover:underline font-medium">
                {contact.email}
              </a>
            </div>

            {contact.phone && (
              <div>
                <p className="text-xs text-gray-500 mb-1">PHONE</p>
                <a href={`tel:${contact.phone}`} className="text-emerald-600 hover:underline font-medium">
                  {contact.phone}
                </a>
              </div>
            )}
          </div>

          <div>
            <p className="text-xs text-gray-500 mb-2">MESSAGE</p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-gray-700 leading-relaxed">
              {contact.message || "No message provided."}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t text-xs text-gray-500 flex justify-between">
          <span>
            {new Date(contact.createdAt).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>
          <span className="font-mono">ID: {contact._id?.slice(-8)}</span>
        </div>
      </div>
    </div>
  );
};

// ====================== Main Component ======================

const Contact = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterText, setFilterText] = useState("");
  const [selectedContact, setSelectedContact] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await axios.get("https://eduhawk-server-urpn.onrender.com/api/contact");
      const contacts = Array.isArray(res.data) ? res.data : res.data?.data || [];
      setData(contacts);
    } catch (err) {
      setError("Failed to load contacts");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this message?")) return;

    setDeletingId(id);
    try {
      await axios.delete(`https://eduhawk-server-urpn.onrender.com/api/contact/${id}`);
      setData((prev) => prev.filter((item) => item._id !== id));
      alert("Message deleted successfully");
    } catch (err) {
      alert("Failed to delete message");
    } finally {
      setDeletingId(null);
    }
  };

  const handleView = (contact) => {
    setSelectedContact(contact);
    setIsModalOpen(true);
  };

  const columns = [
    {
      name: "#",
      width: "60px",
      cell: (_, index) => <span className="text-gray-400 font-medium">{index + 1}</span>,
    },
    {
      name: "Name",
      selector: (row) => row.usernamee,
      sortable: true,
      cell: (row) => (
        <span className="font-medium text-gray-800">{row.usernamee || "Anonymous"}</span>
      ),
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
      cell: (row) => (
        <a href={`mailto:${row.email}`} className="text-blue-600 hover:underline">
          {row.email}
        </a>
      ),
    },
    {
      name: "Phone",
      selector: (row) => row.phone || "—",
      sortable: true,
    },
    {
      name: "Message",
      selector: (row) => row.message,
      grow: 2,
      wrap: true,
      cell: (row) => (
        <p className="text-gray-600 line-clamp-2 text-sm">
          {row.message || "No message"}
        </p>
      ),
    },
    {
      name: "Submitted",
      selector: (row) => row.createdAt,
      sortable: true,
      width: "150px",
      cell: (row) => new Date(row.createdAt).toLocaleDateString("en-IN"),
    },
    {
      name: "Actions",
      right: true,
      width: "180px",
      cell: (row) => (
        <ActionButtons
          row={row}
          onView={handleView}
          onDelete={handleDelete}
          isDeleting={deletingId === row._id}
        />
      ),
    },
  ];

  const filteredItems = data.filter((item) =>
    [item.usernamee, item.email, item.phone, item.message]
      .some((field) => field?.toLowerCase().includes(filterText.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-gray-900 flex items-center gap-3">
            <FaInbox className="text-indigo-600" />
            Contact Messages
          </h1>
          <p className="text-gray-500 mt-1">Manage all form submissions</p>
        </div>

        {/* Toolbar */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 mb-6 flex flex-wrap gap-4 items-center">
          <div className="flex-1 min-w-[280px]">
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, email or message..."
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-indigo-500 text-sm"
              />
            </div>
          </div>

          <button
            onClick={fetchContacts}
            className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 hover:bg-gray-50 rounded-xl text-sm font-medium transition-colors"
          >
            <FaSyncAlt className={loading ? "animate-spin" : ""} />
            Refresh
          </button>

          <div className="text-sm text-gray-500 ml-auto">
            Total: <span className="font-semibold text-gray-700">{filteredItems.length}</span>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          {loading ? (
            <div className="py-20 text-center text-gray-500">
              Loading contact messages...
            </div>
          ) : error ? (
            <div className="py-20 text-center text-red-500">⚠️ {error}</div>
          ) : (
            <DataTable
              columns={columns}
              data={filteredItems}
              pagination
              paginationPerPage={10}
              highlightOnHover
              pointerOnHover
              responsive
              customStyles={{
                headRow: { style: { backgroundColor: "#f9fafb", fontWeight: 600 } },
                headCells: { style: { fontSize: "13px", color: "#374151", textTransform: "uppercase" } },
                rows: { style: { minHeight: "68px" } },
                cells: { style: { fontSize: "14.5px" } },
              }}
              noDataComponent={
                <div className="py-16 text-center text-gray-400">
                  <FaInbox className="mx-auto text-5xl mb-3 opacity-30" />
                  No messages found
                </div>
              }
            />
          )}
        </div>

        <p className="text-center text-gray-400 text-xs mt-8">
          Last updated • {new Date().toLocaleString()}
        </p>
      </div>

      {/* Modal */}
      <ViewModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedContact(null);
        }}
        contact={selectedContact}
      />
    </div>
  );
};

export default Contact;
