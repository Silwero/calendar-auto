import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import { VehicleListItemActions } from './VehicleListItemActions';

export const VehicleListItem = ({ name, handleDelete, handleEditVehicleClick }) => {
  return (
    <ListItem
      secondaryAction={
        <VehicleListItemActions
          handleDelete={handleDelete}
          handleEditVehicleClick={handleEditVehicleClick}
        />
      }
      disablePadding
    >
      <ListItemButton dense>
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  );
};
