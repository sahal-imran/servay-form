import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Button } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircleIcon from "@mui/icons-material/Circle";

function Form() {
  const [Name, Set_Name] = useState("");
  const [Contact, Set_Contact] = useState("");
  const [Email, Set_Email] = useState("");
  const [Design, Set_Design] = useState();
  const [Development, Set_Development] = useState();

  const [ProposalType, setProposalType] = useState("");

  const handleChange = (event) => {
    setProposalType(event.target.value);
  };

  // Validations States
  const [RequiredAll, Set_RequiredAll] = useState(false);
  const [Error, Set_Error] = useState(false);
  const [ErrorMessage, Set_ErrorMessage] = useState(false);

  const clr = RequiredAll ? "red" : "transparent";

  const [Client_Detail, Set_Client_Detail] = useState(true);
  const [Proposal_strcuture, Set_Proposal_Strcuture] = useState(false);

  const Next = () => {
    if (
      Name.length === 0 &&
      Contact.length === 0 &&
      Email.length === 0 &&
      !Design &&
      !Development &&
      ProposalType.length === 0
    ) {
      Set_RequiredAll(true);
      return;
    } else if (Name.length === 0) {
      Set_Error(true);
      Set_ErrorMessage("Name is required*");
      return;
    } else if (Contact.length === 0) {
      Set_Error(true);
      Set_ErrorMessage("Contact is required*");
      return;
    } else if (Email.length === 0) {
      Set_Error(true);
      Set_ErrorMessage("Email is required*");
      return;
    } else if (ProposalType.length === 0) {
      Set_Error(true);
      Set_ErrorMessage("Select ProposalType*");
      return;
    } else if (!Design) {
      Set_Error(true);
      Set_ErrorMessage("Put design wks*");
      return;
    } else if (!Development) {
      Set_Error(true);
      Set_ErrorMessage("Put development wks*");
      return;
    }

    Set_Client_Detail(false);
    Set_Proposal_Strcuture(true);

    // +++++++++++++++++++++++++++
    // Make API's request here...
    // +++++++++++++++++++++++++++
  };

  // Checkboxes

  const [Ambitious_Design, set_Ambitious_Design] = useState(false);
  const [Our_story, set_Our_story] = useState(false);
  const [Project_Overview, set_Project_Overview] = useState(false);
  const [Concepts_Strategy, set_Concepts_Strategy] = useState(false);
  const [Ascent_Process, set_Ascent_Process] = useState(false);
  const [Project_Schedule, set_Project_Schedule] = useState(false);
  const [Mission_control_Team, set_Mission_control_Team] = useState(false);
  const [Creative_facility, set_Creative_facility] = useState(false);
  const [Engineering_Technicians, set_Engineering_Technicians] =
    useState(false);

  const ChectBoxes = [
    {
      Name: "Ambitious Design-Led Journeys",
      Current_State: Ambitious_Design,
      ChangeFunction: set_Ambitious_Design,
    },
    {
      Name: "Our Story",
      Current_State: Our_story,
      ChangeFunction: set_Our_story,
    },
    {
      Name: "Project Overview",
      Current_State: Project_Overview,
      ChangeFunction: set_Project_Overview,
    },
    {
      Name: "Concepts & Strategy",
      Current_State: Concepts_Strategy,
      ChangeFunction: set_Concepts_Strategy,
    },
    {
      Name: "Ascent Process",
      Current_State: Ascent_Process,
      ChangeFunction: set_Ascent_Process,
    },
    {
      Name: "Project Schedule",
      Current_State: Project_Schedule,
      ChangeFunction: set_Project_Schedule,
    },
    {
      Name: "Mission Control Team",
      Current_State: Mission_control_Team,
      ChangeFunction: set_Mission_control_Team,
    },
    {
      Name: "Creative Facility",
      Current_State: Creative_facility,
      ChangeFunction: set_Creative_facility,
    },
    {
      Name: "Engineering Technicians",
      Current_State: Engineering_Technicians,
      ChangeFunction: set_Engineering_Technicians,
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "#ffffff",
        p: 2,
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      }}
    >
      {Client_Detail && (
        <Box
          sx={{
            width: "100%",
            maxWidth: "500px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            background: "#ffffff",
            p: 2,
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            borderRadius: "5px",
            background: "white",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              alignSelf: "start",
              fontFamily: "Roboto",
              fontSize: "24px",
              fontWeight: 800,
              color: "#22271f",
              textTransform: "capitalize",
            }}
          >
            New proposal
          </Typography>
          <Typography
            variant="h2"
            sx={{
              alignSelf: "start",
              fontFamily: "Roboto",
              fontSize: "16px",
              fontWeight: 400,
              color: "#535353",
              textTransform: "capitalize",
              mt: 1.5,
            }}
          >
            Client Details
          </Typography>

          {/* Name Input Field */}
          <Box
            sx={{
              width: "100%",
              height: "40px",
              borderRadius: "4px",
              overflow: "hidden",
              backgroundColor: "#f7f4f8",
              mt: 1.3,
              border: `1px solid ${clr}`,
            }}
          >
            <input
              value={Name}
              onChange={(e) => {
                Set_Name(e.target.value);
                Set_RequiredAll(false);
                Set_Error(false);
              }}
              type="text"
              style={{
                width: "100%",
                height: "100%",
                outline: "none",
                border: "unset",
                borderRadius: "unset",
                fontFamily: "Roboto",
                fontSize: "18px",
                fontWeight: 400,
                color: "#9b9b9a",
                background: "transparent",
                padding: "0px 10px",
              }}
              autoComplete="off"
              autoCorrect="off"
              placeholder="Client Name"
            />
          </Box>

          {/* Contact Input Field */}
          <Box
            sx={{
              width: "100%",
              height: "40px",
              borderRadius: "4px",
              overflow: "hidden",
              backgroundColor: "#f7f4f8",
              mt: 1,
              border: `1px solid ${clr}`,
            }}
          >
            <input
              value={Contact}
              onChange={(e) => {
                Set_Contact(e.target.value);
                Set_RequiredAll(false);
                Set_Error(false);
              }}
              type="text"
              style={{
                width: "100%",
                height: "100%",
                outline: "none",
                border: "unset",
                borderRadius: "unset",
                fontFamily: "Roboto",
                fontSize: "18px",
                fontWeight: 400,
                color: "#9b9b9a",
                background: "transparent",
                padding: "0px 10px",
              }}
              autoComplete="off"
              autoCorrect="off"
              placeholder="Client Contact"
            />
          </Box>

          {/* Contact Input Field */}
          <Box
            sx={{
              width: "100%",
              height: "40px",
              borderRadius: "4px",
              overflow: "hidden",
              backgroundColor: "#f7f4f8",
              mt: 1,
              border: `1px solid ${clr}`,
            }}
          >
            <input
              value={Email}
              onChange={(e) => {
                Set_Email(e.target.value);
                Set_RequiredAll(false);
                Set_Error(false);
              }}
              type="text"
              style={{
                width: "100%",
                height: "100%",
                outline: "none",
                border: "unset",
                borderRadius: "unset",
                fontFamily: "Roboto",
                fontSize: "18px",
                fontWeight: 400,
                color: "#9b9b9a",
                background: "transparent",
                padding: "0px 10px",
              }}
              autoComplete="off"
              autoCorrect="off"
              placeholder="Client Email"
            />
          </Box>

          <Typography
            variant="h2"
            sx={{
              alignSelf: "start",
              fontFamily: "Roboto",
              fontSize: "16px",
              fontWeight: 400,
              color: "#535353",
              textTransform: "capitalize",
              mt: 2,
            }}
          >
            proposal type
          </Typography>

          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={ProposalType}
            onChange={(e) => {
              handleChange(e);
              Set_RequiredAll(false);
              Set_Error(false);
            }}
            sx={{ width: "100%" }}
          >
            <Box
              sx={{
                width: "100%",
                height: "36px",
                borderRadius: "4px",
                overflow: "hidden",
                backgroundColor: "#f7f4f8",
                mt: 1.3,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                px: 1.2,
                border: `1px solid ${clr}`,
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "Roboto",
                  fontSize: "18px",
                  fontWeight: 400,
                  color: "#3e3e3d",
                }}
              >
                Idea to Prototype
              </Typography>
              <FormControlLabel
                value="Idea to Prototype"
                sx={{ width: "20px", height: "20px" }}
                control={<Radio />}
              />
            </Box>
            <Box
              sx={{
                width: "100%",
                height: "36px",
                borderRadius: "4px",
                overflow: "hidden",
                backgroundColor: "#f7f4f8",
                mt: 1,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                px: 1.2,
                border: `1px solid ${clr}`,
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "Roboto",
                  fontSize: "18px",
                  fontWeight: 400,
                  color: "#3e3e3d",
                }}
              >
                Ascent
              </Typography>
              <FormControlLabel
                value="Ascent"
                sx={{ width: "20px", height: "20px" }}
                control={<Radio />}
              />
            </Box>
          </RadioGroup>

          {/* Estimated Timeframe */}
          <Typography
            variant="h2"
            sx={{
              alignSelf: "start",
              fontFamily: "Roboto",
              fontSize: "16px",
              fontWeight: 400,
              color: "#535353",
              textTransform: "capitalize",
              mt: 2,
            }}
          >
            Estimated Timeframe
          </Typography>

          <Box
            sx={{
              width: "100%",
              height: "40px",
              borderRadius: "4px",
              overflow: "hidden",
              backgroundColor: "#f7f4f8",
              mt: 1.3,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: 1.2,
              border: `1px solid ${clr}`,
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontFamily: "Roboto",
                fontSize: "18px",
                fontWeight: 400,
                color: "#3e3e3d",
              }}
            >
              Design
            </Typography>
            <input
              min="0"
              value={Design}
              onChange={(e) => {
                Set_Design(e.target.value);
                Set_RequiredAll(false);
                Set_Error(false);
              }}
              type="number"
              style={{
                outline: "none",
                border: "none",
                background: "transparent",
                fontFamily: "Roboto",
                fontSize: "16px",
                fontWeight: 400,
                color: "#9b9b9a",
                width: "60px  ",
              }}
              placeholder="0 wks"
            />
          </Box>

          <Box
            sx={{
              width: "100%",
              height: "40px",
              borderRadius: "4px",
              overflow: "hidden",
              backgroundColor: "#f7f4f8",
              mt: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: 1.2,
              border: `1px solid ${clr}`,
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontFamily: "Roboto",
                fontSize: "18px",
                fontWeight: 400,
                color: "#3e3e3d",
              }}
            >
              Development
            </Typography>
            <input
              min="0"
              value={Development}
              onChange={(e) => {
                Set_Development(e.target.value);
                Set_RequiredAll(false);
                Set_Error(false);
              }}
              type="number"
              style={{
                outline: "none",
                border: "none",
                background: "transparent",
                fontFamily: "Roboto",
                fontSize: "16px",
                fontWeight: 400,
                color: "#9b9b9a",
                width: "60px  ",
              }}
              placeholder="0 wks"
            />
          </Box>

          <Box
            sx={{
              width: "100%",
              mt: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: 1.2,
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontFamily: "Roboto",
                fontSize: "14px",
                fontWeight: 400,
                color: "#728ea0",
              }}
            >
              Sub-Total (Incl. GST)
            </Typography>
            <Typography
              variant="h2"
              sx={{
                alignSelf: "start",
                fontFamily: "Roboto",
                fontSize: "20px",
                fontWeight: 600,
                color: "#22271f",
                textTransform: "capitalize",
              }}
            >
              $112,000.00
            </Typography>
          </Box>

          {/* Validation Message */}
          {Error && (
            <Typography
              variant="h2"
              sx={{
                fontFamily: "Roboto",
                fontSize: "14px",
                fontWeight: 400,
                color: "red",
                alignSelf: "start",
                mt: 1.5,
              }}
            >
              {ErrorMessage}
            </Typography>
          )}

          {/* Button */}
          <Box
            sx={
              Error
                ? {
                    width: "100%",
                    height: "36px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: 1.5,
                  }
                : {
                    width: "100%",
                    height: "36px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: 3,
                  }
            }
          >
            <Button
              variant="contained"
              sx={{
                width: "25%",
                height: "100%",
                boxShadow: "none",
                borderRadius: "4px",
                backgroundColor: "#999999",
                fontFamily: "Roboto",
                fontSize: "16px",
                fontWeight: 400,
                color: "white",
                textTransform: "capitalize",
                "&:hover": { backgroundColor: "#999999", boxShadow: "none" },
                mr: 0.5,
              }}
            >
              close
            </Button>
            <Button
              onClick={() => Next()}
              variant="contained"
              sx={{
                width: "75%",
                height: "100%",
                boxShadow: "none",
                borderRadius: "4px",
                backgroundColor: "#1976d2",
                fontFamily: "Roboto",
                fontSize: "16px",
                fontWeight: 400,
                color: "white",
                textTransform: "capitalize",
                "&:hover": { backgroundColor: "#1976d2", boxShadow: "none" },
                ml: 0.5,
              }}
            >
              Next
            </Button>
          </Box>
        </Box>
      )}
      {Proposal_strcuture && (
        <Box
          sx={{
            width: "100%",
            maxWidth: "500px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            background: "#ffffff",
            p: 2,
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            borderRadius: "5px",
            background: "white",
            overflow:'hidden'
          }}
        >
          <Typography
            variant="h2"
            sx={{
              alignSelf: "start",
              fontFamily: "Roboto",
              fontSize: "24px",
              fontWeight: 800,
              color: "#22271f",
              textTransform: "capitalize",
            }}
          >
            New proposal
          </Typography>
          <Typography
            variant="h2"
            sx={{
              alignSelf: "start",
              fontFamily: "Roboto",
              fontSize: "16px",
              fontWeight: 400,
              color: "#535353",
              textTransform: "capitalize",
              mt: 1.5,
            }}
          >
            Proposal Structure
          </Typography>
          {ChectBoxes?.map((item, index) => {
            return (
              <Box
                key={index}
                sx={
                  item.Current_State
                    ? {
                        width: "100%",
                        height: "40px",
                        borderRadius: "6px",
                        overflow: "hidden",
                        backgroundColor: "#f0f0f0",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mt: 1.3,
                        border: `1px solid ${clr}`,
                        px: 1.5,
                      }
                    : {
                        width: "100%",
                        height: "40px",
                        borderRadius: "6px",
                        overflow: "hidden",
                        backgroundColor: "#f7f7f7",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mt: 1.3,
                        border: `1px solid ${clr}`,
                        px: 1.5,
                      }
                }
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "18px",
                    fontWeight: 400,
                    color: "#3e3e3d",
                  }}
                >
                  {item.Name}
                </Typography>
                <Checkbox
                  checked={item.Current_State}
                  onChange={(e) => item.ChangeFunction(e.target.checked)}
                  icon={<CircleIcon sx={{ color: "#e0e0e1" }} />}
                  checkedIcon={<CheckCircleIcon sx={{ color: "#374ff9" }} />}
                  sx={{ mr: -1 }}
                />
              </Box>
            );
          })}
          <Box
            sx={{ height: "1px", width: "100vw", background: "#f0f0f0",my:2.5 }}
          ></Box>
        </Box>
      )}
    </Box>
  );
}

export default Form;
