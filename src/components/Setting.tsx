
import React, { useContext } from "react";
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

import UIContext from "../context/UIContext";
import packageJson from "../..//package.json";


const Setting = () => {
  const { alert } = useContext(UIContext);

  const menuGroups: { title: string, icon: JSX.Element, hide: boolean, onClickEvent?: () => void }[][] = [
    [
      { title: "공지사항", icon: <CampaignIcon />, hide: false, onClickEvent: () => alert({ message: "공지사항이 없습니다." }) },
      { title: "버전정보", icon: <InfoIcon />, hide: false, onClickEvent: () => alert({ message: packageJson.version }) },
    ],
    [
      { title: "공유하기", icon: <ShareIcon />, hide: false, onClickEvent: () => console.log("") },
      { title: "친구관리", icon: <PeopleIcon />, hide: false, onClickEvent: () => console.log("") },
      { title: "다이어리 꾸미기", icon: <CleaningIcon />, hide: false, onClickEvent: () => console.log("") },
      { title: "통계", icon: <EqualizerIcon />, hide: false, onClickEvent: () => console.log("") },
      { title: "저장됨", icon: <BookmarksIcon />, hide: false, onClickEvent: () => console.log("") },
    ],
    [
      { title: "고객센터 / 도움말", icon: <HelpIcon />,hide: false, }
    ]
  ];
  return (
    <List>
      {menuGroups.map((menus, menusIndex) =>
        <div key={menusIndex}>
          {menusIndex !== 0 && <Divider />}
          {menus.map((menu, index) => (
            <ListItemButton key={`${menusIndex}${index}`} onClick={menu.onClickEvent}>
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