import React, { useEffect, useState } from "react";
import jsPDF from "jspdf";
import axios from "axios";
import logourl from "./logo_cert.png";

const CertificatePage = () => {
  const [employeeData, setEmployeeData] = useState({});
  const [generateCertificate, setGenerateCertificate] = useState(false);
  const currentDate = new Date();
  const oneWeekAhead = new Date(currentDate);
  oneWeekAhead.setDate(oneWeekAhead.getDate() + 7);

  const userID = JSON.parse(localStorage.getItem("user")).employeeID;

  const fetchUser = async () => {
    await axios
      .get(`http://localhost:8081/person/${userID}`)
      .then((res) => {
        setEmployeeData(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleGenerateCertificate = () => {
    setGenerateCertificate(true);
  };

  const renderCertificate = async () => {
    if (generateCertificate) {
      const pdf = new jsPDF("portrait", "mm", "a4");
      const imagePromise = new Promise((resolve, reject) => {
        const img = new Image();
        img.src = logourl;
        img.onload = () => {
          resolve(img);
        };
        img.onerror = (error) => {
          reject(error);
        };
      });

      try {
        const loadedImage = await imagePromise;
        const maxWidth = 180;
        const maxHeight = 40;
        const imgWidth = loadedImage.width;
        const imgHeight = loadedImage.height;
        const scaleFactor = Math.min(
          maxWidth / imgWidth,
          maxHeight / imgHeight
        );
        const newWidth = imgWidth * scaleFactor;
        const newHeight = imgHeight * scaleFactor;
        pdf.addImage(loadedImage, "PNG", 15, 10, newWidth, newHeight);
        pdf.setFont("helvetica");
        pdf.setFontSize(16);
        const titleText = "Employee Resignation Certificate";
        const titleWidth = pdf.getStringUnitWidth(titleText) * 16;
        const marginLeft = (pdf.internal.pageSize.width - titleWidth) / 2;
        pdf.text(marginLeft + 75, 80, titleText);
        pdf.setFontSize(12);

        const certificateStatement = `This is to certify that ${
          employeeData.firstName
        } ${
          employeeData.lastName
        } has been a valued member of our organization, NatWest Groups, demonstrating dedication and commitment throughout their tenure. Their contributions have significantly contributed to our success.

In recognition of their outstanding service, we hereby acknowledge their resignation, effective ${oneWeekAhead.toDateString()}, with appreciation for their dedication and hard work.

We extend our best wishes to ${
          employeeData.firstName
        } for their future endeavors and remain open to any potential collaboration in the future.`;

        const lines = pdf.splitTextToSize(certificateStatement, 170);
        pdf.text(20, 100, lines, { align: "left" });

        const certificateStatement1 = `Sincerely,

Mr.John Doe
Senior Human Resource Director
NatWest Groups, ${employeeData.location}`;

        pdf.text(20, 200, certificateStatement1);

        pdf.save(`resignation_certificate_${Date.now()}.pdf`);
      } catch (error) {
        console.error("Image loading failed:", error);
      }
    }
  };

  useEffect(() => {
    renderCertificate();
  }, [generateCertificate]);

  return (
    <div className="p-5 secondary-bg wrapper text-white">
      <div className="row">
        <div className="col-md-12">
          <h1 className="mb-5">
            Welcome {employeeData.firstName} {employeeData.lastName}
          </h1>
          <h2>⚠️Your Employee Resignation Certificate is now available!</h2>
          <button
            className="btn btn-primary ternary-bg mt-5"
            onClick={handleGenerateCertificate}
          >
            Download Certificate (PDF)
          </button>
        </div>
      </div>
    </div>
  );
};

export default CertificatePage;
