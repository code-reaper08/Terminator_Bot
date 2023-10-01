/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  setAlldone,
  syncWithLocalStorage,
} from "../../features/register/RegisterSlice";
import axios from "axios";

export default function Bot({ requestsArr }) {
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

  //   const deleteResignationRequest = async () => {
  //     requestsArr.map(async (each) => {
  //       if (each?.employeeID === cuur_user.employeeID) {
  //         await axios
  //           .delete(`http://localhost:4000/resignation_requests/${each?.id}`)
  //           .then((res) => {
  //             console.log("Requst deleted", res.data);
  //           })
  //           .catch((err) => console.log(err));
  //       }
  //     });
  //   };

  const copyData = async () => {
    if (validForResignation || finalUserData) {
      let payload = cuur_user;
      payload.resignation_status = true;
      await axios
        .post("http://localhost:4001/previous_users", payload)
        .then(async (res) => {
          console.log(res);
          await axios
            .put(`http://localhost:4000/users/${cuur_user.id}`, payload)
            .then(async (res) => {
              console.log(res);
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
      dispatch(setAlldone(true));
      console.log("I'm running");
      localStorage.setItem("AllDone", JSON.stringify(true));
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
      setBalanceMoneyMsg("Please pay the balance money you owe          🟢");
    } else if (balanceBenifits !== 0) {
      setBalanceBenifitsMsg(
        "Please surrender and make your benifits scheme clear           🟢"
      );
    } else if (submittedLaptop === false) {
      setSubmittedLaptopMsg(
        "Please surrender your company laptop           🟢"
      );
    } else if (submittedMobile === false) {
      setSubmittedMobileMsg(
        "Please surrender your company mobile           🟢"
      );
    } else if (submittedAccess === false) {
      setSubmittedAccessMsg(
        "Please place a request to surrender your access card           🟢"
      );
    } else {
      validForResignation(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        ? "Manager Approved Your Resignation request        ✅"
        : "Manager haven't Approved Your Resignation request        ❌",
    },
    {
      step: 2,
      desc: cuur_user.hr_approval_resign
        ? "HR Approved Your Resignation request         ✅"
        : "HR haven't accepted your request         ❌",
    },
    {
      step: 3,
      desc:
        cuur_user.hr_approval_resign && cuur_user.manager_approval_resign
          ? "Initiating Termination Bot         ✅"
          : "Termination Bot will be initiated only when you get both approvals         ❌",
    },
    {
      step: 4,
      desc:
        cuur_user.hr_approval_resign && cuur_user.manager_approval_resign
          ? "Starting the off-boarding process          ✅"
          : "Off-boarding process will be initiated by the bot, please wait         ❌",
    },
    {
      step: 5,
      desc:
        cuur_user.hr_approval_resign && cuur_user.manager_approval_resign
          ? "Starting the data transfer process, we'll let you know incase anything is missing          ✅"
          : "Data transfer process will be initiated soon          ❌",
    },
    {
      step: 6,
      desc:
        cuur_user.hr_approval_resign &&
        cuur_user.manager_approval_resign &&
        validForResignation
          ? "You are valid for resignation          ✅"
          : "You are not valid for resignation          ❌",
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
    if (validForResignation && finalUserData) {
      setCopyState(true);
    }
    copyData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container secondary-bg p-5 rounded">
      {bot_steps.map((eachStep) => {
        return (
          <div key={eachStep.step}>
            <div className="mb-5 ternary-bg p-3 rounded">
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
            </div>
          </div>
        );
      })}
      <div className="mb-5 ternary-bg p-3 rounded">
        {validForResignation
          ? "7. Processing Data Transfer, it may take a while           ✅"
          : "7. Hang tight, we are working on data transfer"}
      </div>
      <div className="mb-5 ternary-bg p-3 rounded">
        {JSON.parse(
          localStorage.getItem("AllDone") || cuur_user.resignation_status
        )
          ? "8. Preparing and migrating data            ✅"
          : "8. Please wait, we'll let you know if anything happens!"}
      </div>
      <div className="mb-5 ternary-bg p-3 rounded">
        {JSON.parse(
          localStorage.getItem("AllDone") || cuur_user.resignation_status
        )
          ? "9. Generating Resignation letter and other documents            ✅"
          : "9. Please wait, we'll let you know if anything happens!"}
      </div>
    </div>
  );
}
