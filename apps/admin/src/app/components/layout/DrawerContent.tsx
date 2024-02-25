import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { drawerItems } from "./drawerItems"

export function DrawerContent() {
  return (
    <div>
      <List>
        {drawerItems.map((item, index) => (
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
