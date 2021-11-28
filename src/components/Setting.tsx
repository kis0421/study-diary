
import React from "react";
import { observer } from "mobx-react-lite";

import { ListItemButton, ListItemIcon, ListItemText, List, Divider } from "@mui/material"
import {
  Campaign as CampaignIcon,
  InfoOutlined as InfoIcon,

  Share as ShareIcon,
  PeopleAlt as PeopleIcon,
  Bookmarks as BookmarksIcon,
  CleaningServicesOutlined as CleaningIcon,
  Equalizer as EqualizerIcon,

  HelpOutline as HelpIcon

} from "@mui/icons-material";

// import useStore from "../useStore";



const Setting = () => {

  const menuGroups: { title: string, icon: JSX.Element, onClick?: () => void }[][] = [
    [
      { title: "공지사항", icon: <CampaignIcon />, onClick: () => console.log("공지사항") },
      { title: "버전정보", icon: <InfoIcon />, onClick: () => console.log("공지사항") },
    ],
    [
      { title: "공유하기", icon: <ShareIcon />, onClick: () => console.log("") },
      { title: "친구관리", icon: <PeopleIcon />, onClick: () => console.log("") },
      { title: "다이어리 꾸미기", icon: <CleaningIcon />, onClick: () => console.log("") },
      { title: "통계", icon: <EqualizerIcon />, onClick: () => console.log("") },
      { title: "저장됨", icon: <BookmarksIcon />, onClick: () => console.log("") },
    ],
    [
      { title: "고객센터 / 도움말", icon: <HelpIcon /> }
    ]
  ];
  return (
    <List>
      {menuGroups.map((menus, menusIndex) =>
        <div key={menusIndex}>
          {menusIndex !== 0 && <Divider />}
          {menus.map((menu, index) => (
            <ListItemButton key={`${menusIndex}${index}`}>
              <ListItemIcon>
                {menu.icon}
              </ListItemIcon>
              <ListItemText primary={menu.title} />
            </ListItemButton>
          ))}
        </div>
      )}
    </List>
  )
}

export default observer(Setting)