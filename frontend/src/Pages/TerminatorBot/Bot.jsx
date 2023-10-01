import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { syncWithLocalStorage } from "../../features/register/RegisterSlice";
import axios from "axios";

export default function Bot() {
  const cuur_user = JSON.parse(localStorage.getItem("user"));
  //     "balanceMoney": 0,
  //     "balanceBenifits": 0,
  //     "submittedLaptop": false,
  //     "submittedMobile": false,
  //     "submittedAccess": false,
  const [balanceMoney, setBalanceMoney] = useState(cuur_user.balanceMoney);
  const [balanceBenifits, setBalanceBenifits] = useState(
    cuur_user.balanceBenifits
  );
  const [submittedLaptop, setSubmittedLaptop] = useState(
    cuur_user.submittedLaptop
  );
  const [submittedMobile, setSubmittedMobile] = useState(
    cuur_user.submittedMobile
  );
  const [submittedAccess, setSubmittedAccess] = useState(
    cuur_user.submittedAccess
  );

  const [balanceMoneyMsg, setBalanceMoneyMsg] = useState("");
  const [balanceBenifitsMsg, setBalanceBenifitsMsg] = useState("");
  const [submittedLaptopMsg, setSubmittedLaptopMsg] = useState("");
  const [submittedMobileMsg, setSubmittedMobileMsg] = useState("");
  const [submittedAccessMsg, setSubmittedAccessMsg] = useState("");

  const [validForResignation, setValidForResignation] = useState(false);
  const [finalUserData, SetFinalUserData] = useState({});
  const [copyState, setCopyState] = useState(false);

  const dispatch = useDispatch();

  const fetchRecentData = async () => {
    await axios
      .get(`http://localhost:4000/users/${cuur_user.id}`)
      .then((res) => {
        SetFinalUserData(res.data);
      })
      .catch((err) => console.log(err));
  };

  const copyData = async () => {
    if (validForResignation && finalUserData) {
      await axios
        .post("http://localhost:4001/previous_users", finalUserData)
        .then((res) => {
          setCopyState(true);
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    if (
      balanceMoney === 0 &&
      balanceBenifits === 0 &&
      submittedLaptop === true &&
      submittedMobile === true &&
      submittedAccess === true
    ) {
      setValidForResignation(true);
    } else if (balanceMoney !== 0) {
      setBalanceMoneyMsg("Please pay the balance money you owe");
    } else if (balanceBenifits !== 0) {
      setBalanceBenifitsMsg(
        "Please surrender and make your benifits scheme clear"
      );
    } else if (submittedLaptop === false) {
      setSubmittedLaptopMsg("Please surrender your company laptop");
    } else if (submittedMobile === false) {
      setSubmittedMobileMsg("Please surrender your company mobile");
    } else if (submittedAccess === false) {
      setSubmittedAccessMsg(
        "Please place a request to surrender your access card"
      );
    } else {
      validForResignation(false);
    }
  }, [
    balanceBenifits,
    balanceMoney,
    submittedAccess,
    submittedLaptop,
    submittedMobile,
    cuur_user,
  ]);

  const bot_steps = [
    {
      step: 1,
      desc: cuur_user.manager_approval_resign
        ? "Manager Approved Your Resignation request"
        : "Manager haven't Approved Your Resignation request",
    },
    {
      step: 2,
      desc: cuur_user.hr_approval_resign
        ? "HR Approved Your Resignation request"
        : "HR haven't accepted your request",
    },
    {
      step: 3,
      desc:
        cuur_user.hr_approval_resign && cuur_user.manager_approval_resign
          ? "Initiating Termination Bot"
          : "",
    },
    {
      step: 4,
      desc:
        cuur_user.hr_approval_resign && cuur_user.manager_approval_resign
          ? "Starting the off-boarding process"
          : "",
    },
    {
      step: 5,
      desc:
        cuur_user.hr_approval_resign && cuur_user.manager_approval_resign
          ? "Starting the data transfer process, we'll let you know incase anything is missing"
          : "",
    },
    {
      step: 6,
      desc:
        cuur_user.hr_approval_resign &&
        cuur_user.manager_approval_resign &&
        validForResignation
          ? "You are valid for resignation"
          : "You are not valid for resignation",
      cof: [
        balanceMoneyMsg,
        balanceBenifitsMsg,
        submittedLaptop ? "" : submittedLaptopMsg,
        submittedAccessMsg,
        submittedMobileMsg,
      ],
    },
  ];

  useEffect(() => {
    if (localStorage.getItem("user")) {
      dispatch(syncWithLocalStorage(JSON.parse(localStorage.getItem("user"))));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (validForResignation) {
      fetchRecentData();
    }
    if (validForResignation && finalUserData && copyState) {
      copyData();
    }
  }, []);

  return (
    <div className="container secondary-bg p-5 rounded">
      {bot_steps.map((eachStep) => {
        return (
          <div>
            <p key={eachStep.step} className="mb-5 ternary-bg p-3 rounded">
              {eachStep.step}. {eachStep.desc}
              {eachStep?.cof ? (
                <div>
                  {eachStep?.cof.map((eachError) => {
                    return <p>{eachError}</p>;
                  })}
                </div>
              ) : (
                ""
              )}
            </p>
          </div>
        );
      })}
      <div className="mb-5 ternary-bg p-3 rounded">
        {validForResignation
          ? "7. Processing Data Transfer, it may take a while"
          : "Something went wrong, try refreshing the page"}
      </div>
      <div className="mb-5 ternary-bg p-3 rounded">
        {validForResignation
          ? "8. Processing Data Transfer"
          : "Something went wrong, try refreshing the page"}
      </div>
    </div>
  );
}
