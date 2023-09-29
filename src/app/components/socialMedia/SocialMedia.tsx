import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material'
import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const actions = [
  { icon: <FacebookOutlinedIcon />, name: 'Facebook' },
  { icon: <EmailIcon />, name: 'Email' },
  { icon: <LinkedInIcon />, name: 'LinkedIn' },
];
export default function SocialMedia() {
  return (
    <SpeedDial
      ariaLabel="Follow Me"
      icon={<SpeedDialIcon />}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
        />
      ))
      }
    </SpeedDial>
  )
}