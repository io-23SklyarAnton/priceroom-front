import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import "./History.css";

const History = () => {
  useAuth();

  const [historyData, setHistoryData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found");
        }

        const response = await axios.get("http://localhost:5000/history", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const history = response.data;
        setHistoryData(history);
        setTotalPages(Math.ceil(history.length / itemsPerPage));
      } catch (error) {
        console.error("Error fetching history:", error);
      }
    };

    fetchHistory();
  }, []);

  const formatDateTime = (datetime) => {
    const date = new Date(datetime);
    return date.toLocaleString("uk-UA", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = historyData.slice(startIndex, startIndex + itemsPerPage);

  const generatePageNumbers = () => {
    const pageNumbers = [];
    const maxPageLinks = 3;

    if (totalPages <= maxPageLinks) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1);

      if (currentPage > 2) {
        pageNumbers.push("•••");
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pageNumbers.push(i);
      }

      if (currentPage < totalPages - 1) {
        pageNumbers.push("•••");
      }

      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  const handleEllipsisClick = (page) => {
    if (page === "afterFirst") {
      setCurrentPage(2);
    } else if (page === "beforeLast") {
      setCurrentPage(totalPages - 1);
    }
  };

  return (
    <div className="history-container">
      <div className="history-header">
        <img
          src="/assets/images/history.png"
          alt="History Icon"
          className="history-icon"
        />
      </div>
      <div className="history-grid">
        {currentItems.map((item) => (
          <div className="history-card" key={item.id}>
            <div className="history-card-header">
              {formatDateTime(item.datetime)}
            </div>
            <ul className="history-card-content">
              <li>
                <strong>Район:</strong> {item.district}
              </li>
              <li>
                <strong>Поверх:</strong> {item.floor}
              </li>
              <li>
                <strong>Загальна кількість поверхів:</strong>{" "}
                {item.floors_count}
              </li>
              <li>
                <strong>Кількість кімнат:</strong> {item.rooms_count}
              </li>
              <li>
                <strong>Загальна площа квартири (м²):</strong>{" "}
                {item.total_square_meters}
              </li>
              <li>
                <strong>Ціна:</strong> {item.predict_price}
              </li>
            </ul>
          </div>
        ))}
      </div>
      <div className="pagination">
        {generatePageNumbers().map((page, index) => (
          <button
            key={index}
            className={`pagination-button ${currentPage === page ? "active" : ""}`}
            onClick={() => {
              if (page !== "•••") {
                handlePageChange(page);
              }
            }}
          >
            {page === "•••" ? (
              <span
                onClick={() => {
                  const pageNumbers = generatePageNumbers();
                  if (pageNumbers.indexOf("•••") === 1) {
                    handleEllipsisClick("afterFirst");
                  } else if (
                    pageNumbers.indexOf("•••") ===
                    pageNumbers.length - 2
                  ) {
                    handleEllipsisClick("beforeLast");
                  }
                }}
              >
                {"•••"}
              </span>
            ) : (
              page
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default History;
