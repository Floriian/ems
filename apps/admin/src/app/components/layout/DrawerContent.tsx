import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Route, routes } from "../../routes";

export function DrawerContent() {
  return (
    <div>
      <List>
        {routes[1].children[0].children!.map((item: Route, index) => (
          <ListItem disablePadding key={index}>
            <ListItemButton>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
